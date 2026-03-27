import { notFound } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { data: event, error } = await supabase
    .from("events")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !event) notFound();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-sm text-gray-500 mb-2">{event.category}</div>

      <h1 className="text-3xl font-bold mb-4">{event.title}</h1>

      <div className="text-sm text-gray-500 mb-6">
        {new Date(event.starts_at).toLocaleString()}
      </div>

      <a
        href={event.description}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 hover:underline"
      >
        Read original article
      </a>
    </div>
  );
}