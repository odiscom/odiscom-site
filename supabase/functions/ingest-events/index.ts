import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js";

type SourceName = "nate" | "wia" | "fiberconnect" | "other";

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

function parseMonthName(name: string) {
  const months: Record<string, number> = {
    january: 0,
    february: 1,
    march: 2,
    april: 3,
    may: 4,
    june: 5,
    july: 6,
    august: 7,
    september: 8,
    october: 9,
    november: 10,
    december: 11,
  };
  return months[name.toLowerCase()];
}

function parseTimeString(timeText: string) {
  const m = cleanText(timeText).match(/^(\d{1,2}):(\d{2})\s*(am|pm)$/i);
  if (!m) return null;

  let hour = Number(m[1]);
  const minute = Number(m[2]);
  const ampm = m[3].toLowerCase();

  if (ampm === "pm" && hour !== 12) hour += 12;
  if (ampm === "am" && hour === 12) hour = 0;

  return { hour, minute };
}

function buildIsoLocal(
  year: number,
  monthIndex: number,
  day: number,
  timeText?: string | null
) {
  const parsedTime = timeText ? parseTimeString(timeText) : null;
  const hour = parsedTime?.hour ?? 0;
  const minute = parsedTime?.minute ?? 0;

  const dt = new Date(Date.UTC(year, monthIndex, day, hour, minute, 0));
  return dt.toISOString();
}

function parseDateRangeText(dateText: string, timeText?: string | null) {
  const cleaned = cleanText(dateText);

  const rangeMatch = cleaned.match(
    /^([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})\s*-\s*([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})$/i
  );

  if (rangeMatch) {
    const startMonth = parseMonthName(rangeMatch[1]);
    const startDay = Number(rangeMatch[2]);
    const startYear = Number(rangeMatch[3]);
    const endMonth = parseMonthName(rangeMatch[4]);
    const endDay = Number(rangeMatch[5]);
    const endYear = Number(rangeMatch[6]);

    if (
      startMonth === undefined ||
      endMonth === undefined ||
      Number.isNaN(startDay) ||
      Number.isNaN(endDay) ||
      Number.isNaN(startYear) ||
      Number.isNaN(endYear)
    ) {
      return null;
    }

    return {
      starts_at: buildIsoLocal(startYear, startMonth, startDay, timeText),
      ends_at: buildIsoLocal(endYear, endMonth, endDay, null),
    };
  }

  const singleMatch = cleaned.match(/^([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})$/i);
  if (singleMatch) {
    const month = parseMonthName(singleMatch[1]);
    const day = Number(singleMatch[2]);
    const year = Number(singleMatch[3]);

    if (
      month === undefined ||
      Number.isNaN(day) ||
      Number.isNaN(year)
    ) {
      return null;
    }

    return {
      starts_at: buildIsoLocal(year, month, day, timeText),
      ends_at: null,
    };
  }

  return null;
}

function extractAnchorHrefById(html: string, id: string) {
  const re = new RegExp(`<a[^>]+href="([^"]+)"[^>]*>${id}<\\/a>`, "i");
  const m = html.match(re);
  return m?.[1] ?? null;
}

async function fetchHtml(url: string) {
  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 OdiscomEventsBot/1.0",
      Accept: "text/html,application/xhtml+xml",
    },
  });

  if (!res.ok) {
    throw new Error(`Failed ${url}: ${res.status}`);
  }

  return await res.text();
}

function parseNateEvents(html: string): ParsedEvent[] {
  const events: ParsedEvent[] = [];

  const eventBlocks = [
    ...html.matchAll(
      /<a[^>]+href="([^"]+)"[^>]*>([^<]+)<\/a>\s*[\s\S]{0,120}?\b(\d{2}\s+[A-Za-z]{3})\b\s*[\s\S]{0,120}?((?:[A-Za-z]+\s+\d{1,2},\s+\d{4})(?:\s*-\s*[A-Za-z]+\s+\d{1,2},\s+\d{4})?)\s*[\s\S]{0,80}?((?:All Day)|(?:\d{1,2}:\d{2}\s*(?:am|pm)(?:\s*-\s*\d{1,2}:\d{2}\s*(?:am|pm))?))?\s*[\s\S]{0,220}?([^<\n][\s\S]{0,180}?)\s*<\/div>/gi
    ),
  ];

  for (const match of eventBlocks) {
    const url = cleanText(match[1]);
    const title = cleanText(match[2]);
    const dateRange = cleanText(match[4]);
    const timeText = cleanText(match[5] || "");
    const location = cleanText(match[6] || "");

    if (!title || !dateRange) continue;

    const parsed = parseDateRangeText(
      dateRange,
      timeText && !/all day/i.test(timeText) ? timeText.split("-")[0].trim() : null
    );

    if (!parsed) continue;

    events.push({
      title,
      slug: buildSlug("nate", title, parsed.starts_at),
      source: "nate",
      description: null,
      location: location || null,
      starts_at: parsed.starts_at,
      ends_at: parsed.ends_at,
      url,
      organizer: "NATE",
      category: "Industry Event",
    });
  }

  return dedupeEvents(events);
}

function parseWiaEvents(html: string): ParsedEvent[] {
  const events: ParsedEvent[] = [];

  const sections = html.split(/<h3[^>]*>\s*[A-Za-z]+\s+\d{4}\s*<\/h3>/i);

  for (const section of sections) {
    const chunks = section.split(/<h2[^>]*>/i);

    for (const chunk of chunks) {
      const titleMatch = chunk.match(/<a[^>]+href="([^"]+)"[^>]*>\s*([^<]+)\s*<\/a>/i);
      const dateMatch = cleanText(chunk).match(
        /(?:Featured\s+)?([A-Za-z]+\s+\d{1,2},\s+\d{4}\s*-\s*[A-Za-z]+\s+\d{1,2},\s+\d{4}|[A-Za-z]+\s+\d{1,2},\s+\d{4})/
      );

      if (!titleMatch || !dateMatch) continue;

      const url = titleMatch[1];
      const title = cleanText(titleMatch[2]);
      const parsed = parseDateRangeText(dateMatch[1], null);

      if (!title || !parsed) continue;

      const afterTitle = cleanText(chunk);
      const lines = afterTitle.split(/\s{2,}/).map((x) => x.trim()).filter(Boolean);

      let location: string | null = null;
      for (const line of lines) {
        if (
          /convention center|washington|fort lauderdale|arlington|united states|blvd|street|ave|hall/i.test(
            line
          )
        ) {
          location = line;
          break;
        }
      }

      events.push({
        title,
        slug: buildSlug("wia", title, parsed.starts_at),
        source: "wia",
        description: null,
        location,
        starts_at: parsed.starts_at,
        ends_at: parsed.ends_at,
        url,
        organizer: "WIA",
        category: "Industry Event",
      });
    }
  }

  return dedupeEvents(events);
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

  try {
    const nateHtml = await fetchHtml("https://natehome.com/events/calendar/");
    const wiaHtml = await fetchHtml("https://wia.org/events/");

    const nateEvents = parseNateEvents(nateHtml);
    const wiaEvents = parseWiaEvents(wiaHtml);

    const allEvents = [...nateEvents, ...wiaEvents];

    let inserted = 0;
    let failed = 0;

    for (const event of allEvents) {
      const { error } = await supabase.from("events").upsert(event, {
        onConflict: "slug",
      });

      if (error) {
        failed++;
        console.error("Upsert error for", event.slug, error.message);
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
          nate: nateEvents.length,
          wia: wiaEvents.length,
          total: allEvents.length,
        },
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
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});