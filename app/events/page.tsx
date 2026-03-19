import Link from "next/link";
import { EVENTS } from "@/lib/events-data";

export const metadata = {
  title: "Events | ODISCOM",
  description:
    "Industry events, conferences, and telecom gatherings Odiscom is tracking across fiber, tower, and infrastructure.",
};

function formatDateRange(startsAt: string, endsAt: string) {
  const start = new Date(startsAt);
  const end = new Date(endsAt);

  const sameDay = start.toDateString() === end.toDateString();

  if (sameDay) {
    return start.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  return `${start.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })} – ${end.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })}`;
}

export default function EventsPage() {
  return (
    <main className="bg-white">
      <section className="bg-[#238f8a] py-24 text-white">
        <div className="section-shell">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Industry Events & Gatherings
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90 md:text-xl">
              Odiscom tracks conferences, summits, and telecom infrastructure events
              that matter across fiber, tower, engineering, and construction.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn btn-secondary btn-lg">
                Contact Odiscom
              </Link>
              <Link href="/clients" className="btn btn-primary btn-lg">
                View Clients
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-20">
        <div className="section-shell">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[#0f3f3b] md:text-4xl">
              Current Industry Calendar
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              A curated list of events relevant to telecom infrastructure,
              broadband expansion, engineering, permitting, field operations,
              and construction delivery.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {EVENTS.map((event) => (
              <article
                key={event.slug}
                className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="mb-4">
                  <div className="inline-flex rounded-full bg-[#1f8a84]/10 px-3 py-1 text-sm font-semibold text-[#166e68]">
                    {event.category}
                  </div>
                </div>

                <h3 className="text-2xl font-bold leading-tight text-[#0f3f3b]">
                  {event.title}
                </h3>

                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Date
                </p>
                <p className="mt-1 text-base text-slate-700">
                  {formatDateRange(event.startsAt, event.endsAt)}
                </p>

                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Location
                </p>
                <p className="mt-1 text-base text-slate-700">
                  {[event.location, event.cityState].filter(Boolean).join(" — ")}
                </p>

                {event.description ? (
                  <p className="mt-5 line-clamp-4 text-base leading-7 text-slate-600">
                    {event.description}
                  </p>
                ) : null}

                <div className="mt-8 flex flex-wrap gap-3">
                  {event.url ? (
                    <a
                      href={event.url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      Visit Event
                    </a>
                  ) : null}

                  <a
                    href={`/api/events/${event.slug}.ics`}
                    className="btn btn-secondary btn-sm"
                  >
                    Add to Calendar
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#238f8a] py-20 text-white">
        <div className="section-shell">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Want Odiscom to highlight an event or industry gathering?
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90">
              We are building this calendar to become a stronger resource for the
              telecom infrastructure community.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn btn-secondary btn-lg">
                Contact Odiscom
              </Link>
              <Link href="/clients" className="btn btn-primary btn-lg">
                View Clients
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}