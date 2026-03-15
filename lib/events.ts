import { supabase } from "@/lib/supabase"
import type { EventItem } from "@/types/event"

export async function getFeaturedEvents(): Promise<EventItem[]> {
  const today = new Date().toISOString().slice(0, 10)

  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("is_active", true)
    .eq("is_featured", true)
    .gte("start_date", today)
    .order("start_date", { ascending: true })
    .limit(3)

  if (error) {
    throw new Error(`Failed to fetch featured events: ${error.message}`)
  }

  return (data ?? []) as EventItem[]
}

export async function getUpcomingEvents(): Promise<EventItem[]> {
  const start = new Date()
  const end = new Date()
  end.setFullYear(end.getFullYear() + 1)

  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("is_active", true)
    .gte("start_date", start.toISOString().slice(0, 10))
    .lte("start_date", end.toISOString().slice(0, 10))
    .order("start_date", { ascending: true })

  if (error) {
    throw new Error(`Failed to fetch upcoming events: ${error.message}`)
  }

  return (data ?? []) as EventItem[]
}

export async function getEventBySlug(slug: string): Promise<EventItem | null> {
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("slug", slug)
    .eq("is_active", true)
    .maybeSingle()

  if (error) {
    throw new Error(`Failed to fetch event by slug: ${error.message}`)
  }

  return (data as EventItem | null) ?? null
}

export function groupEventsByMonth(events: EventItem[]) {
  return events.reduce<Record<string, EventItem[]>>((acc, event) => {
    const key = new Date(`${event.start_date}T00:00:00Z`).toLocaleString(
      "en-US",
      {
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      }
    )

    if (!acc[key]) acc[key] = []
    acc[key].push(event)
    return acc
  }, {})
}