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

function decodeHtml(input: string) {
  return input
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&#x27;/gi, "'")
    .replace(/&#x2F;/gi, "/");
}

function cleanText(input?: string | null) {
  if (!input) return null;

  return normalizeWhitespace(
    decodeHtml(
      input
        .replace(/<script[\s\S]*?<\/script>/gi, "")
        .replace(/<style[\s\S]*?<\/style>/gi, "")
        .replace(/<[^>]+>/g, " ")
    )
  );
}

function stripHtml(html?: string | null) {
  return cleanText(html);
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
  return [...html.matchAll(
    /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
  )]
    .map((m) => m[1])
    .filter(Boolean);
}

function toArray<T>(value: T | T[] | undefined | null): T[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function parseJsonLdEvents(
  html: string,
  source: SourceName,
  pageUrl: string
): RawEvent[] {
  const blocks = extractJsonLdBlocks(html);
  const events: RawEvent[] = [];

  for (const block of blocks) {
    try {
      const parsed = JSON.parse(block);
      const candidates = toArray(parsed);

      for (const candidate of candidates) {
        const graphItems = candidate?.["@graph"]
          ? toArray(candidate["@graph"])
          : [candidate];

        for (const item of graphItems) {
          const typeValue = item?.["@type"];
          const types = Array.isArray(typeValue) ? typeValue : [typeValue];

          if (!types.includes("Event")) continue;

          const title = cleanText(item?.name);
          const startsAt = item?.startDate;

          if (!title || !startsAt) continue;
          if (!isLikelyEventTitle(title)) continue;

          const location =
            cleanText(item?.location?.name) ||
            cleanText(item?.location?.address?.streetAddress) ||
            cleanText(item?.location?.address?.addressLocality) ||
            null;

          const url = cleanText(item?.url) || pageUrl;

          events.push({
            title,
            source,
            description: stripHtml(item?.description),
            location,
            starts_at: startsAt,
            ends_at: item?.endDate || null,
            url,
            organizer: cleanText(item?.organizer?.name) || null,
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

  const jsonEvents = parseJsonLdEvents(landingHtml, source, landingUrl);
  events.push(...jsonEvents);

  if (events.length === 0) {
    const textBlocks = [...landingHtml.matchAll(/>([^<>]{15,200})</g)];

    for (const match of textBlocks) {
      const rawTitle = cleanText(match[1]);

      if (!rawTitle) continue;
      if (!isLikelyEventTitle(rawTitle)) continue;

      const lower = rawTitle.toLowerCase();

      if (
        lower.includes("copyright") ||
        lower.includes("privacy") ||
        lower.includes("login") ||
        lower.includes("search") ||
        lower.includes("menu") ||
        lower.includes("register") ||
        rawTitle.length < 10
      ) {
        continue;
      }

      events.push({
        title: rawTitle,
        source,
        description: null,
        location: null,
        starts_at: new Date().toISOString(),
        ends_at: null,
        url: landingUrl,
        organizer: source.toUpperCase(),
      });
    }
  }

  const deduped = new Map<string, RawEvent>();

  for (const event of events) {
    const cleanedTitle = cleanText(event.title) || "Untitled Event";
    const cleanedUrl = cleanText(event.url) || landingUrl;
    const key = `${cleanedTitle}|${cleanedUrl}`;

    if (!deduped.has(key)) {
      deduped.set(key, {
        ...event,
        title: cleanedTitle,
        description: cleanText(event.description),
        location: cleanText(event.location),
        url: cleanedUrl,
        organizer: cleanText(event.organizer),
      });
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
    .map((event) => {
      const cleanedTitle = cleanText(event.title) || "Untitled Event";

      return {
        title: cleanedTitle,
        slug: makeSlug(event.source, cleanedTitle, event.starts_at),
        source: event.source,
        description: cleanText(event.description),
        location: cleanText(event.location),
        starts_at: event.starts_at,
        ends_at: event.ends_at || null,
        url: cleanText(event.url) || event.url,
        organizer: cleanText(event.organizer),
      };
    });

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