import Image from "next/image"
import Link from "next/link"

const featuredProjects = [
  {
    title: "Regional Fiber Expansion Program",
    category: "Fiber Engineering",
    location: "Texas Gulf Coast",
    description:
      "Engineering support for route development, constructability review, utility coordination, and deployment documentation supporting regional fiber expansion.",
    deliverables: [
      "OSP route design",
      "Permit and utility coordination",
      "Fielding support",
      "Construction-ready plan sets",
    ],
  },
  {
    title: "Carrier Tower Modification Package",
    category: "Wireless Infrastructure",
    location: "Northeast U.S.",
    description:
      "A&E and documentation support for equipment upgrades, site modifications, and coordinated drawing packages for active wireless infrastructure sites.",
    deliverables: [
      "Site documentation",
      "Equipment layout updates",
      "Construction drawing support",
      "Field coordination",
    ],
  },
]

const projectCards = [
  {
    title: "Middle-Mile Fiber Design Support",
    type: "Fiber",
    region: "Southeast U.S.",
    text: "Route development, field review, and plan production supporting backbone and middle-mile network deployment.",
  },
  {
    title: "Utility Pole Mapping & Data Collection",
    type: "Field Services",
    region: "Texas",
    text: "High-accuracy pole inventory, field verification, and mapping support for utility and broadband planning programs.",
  },
  {
    title: "Wireless Site Upgrade Coordination",
    type: "Towers",
    region: "Multiple Markets",
    text: "Documentation, coordination, and execution support for wireless upgrade and modification programs.",
  },
  {
    title: "Aerial and Underground Fiber Packages",
    type: "Fiber",
    region: "Southern U.S.",
    text: "Engineering packages prepared for mixed aerial and underground conditions with practical constructability support.",
  },
  {
    title: "Telecom Construction Support Program",
    type: "Construction",
    region: "Nationwide",
    text: "Project support focused on mobilization, field coordination, documentation, and delivery alignment.",
  },
  {
    title: "Infrastructure Modernization Support",
    type: "Infrastructure",
    region: "Rural Markets",
    text: "Planning and documentation support for telecom infrastructure upgrades in developing and underserved areas.",
  },
]

export default function ProjectsPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative h-[560px] w-full overflow-hidden">
        <Image
          src="/images/Towers/South_Tower.jpg"
          alt="Telecom tower infrastructure project"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/85">
              Projects
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              Selected telecom infrastructure projects and delivery experience
            </h1>

            <p className="mt-6 text-lg leading-8 text-white/90">
              Odiscom supports fiber, tower, and telecommunications
              infrastructure programs with practical engineering, coordinated
              documentation, and field-aware delivery.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-[#1f8a84] px-7 py-4 font-semibold text-white transition hover:bg-[#18716c]"
            >
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
              Portfolio Approach
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Real-world project experience across fiber, tower, and field delivery
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our project work reflects the kinds of infrastructure challenges
              clients face in active deployment environments: multi-party
              coordination, field conditions, evolving scope, and the need for
              dependable documentation.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
            Featured Projects
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Representative infrastructure work
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#e8f5f3] px-4 py-2 text-sm font-semibold text-[#1f8a84]">
                  {project.category}
                </span>
                <span className="text-sm font-medium text-slate-500">
                  {project.location}
                </span>
              </div>

              <h3 className="text-2xl font-semibold">{project.title}</h3>

              <p className="mt-4 text-slate-600 leading-8">
                {project.description}
              </p>

              <div className="mt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Deliverables
                </p>

                <ul className="mt-4 space-y-3">
                  {project.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#1f8a84]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="bg-[#f5f7f8]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
              Additional Experience
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Additional project types and deployment support
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projectCards.map((project) => (
              <div
                key={project.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 h-1 w-14 rounded bg-[#1f8a84]" />

                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="font-semibold text-[#1f8a84]">
                    {project.type}
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-500">{project.region}</span>
                </div>

                <h3 className="mt-4 text-2xl font-semibold">{project.title}</h3>

                <p className="mt-4 text-slate-600 leading-8">{project.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
            Start the conversation
          </p>

          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Need a team that understands telecom project delivery?
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Tell us about your market, infrastructure type, and timeline. We’ll
            help determine the right engineering or construction support model.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-[#1f8a84] px-7 py-4 font-semibold text-white transition hover:bg-[#18716c]"
            >
              Contact Odiscom
            </Link>

            <Link
              href="/services"
              className="rounded-full border border-slate-300 px-7 py-4 font-semibold text-slate-900 transition hover:border-[#1f8a84] hover:text-[#1f8a84]"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}