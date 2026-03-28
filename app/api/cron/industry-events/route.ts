import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type SourceName = "nate" | "wia" | "fiberconnect" | "other";

type RawEvent = {
  title: string;
  source: SourceName;
  description?: string | null;
  location?: string | null;
  starts_at: string;
  ends_at?: string | null;
  url: string;
  organizer?: string | null;
};

const SOURCES: Array<{
  source: SourceName;
  landingUrl: string;
}> = [
  {
    source: "nate",
    landingUrl: "https://natehome.com/events/calendar/",
  },
  ...(process.env.WIA_EVENTS_URL
    ? [{ source: "wia" as SourceName, landingUrl: process.env.WIA_EVENTS_URL }]
    : []),
  ...(process.env.FIBERCONNECT_EVENTS_URL
    ? [
        {
          source: "fiberconnect" as SourceName,
          landingUrl: process.env.FIBERCONNECT_EVENTS_URL,
        },
      ]
    : []),
];

function normalizeWhitespace(value?: string | null) {
  return (value || "").replace(/\s+/g, " ").trim();
}

function stripHtml(html?: string | null) {
  return normalizeWhitespace(
    (html || "")
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;/gi, " ")
      .replace(/&amp;/gi, "&")
      .replace(/&#39;/gi, "'")
      .replace(/&quot;/gi, '"')
  );
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function makeSlug(source: SourceName, title: string, startsAt: string) {
  const yyyyMmDd = new Date(startsAt).toISOString().slice(0, 10);
  return `${source}-${slugify(title)}-${yyyyMmDd}`;
}

function isLikelyEventTitle(title: string) {
  const t = title.toLowerCase();
  return [
    "conference",
    "expo",
    "summit",
    "forum",
    "convention",
    "webinar",
    "training",
    "workshop",
    "meetup",
    "event",
    "fiber connect",
    "unite",
  ].some((word) => t.includes(word));
}

function extractJsonLdBlocks(html: string) {
  return [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)]
    .map((m) => m[1])
    .filter(Boolean);
}

function toArray<T>(value: T | T[] | undefined | null): T[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function parseJsonLdEvents(html: string, source: SourceName, pageUrl: string): RawEvent[] {
  const blocks = extractJsonLdBlocks(html);
  const events: RawEvent[] = [];

  for (const block of blocks) {
    try {
      const parsed = JSON.parse(block);
      const candidates = toArray(parsed);

      for (const candidate of candidates) {
        const graphItems = candidate?.["@graph"] ? toArray(candidate["@graph"]) : [candidate];

        for (const item of graphItems) {
          const typeValue = item?.["@type"];
          const types = Array.isArray(typeValue) ? typeValue : [typeValue];

          if (!types.includes("Event")) continue;

          const title = normalizeWhitespace(item?.name);
          const startsAt = item?.startDate;
          if (!title || !startsAt) continue;
          if (!isLikelyEventTitle(title)) continue;

          const location =
            normalizeWhitespace(item?.location?.name) ||
            normalizeWhitespace(item?.location?.address?.streetAddress) ||
            normalizeWhitespace(item?.location?.address?.addressLocality) ||
            null;

          const url = item?.url || pageUrl;

          events.push({
            title,
            source,
            description: stripHtml(item?.description),
            location,
            starts_at: startsAt,
            ends_at: item?.endDate || null,
            url,
            organizer: normalizeWhitespace(item?.organizer?.name) || null,
          });
        }
      }
    } catch {
      // ignore malformed json-ld
    }
  }

  return events;
}

async function fetchHtml(url: string) {
  const res = await fetch(url, {
    headers: {
      "user-agent": "Odiscom Industry Events Bot/1.0",
      accept: "text/html,application/xhtml+xml",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status}`);
  }

  return res.text();
}

async function crawlSource(source: SourceName, landingUrl: string) {
  const landingHtml = await fetchHtml(landingUrl);
  const events: RawEvent[] = [];

  // Try structured data first
  const jsonEvents = parseJsonLdEvents(landingHtml, source, landingUrl);
  events.push(...jsonEvents);

  // Fallback for sites like NATE that do not expose usable JSON-LD
  if (events.length === 0) {
    const matches = [...landingHtml.matchAll(/<a[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)];

    for (const match of matches) {
      const rawUrl = match[1];
      const rawTitle = stripHtml(match[2]);

      if (!rawTitle || rawTitle.length < 10) continue;
      if (!isLikelyEventTitle(rawTitle)) continue;

      try {
        const fullUrl = new URL(rawUrl, landingUrl).toString();

        events.push({
          title: rawTitle,
          source,
          description: null,
          location: null,
          starts_at: new Date().toISOString(),
          ends_at: null,
          url: fullUrl,
          organizer: source.toUpperCase(),
        });
      } catch {
        // ignore bad URLs
      }
    }
  }

  const deduped = new Map<string, RawEvent>();

  for (const event of events) {
    const key = `${event.title}|${event.url}`;
    if (!deduped.has(key)) {
      deduped.set(key, event);
    }
  }

  return [...deduped.values()].slice(0, 25);
}

export async function GET(req: Request) {
  const authHeader = req.headers.get("authorization");
  const bearer = authHeader?.replace(/^Bearer\s+/i, "");
  const secret = process.env.CRON_SECRET;

  if (secret && bearer !== secret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return NextResponse.json(
      { error: "Missing Supabase environment variables" },
      { status: 500 }
    );
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey);

  const allEvents: RawEvent[] = [];

  for (const source of SOURCES) {
    try {
      const events = await crawlSource(source.source, source.landingUrl);
      allEvents.push(...events);
    } catch (error) {
      console.error(`Failed source ${source.source}:`, error);
    }
  }

  const rows = allEvents
    .filter((event) => event.title && event.starts_at && event.url)
    .map((event) => ({
      title: normalizeWhitespace(event.title),
      slug: makeSlug(event.source, event.title, event.starts_at),
      source: event.source,
      description: event.description || null,
      location: event.location || null,
      starts_at: event.starts_at,
      ends_at: event.ends_at || null,
      url: event.url,
      organizer: event.organizer || null,
    }));

  if (!rows.length) {
    return NextResponse.json({
      ok: true,
      message: "No events found",
      inserted: 0,
    });
  }

  const { error } = await supabase.from("events").upsert(rows, {
    onConflict: "slug",
  });

  if (error) {
    return NextResponse.json(
      { error: error.message, count: rows.length },
      { status: 500 }
    );
  }

  return NextResponse.json({
    ok: true,
    inserted: rows.length,
    sources: SOURCES.map((s) => s.source),
  });
}