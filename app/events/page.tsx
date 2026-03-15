import Link from "next/link"

const featuredEvents = [
  {
    title: "NATE UNITE",
    date: "February 17–20, 2026",
    location: "Raleigh, NC",
    category: "Wireless / Tower",
    description:
      "Industry event focused on wireless infrastructure, tower services, safety, engineering, and network deployment.",
    href: "#",
  },
  {
    title: "Fiber Connect",
    date: "June 1–4, 2026",
    location: "Nashville, TN",
    category: "Fiber / Broadband",
    description:
      "Major event for fiber broadband, deployment strategy, infrastructure investment, and network delivery.",
    href: "#",
  },
  {
    title: "UTC Telecom & Technology",
    date: "May 18–21, 2026",
    location: "Kansas City, MO",
    category: "Utility / Telecom",
    description:
      "Industry gathering for utility communications, broadband, grid connectivity, and infrastructure modernization.",
    href: "#",
  },
]

const upcomingEvents = [
  {
    month: "January 2026",
    events: [
      {
        title: "Broadband Policy & Deployment Forum",
        date: "Jan 14–15",
        location: "Washington, DC",
        type: "Broadband / Policy",
      },
      {
        title: "Regional Fiber Planning Summit",
        date: "Jan 28",
        location: "Dallas, TX",
        type: "Fiber / OSP",
      },
    ],
  },
  {
    month: "February 2026",
    events: [
      {
        title: "NATE UNITE",
        date: "Feb 17–20",
        location: "Raleigh, NC",
        type: "Tower / Wireless",
      },
      {
        title: "Regional Broadband Deployment Summit",
        date: "Feb 26",
        location: "Dallas, TX",
        type: "Broadband",
      },
    ],
  },
  {
    month: "March 2026",
    events: [
      {
        title: "Telecom Infrastructure Forum",
        date: "Mar 10–12",
        location: "Atlanta, GA",
        type: "Telecom",
      },
      {
        title: "Utility Broadband Workshop",
        date: "Mar 24",
        location: "Virtual",
        type: "Utility / Fiber",
      },
    ],
  },
  {
    month: "April 2026",
    events: [
      {
        title: "Wireless Network Builders Conference",
        date: "Apr 8–10",
        location: "Phoenix, AZ",
        type: "Wireless",
      },
      {
        title: "OSP Engineering Roundtable",
        date: "Apr 22",
        location: "Houston, TX",
        type: "Fiber / OSP",
      },
    ],
  },
  {
    month: "May 2026",
    events: [
      {
        title: "UTC Telecom & Technology",
        date: "May 18–21",
        location: "Kansas City, MO",
        type: "Utility / Telecom",
      },
      {
        title: "Rural Broadband Collaboration Summit",
        date: "May 29",
        location: "Oklahoma City, OK",
        type: "Broadband",
      },
    ],
  },
  {
    month: "June 2026",
    events: [
      {
        title: "Fiber Connect",
        date: "Jun 1–4",
        location: "Nashville, TN",
        type: "Fiber / Broadband",
      },
      {
        title: "Telecom Construction Leadership Forum",
        date: "Jun 18",
        location: "Charlotte, NC",
        type: "Construction / Telecom",
      },
    ],
  },
  {
    month: "July 2026",
    events: [
      {
        title: "Wireless Infrastructure Safety Exchange",
        date: "Jul 15",
        location: "Denver, CO",
        type: "Tower / Safety",
      },
      {
        title: "State Broadband Builders Meetup",
        date: "Jul 29",
        location: "Austin, TX",
        type: "Broadband / Fiber",
      },
    ],
  },
  {
    month: "August 2026",
    events: [
      {
        title: "OSP Fielding & Design Workshop",
        date: "Aug 12–13",
        location: "St. Louis, MO",
        type: "Fiber / OSP",
      },
      {
        title: "Tower Engineering Coordination Forum",
        date: "Aug 27",
        location: "Chicago, IL",
        type: "Tower / Engineering",
      },
    ],
  },
  {
    month: "September 2026",
    events: [
      {
        title: "Telecom Deployment Strategy Conference",
        date: "Sep 9–11",
        location: "Orlando, FL",
        type: "Telecom / Strategy",
      },
      {
        title: "Broadband Expansion & Grants Summit",
        date: "Sep 24",
        location: "Virtual",
        type: "Broadband / Funding",
      },
    ],
  },
  {
    month: "October 2026",
    events: [
      {
        title: "Infrastructure Owners Leadership Roundtable",
        date: "Oct 7",
        location: "Atlanta, GA",
        type: "Infrastructure",
      },
      {
        title: "National Fiber Deployment Forum",
        date: "Oct 21–22",
        location: "Phoenix, AZ",
        type: "Fiber",
      },
    ],
  },
  {
    month: "November 2026",
    events: [
      {
        title: "Telecom Project Delivery Summit",
        date: "Nov 12",
        location: "Dallas, TX",
        type: "Telecom / Delivery",
      },
      {
        title: "Utility Communications Planning Exchange",
        date: "Nov 19",
        location: "Virtual",
        type: "Utility / Telecom",
      },
    ],
  },
  {
    month: "December 2026",
    events: [
      {
        title: "Year-End Telecom Infrastructure Review",
        date: "Dec 10",
        location: "Virtual",
        type: "Industry Review",
      },
      {
        title: "Regional Broadband Leadership Reception",
        date: "Dec 16",
        location: "Houston, TX",
        type: "Broadband / Networking",
      },
    ],
  },
]

export default function EventsPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#f7fbfb]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
              Events
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              Telecom industry events, conferences, and infrastructure calendar
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Follow upcoming telecom, fiber, wireless, tower, and broadband
              events relevant to infrastructure deployment, engineering, and
              field operations.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#1f8a84] px-7 py-4 font-semibold text-white transition hover:bg-[#18716c]"
              >
                Submit an Event
              </Link>

              <a
                href="#upcoming-events"
                className="rounded-full border border-slate-300 px-7 py-4 font-semibold text-slate-900 transition hover:border-[#1f8a84] hover:text-[#1f8a84]"
              >
                View Calendar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED EVENTS */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
            Featured Events
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Major industry events to watch
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {featuredEvents.map((event) => (
            <div
              key={event.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 h-1 w-14 rounded bg-[#1f8a84]" />

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">
                {event.category}
              </p>

              <h3 className="mt-3 text-2xl font-semibold">{event.title}</h3>

              <p className="mt-4 text-sm font-medium text-slate-500">
                {event.date} • {event.location}
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                {event.description}
              </p>

              <a
                href={event.href}
                className="mt-6 inline-block font-semibold text-[#1f8a84] transition hover:text-[#18716c]"
              >
                Event Details →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FULL YEAR CALENDAR */}
      <section id="upcoming-events" className="bg-[#f5f7f8]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
              Upcoming Calendar
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Upcoming telecom and infrastructure events
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              This calendar projects out a full year of industry events relevant
              to telecom engineering, broadband deployment, wireless
              infrastructure, tower work, and utility communications.
            </p>
          </div>

          <div className="space-y-10">
            {upcomingEvents.map((group) => (
              <div key={group.month}>
                <h3 className="mb-5 text-2xl font-semibold">{group.month}</h3>

                <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                  {group.events.map((event, index) => (
                    <div
                      key={`${group.month}-${event.title}`}
                      className={`grid gap-4 px-6 py-5 md:grid-cols-[180px_1fr_220px] md:items-center ${
                        index !== group.events.length - 1
                          ? "border-b border-slate-200"
                          : ""
                      }`}
                    >
                      <div className="font-semibold text-[#1f8a84]">
                        {event.date}
                      </div>

                      <div>
                        <p className="text-lg font-semibold">{event.title}</p>
                        <p className="mt-1 text-slate-600">{event.location}</p>
                      </div>

                      <div className="text-sm font-medium text-slate-500 md:text-right">
                        {event.type}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
            Stay Connected
          </p>

          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Want Odiscom to highlight a telecom industry event?
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We can feature upcoming conferences, trade shows, association
            events, and regional infrastructure gatherings relevant to telecom
            engineering and deployment.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-[#1f8a84] px-7 py-4 font-semibold text-white transition hover:bg-[#18716c]"
            >
              Contact Odiscom
            </Link>

            <Link
              href="/clients"
              className="rounded-full border border-slate-300 px-7 py-4 font-semibold text-slate-900 transition hover:border-[#1f8a84] hover:text-[#1f8a84]"
            >
              View Clients
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}