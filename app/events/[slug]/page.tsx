// app/events/[slug]/page.tsx
import Link from "next/link";
import { getEventBySlug, formatTimeRange } from "@/lib/events";

export default function Page({ params }: { params: { slug: string } }) {
  const event = getEventBySlug(params.slug);

  if (!event) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-2xl font-bold text-slate-900">Event not found</h1>
        <Link href="/events/calendar" className="mt-4 inline-block text-sm font-semibold text-slate-900 hover:underline">
          ← Back to calendar
        </Link>
      </main>
    );
  }

  const dateFmt = new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
  const start = new Date(event.startsAt);

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Link href="/events/calendar" className="text-sm font-semibold text-slate-900 hover:underline">
        ← Back to calendar
      </Link>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">{event.title}</h1>

      <div className="mt-3 space-y-1 text-sm text-slate-600">
        <div>{dateFmt.format(start)}</div>
        <div>{formatTimeRange(event.startsAt, event.endsAt)} {event.timezone ? `(${event.timezone})` : ""}</div>
        {event.location && <div>{event.location}{event.cityState ? ` — ${event.cityState}` : ""}</div>}
      </div>

      {event.description && (
        <p className="mt-6 text-sm leading-6 text-slate-700">{event.description}</p>
      )}

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={`/api/events/${event.slug}.ics`}
          className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Add to Calendar (.ics)
        </a>

        {event.url && (
          <a
            href={event.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
          >
            Event Website
          </a>
        )}
      </div>
    </main>
  );
}