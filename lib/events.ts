export type EventItem = {
  id: string;
  title: string;
  slug: string;
  description?: string | null;
  category?: string | null;
  starts_at: string;
  created_at?: string;
};

export function getEventBySlug(events: EventItem[], slug: string) {
  return events.find((event) => event.slug === slug);
}

export function parseMonthParam(month?: string) {
  if (!month) {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  }

  const match = /^(\d{4})-(\d{2})$/.exec(month);
  if (!match) {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  }

  const year = Number(match[1]);
  const monthIndex = Number(match[2]) - 1;

  if (monthIndex < 0 || monthIndex > 11) {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  }

  return new Date(year, monthIndex, 1);
}

export function addMonths(date: Date, amount: number) {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1);
}

export function monthKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

export function formatTimeRange(startIso: string, endIso?: string | null) {
  const start = new Date(startIso);

  if (Number.isNaN(start.getTime())) return "";

  const startText = start.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  if (!endIso) return startText;

  const end = new Date(endIso);
  if (Number.isNaN(end.getTime())) return startText;

  const endText = end.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  return `${startText} - ${endText}`;
}