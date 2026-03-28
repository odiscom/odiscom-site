"use client";

import Link from "next/link";
import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

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

function EventsPageInner() {
  const searchParams = useSearchParams();

  const selectedMonth =
    searchParams.get("month") && /^\d{4}-\d{2}$/.test(searchParams.get("month") || "")
      ? (searchParams.get("month") as string)
      : fmtMonthInput(new Date());

  const allowedSources: SourceName[] = [
    "all",
    "nate",
    "wia",
    "fiberconnect",
    "other",
  ];

  const selectedSource: SourceName = allowedSources.includes(
    (searchParams.get("source") || "all") as SourceName
  )
    ? ((searchParams.get("source") || "all") as SourceName)
    : "all";

  const [events, setEvents] = useState<EventRow[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const viewDate = useMemo(
    () => new Date(`${selectedMonth}-01T12:00:00`),
    [selectedMonth]
  );

  useEffect(() => {
    let cancelled = false;

    async function loadEvents() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `/api/events?month=${selectedMonth}&source=${selectedSource}`,
          { cache: "no-store" }
        );

        const json = await res.json();

        if (!res.ok) {
          throw new Error(json?.error || "Failed to load events.");
        }

        if (!cancelled) {
          setEvents(Array.isArray(json.events) ? json.events : []);
        }
      } catch (err) {
        if (!cancelled) {
          setEvents([]);
          setError(err instanceof Error ? err.message : "Failed to load events.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadEvents();

    return () => {
      cancelled = true;
    };
  }, [selectedMonth, selectedSource]);

  const prevMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1);
  const nextMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1);
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
          <h1 className="text-3xl font-semibold text-slate-900">
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
        <div className="mb-6 rounded-xl bg-red-50 p-4 text-red-700">{error}</div>
      ) : null}

      <div className="mb-6 flex items-center justify-between">
        <Link
          href={`/events?month=${fmtMonthInput(prevMonth)}&source=${selectedSource}`}
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          ← Previous
        </Link>

        <div className="text-center">
          <h2 className="text-xl font-semibold text-slate-900">
            {fmtHumanDate(viewDate)}
          </h2>
          <p className="text-sm text-slate-500">
            {loading ? "Loading..." : `${events.length} events`}
          </p>
        </div>

        <Link
          href={`/events?month=${fmtMonthInput(nextMonth)}&source=${selectedSource}`}
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Next →
        </Link>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((date) => {
          const key = dayKey(date);
          const dayEvents = eventsByDay.get(key) || [];

          return (
            <div key={key} className="min-h-[120px] border p-2">
              <div className="font-semibold text-slate-900">{date.getDate()}</div>

              <div className="mt-1 space-y-1">
                {dayEvents.map((event) => (
                  <div
                    key={event.id}
                    className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-800"
                    title={event.title}
                  >
                    {event.title}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function EventsPageFallback() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-3xl font-semibold text-slate-900">
        Telecom conference and association calendar
      </h1>
      <div className="mt-6 rounded-xl bg-slate-50 p-4 text-slate-600">
        Loading events...
      </div>
    </div>
  );
}

export default function EventsPage() {
  return (
    <Suspense fallback={<EventsPageFallback />}>
      <EventsPageInner />
    </Suspense>
  );
}