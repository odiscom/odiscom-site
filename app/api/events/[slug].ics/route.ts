// app/api/events/[slug].ics/route.ts
import { getEventBySlug } from "@/lib/events";

function toICSDate(dt: string) {
  // Convert to UTC-ish ICS format: YYYYMMDDTHHMMSSZ
  const d = new Date(dt);
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

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  const e = getEventBySlug(params.slug);
  if (!e) return new Response("Not found", { status: 404 });

  const uid = `${e.slug}@odiscom.com`;
  const dtStart = toICSDate(e.startsAt);
  const dtEnd = toICSDate(e.endsAt);

  const ics =
`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Odiscom//Events//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${uid}
DTSTAMP:${toICSDate(new Date().toISOString())}
DTSTART:${dtStart}
DTEND:${dtEnd}
SUMMARY:${e.title}
LOCATION:${(e.location ?? "")}${e.cityState ? `, ${e.cityState}` : ""}
DESCRIPTION:${(e.description ?? "").replace(/\n/g, "\\n")}
END:VEVENT
END:VCALENDAR`;

  return new Response(ics, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `attachment; filename="${e.slug}.ics"`,
    },
  });
}