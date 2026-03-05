// lib/events.ts
import { EVENTS, EventItem } from "./events-data";

export function getAllEvents(): EventItem[] {
  return EVENTS.slice().sort((a, b) => +new Date(a.startsAt) - +new Date(b.startsAt));
}

export function getEventBySlug(slug: string): EventItem | undefined {
  return EVENTS.find((e) => e.slug === slug);
}

/**
 * Parse month query param in format YYYY-MM.
 * If missing/invalid, falls back to current month.
 */
export function parseMonthParam(monthParam?: string) {
  const now = new Date();
  if (!monthParam || !/^\d{4}-\d{2}$/.test(monthParam)) {
    return { year: now.getFullYear(), monthIndex: now.getMonth() }; // 0-based
  }
  const [y, m] = monthParam.split("-").map(Number);
  return { year: y, monthIndex: m - 1 };
}

/** Convert (year, monthIndex) to YYYY-MM */
export function monthKey(year: number, monthIndex: number) {
  const m = String(monthIndex + 1).padStart(2, "0");
  return `${year}-${m}`;
}

/** Add/subtract months safely */
export function addMonths(year: number, monthIndex: number, delta: number) {
  const d = new Date(year, monthIndex + delta, 1);
  return { year: d.getFullYear(), monthIndex: d.getMonth() };
}

/** All events overlapping the month */
export function eventsForMonth(year: number, monthIndex: number) {
  const start = new Date(year, monthIndex, 1);
  const end = new Date(year, monthIndex + 1, 1);

  return getAllEvents().filter((e) => {
    const s = new Date(e.startsAt);
    const f = new Date(e.endsAt);
    // show if any overlap with the month window
    return f > start && s < end;
  });
}

/** Map YYYY-MM-DD -> events starting that day (sorted) */
export function eventsByDayMap(evts: EventItem[]) {
  const map = new Map<string, EventItem[]>();

  for (const e of evts) {
    const d = new Date(e.startsAt);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(
      2,
      "0"
    )}`;
    const arr = map.get(key) ?? [];
    arr.push(e);
    map.set(key, arr);
  }

  for (const [k, arr] of map.entries()) {
    arr.sort((a, b) => +new Date(a.startsAt) - +new Date(b.startsAt));
    map.set(k, arr);
  }

  return map;
}

export function formatMonthTitle(year: number, monthIndex: number) {
  return new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(
    new Date(year, monthIndex, 1)
  );
}

export function formatTimeRange(startsAt: string, endsAt: string) {
  const s = new Date(startsAt);
  const e = new Date(endsAt);
  const fmt = new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit" });
  return `${fmt.format(s)} – ${fmt.format(e)}`;
}