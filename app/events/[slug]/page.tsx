"use client";
// app/events/[slug]/page.tsx
import Link from "next/link";
import { getEventBySlug, formatTimeRange } from "@/lib/events";

export default function Page({ params }: { params: { slug: string } }) {
  const event = getEventBySlug(params.slug);

  if (!event) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-2xl font-bold text-slate-900">Event not found</h1>
        <Link
          href="/events/calendar"
          className="mt-4 inline-block text-sm font-semibold text-slate-900 hover:underline"
        >
          ← Back to calendar
        </Link>
      </main>
    );
  }

  const dateFmt = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const start = new Date(event.startsAt);
  const icsHref = `/api/events/${event.slug}.ics`;

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Link
        href="/events/calendar"
        className="text-sm font-semibold text-slate-900 hover:underline"
      >
        ← Back to calendar
      </Link>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
        {event.title}
      </h1>

      <div className="mt-3 space-y-1 text-sm text-slate-600">
        <div>{dateFmt.format(start)}</div>
        <div>
          {formatTimeRange(event.startsAt, event.endsAt)}{" "}
          {event.timezone ? `(${event.timezone})` : ""}
        </div>
        {event.location && (
          <div>
            {event.location}
            {event.cityState ? ` — ${event.cityState}` : ""}
          </div>
        )}
      </div>

      {event.description && (
        <p className="mt-6 text-sm leading-6 text-slate-700">
          {event.description}
        </p>
      )}

      {/* Highlight actions */}
      <section className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
        <div className="flex flex-wrap items-center gap-3">
          {/* Use Link so Next handles this route cleanly */}
          <Link
            href={icsHref}
            className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Add to Calendar (.ics)
          </Link>

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

          {/* Copy ICS link */}
          <button
            type="button"
            onClick={async () => {
              try {
                const fullUrl = `${window.location.origin}${icsHref}`;
                await navigator.clipboard.writeText(fullUrl);
                // tiny, no-library feedback
                const el = document.getElementById("copy-ics-status");
                if (el) {
                  el.textContent = "Copied!";
                  setTimeout(() => (el.textContent = ""), 1200);
                }
              } catch {
                const el = document.getElementById("copy-ics-status");
                if (el) {
                  el.textContent = "Copy failed";
                  setTimeout(() => (el.textContent = ""), 1200);
                }
              }
            }}
            className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
          >
            Copy .ics Link
          </button>

          <span
            id="copy-ics-status"
            className="text-xs font-medium text-slate-600"
            aria-live="polite"
          />
        </div>

        <p className="mt-3 text-xs text-slate-600">
          Tip: On iPhone/Outlook, if the calendar doesn’t auto-add, download the
          file and open it to import.
        </p>
      </section>
    </main>
  );
}