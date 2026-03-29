import Image from "next/image"
import Link from "next/link"
import BottomCta from "@/components/BottomCta"

const featuredProjects = [
  {
    title: "Fiber Route Development and OSP Design Support",
    category: "Fiber Infrastructure",
    description:
      "Support for route planning, field verification, utility coordination, and construction-ready documentation across active fiber deployment programs.",
    image: "/images/Fiber/trenching_pic.jpg",
    bullets: [
      "Route development and field verification",
      "Utility coordination support",
      "Construction-ready documentation",
    ],
  },
  {
    title: "Wireless Site Upgrades and Tower Program Delivery",
    category: "Wireless / Tower",
    description:
      "Coordinated support for site documentation, A&E workflows, upgrade planning, and delivery execution across multi-site wireless programs.",
    image: "/images/tower/tower-crew.jpg",
    bullets: [
      "Site documentation and upgrade support",
      "A&E coordination workflows",
      "Program delivery across multiple sites",
    ],
  },
  {
    title: "Construction Delivery Coordination for Telecom Infrastructure",
    category: "Construction Support",
    description:
      "Execution-focused coordination, field support, vendor communication, and documentation flow from kickoff through closeout.",
    image: "/images/construction/construction-crew.jpg",
    bullets: [
      "Execution planning and field coordination",
      "Documentation flow and issue tracking",
      "Closeout support and turnover readiness",
    ],
  },
]

const capabilityStats = [
  { value: "Fiber", label: "OSP support and route development" },
  { value: "Wireless", label: "Tower and site delivery support" },
  { value: "Field", label: "Constructability-driven execution" },
  { value: "Closeout", label: "Documentation and turnover support" },
]

export default function ProjectsPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-[#f7fbfb]">
        <div className="mx-auto grid max-w-7xl overflow-hidden lg:min-h-[620px] lg:grid-cols-2">
          <div className="flex items-center px-6 py-20 lg:px-8 lg:py-28">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
                Projects
              </p>

              <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                Experience aligned
                <br className="hidden md:block" />
                with telecom delivery
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Odiscom supports telecom infrastructure projects with practical,
                field-aware execution across fiber, wireless, tower, and
                construction delivery environments.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-[#1f8a84] px-7 py-4 font-semibold text-white transition hover:bg-[#18716c]"
                >
                  Request Proposal
                </Link>

                <Link
                  href="/services"
                  className="rounded-full border border-slate-300 bg-white px-7 py-4 font-semibold text-[#1f8a84] transition hover:bg-[#f0f7f7]"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>

          <div className="relative min-h-[320px] lg:min-h-full">
            <Image
              src="/images/Fiber/trenching_pic.jpg"
              alt="Telecom infrastructure field work"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1f8a84]/25" />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {capabilityStats.map((stat) => (
              <div
                key={stat.value}
                className="rounded-[1.5rem] border border-slate-200 bg-[#f7fbfb] p-6"
              >
                <p className="text-2xl font-semibold tracking-tight text-slate-900">
                  {stat.value}
                </p>
                <p className="mt-2 leading-7 text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">
              Representative Experience
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Practical support across fiber, tower, and infrastructure delivery
            </h2>
          </div>

          <div className="lg:pl-8">
            <p className="text-lg leading-8 text-slate-600">
              Our project experience is centered on helping telecom programs move
              from field conditions and engineering requirements into coordinated,
              buildable, and execution-ready delivery.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT CARDS */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid gap-8">
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
            >
              <div className="grid lg:grid-cols-[1.05fr_.95fr]">
                <div className="relative min-h-[280px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex items-center p-8 lg:p-10">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">
                      {project.category}
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold leading-snug tracking-tight text-slate-900 md:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-5 leading-8 text-slate-600">
                      {project.description}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {project.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#1f8a84]" />
                          <span className="text-slate-700">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-[#f7fbfb] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">
              How we support projects
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
              Grounded in field conditions and delivery realities
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Odiscom brings a practical delivery mindset to telecom
              infrastructure programs, with support shaped around what teams need
              in the field, not just what looks good on paper.
            </p>
            <p>
              Our work helps bridge the gap between engineering, field
              verification, coordination, and execution so clients can move
              projects forward with greater clarity and fewer avoidable delays.
            </p>
          </div>
        </div>
      </section>

      <BottomCta
        title="Need support on an active telecom project?"
        description="Tell us about your program, your delivery timeline, and where you need practical engineering or field support."
      />
    </main>
  )
}