import { getSupabaseClient } from "./supabase"
import type { EventItem } from "../types/event"

export async function getFeaturedEvents(): Promise<EventItem[]> {
  try {
    const supabase = getSupabaseClient()
    if (!supabase) return []
    const today = new Date().toISOString().slice(0, 10)
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .eq("is_active", true)
      .eq("is_featured", true)
      .gte("start_date", today)
      .order("start_date", { ascending: true })
      .limit(3)
    if (error) return []
    return (data ?? []) as EventItem[]
  } catch {
    return []
  }
}

export async function getUpcomingEvents(): Promise<EventItem[]> {
  try {
    const supabase = getSupabaseClient()
    if (!supabase) return []
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
    if (error) return []
    return (data ?? []) as EventItem[]
  } catch {
    return []
  }
}

export async function getEventBySlug(slug: string): Promise<EventItem | null> {
  try {
    const supabase = getSupabaseClient()
    if (!supabase) return null
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .eq("slug", slug)
      .eq("is_active", true)
      .maybeSingle()
    if (error) return null
    return (data as EventItem | null) ?? null
  } catch {
    return null
  }
}

export function groupEventsByMonth(events: EventItem[]) {
  return events.reduce<Record<string, EventItem[]>>((acc, event) => {
    const key = new Date(`${event.start_date}T00:00:00Z`).toLocaleString("en-US", {
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    })
    if (!acc[key]) acc[key] = []
    acc[key].push(event)
    return acc
  }, {})
}
