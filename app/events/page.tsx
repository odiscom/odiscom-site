import Link from "next/link";
import { unstable_noStore as noStore } from "next/cache";
import { getSupabaseClient } from "@/lib/supabase";

export const metadata = {
  title: "Events | ODISCOM",
  description:
    "Industry events, conferences, and telecom gatherings Odiscom is tracking across fiber, tower, and infrastructure.",
};

type SupabaseEvent = {
  id: string;
  slug: string;
  title: string;
  category: string | null;
  description: string | null;
  starts_at: string | null;
  ends_at: string | null;
  venue_name: string | null;
  city: string | null;
  state: string | null;
  external_url: string | null;
  status: string | null;
  featured: boolean | null;
};

function formatDateRange(startsAt: string | null, endsAt: string | null) {
  if (!startsAt) return "Date TBD";

  const start = new Date(startsAt);
  const end = endsAt ? new Date(endsAt) : null;

  if (!end || start.toDateString() === end.toDateString()) {
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

async function getPublishedEvents(): Promise<SupabaseEvent[]> {
  const supabase = getSupabaseClient();

  if (!supabase) {
    console.error("Supabase client not initialized");
    return [];
  }

  const { data, error } = await supabase
    .from("events")
    .select(
      "id, slug, title, category, description, starts_at, ends_at, venue_name, city, state, external_url, status, featured"
    )
    .eq("status", "published")
    .order("featured", { ascending: false })
    .order("starts_at", { ascending: true });

  if (error) {
    console.error("Supabase events fetch failed:", error.message);
    return [];
  }

  return data ?? [];
}

export default async function EventsPage() {
  noStore();

  const events = await getPublishedEvents();

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="bg-[#edf8f7] py-24">
        <div className="section-shell">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold leading-tight text-[#0f3f3b] md:text-6xl">
              Industry Events & Gatherings
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600 md:text-xl">
              Odiscom tracks conferences, summits, and telecom infrastructure events
              that matter across fiber, tower, engineering, and construction.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn btn-lg">
                Contact Odiscom
              </Link>
              <Link href="/clients" className="btn btn-lg">
                View Clients
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
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

          {events.length === 0 ? (
            <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
              <h3 className="text-2xl font-bold text-[#0f3f3b]">
                No published events yet
              </h3>
              <p className="mt-4 text-slate-600">
                Events will appear here as they are added and published.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {events.map((event) => (
                <article
                  key={event.id}
                  className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  {event.category && (
                    <div className="mb-4">
                      <div className="inline-flex rounded-full bg-[#1f8a84]/10 px-3 py-1 text-sm font-semibold text-[#166e68]">
                        {event.category}
                      </div>
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-[#0f3f3b]">
                    {event.title}
                  </h3>

                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Date
                  </p>
                  <p className="mt-1 text-base text-slate-700">
                    {formatDateRange(event.starts_at, event.ends_at)}
                  </p>

                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Location
                  </p>
                  <p className="mt-1 text-base text-slate-700">
                    {[event.venue_name, event.city, event.state]
                      .filter(Boolean)
                      .join(" — ") || "Location TBD"}
                  </p>

                  {event.description && (
                    <p className="mt-5 line-clamp-4 text-base text-slate-600">
                      {event.description}
                    </p>
                  )}

                  <div className="mt-8 flex flex-wrap gap-3">
                    {event.external_url && (
                      <a
                        href={event.external_url}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-sm"
                      >
                        Visit Event
                      </a>
                    )}

                    <a
                      href={`/api/events/${event.slug}.ics`}
                      className="btn btn-sm"
                    >
                      Add to Calendar
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}