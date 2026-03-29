import Link from "next/link"

const projects = [
  {
    title: "Fiber Route Development and OSP Design Support",
    category: "Fiber Infrastructure",
    description:
      "Support for route planning, field verification, utility coordination, and construction-ready documentation across active fiber deployment programs.",
  },
  {
    title: "Wireless Site Upgrades and Tower Program Delivery",
    category: "Wireless / Tower",
    description:
      "Coordinated support for site documentation, A&E workflows, upgrade planning, and delivery execution across multi-site wireless programs.",
  },
  {
    title: "Construction Delivery Coordination for Telecom Infrastructure",
    category: "Construction Support",
    description:
      "Execution-focused coordination, field support, vendor communication, and documentation flow from kickoff through closeout.",
  },
]

export default function ProjectsPreview() {
  return (
    <section className="bg-[#f7fbfb] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">
              Project Experience
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
              Experience aligned with telecom infrastructure delivery
            </h2>
          </div>

          <div className="lg:pl-8">
            <p className="text-lg leading-8 text-slate-600">
              Odiscom supports telecom infrastructure projects with practical,
              field-aware execution across fiber, wireless, and construction
              delivery environments.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">
                {project.category}
              </p>

              <h3 className="mt-4 text-2xl font-semibold leading-snug text-slate-900">
                {project.title}
              </h3>

              <p className="mt-5 flex-1 leading-8 text-slate-600">
                {project.description}
              </p>

              <div className="mt-8">
                <Link
                  href="/projects"
                  className="inline-flex items-center text-sm font-semibold tracking-wide text-[#1f8a84]"
                >
                  View projects
                  <span className="ml-2 transition group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}