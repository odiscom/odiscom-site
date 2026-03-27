export type EventItem = {
  id: string
  title: string
  slug: string
  description: string | null
  short_description: string | null
  category: string
  organizer: string | null
  venue: string | null
  city: string | null
  state: string | null
  country: string | null
  start_date: string
  end_date: string | null
  official_url: string
  source_url: string | null
  image_url: string | null
  is_featured: boolean
  is_active: boolean
  last_verified_at: string | null
  created_at: string
  updated_at: string
}
