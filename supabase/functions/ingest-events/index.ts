import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js";

type SourceName = "nate" | "wia" | "mountainconnect" | "scte" | "fiberconnect" | "other";

type ParsedEvent = {
  title: string;
  slug: string;
  source: SourceName;
  description: string | null;
  location: string | null;
  starts_at: string;
  ends_at: string | null;
  url: string | null;
  organizer: string | null;
  category: string | null;
};

function cleanText(input: string) {
  return input
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&#8211;|&ndash;/gi, "–")
    .replace(/&#8217;|&rsquo;/gi, "'")
    .replace(/&#8220;|&#8221;|&quot;/gi, '"')
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function buildSlug(source: SourceName, title: string, startsAt: string) {
  return `${source}-${slugify(title)}-${startsAt.slice(0, 10)}`;
}

function dedupeEvents(events: ParsedEvent[]) {
  const seen = new Set<string>();
  const out: ParsedEvent[] = [];

  for (const event of events) {
    const key = `${event.source}|${event.slug}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(event);
  }

  return out;
}

async function fetchText(url: string, timeoutMs = 15000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 OdiscomEventsBot/1.0",
        Accept: "text/html,application/xhtml+xml,application/json;q=0.9,*/*;q=0.8",
      },
    });

    if (!res.ok) {
      throw new Error(`Fetch failed ${url}: ${res.status}`);
    }

    return await res.text();
  } finally {
    clearTimeout(timeout);
  }
}

async function fetchJson(url: string, timeoutMs = 15000) {
  const text = await fetchText(url, timeoutMs);
  return JSON.parse(text);
}

function parseDate(value: string | null | undefined) {
  if (!value) return null;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d.toISOString();
}

function normalizeEvent(input: {
  source: SourceName;
  title: string;
  starts_at: string;
  ends_at?: string | null;
  description?: string | null;
  location?: string | null;
  url?: string | null;
  organizer?: string | null;
  category?: string | null;
}): ParsedEvent | null {
  const startsAt = parseDate(input.starts_at);
  if (!startsAt) return null;

  const endsAt = input.ends_at ? parseDate(input.ends_at) : null;
  const title = cleanText(input.title);
  if (!title) return null;

  return {
    title,
    slug: buildSlug(input.source, title, startsAt),
    source: input.source,
    description: input.description ? cleanText(input.description) : null,
    location: input.location ? cleanText(input.location) : null,
    starts_at: startsAt,
    ends_at: endsAt,
    url: input.url ?? null,
    organizer: input.organizer ?? null,
    category: input.category ?? "Industry Event",
  };
}

async function getWiaEvents(debug: Record<string, string>) {
  const events: ParsedEvent[] = [];

  // Try WP/Tribe JSON first. If WIA has it enabled, this is the cleanest source.
  try {
    const data = await fetchJson("https://wia.org/wp-json/tribe/events/v1/events");
    const list = Array.isArray(data?.events) ? data.events : [];

    for (const item of list) {
      const normalized = normalizeEvent({
        source: "wia",
        title: item.title || item.name || "",
        starts_at: item.start_date || item.startDate || "",
        ends_at: item.end_date || item.endDate || null,
        description: item.description || item.excerpt || null,
        location:
          item.venue?.venue ||
          item.venue?.venue_address ||
          item.venue?.address ||
          item.location?.name ||
          null,
        url: item.url || item.website || null,
        organizer: "WIA",
      });

      if (normalized) events.push(normalized);
    }

    debug.wia_api = String(events.length);
  } catch (err) {
    debug.wia_api = err instanceof Error ? err.message : "wia api failed";
  }

  // Fallback to official list pages if API returns nothing.
  if (!events.length) {
    const pages = [
      "https://wia.org/events/list/",
      "https://wia.org/events/list/?tribe-bar-date=2026-01-01",
    ];

    for (const pageUrl of pages) {
      try {
        const html = await fetchText(pageUrl);
        const blocks = [...html.matchAll(/<article[\s\S]*?<\/article>/gi)];

        for (const block of blocks) {
          const chunk = block[0];

          const title =
            chunk.match(/<h3[^>]*>[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/i)?.[1] ||
            chunk.match(/##\s*([^<\n]+)/i)?.[1] ||
            "";

          const href =
            chunk.match(/<a[^>]+href="([^"]+)"[^>]*>[\s\S]*?Learn more/i)?.[1] ||
            chunk.match(/<a[^>]+href="([^"]+)"[^>]*>[\s\S]*?<\/a>/i)?.[1] ||
            null;

          const dateText =
            cleanText(chunk).match(
              /([A-Za-z]+\s+\d{1,2},\s+\d{4}(?:\s*@\s*\d{1,2}:\d{2}\s*(?:am|pm))?(?:\s*-\s*[A-Za-z]+\s+\d{1,2},\s+\d{4}(?:\s*@\s*\d{1,2}:\d{2}\s*(?:am|pm))?)?)/i
            )?.[1] || "";

          const startCandidate = dateText.split(" - ")[0] || "";
          const endCandidate = dateText.includes(" - ") ? dateText.split(" - ").slice(1).join(" - ") : null;

          const normalized = normalizeEvent({
            source: "wia",
            title,
            starts_at: startCandidate,
            ends_at: endCandidate,
            description: cleanText(chunk),
            location: cleanText(chunk).match(/([A-Z][^,.]+,\s*[A-Z]{2}|[A-Z][^,]+\s+[A-Z][a-z]+,\s*[A-Z][a-z]+)/)?.[1] || null,
            url: href,
            organizer: "WIA",
          });

          if (normalized) events.push(normalized);
        }
      } catch (err) {
        debug.wia_fallback = err instanceof Error ? err.message : "wia fallback failed";
      }
    }
  }

  debug.wia_total = String(events.length);
  return dedupeEvents(events);
}

async function getNateEvents(debug: Record<string, string>) {
  const events: ParsedEvent[] = [];

  // Use official NATE event index pages as the source of truth for links.
  const indexPages = [
    "https://natehome.com/events/calendar/",
  ];

  for (const pageUrl of indexPages) {
    try {
      const html = await fetchText(pageUrl);
      const links = [...html.matchAll(/<a[^>]+href="(https:\/\/natehome\.com\/upcoming-events\/[^"]+)"[^>]*>\s*([^<]+?)\s*<\/a>/gi)];

      for (const match of links) {
        const detailUrl = match[1];
        const indexTitle = cleanText(match[2]);

        try {
          const detailHtml = await fetchText(detailUrl);

          const title =
            detailHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] || indexTitle;

          const whenMatch = detailHtml.match(/###\s*When[\s\S]*?\n\s*([A-Za-z]+\s+\d{1,2},\s+\d{4}(?:\s*-\s*[A-Za-z]+\s+\d{1,2},\s+\d{4})?)/i);
          const lines = detailHtml.split("\n").map((x) => x.trim());

          let location = "";
          const whenIndex = lines.findIndex((x) => x.includes("### When"));
          if (whenIndex >= 0) {
            location = lines.slice(whenIndex + 4, whenIndex + 8).join(" ").trim();
          }

          const dateText = whenMatch?.[1] || "";
          if (!dateText) continue;

          const startCandidate = dateText.split(" - ")[0] || "";
          const endCandidate = dateText.includes(" - ") ? dateText.split(" - ").slice(1).join(" - ") : null;

          const source: SourceName =
            /fiber connect/i.test(title) ? "fiberconnect" : "nate";

          const normalized = normalizeEvent({
            source,
            title,
            starts_at: startCandidate,
            ends_at: endCandidate,
            location,
            url: detailUrl,
            organizer: "NATE",
          });

          if (normalized) events.push(normalized);
        } catch (err) {
          debug[`nate_detail_${indexTitle.slice(0, 20)}`] =
            err instanceof Error ? err.message : "nate detail failed";
        }
      }
    } catch (err) {
      debug.nate_index = err instanceof Error ? err.message : "nate index failed";
    }
  }

  debug.nate_total = String(events.length);
  return dedupeEvents(events);
}

async function getMountainConnectEvents(debug: Record<string, string>) {
  const events: ParsedEvent[] = [];

  try {
    const html = await fetchText("https://mountainconnect.org/");
    const title = html.match(/#\s*Clearing the way beyond bead:[\s\S]*?/i)
      ? "Mountain Connect 2026"
      : "Mountain Connect";
    const dateText = html.match(/August\s+10\s*-\s*12,\s*2026/i)?.[0] || "";
    const location = "Sheraton Downtown Denver Hotel, Denver, Colorado";

    const normalized = normalizeEvent({
      source: "other",
      title,
      starts_at: "August 10, 2026",
      ends_at: "August 12, 2026",
      location,
      url: "https://mountainconnect.org/",
      organizer: "Mountain Connect",
    });

    if (normalized) events.push(normalized);
    debug.mountainconnect = String(events.length);
  } catch (err) {
    debug.mountainconnect = err instanceof Error ? err.message : "mountainconnect failed";
  }

  return events;
}

async function getScteEvents(debug: Record<string, string>) {
  const events: ParsedEvent[] = [];

  try {
    const html = await fetchText("https://techexpo.scte.org/exhibit-in-2025/");
    if (/September 29\s*–\s*October 1,\s*2026/i.test(html) || /September 29\s*-\s*October 1,\s*2026/i.test(html)) {
      const normalized = normalizeEvent({
        source: "other",
        title: "SCTE TechExpo26",
        starts_at: "September 29, 2026",
        ends_at: "October 1, 2026",
        location: "Atlanta, Georgia",
        url: "https://techexpo.scte.org/exhibit-in-2025/",
        organizer: "SCTE",
      });

      if (normalized) events.push(normalized);
    }
    debug.scte = String(events.length);
  } catch (err) {
    debug.scte = err instanceof Error ? err.message : "scte failed";
  }

  return events;
}

serve(async () => {
  const projectUrl = Deno.env.get("PROJECT_URL");
  const serviceRoleKey = Deno.env.get("SERVICE_ROLE_KEY");

  if (!projectUrl || !serviceRoleKey) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Missing PROJECT_URL or SERVICE_ROLE_KEY",
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      }
    );
  }

  const supabase = createClient(projectUrl, serviceRoleKey);
  const debug: Record<string, string> = {};

  try {
    const [wiaEvents, nateEvents, mountainConnectEvents, scteEvents] = await Promise.all([
      getWiaEvents(debug),
      getNateEvents(debug),
      getMountainConnectEvents(debug),
      getScteEvents(debug),
    ]);

    const allEvents = dedupeEvents([
      ...wiaEvents,
      ...nateEvents,
      ...mountainConnectEvents,
      ...scteEvents,
    ]);

    let inserted = 0;
    let failed = 0;

    for (const event of allEvents) {
      const { error } = await supabase.from("events").upsert(event, {
        onConflict: "slug",
      });

      if (error) {
        failed++;
        debug[`upsert_${event.slug}`] = error.message;
      } else {
        inserted++;
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        inserted,
        failed,
        counts: {
          wia: wiaEvents.length,
          nate: nateEvents.length,
          mountainconnect: mountainConnectEvents.length,
          scte: scteEvents.length,
          total: allEvents.length,
        },
        debug,
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Unknown ingest error",
        debug,
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});