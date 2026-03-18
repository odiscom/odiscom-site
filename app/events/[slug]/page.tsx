import { notFound } from "next/navigation"
import BottomCta from "@/components/BottomCta"
import { getEventBySlug } from "@/lib/events"

export const dynamic = "force-dynamic"

function formatDateRange(start: string, end: string | null) {
  const startDate = new Date(`${start}T00:00:00Z`)
  const endDate = end ? new Date(`${end}T00:00:00Z`) : null
  const startText = startDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })
  if (!endDate) return startText
  const endText = endDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })
  return `${startText} – ${endText}`
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const event = await getEventBySlug(slug)
  if (!event) notFound()

  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-[#f7fbfb]">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">{event.category}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">{event.title}</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">{formatDateRange(event.start_date, event.end_date)}</p>
          <p className="mt-2 text-lg leading-8 text-slate-600">{[event.venue, event.city, event.state].filter(Boolean).join(", ") || "Location TBA"}</p>
          <div className="mt-8">
            <a href={event.official_url} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#1f8a84] px-7 py-4 font-semibold text-white hover:bg-[#18716c]">
              Visit Official Event Website
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold">About this event</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">{event.description || event.short_description || "No description available."}</p>
        </div>
      </section>

      <BottomCta
        title="Want Odiscom to highlight another event?"
        description="We are building this calendar to become a stronger resource for the telecom infrastructure community."
        secondaryHref="/events"
        secondaryLabel="Back to Events"
      />
    </main>
  )
}
