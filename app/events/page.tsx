async function getEvents() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/events`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch events");
  }

  return res.json();
}

export default async function EventsPage() {
  const { data } = await getEvents();

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Industry Events</h1>

      <div className="space-y-4">
        {data?.map((event: any) => (
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