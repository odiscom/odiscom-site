// app/api/events/[slug].ics/route.ts
import { NextResponse } from "next/server";
import { getEventBySlug } from "@/lib/events-data";

type RouteContext = {
  params: { slug: string };
};

function pad(n: number) {
  return String(n).padStart(2, "0");
}

// ICS wants UTC in YYYYMMDDTHHMMSSZ
function toIcsUtc(dt: Date) {
  return (
    dt.getUTCFullYear() +
    pad(dt.getUTCMonth() + 1) +
    pad(dt.getUTCDate()) +
    "T" +
    pad(dt.getUTCHours()) +
    pad(dt.getUTCMinutes()) +
    pad(dt.getUTCSeconds()) +
    "Z"
  );
}

function escapeIcsText(value: string) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

export async function GET(_req: Request, { params }: RouteContext) {
  const slug = params.slug;

  const event = getEventBySlug(slug);

  if (!event) {
    return NextResponse.json({ error: "Event not found" }, { status: 404 });
  }

  // Expecting your event shape to include:
  // title, description?, location?, url?, start (ISO), end (ISO)
  const start = new Date(event.start);
  const end = new Date(event.end);

  const uid = `${slug}@odiscom.com`;
  const dtstamp = toIcsUtc(new Date());

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//ODISCOM//Industry Calendar//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${dtstamp}`,
    `DTSTART:${toIcsUtc(start)}`,
    `DTEND:${toIcsUtc(end)}`,
    `SUMMARY:${escapeIcsText(event.title)}`,
    event.location ? `LOCATION:${escapeIcsText(event.location)}` : "",
    event.description ? `DESCRIPTION:${escapeIcsText(event.description)}` : "",
    event.url ? `URL:${escapeIcsText(event.url)}` : "",
    "END:VEVENT",
    "END:VCALENDAR",
  ].filter(Boolean);

  const ics = lines.join("\r\n");

  return new NextResponse(ics, {
    status: 200,
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `inline; filename="${slug}.ics"`,
      "Cache-Control": "public, max-age=300",
    },
  });
}