import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

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

async function getEvents(selectedMonth: string, source: SourceName) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return {
      events: [] as EventRow[],
      error: "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in Vercel.",
    };
  }

  try {
    const supabase = createClient(supabaseUrl, serviceRoleKey);

    const baseDate = new Date(`${selectedMonth}-01T12:00:00`);
    const start = monthStart(baseDate).toISOString();
    const end = new Date(
      baseDate.getFullYear(),
      baseDate.getMonth() + 1,
      1
    ).toISOString();

    let query = supabase
      .from("events")
      .select(
        "id,title,slug,source,description,location,starts_at,ends_at,url,organizer"
      )
      .gte("starts_at", start)
      .lt("starts_at", end)
      .order("starts_at", { ascending: true });

    if (source !== "all") {
      query = query.eq("source", source);
    }

    const { data, error } = await query;

    if (error) {
      return {
        events: [] as EventRow[],
        error: error.message,
      };
    }

    return {
      events: (data || []) as EventRow[],
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

  const upcoming = events.slice(0, 12);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Odiscom Industry Events
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">
            Telecom conference and association calendar
          </h1>
          <p className="mt-2 max-w-3xl text-sm text-slate-600">
            NATE, WIA, Fiber Connect, and other telecom industry events only.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {allowedSources.map((source) => {
            const active = source === selectedSource;
            return (
              <Link
                key={source}
                href={`/events?month=${selectedMonth}&source=${source}`}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-emerald-700 text-white shadow"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {SOURCE_LABELS[source]}
              </Link>
            );
          })}
        </div>
      </div>

      {error ? (
        <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-4 text-sm text-red-700">
          Events page could not load data: {error}
        </div>
      ) : null}

      <div className="mb-6 flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
        <Link
          href={`/events?month=${fmtMonthInput(prevMonth)}&source=${selectedSource}`}
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          ← Previous
        </Link>

        <div className="text-center">
          <div className="text-xl font-semibold text-slate-900">
            {fmtHumanDate(viewDate)}
          </div>
          <div className="mt-1 text-sm text-slate-500">
            {events.length} event{events.length === 1 ? "" : "s"}
          </div>
        </div>

        <Link
          href={`/events?month=${fmtMonthInput(nextMonth)}&source=${selectedSource}`}
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Next →
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div>
          <div className="grid grid-cols-7 rounded-t-2xl border border-b-0 border-slate-200 bg-slate-50">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="border-b border-r border-slate-200 px-3 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 last:border-r-0"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 overflow-hidden rounded-b-2xl border border-slate-200 bg-white shadow-sm">
            {days.map((date) => {
              const inMonth = date.getMonth() === viewDate.getMonth();
              const key = dayKey(date);
              const dayEvents = eventsByDay.get(key) || [];

              return (
                <div
                  key={key}
                  className="min-h-[150px] border-r border-t border-slate-200 p-2 align-top last:border-r-0"
                >
                  <div
                    className={`mb-2 text-sm font-semibold ${
                      inMonth ? "text-slate-900" : "text-slate-400"
                    }`}
                  >
                    {date.getDate()}
                  </div>

                  <div className="space-y-2">
                    {dayEvents.map((event) => (
                      <Link
                        key={event.id}
                        href={`/events/${event.slug}`}
                        className={`block rounded-xl p-2 text-xs shadow-sm transition hover:-translate-y-0.5 hover:shadow ${SOURCE_STYLES[event.source]}`}
                      >
                        <div className="mb-1">
                          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-600">
                            {SOURCE_LABELS[event.source]}
                          </span>
                        </div>
                        <div className="line-clamp-2 font-semibold text-slate-800">
                          {event.title}
                        </div>
                        {event.location ? (
                          <div className="mt-1 line-clamp-1 text-slate-500">
                            {event.location}
                          </div>
                        ) : null}
                      </Link>
                    ))}

                    {!dayEvents.length && inMonth ? (
                      <div className="rounded-lg border border-dashed border-slate-200 px-2 py-3 text-[11px] text-slate-300">
                        No events
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Upcoming this month</h2>
          <p className="mt-1 text-sm text-slate-500">
            Clean list view for quick scanning.
          </p>

          <div className="mt-5 space-y-3">
            {upcoming.length ? (
              upcoming.map((event) => (
                <Link
                  key={event.id}
                  href={`/events/${event.slug}`}
                  className={`block rounded-2xl p-4 transition hover:-translate-y-0.5 hover:shadow ${SOURCE_STYLES[event.source]}`}
                >
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {SOURCE_LABELS[event.source]}
                  </div>
                  <div className="mt-1 font-semibold text-slate-900">{event.title}</div>
                  <div className="mt-2 text-sm text-slate-600">
                    {fmtDayLabel(new Date(event.starts_at))}
                    {fmtEventTime(event.starts_at)
                      ? ` • ${fmtEventTime(event.starts_at)}`
                      : ""}
                  </div>
                  {event.location ? (
                    <div className="mt-1 text-sm text-slate-500">{event.location}</div>
                  ) : null}
                </Link>
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-200 p-4 text-sm text-slate-500">
                No industry events found for this month and filter.
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}