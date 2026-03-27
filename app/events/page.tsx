import Link from "next/link";
import {
  eventsByDayMap,
  eventsForMonth,
  formatMonthTitle,
  parseMonthParam,
  addMonths,
  monthKey,
} from "@/lib/events";

type SearchParams =
  | { month?: string }
  | Promise<{ month?: string }>;

type Props = {
  searchParams?: SearchParams;
};

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function one(v: string | string[] | undefined) {
  return Array.isArray(v) ? v[0] : v;
}

function buildCalendarGrid(year: number, monthIndex: number) {
  const firstOfMonth = new Date(year, monthIndex, 1);
  const startDay = firstOfMonth.getDay();
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
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(d.getDate()).padStart(2, "0")}`;
}

export default async function Page({ searchParams }: Props) {
  const sp = await searchParams;
  const monthParam = one(sp?.month);

  const { year, monthIndex } = parseMonthParam(monthParam);
  const title = formatMonthTitle(year, monthIndex);

  const evts = await eventsForMonth(year, monthIndex);
  const byDay = eventsByDayMap(evts);
  const grid = buildCalendarGrid(year, monthIndex);

  const prev = addMonths(year, monthIndex, -1);
  const next = addMonths(year, monthIndex, 1);

  const hrefWith = (m: string) => `/events?month=${m}`;

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Events Calendar
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              Click an event for details
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={hrefWith(monthKey(prev.year, prev.monthIndex))}
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50"
            >
              ← Prev
            </Link>

            <div className="min-w-[200px] text-center text-sm font-semibold text-slate-900">
              {title}
            </div>

            <Link
              href={hrefWith(monthKey(next.year, next.monthIndex))}
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50"
            >
              Next →
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-7 border-b border-slate-200 bg-slate-50">
            {WEEKDAYS.map((d) => (
              <div
                key={d}
                className="px-3 py-2 text-xs font-semibold text-slate-600"
              >
                {d}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7">
            {grid.map((d) => {
              const inMonth = d.getMonth() === monthIndex;
              const key = dayKey(d);
              const dayEvents = byDay.get(key) ?? [];

              return (
                <div
                  key={key}
                  className={`min-h-[120px] border-b border-r border-slate-200 p-3 ${
                    inMonth ? "bg-white" : "bg-slate-50/60"
                  }`}
                >
                  <div className="text-sm font-semibold">
                    <span
                      className={
                        inMonth ? "text-slate-900" : "text-slate-400"
                      }
                    >
                      {d.getDate()}
                    </span>
                  </div>

                  <div className="mt-2 space-y-2">
                    {dayEvents.slice(0, 3).map((e) => (
                      <Link
                        key={e.slug}
                        href={`/events/${e.slug}`}
                        className="block rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-medium hover:bg-slate-100"
                      >
                        {e.title}
                      </Link>
                    ))}

                    {dayEvents.length > 3 && (
                      <div className="text-xs text-slate-500">
                        +{dayEvents.length - 3} more
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center text-xs text-slate-500">
          Want your calendar syndicated? We can add an iCal feed.
        </div>
      </div>
    </main>
  );
}