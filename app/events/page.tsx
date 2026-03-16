import Link from "next/link"
import {
  getFeaturedEvents,
  getUpcomingEvents,
  groupEventsByMonth,
} from "@/lib/events"

export const dynamic = "force-dynamic"

function formatDateRange(start: string, end: string | null) {
  const startDate = new Date(`${start}T00:00:00Z`)
  const endDate = end ? new Date(`${end}T00:00:00Z`) : null

  const startText = startDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  })

  if (!endDate) return startText

  const endText = endDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  })

  return `${startText} – ${endText}`
}

function formatLocation(
  city: string | null,
  state: string | null,
  venue: string | null
) {
  const place = [city, state].filter(Boolean).join(", ")
  if (venue && place) return `${venue} • ${place}`
  return venue || place || "Location TBA"
}

export default async function EventsPage() {
  const featuredEvents = await getFeaturedEvents()
  const upcomingEvents = await getUpcomingEvents()
  const groupedEvents = groupEventsByMonth(upcomingEvents)

  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-[#f7fbfb]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
              Events
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              Telecom industry conferences and infrastructure calendar
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Follow upcoming telecom, fiber, wireless, tower, and broadband
              events relevant to infrastructure deployment, engineering, and
              field operations.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
            Featured Events
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Major industry events to watch
          </h2>
        </div>

        {featuredEvents.length > 0 ? (
          <div className="grid gap-8 lg:grid-cols-3">
            {featuredEvents.map((event) => (
              <div
                key={event.id}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 h-1 w-14 rounded bg-[#1f8a84]" />

                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">
                  {event.category}
                </p>

                <h3 className="mt-3 text-2xl font-semibold">
                  <Link
                    href={`/events/${event.slug}`}
                    className="hover:text-[#1f8a84]"
                  >
                    {event.title}
                  </Link>
                </h3>

                <p className="mt-4 text-sm font-medium text-slate-500">
                  {formatDateRange(event.start_date, event.end_date)}
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  {formatLocation(event.city, event.state, event.venue)}
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  {event.short_description || event.description || ""}
                </p>

                <div className="mt-6 flex gap-4">
                  <Link
                    href={`/events/${event.slug}`}
                    className="font-semibold text-[#1f8a84] hover:text-[#18716c]"
                  >
                    Details →
                  </Link>

                  <a
                    href={event.official_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-slate-600 hover:text-[#1f8a84]"
                  >
                    Event Site ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 text-center shadow-sm">
            <h3 className="text-2xl font-semibold">No featured events yet</h3>
            <p className="mt-4 text-slate-600">
              Featured events will appear here once they are marked in the
              database.
            </p>
          </div>
        )}
      </section>

      <section className="bg-[#f5f7f8]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
              Upcoming Calendar
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Upcoming telecom and infrastructure events
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              This calendar projects out a full year and updates as events are
              added or changed.
            </p>
          </div>

          {Object.keys(groupedEvents).length > 0 ? (
            <div className="space-y-10">
              {Object.entries(groupedEvents).map(([month, events]) => (
                <div key={month}>
                  <h3 className="mb-5 text-2xl font-semibold">{month}</h3>

                  <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                    {events.map((event, index) => (
                      <div
                        key={event.id}
                        className={`grid gap-4 px-6 py-5 md:grid-cols-[180px_1fr_220px] md:items-center ${
                          index !== events.length - 1
                            ? "border-b border-slate-200"
                            : ""
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
                            {formatLocation(
                              event.city,
                              event.state,
                              event.venue
                            )}
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
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 text-center shadow-sm">
              <h3 className="text-2xl font-semibold">
                No upcoming events found
              </h3>
              <p className="mt-4 text-slate-600">
                Add events in Supabase and they will automatically appear here.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}