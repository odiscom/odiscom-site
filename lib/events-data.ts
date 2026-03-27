// lib/events-data.ts
export type EventItem = {
  slug: string;
  title: string;
  startsAt: string; // ISO string
  endsAt: string; // ISO string
  timezone?: string;
  location?: string;
  cityState?: string;
  url?: string;
  description?: string;
  category?: string;
};

export const EVENTS: EventItem[] = [
  {
    slug: "nate-unite-2026",
    title: "NATE UNITE 2026",
    startsAt: "2026-02-23T09:00:00-08:00",
    endsAt: "2026-02-26T17:00:00-08:00",
    location: "Paris Las Vegas",
    cityState: "Las Vegas, NV",
    url: "https://natehome.com/events/calendar/",
    description: "Industry conference and events.",
    category: "Conference",
  },
  // Add your own events here...
];

export function getEventBySlug(slug: string) {
  return EVENTS.find((e) => e.slug === slug);
}