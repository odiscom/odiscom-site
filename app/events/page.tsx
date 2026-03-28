import Link from "next/link";
import { headers } from "next/headers";

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

async function getBaseUrl() {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host");
  const proto = h.get("x-forwarded-proto") ?? "https";

  if (!host) {
    throw new Error("Could not determine host for events API request.");
  }

  return `${proto}://${host}`;
}

async function getEvents(selectedMonth: string, source: SourceName) {
  try {
    const baseUrl = await getBaseUrl();

    const res = await fetch(
      `${baseUrl}/api/events?month=${selectedMonth}&source=${source}`,
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
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Odiscom Industry Events
          </p>
          <h1 className="text-3xl font-semibold">
            Telecom conference and association calendar
          </h1>
        </div>

        <div className="flex flex-wrap gap-2">
          {allowedSources.map((source) => {
            const active = source === selectedSource;
            return (
              <Link
                key={source}
                href={`/events?month=${selectedMonth}&source=${source}`}
                className={`rounded-full px-4 py-2 text-sm font-medium ${
                  active
                    ? "bg-emerald-700 text-white"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                {SOURCE_LABELS[source]}
              </Link>
            );
          })}
        </div>
      </div>

      {error ? (
        <div className="mb-6 rounded-xl bg-red-50 p-4 text-red-700">
          {error}
        </div>
      ) : null}

      <div className="mb-6 text-center">
        <h2 className="text-xl font-semibold">{fmtHumanDate(viewDate)}</h2>
        <p className="text-sm text-slate-500">{events.length} events</p>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((date) => {
          const key = dayKey(date);
          const dayEvents = eventsByDay.get(key) || [];

          return (
            <div key={key} className="min-h-[120px] border p-2">
              <div className="font-semibold">{date.getDate()}</div>

              {dayEvents.map((event) => (
                <div key={event.id} className="mt-1 text-xs">
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