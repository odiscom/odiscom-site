import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

const SOURCE_LABELS = {
  nate: "NATE",
  wia: "WIA",
  fiberconnect: "Fiber Connect",
  other: "Other",
};

function formatDateRange(start: string, end?: string | null) {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : null;

  const startText = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(startDate);

  if (!endDate) return startText;

  const endText = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(endDate);

  return startText === endText ? startText : `${startText} – ${endText}`;
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 md:px-6 lg:px-8">
      <Link
        href="/events"
        className="inline-flex items-center rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
      >
        ← Back to events
      </Link>

      <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-4">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
            {SOURCE_LABELS[data.source as keyof typeof SOURCE_LABELS] || "Other"}
          </span>
        </div>

        <h1 className="text-3xl font-semibold text-slate-900">{data.title}</h1>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Date
            </div>
            <div className="mt-1 text-slate-900">
              {formatDateRange(data.starts_at, data.ends_at)}
            </div>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Location
            </div>
            <div className="mt-1 text-slate-900">
              {data.location || "Not listed"}
            </div>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Organizer
            </div>
            <div className="mt-1 text-slate-900">
              {data.organizer || "Not listed"}
            </div>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Source Link
            </div>
            <div className="mt-1">
              <a
                href={data.url}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-emerald-700 hover:text-emerald-800"
              >
                Open event website
              </a>
            </div>
          </div>
        </div>

        {data.description ? (
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-slate-900">About this event</h2>
            <p className="mt-3 whitespace-pre-line text-slate-700">
              {data.description}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}