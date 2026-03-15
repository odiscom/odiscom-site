import Link from "next/link"
import { getUpcomingEvents } from "@/lib/events"

export const dynamic = "force-dynamic"

type SearchParams = Promise<{
  month?: string
}>

function monthKeyFromDate(date: Date) {
  const year = date.getUTCFullYear()
  const month = String(date.getUTCMonth() + 1).padStart(2, "0")
  return `${year}-${month}`
}

function parseMonthOrDefault(raw?: string) {
  if (raw && /^\d{4}-\d{2}$/.test(raw)) {
    const [year, month] = raw.split("-").map(Number)
    if (month >= 1 && month <= 12) {
      return new Date(Date.UTC(year, month - 1, 1))
    }
  }

  const now = new Date()
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1))
}

function addMonths(date: Date, amount: number) {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + amount, 1))
}

function formatMonthTitle(date: Date) {
  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  })
}

function formatDateRange(start: string, end: string | null) {
  const startDate = new Date(`${start}T00:00:00Z`)
  const endDate = end ? new Date(`${end}T00:00:00Z`) : null

  const startText = startDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  })

  if (!endDate) return startText

  const endText = endDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  })

  return `${startText} – ${endText}`
}

function formatLocation(
  venue: string | null,
  city: string | null,
  state: string | null
) {
  const place = [city, state].filter(Boolean).join(", ")
  if (venue && place) return `${venue} • ${place}`
  return venue || place || "Location TBA"
}

export default async function EventsCalendarPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const resolvedSearchParams = await searchParams
  const selectedMonth = parseMonthOrDefault(resolvedSearchParams.month)
  const prevMonth = addMonths(selectedMonth, -1)
  const nextMonth = addMonths(selectedMonth, 1)

  const allEvents = await getUpcomingEvents()

  const selectedKey = monthKeyFromDate(selectedMonth)

  const monthEvents = allEvents.filter((event) => {
    const eventDate = new Date(`${event.start_date}T00:00:00Z`)
    return monthKeyFromDate(eventDate) === selectedKey
  })

  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-[#f7fbfb]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
            Events Calendar
          </p>

          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                {formatMonthTitle(selectedMonth)}
              </h1>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                Browse telecom, fiber, wireless, tower, and broadband events for
                this month.
              </p>
            </div>

            <div className="flex gap-3">
              <Link
                href={`/events/calendar?month=${monthKeyFromDate(prevMonth)}`}
                className="rounded-full border border-slate-300 px-5 py-3 font-semibold text-slate-900 transition hover:border-[#1f8a84] hover:text-[#1f8a84]"
              >
                ← Previous
              </Link>

              <Link
                href={`/events/calendar?month=${monthKeyFromDate(nextMonth)}`}
                className="rounded-full border border-slate-300 px-5 py-3 font-semibold text-slate-900 transition hover:border-[#1f8a84] hover:text-[#1f8a84]"
              >
                Next →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {monthEvents.length > 0 ? (
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            {monthEvents.map((event, index) => (
              <div
                key={event.id}
                className={`grid gap-4 px-6 py-6 md:grid-cols-[180px_1fr_220px] md:items-center ${
                  index !== monthEvents.length - 1 ? "border-b border-slate-200" : ""
                }`}
              >
                <div className="font-semibold text-[#1f8a84]">
                  {formatDateRange(event.start_date, event.end_date)}
                </div>

                <div>
                  <Link
                    href={`/events/${event.slug}`}
                    className="text-lg font-semibold hover:text-[#1f8a84]"
                  >
                    {event.title}
                  </Link>

                  <p className="mt-1 text-slate-600">
                    {formatLocation(event.venue, event.city, event.state)}
                  </p>
                </div>

                <div className="md:text-right">
                  <p className="text-sm font-medium text-slate-500">
                    {event.category}
                  </p>

                  <a
                    href={event.official_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm font-semibold text-[#1f8a84] hover:text-[#18716c]"
                  >
                    Official Site ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 text-center shadow-sm">
            <h2 className="text-2xl font-semibold">
              No events found for {formatMonthTitle(selectedMonth)}
            </h2>

            <p className="mt-4 text-slate-600">
              Try the previous or next month, or return to the full events page.
            </p>

            <div className="mt-8">
              <Link
                href="/events"
                className="rounded-full bg-[#1f8a84] px-6 py-3 font-semibold text-white transition hover:bg-[#18716c]"
              >
                Back to Events
              </Link>
            </div>
          </div>
        )}
      </section>
    </main>
  )
}