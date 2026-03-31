import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js";

function parseDate(rawDate: string | null) {
  if (!rawDate) return null;

  const d = new Date(rawDate);
  if (isNaN(d.getTime())) return null;

  return d.toISOString();
}

function cleanText(input: string) {
  return input
    .replace(/<!\[CDATA\[|\]\]>/g, "")
    .replace(/<[^>]+>/g, "")
    .trim();
}

function buildSlug(title: string, date: string) {
  const base = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return `${base}-${date.slice(0, 10)}`;
}

serve(async () => {
  const projectUrl = Deno.env.get("PROJECT_URL");
  const serviceRoleKey = Deno.env.get("SERVICE_ROLE_KEY");

  if (!projectUrl || !serviceRoleKey) {
    return new Response(
      JSON.stringify({ success: false, error: "Missing env vars" }),
      { status: 500 }
    );
  }

  const supabase = createClient(projectUrl, serviceRoleKey);

  const feeds = [
    "https://www.lightreading.com/rss.xml",
    "https://www.telecompetitor.com/feed/",
    "https://www.fiercetelecom.com/rss/xml",
  ];

  let inserted = 0;
  let skipped = 0;

  for (const feedUrl of feeds) {
    try {
      const res = await fetch(feedUrl, {
        headers: {
          "User-Agent": "OdiscomBot/1.0",
        },
      });

      const text = await res.text();

      const items = [
        ...text.matchAll(/<item\b[\s\S]*?>([\s\S]*?)<\/item>/gi),
        ...text.matchAll(/<entry\b[\s\S]*?>([\s\S]*?)<\/entry>/gi),
      ];

      for (const item of items) {
        const content = item[1];

        const rawTitle =
          content.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || "";

        const rawLink =
          content.match(/<link>([\s\S]*?)<\/link>/i)?.[1] ||
          content.match(/href=["']([^"']+)["']/i)?.[1] ||
          "";

        const rawDate =
          content.match(/<pubDate>([\s\S]*?)<\/pubDate>/i)?.[1] ||
          content.match(/<updated>([\s\S]*?)<\/updated>/i)?.[1] ||
          content.match(/<published>([\s\S]*?)<\/published>/i)?.[1] ||
          null;

        const title = cleanText(rawTitle);
        if (!title) continue;

        const startsAt = parseDate(rawDate);

        // 🚨 KEY FIX: skip bad dates instead of defaulting to today
        if (!startsAt) {
          skipped++;
          continue;
        }

        const slug = buildSlug(title, startsAt);

        const { error } = await supabase.from("events").upsert(
          {
            title,
            slug,
            description: rawLink,
            starts_at: startsAt,
            source: "other",
            category: "Industry Feed",
          },
          { onConflict: "slug" }
        );

        if (!error) inserted++;
      }
    } catch (_err) {
      // continue to next feed
    }
  }

  return new Response(
    JSON.stringify({ success: true, inserted, skipped }),
    { headers: { "Content-Type": "application/json" } }
  );
});