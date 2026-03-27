import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js";

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

  const feeds = [
    "https://www.lightreading.com/rss.xml",
    "https://www.telecompetitor.com/feed/",
    "https://www.fiercetelecom.com/rss/xml",
  ];

  let inserted = 0;

  for (const feedUrl of feeds) {
    try {
      const res = await fetch(feedUrl, {
        headers: {
          "User-Agent": "Mozilla/5.0 OdiscomFeedBot/1.0",
          Accept: "application/rss+xml, application/xml, text/xml, */*",
        },
      });

      const text = await res.text();

      const itemMatches = [
        ...text.matchAll(/<item\b[\s\S]*?>([\s\S]*?)<\/item>/gi),
      ];
      const entryMatches = [
        ...text.matchAll(/<entry\b[\s\S]*?>([\s\S]*?)<\/entry>/gi),
      ];
      const items = [...itemMatches, ...entryMatches];

      for (const item of items) {
        const content = item[1];

        const title =
          content.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim() || "";

        const link =
          content.match(/<link>([\s\S]*?)<\/link>/i)?.[1]?.trim() ||
          content.match(/<link[^>]*href=["']([^"']+)["']/i)?.[1]?.trim() ||
          "";

        const rawDate =
          content.match(/<pubDate>([\s\S]*?)<\/pubDate>/i)?.[1]?.trim() ||
          content.match(/<updated>([\s\S]*?)<\/updated>/i)?.[1]?.trim() ||
          content.match(/<published>([\s\S]*?)<\/published>/i)?.[1]?.trim() ||
          "";

        const cleanTitle = title
          .replace(/<!\[CDATA\[|\]\]>/g, "")
          .replace(/<[^>]+>/g, "")
          .trim();

        if (!cleanTitle) continue;

        const slug = cleanTitle
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");

        const parsedDate = rawDate ? new Date(rawDate) : new Date();
        const startsAt = isNaN(parsedDate.getTime())
          ? new Date().toISOString()
          : parsedDate.toISOString();

        const { error } = await supabase
          .from("events")
          .upsert(
            {
              title: cleanTitle,
              slug,
              description: link,
              starts_at: startsAt,
              category: "Industry Feed",
            },
            { onConflict: "slug" }
          );

        if (!error) inserted++;
      }
    } catch (_err) {
      // Ignore individual feed failures so other feeds can still ingest.
    }
  }

  return new Response(
    JSON.stringify({ success: true, inserted }),
    { headers: { "Content-Type": "application/json" } }
  );
});