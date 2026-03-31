function parseWiaEvents(html: string): ParsedEvent[] {
  const events: ParsedEvent[] = [];

  // Extract JSON-LD blocks
  const matches = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];

  for (const match of matches) {
    try {
      const json = JSON.parse(match[1]);

      const items = Array.isArray(json) ? json : [json];

      for (const item of items) {
        if (item["@type"] !== "Event") continue;

        const title = item.name;
        const start = item.startDate;
        const end = item.endDate || null;

        if (!title || !start) continue;

        events.push({
          title,
          slug: buildSlug("wia", title, start),
          source: "wia",
          description: item.description || null,
          location: item.location?.name || null,
          starts_at: new Date(start).toISOString(),
          ends_at: end ? new Date(end).toISOString() : null,
          url: item.url || null,
          organizer: "WIA",
          category: "Industry Event",
        });
      }
    } catch {
      continue;
    }
  }

  return dedupeEvents(events);
}