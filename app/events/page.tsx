import Image from "next/image"
import Link from "next/link"
import BottomCta from "@/components/BottomCta"
import { getFeaturedEvents, getUpcomingEvents, groupEventsByMonth } from "@/lib/events"

export const dynamic = "force-dynamic"

function formatDateRange(start: string, end: string | null) {
  const startDate = new Date(`${start}T00:00:00Z`)
  const endDate = end ? new Date(`${end}T00:00:00Z`) : null
  const startText = startDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" })
  if (!endDate) return startText
  const endText = endDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" })
  return `${startText} – ${endText}`
}

function formatLocation(city: string | null, state: string | null, venue: string | null) {
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
      <section className="relative h-[430px] w-full overflow-hidden">
        <Image src="/logos/clients.png" alt="Industry events and professional meetings" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f3f3b]/85 via-[#0f3f3b]/70 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <p className="mb-4 text-sm tracking-[0.2em] text-white/80">EVENTS • CONFERENCES • INDUSTRY CALENDAR</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">Telecom industry events and infrastructure calendar</h1>
            <p className="mt-4 text-lg leading-8 text-white/90">
              Follow conferences, trade shows, and industry gatherings relevant to fiber, wireless, towers, broadband, and telecom infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbfb]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">Featured Events</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Major industry events to watch</h2>
          </div>

          {featuredEvents.length > 0 ? (
            <div className="grid gap-8 lg:grid-cols-3">
              {featuredEvents.map((event) => (
                <div key={event.id} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1f8a84]">{event.category}</p>
                  <h3 className="mt-4 text-2xl font-semibold">{event.title}</h3>
                  <p className="mt-2 text-sm font-medium text-slate-500">
                    {formatDateRange(event.start_date, event.end_date)} • {formatLocation(event.city, event.state, event.venue)}
                  </p>
                  <p className="mt-4 leading-8 text-slate-600">{event.short_description || event.description || ""}</p>
                  <a href={event.official_url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block font-semibold text-[#1f8a84] transition hover:text-[#18716c]">
                    Visit Event Website ↗
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 text-center shadow-sm">
              <h3 className="text-2xl font-semibold">No featured events yet</h3>
              <p className="mt-4 text-slate-600">Featured events will appear here once they are marked in the database.</p>
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">Upcoming Calendar</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Upcoming telecom and infrastructure events</h2>
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
                        index !== events.length - 1 ? "border-b border-slate-200" : ""
                      }`}
                    >
                      <div className="font-semibold text-[#1f8a84]">{formatDateRange(event.start_date, event.end_date)}</div>
                      <div>
                        <Link href={`/events/${event.slug}`} className="text-lg font-semibold hover:text-[#1f8a84]">
                          {event.title}
                        </Link>
                        <p className="mt-1 text-slate-600">{formatLocation(event.city, event.state, event.venue)}</p>
                      </div>
                      <div className="md:text-right">
                        <p className="text-sm font-medium text-slate-500">{event.category}</p>
                        <a href={event.official_url} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-sm font-semibold text-[#1f8a84] hover:text-[#18716c]">
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
            <h3 className="text-2xl font-semibold">No upcoming events found</h3>
            <p className="mt-4 text-slate-600">Add events in Supabase and they will automatically appear here.</p>
          </div>
        )}
      </section>

      <BottomCta
        title="Want Odiscom to highlight an event or industry gathering?"
        description="We are building this calendar to become a stronger resource for the telecom infrastructure community."
        secondaryHref="/clients"
        secondaryLabel="View Clients"
      />
    </main>
  )
}
