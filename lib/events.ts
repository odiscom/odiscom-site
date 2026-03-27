export type EventItem = {
  id: string;
  title: string;
  slug: string;
  description?: string | null;
  category?: string | null;
  starts_at: string;
  created_at?: string;
};

/* ---------------- BASIC HELPERS ---------------- */

export function getEventBySlug(events: EventItem[], slug: string) {
  return events.find((event) => event.slug === slug);
}

export function parseMonthParam(month?: string) {
  if (!month) {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  }

  const match = /^(\d{4})-(\d{2})$/.exec(month);
  if (!match) return new Date();

  return new Date(Number(match[1]), Number(match[2]) - 1, 1);
}

export function addMonths(date: Date, amount: number) {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1);
}

export function monthKey(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

/* ---------------- DISPLAY HELPERS ---------------- */

export function formatMonthTitle(date: Date) {
  return date.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
}

export function formatTimeRange(startIso: string, endIso?: string | null) {
  const start = new Date(startIso);

  const startText = start.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  if (!endIso) return startText;

  const end = new Date(endIso);

  const endText = end.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  return `${startText} - ${endText}`;
}

/* ---------------- CALENDAR LOGIC ---------------- */

export function eventsForMonth(events: EventItem[], month: Date) {
  const start = new Date(month.getFullYear(), month.getMonth(), 1);
  const end = new Date(month.getFullYear(), month.getMonth() + 1, 1);

  return events.filter((e) => {
    const d = new Date(e.starts_at);
    return d >= start && d < end;
  });
}

export function eventsByDayMap(events: EventItem[]) {
  const map: Record<string, EventItem[]> = {};

  for (const event of events) {
    const date = new Date(event.starts_at);
    const key = date.toISOString().split("T")[0];

    if (!map[key]) map[key] = [];
    map[key].push(event);
  }

  return map;
}