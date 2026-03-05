// app/events/calendar/page.tsx
import Link from "next/link";
import {
  eventsByDayMap,
  eventsForMonth,
  formatMonthTitle,
  parseMonthParam,
  addMonths,
  monthKey,
  formatTimeRange,
} from "@/lib/events";

type Props = {
  searchParams?: { month?: string; view?: "month" | "list" };
};

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function buildCalendarGrid(year: number, monthIndex: number) {
  const firstOfMonth = new Date(year, monthIndex, 1);
  const startDay = firstOfMonth.getDay(); // 0 Sun..6 Sat

  // grid starts on Sunday
  const gridStart = new Date(year, monthIndex, 1 - startDay);

  const days: Date[] = [];
  for (let i = 0; i < 42; i++) {
    const d = new Date(gridStart);
    d.setDate(gridStart.getDate() + i);
    days.push(d);
  }
  return days;
}

function dayKey(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function formatDayLabel(d: Date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(d);
}

export default function Page({ searchParams }: Props) {
  const { year, monthIndex } = parseMonthParam(searchParams?.month);
  const view =
  searchParams?.view === "list" || searchParams?.view === "month"
    ? searchParams.view
    : "month"; // default month
  const title = formatMonthTitle(year, monthIndex);

  const evts = eventsForMonth(year, monthIndex);
  const byDay = eventsByDayMap(evts);

  const grid = buildCalendarGrid(year, monthIndex);
  const prev = addMonths(year, monthIndex, -1);
  const next = addMonths(year, monthIndex, 1);

  const baseMonth = monthKey(year, monthIndex);

  const monthHref = (m: string) => `/events/calendar?month=${m}&view=${view}`;
  const setViewHref = (v: "month" | "list") => `/events/calendar?month=${baseMonth}&view=${v}`;

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="flex flex-col gap-6">
        {/* Header row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Events Calendar</h1>
            <p className="mt-1 text-sm text-slate-600">
              {view === "month" ? "Month view" : "List view"} • Click an event for details
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* View toggle */}
            <div className="inline-flex rounded-xl border border-slate-200 bg-white p-1 shadow-sm">
              <Link
                href={setViewHref("month")}
                className={[
                  "rounded-lg px-3 py-1.5 text-sm font-semibold",
                  view === "month"
                    ? "bg-slate-900 text-white"
                    : "text-slate-700 hover:bg-slate-50",
                ].join(" ")}
              >
                Month
              </Link>
              <Link
                href={setViewHref("list")}
                className={[
                  "rounded-lg px-3 py-1.5 text-sm font-semibold",
                  view === "list"
                    ? "bg-slate-900 text-white"
                    : "text-slate-700 hover:bg-slate-50",
                ].join(" ")}
              >
                List
              </Link>
            </div>

            {/* Month navigation */}
            <div className="flex items-center gap-2">
              <Link
                href={monthHref(monthKey(prev.year, prev.monthIndex))}
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                ← Prev
              </Link>

              <div className="min-w-[220px] text-center text-sm font-semibold text-slate-900">{title}</div>

              <Link
                href={monthHref(monthKey(next.year, next.monthIndex))}
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Next →
              </Link>
            </div>
          </div>
        </div>

        {/* Content */}
        {view === "month" ? (
          <MonthGrid monthIndex={monthIndex} grid={grid} byDay={byDay} />
        ) : (
          <ListView year={year} monthIndex={monthIndex} evts={evts} />
        )}

        <div className="text-center text-xs text-slate-500">
          Want your calendar syndicated? We can add an iCal feed and publish it.
        </div>
      </div>
    </main>
  );
}

function MonthGrid({
  monthIndex,
  grid,
  byDay,
}: {
  monthIndex: number;
  grid: Date[];
  byDay: Map<string, { slug: string; title: string }[]>;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Weekday header */}
      <div className="grid grid-cols-7 border-b border-slate-200 bg-slate-50">
        {WEEKDAYS.map((d) => (
          <div key={d} className="px-3 py-2 text-xs font-semibold text-slate-600">
            {d}
          </div>
        ))}
      </div>

      {/* Day cells */}
      <div className="grid grid-cols-7">
        {grid.map((d) => {
          const inMonth = d.getMonth() === monthIndex;
          const key = dayKey(d);
          const dayEvents = byDay.get(key) ?? [];

          return (
            <div
              key={key}
              className={[
                "min-h-[120px] border-b border-r border-slate-200 p-3",
                !inMonth ? "bg-slate-50/60" : "bg-white",
              ].join(" ")}
            >
              <div className="flex items-start justify-between">
                <div
                  className={[
                    "text-sm font-semibold",
                    inMonth ? "text-slate-900" : "text-slate-400",
                  ].join(" ")}
                >
                  {d.getDate()}
                </div>
              </div>

              <div className="mt-2 space-y-2">
                {dayEvents.slice(0, 3).map((e) => (
                  <Link
                    key={e.slug}
                    href={`/events/${e.slug}`}
                    className="block rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-medium text-slate-900 hover:bg-slate-100"
                    title={e.title}
                  >
                    {e.title}
                  </Link>
                ))}

                {dayEvents.length > 3 && (
                  <div className="text-xs font-medium text-slate-500">+{dayEvents.length - 3} more</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ListView({
  year,
  monthIndex,
  evts,
}: {
  year: number;
  monthIndex: number;
  evts: {
    slug: string;
    title: string;
    startsAt: string;
    endsAt: string;
    location?: string;
    cityState?: string;
  }[];
}) {
  const fmt = new Intl.DateTimeFormat("en-US", { weekday: "short", month: "short", day: "numeric" });

  // group by day
  const groups = new Map<string, typeof evts>();
  for (const e of evts) {
    const d = new Date(e.startsAt);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    const arr = groups.get(key) ?? [];
    arr.push(e);
    groups.set(key, arr);
  }

  // order days
  const orderedDays = Array.from(groups.keys()).sort((a, b) => +new Date(a) - +new Date(b));

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
        <div className="text-sm font-semibold text-slate-900">
          Events in {formatMonthTitle(year, monthIndex)}
        </div>
        <div className="mt-1 text-xs text-slate-600">
          {evts.length === 0 ? "No events scheduled." : `${evts.length} event${evts.length === 1 ? "" : "s"}`}
        </div>
      </div>

      <div className="divide-y divide-slate-200">
        {orderedDays.length === 0 ? (
          <div className="px-5 py-8 text-sm text-slate-600">No events scheduled for this month.</div>
        ) : (
          orderedDays.map((day) => {
            const dayDate = new Date(day + "T00:00:00");
            const label = fmt.format(dayDate);
            const dayEvents = (groups.get(day) ?? []).slice().sort((a, b) => +new Date(a.startsAt) - +new Date(b.startsAt));

            return (
              <div key={day} className="px-5 py-5">
                <div className="text-sm font-bold text-slate-900">{label}</div>

                <div className="mt-3 space-y-3">
                  {dayEvents.map((e) => (
                    <div
                      key={e.slug}
                      className="flex flex-col gap-1 rounded-xl border border-slate-200 bg-white p-4 hover:bg-slate-50"
                    >
                      <Link href={`/events/${e.slug}`} className="text-sm font-semibold text-slate-900 hover:underline">
                        {e.title}
                      </Link>

                      <div className="text-xs text-slate-600">
                        {formatTimeRange(e.startsAt, e.endsAt)}
                        {(e.location || e.cityState) && (
                          <>
                            {" • "}
                            {e.location ? e.location : ""}
                            {e.location && e.cityState ? " — " : ""}
                            {e.cityState ? e.cityState : ""}
                          </>
                        )}
                      </div>

                      <div className="pt-1">
                        <Link
                          href={`/events/${e.slug}`}
                          className="text-xs font-semibold text-slate-900 hover:underline"
                        >
                          View details →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}