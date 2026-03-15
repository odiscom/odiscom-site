import Link from "next/link"

const serviceGroups = [
  {
    title: "Wireless Engineering",
    intro:
      "Design and engineering support for macro, small cell, and related wireless infrastructure projects.",
    items: [
      "Site design and construction drawings",
      "Equipment layouts and mount details",
      "Structural coordination and drawing support",
      "Permitting and jurisdictional support",
      "Utility coordination and field verification",
    ],
  },
  {
    title: "Fiber Engineering",
    intro:
      "OSP engineering and field-ready documentation supporting metro, middle-mile, and long-haul deployments.",
    items: [
      "Route design and engineered plan sets",
      "Pole loading and make-ready support",
      "Aerial and underground design packages",
      "Fielding and constructability review",
      "Permit packages and utility coordination",
    ],
  },
  {
    title: "Tower & Infrastructure",
    intro:
      "Practical support for tower modifications, telecom upgrades, and infrastructure modernization work.",
    items: [
      "Tower A&E drawing packages",
      "Equipment replacement and upgrade support",
      "Power, grounding, and site coordination",
      "Site walks and conditions validation",
      "Construction documentation support",
    ],
  },
  {
    title: "Construction Services",
    intro:
      "Execution support for telecom construction scopes with a focus on safety, documentation, and delivery.",
    items: [
      "Tower construction and modification support",
      "Fiber construction coordination",
      "Field supervision and vendor coordination",
      "Project mobilization and schedule alignment",
      "Closeout documentation and as-builts",
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="bg-[#f5f7f8] text-slate-900">

      {/* SERVICES GRID */}

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2">

          {serviceGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-[#1f8a84]">
                {group.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-8">
                {group.intro}
              </p>

              <ul className="mt-6 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#1f8a84]" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </section>

      {/* CTA SECTION */}

      <section className="bg-[#1f8a84] text-white">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">

          <h2 className="text-3xl font-bold md:text-4xl">
            Need a telecom engineering or construction partner?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/90">
            Tell us about your market, scope, and timeline. We'll help define
            the right delivery approach for your project.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              href="/contact"
              className="rounded-xl bg-white px-6 py-3 font-semibold text-[#1f8a84] hover:bg-gray-100"
            >
              Contact Odiscom
            </Link>

            <Link
              href="/clients"
              className="rounded-xl border border-white px-6 py-3 font-semibold text-white hover:bg-white/10"
            >
              View Clients
            </Link>

          </div>

        </div>
      </section>

    </main>
  )
}