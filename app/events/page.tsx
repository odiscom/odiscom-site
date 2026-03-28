import Link from "next/link";

export const dynamic = "force-dynamic";

type SourceName = "all" | "nate" | "wia" | "fiberconnect" | "other";

type EventRow = {
  id: string;
  title: string;
  slug: string;
  source: Exclude<SourceName, "all">;
  description: string | null;
  location: string | null;
  starts_at: string;
  ends_at: string | null;
  url: string | null;
  organizer: string | null;
};

const SOURCE_LABELS: Record<SourceName, string> = {
  all: "All",
  nate: "NATE",
  wia: "WIA",
  fiberconnect: "Fiber Connect",
  other: "Other",
};

const SOURCE_STYLES: Record<Exclude<SourceName, "all">, string> = {
  nate: "border-l-4 border-l-emerald-500 bg-white",
  wia: "border-l-4 border-l-sky-500 bg-white",
  fiberconnect: "border-l-4 border-l-amber-500 bg-white",
  other: "border-l-4 border-l-slate-400 bg-white",
};

function monthStart(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function monthEnd(date: Date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

function fmtMonthInput(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  return `${y}-${m}`;
}

function fmtHumanDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(date);
}

function fmtDayLabel(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(date);
}

function fmtEventTime(value: string) {
  const date = new Date(value);
  if (
    date.getUTCHours() === 0 &&
    date.getUTCMinutes() === 0 &&
    date.getUTCSeconds() === 0
  ) {
    return "";
  }

  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

function getCalendarCells(viewDate: Date) {
  const start = monthStart(viewDate);
  const end = monthEnd(viewDate);

  const firstGridDay = new Date(start);
  firstGridDay.setDate(start.getDate() - start.getDay());

  const lastGridDay = new Date(end);
  lastGridDay.setDate(end.getDate() + (6 - end.getDay()));

  const days: Date[] = [];
  const cursor = new Date(firstGridDay);

  while (cursor <= lastGridDay) {
    days.push(new Date(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }

  return days;
}

function dayKey(date: Date) {
  return date.toISOString().slice(0, 10);
}

/* ✅ FIXED — internal API call */
async function getEvents(selectedMonth: string, source: SourceName) {
  try {
    const res = await fetch(
      `/api/events?month=${selectedMonth}&source=${source}`,
      {
        cache: "no-store",
      }
    );

    const json = await res.json();

    if (!res.ok) {
      return {
        events: [] as EventRow[],
        error: json?.error || "Failed to load events API.",
      };
    }

    return {
      events: (json.events || []) as EventRow[],
      error: null as string | null,
    };
  } catch (error) {
    return {
      events: [] as EventRow[],
      error:
        error instanceof Error
          ? error.message
          : "Unknown server-side error loading events.",
    };
  }
}

export default async function EventsPage({
  searchParams,
}: {
  searchParams?: Promise<{ month?: string; source?: SourceName }>;
}) {
  const params = (await searchParams) || {};

  const selectedMonth =
    typeof params.month === "string" && /^\d{4}-\d{2}$/.test(params.month)
      ? params.month
      : fmtMonthInput(new Date());

  const allowedSources: SourceName[] = [
    "all",
    "nate",
    "wia",
    "fiberconnect",
    "other",
  ];

  const selectedSource: SourceName =
    typeof params.source === "string" && allowedSources.includes(params.source)
      ? params.source
      : "all";

  const viewDate = new Date(`${selectedMonth}-01T12:00:00`);
  const prevMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1);
  const nextMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1);

  const { events, error } = await getEvents(selectedMonth, selectedSource);
  const days = getCalendarCells(viewDate);

  const eventsByDay = new Map<string, EventRow[]>();
  for (const event of events) {
    const key = event.starts_at.slice(0, 10);
    const list = eventsByDay.get(key) || [];
    list.push(event);
    eventsByDay.set(key, list);
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">
        Telecom conference and association calendar
      </h1>

      {error && (
        <div className="mb-6 bg-red-50 p-4 text-red-700">{error}</div>
      )}

      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold">{fmtHumanDate(viewDate)}</h2>
        <p className="text-sm text-slate-500">{events.length} events</p>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((date) => {
          const key = dayKey(date);
          const dayEvents = eventsByDay.get(key) || [];

          return (
            <div key={key} className="border p-2 min-h-[120px]">
              <div className="font-semibold">{date.getDate()}</div>

              {dayEvents.map((event) => (
                <div key={event.id} className="text-xs mt-1">
                  {event.title}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}