// app/api/events/[slug].ics/route.ts
import { NextResponse } from "next/server";
import { getEventBySlug } from "@/lib/events-data";

function escapeICSText(input: string) {
  // Basic escaping per iCalendar text rules
  return input
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

function toICSDate(iso: string) {
  // If you pass an ISO with timezone offset, Date() normalizes to UTC.
  // ICS format: YYYYMMDDTHHMMSSZ (UTC)
  const d = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    d.getUTCFullYear() +
    pad(d.getUTCMonth() + 1) +
    pad(d.getUTCDate()) +
    "T" +
    pad(d.getUTCHours()) +
    pad(d.getUTCMinutes()) +
    pad(d.getUTCSeconds()) +
    "Z"
  );
}

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params?.slug;
  const event = slug ? getEventBySlug(slug) : undefined;

  if (!event) {
    return NextResponse.json({ error: "Event not found" }, { status: 404 });
  }

  const uid = `${event.slug}@odiscom.com`;
  const dtstamp = toICSDate(new Date().toISOString());
  const dtstart = toICSDate(event.startsAt);
  const dtend = toICSDate(event.endsAt);

  const summary = escapeICSText(event.title);
  const description = escapeICSText(event.description || "");
  const locationParts = [event.location, event.cityState].filter(Boolean);
  const location = escapeICSText(locationParts.join(" — "));

  const url = event.url ? `\nURL:${escapeICSText(event.url)}` : "";

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Odiscom//Industry Calendar//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${dtstamp}`,
    `DTSTART:${dtstart}`,
    `DTEND:${dtend}`,
    `SUMMARY:${summary}`,
    description ? `DESCRIPTION:${description}` : "",
    location ? `LOCATION:${location}` : "",
    url.trim(),
    "END:VEVENT",
    "END:VCALENDAR",
  ]
    .filter(Boolean)
    .join("\r\n");

  return new NextResponse(ics, {
    status: 200,
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `inline; filename="${event.slug}.ics"`,
      "Cache-Control": "public, max-age=300",
    },
  });
}