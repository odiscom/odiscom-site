import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

export default async function EventsPage() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { data: events, error } = await supabase
    .from("events")
    .select("*")
    .order("starts_at", { ascending: false })
    .limit(25);

  if (error) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Industry Events</h1>
        <p>Failed to load events.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold">Industry Events</h1>
          <p className="text-sm text-gray-500 mt-1">
            Latest telecom and infrastructure news
          </p>
        </div>

        <Link
          href="/events/calendar"
          className="rounded-lg border px-4 py-2 text-sm font-semibold hover:bg-gray-50"
        >
          View Calendar
        </Link>
      </div>

      <div className="space-y-4">
        {events?.map((event: any) => (
          <div
            key={event.id}
            className="border rounded-lg p-4 hover:shadow-md transition"
          >
            <a
              href={event.description}
              target="_blank"
              rel="noreferrer"
              className="text-xl font-semibold text-blue-600 hover:underline"
            >
              {event.title}
            </a>

            <div className="text-sm text-gray-500 mt-1">
              {new Date(event.starts_at).toLocaleString()}
            </div>

            <div className="text-sm text-gray-400 mt-1">
              {event.category}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}