import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type SourceName =
  | "nate"
  | "wia"
  | "fiberconnect"
  | "eventbrite"
  | "other";

type DiscoverySource = {
  source: SourceName;
  landingUrl: string;
  eventLinkPattern?: RegExp;
};

type RawEvent = {
  title: string;
  source: SourceName;
  description?: string | null;
  location?: string | null;
  starts_at: string;
  ends_at?: string | null;
  url: string;
  organizer?: string | null;
  discovery_url?: string | null;
  confidence_score: number;
  confidence_reason: string;
};

const SOURCES: DiscoverySource[] = [
  {
    source: "nate",
    landingUrl: "https://natehome.com/events/calendar/",
    eventLinkPattern:
      /\/event|\/events|\/calendar|\/conference|\/summit|\/training|\/webinar/i,
  },
  ...(process.env.WIA_EVENTS_URL
    ? [
        {
          source: "wia" as SourceName,
          landingUrl: process.env.WIA_EVENTS_URL,
          eventLinkPattern:
            /\/event|\/events|\/conference|\/summit|\/calendar|\/webinar/i,
        },
      ]
    : []),
  ...(process.env.FIBERCONNECT_EVENTS_URL
    ? [
        {
          source: "fiberconnect" as SourceName,
          landingUrl: process.env.FIBERCONNECT_EVENTS_URL,
          eventLinkPattern:
            /\/event|\/events|\/conference|\/summit|\/expo|\/calendar/i,
        },
      ]
    : []),
  ...(process.env.EVENTBRITE_TELECOM_URL
    ? [
        {
          source: "eventbrite" as SourceName,
          landingUrl: process.env.EVENTBRITE_TELECOM_URL,
          eventLinkPattern: /event|tickets|conference|summit|expo|webinar/i,
        },
      ]
    : []),
];

const DISCOVERY_KEYWORDS = [
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
  "wireless",
  "telecom",
  "broadband",
  "tower",
  "infrastructure",
  "unite",
];

const JUNK_PHRASES = [
  "privacy",
  "copyright",
  "login",
  "sign in",
  "register now",
  "register today",
  "menu",
  "search",
  "skip to content",
  "view cart",
  "my account",
  "cookie",
  "news",
  "press release",
  "blog",
  "article",
];

const PUBLISH_CONFIDENCE_THRESHOLD = 0.85;
const QUEUE_CONFIDENCE_THRESHOLD = 0.45;

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
    .replace(/&#x2F;/gi, "/")
    .replace(/&#8211;/gi, "-")
    .replace(/&#8212;/gi, "-")
    .replace(/&#038;/gi, "&");
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

function looksLikeEventTitle(title?: string | null) {
  const t = (title || "").toLowerCase();
  if (!t || t.length < 8) return false;
  if (JUNK_PHRASES.some((phrase) => t.includes(phrase))) return false;
  return DISCOVERY_KEYWORDS.some((word) => t.includes(word));
}

function looksLikeJunkUrl(url: string) {
  const lower = url.toLowerCase();
  return (
    lower.includes("/tag/") ||
    lower.includes("/category/") ||
    lower.includes("/author/") ||
    lower.includes("/feed") ||
    lower.includes("wp-json") ||
    lower.includes("mailto:") ||
    lower.includes("javascript:") ||
    lower.includes("#")
  );
}

function looksLikeDate(value?: string | null) {
  if (!value) return false;
  const d = new Date(value);
  return !Number.isNaN(d.getTime());
}

function parseVisibleDate(text?: string | null) {
  const raw = normalizeWhitespace(text);
  if (!raw) return null;

  const cleaned = raw
    .replace(/\b(at|from|to)\b/gi, " ")
    .replace(/\s+/g, " ")
    .trim();

  const parsed = new Date(cleaned);
  if (!Number.isNaN(parsed.getTime())) {
    return parsed.toISOString();
  }

  const monthMatch = cleaned.match(
    /\b(January|February|March|April|May|June|July|August|September|October|November|December)\b[\s,]+\d{1,2}(?:[\s,-]+\d{4})?/i
  );
  if (monthMatch) {
    const d = new Date(monthMatch[0]);
    if (!Number.isNaN(d.getTime())) {
      return d.toISOString();
    }
  }

  return null;
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

function fetchMetaContent(html: string, key: string, attr = "property") {
  const regex = new RegExp(
    `<meta[^>]*${attr}=["']${key}["'][^>]*content=["']([^"']+)["'][^>]*>`,
    "i"
  );
  const match = html.match(regex);
  return cleanText(match?.[1] || null);
}

function extractHrefLinks(html: string, baseUrl: string) {
  const matches = [...html.matchAll(/<a[^>]*href=["']([^"'#]+)["'][^>]*>([\s\S]*?)<\/a>/gi)];
  const links: Array<{ url: string; text: string }> = [];

  for (const match of matches) {
    try {
      const absolute = new URL(match[1], baseUrl).toString();
      if (looksLikeJunkUrl(absolute)) continue;

      links.push({
        url: absolute,
        text: cleanText(match[2]) || "",
      });
    } catch {
      // ignore
    }
  }

  return links;
}

function scoreCandidateLink(text: string, url: string, pattern?: RegExp) {
  let score = 0;
  const t = text.toLowerCase();
  const u = url.toLowerCase();

  if (looksLikeEventTitle(text)) score += 3;
  if (pattern?.test(url)) score += 2;
  if (u.includes("event")) score += 1;
  if (u.includes("conference")) score += 1;
  if (u.includes("summit")) score += 1;
  if (u.includes("webinar")) score += 1;
  if (u.includes("expo")) score += 1;
  if (u.includes("ticket")) score += 1;
  if (t.includes("more info")) score += 1;
  if (t.includes("register")) score += 1;

  return score;
}

function dedupeEvents(events: RawEvent[]) {
  const map = new Map<string, RawEvent>();

  for (const event of events) {
    const cleanedTitle = cleanText(event.title) || "Untitled Event";
    const cleanedUrl = cleanText(event.url) || event.url;
    const key = `${cleanedTitle}|${event.starts_at}|${cleanedUrl}`;

    if (!map.has(key)) {
      map.set(key, {
        ...event,
        title: cleanedTitle,
        description: cleanText(event.description),
        location: cleanText(event.location),
        url: cleanedUrl,
        organizer: cleanText(event.organizer),
        discovery_url: cleanText(event.discovery_url),
      });
    }
  }

  return [...map.values()];
}

function parseJsonLdEvents(
  html: string,
  source: SourceName,
  pageUrl: string,
  discoveryUrl: string
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
          if (!looksLikeEventTitle(title)) continue;
          if (!looksLikeDate(startsAt)) continue;

          const location =
            cleanText(item?.location?.name) ||
            cleanText(item?.location?.address?.streetAddress) ||
            cleanText(item?.location?.address?.addressLocality) ||
            cleanText(item?.location?.address?.addressRegion) ||
            null;

          const url = cleanText(item?.url) || pageUrl;
          const organizer = cleanText(item?.organizer?.name) || null;
          const endsAt = looksLikeDate(item?.endDate)
            ? new Date(item.endDate).toISOString()
            : null;

          let confidence = 0.9;
          let reason = "jsonld_event";

          if (location) confidence += 0.03;
          if (organizer) confidence += 0.02;
          if (endsAt) confidence += 0.02;

          events.push({
            title,
            source,
            description: cleanText(item?.description),
            location,
            starts_at: new Date(startsAt).toISOString(),
            ends_at: endsAt,
            url,
            organizer,
            discovery_url: discoveryUrl,
            confidence_score: Math.min(confidence, 0.99),
            confidence_reason: reason,
          });
        }
      }
    } catch {
      // ignore malformed json-ld
    }
  }

  return events;
}

function parseMetaFallback(
  html: string,
  source: SourceName,
  pageUrl: string,
  discoveryUrl: string
): RawEvent[] {
  const title =
    fetchMetaContent(html, "og:title") ||
    fetchMetaContent(html, "twitter:title", "name") ||
    cleanText(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || null);

  const description =
    fetchMetaContent(html, "og:description") ||
    fetchMetaContent(html, "description", "name") ||
    null;

  const explicitEventStart =
    fetchMetaContent(html, "event:start_time") ||
    fetchMetaContent(html, "event:start") ||
    fetchMetaContent(html, "startDate", "itemprop") ||
    null;

  const location =
    fetchMetaContent(html, "event:location") ||
    fetchMetaContent(html, "og:locality") ||
    null;

  if (!title || !looksLikeEventTitle(title) || !explicitEventStart) {
    return [];
  }

  if (!looksLikeDate(explicitEventStart)) {
    return [];
  }

  return [
    {
      title,
      source,
      description,
      location,
      starts_at: new Date(explicitEventStart).toISOString(),
      ends_at: null,
      url: pageUrl,
      organizer: null,
      discovery_url: discoveryUrl,
      confidence_score: 0.72,
      confidence_reason: "meta_event_fields",
    },
  ];
}

function parseVisiblePageFallback(
  html: string,
  source: SourceName,
  pageUrl: string,
  discoveryUrl: string
): RawEvent[] {
  const title =
    cleanText(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || null) ||
    fetchMetaContent(html, "og:title");

  const bodyText = cleanText(html);
  const dateGuess = parseVisibleDate(bodyText);
  const locationGuess = bodyText?.match(
    /\b([A-Z][a-z]+(?:,\s*[A-Z]{2})?|[A-Z][a-z]+(?:\s+[A-Z][a-z]+){0,4},\s*[A-Z]{2})\b/
  )?.[1];

  if (!title || !looksLikeEventTitle(title) || !dateGuess) {
    return [];
  }

  return [
    {
      title,
      source,
      description: fetchMetaContent(html, "description", "name") || null,
      location: cleanText(locationGuess || null),
      starts_at: dateGuess,
      ends_at: null,
      url: pageUrl,
      organizer: null,
      discovery_url: discoveryUrl,
      confidence_score: 0.5,
      confidence_reason: "visible_text_guess",
    },
  ];
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

async function discoverCandidatePages(source: DiscoverySource) {
  const html = await fetchHtml(source.landingUrl);
  const links = extractHrefLinks(html, source.landingUrl);

  const scored = links
    .map((link) => ({
      ...link,
      score: scoreCandidateLink(link.text, link.url, source.eventLinkPattern),
    }))
    .filter((link) => link.score >= 2)
    .sort((a, b) => b.score - a.score);

  const deduped = new Map<string, { url: string; text: string; score: number }>();
  for (const link of scored) {
    if (!deduped.has(link.url)) {
      deduped.set(link.url, link);
    }
  }

  return {
    landingHtml: html,
    pages: [...deduped.values()].slice(0, 40),
  };
}

async function extractEventDetails(
  source: SourceName,
  pageUrl: string,
  discoveryUrl: string
) {
  const html = await fetchHtml(pageUrl);

  const jsonLdEvents = parseJsonLdEvents(html, source, pageUrl, discoveryUrl);
  if (jsonLdEvents.length) return jsonLdEvents;

  const metaFallback = parseMetaFallback(html, source, pageUrl, discoveryUrl);
  if (metaFallback.length) return metaFallback;

  const visibleFallback = parseVisiblePageFallback(
    html,
    source,
    pageUrl,
    discoveryUrl
  );
  if (visibleFallback.length) return visibleFallback;

  return [];
}

async function crawlSource(source: DiscoverySource) {
  const events: RawEvent[] = [];
  const discovered = await discoverCandidatePages(source);

  const landingEvents = parseJsonLdEvents(
    discovered.landingHtml,
    source.source,
    source.landingUrl,
    source.landingUrl
  );
  events.push(...landingEvents);

  for (const page of discovered.pages) {
    try {
      const extracted = await extractEventDetails(
        source.source,
        page.url,
        source.landingUrl
      );

      if (extracted.length) {
        events.push(...extracted);
      }
    } catch {
      // continue crawling other pages
    }
  }

  return dedupeEvents(events)
    .filter((event) => looksLikeEventTitle(event.title))
    .filter((event) => looksLikeDate(event.starts_at))
    .slice(0, 50);
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
  const sourceSummaries: Array<{
    source: SourceName;
    discovered: number;
    published: number;
    queued: number;
  }> = [];

  for (const source of SOURCES) {
    try {
      const events = await crawlSource(source);
      allEvents.push(...events);
      sourceSummaries.push({
        source: source.source,
        discovered: events.length,
        published: 0,
        queued: 0,
      });
    } catch (error) {
      console.error(`Failed source ${source.source}:`, error);
      sourceSummaries.push({
        source: source.source,
        discovered: 0,
        published: 0,
        queued: 0,
      });
    }
  }

  const deduped = dedupeEvents(allEvents);

  const publishable = deduped.filter(
    (event) =>
      event.confidence_score >= PUBLISH_CONFIDENCE_THRESHOLD &&
      !!event.title &&
      !!event.starts_at &&
      !!event.url
  );

  const queued = deduped.filter(
    (event) =>
      event.confidence_score >= QUEUE_CONFIDENCE_THRESHOLD &&
      event.confidence_score < PUBLISH_CONFIDENCE_THRESHOLD &&
      !!event.title &&
      !!event.url
  );

  const publishRows = publishable.map((event) => {
    const cleanedTitle = cleanText(event.title) || "Untitled Event";

    return {
      title: cleanedTitle,
      slug: makeSlug(event.source, cleanedTitle, event.starts_at),
      source: event.source,
      description: cleanText(event.description),
      location: cleanText(event.location),
      starts_at: new Date(event.starts_at).toISOString(),
      ends_at: event.ends_at ? new Date(event.ends_at).toISOString() : null,
      url: cleanText(event.url) || event.url,
      organizer: cleanText(event.organizer),
    };
  });

  const candidateRows = queued.map((event) => {
    const cleanedTitle = cleanText(event.title) || "Untitled Event";

    return {
      candidate_key: `${event.source}|${slugify(cleanedTitle)}|${cleanText(event.url) || event.url}`,
      title: cleanedTitle,
      source: event.source,
      description: cleanText(event.description),
      location: cleanText(event.location),
      starts_at: looksLikeDate(event.starts_at)
        ? new Date(event.starts_at).toISOString()
        : null,
      ends_at: event.ends_at && looksLikeDate(event.ends_at)
        ? new Date(event.ends_at).toISOString()
        : null,
      url: cleanText(event.url) || event.url,
      organizer: cleanText(event.organizer),
      discovery_url: cleanText(event.discovery_url),
      confidence_score: event.confidence_score,
      confidence_reason: event.confidence_reason,
      status: "queued",
    };
  });

  let publishedCount = 0;
  let queuedCount = 0;
  let candidateQueueWarning: string | null = null;

  if (publishRows.length) {
    const { error } = await supabase.from("events").upsert(publishRows, {
      onConflict: "slug",
    });

    if (error) {
      return NextResponse.json(
        { error: error.message, phase: "publish", count: publishRows.length },
        { status: 500 }
      );
    }

    publishedCount = publishRows.length;
  }

  if (candidateRows.length) {
    const { error } = await supabase.from("event_candidates").upsert(candidateRows, {
      onConflict: "candidate_key",
    });

    if (error) {
      candidateQueueWarning = error.message;
    } else {
      queuedCount = candidateRows.length;
    }
  }

  for (const summary of sourceSummaries) {
    const sourcePublishCount = publishable.filter(
      (event) => event.source === summary.source
    ).length;
    const sourceQueueCount = queued.filter(
      (event) => event.source === summary.source
    ).length;

    summary.published = sourcePublishCount;
    summary.queued = sourceQueueCount;
  }

  return NextResponse.json({
    ok: true,
    discovered: deduped.length,
    published: publishedCount,
    queued: queuedCount,
    publish_threshold: PUBLISH_CONFIDENCE_THRESHOLD,
    queue_threshold: QUEUE_CONFIDENCE_THRESHOLD,
    candidate_queue_warning: candidateQueueWarning,
    sources: sourceSummaries,
  });
}