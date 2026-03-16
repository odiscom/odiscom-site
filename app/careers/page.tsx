import Link from "next/link"

const openings = [
  {
    title: "OSP Fielding / Fiber Engineering Support",
    type: "Full-Time / Contract",
    location: "Texas / Remote / Travel",
    description:
      "Support telecom and broadband deployment programs through field verification, make-ready coordination, route documentation, and project delivery support.",
  },
  {
    title: "Wireless / Tower Project Support",
    type: "Full-Time / Contract",
    location: "Nationwide / Travel",
    description:
      "Assist with tower and wireless infrastructure programs including site documentation, project coordination, construction support, and client-facing delivery.",
  },
  {
    title: "Construction Operations Support",
    type: "Full-Time",
    location: "Texas / Southeast / Travel",
    description:
      "Help coordinate telecom construction workstreams, field execution, scheduling, vendor communication, and closeout support across fiber and tower programs.",
  },
]

export default function CareersPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-[#f7fbfb]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
              Careers
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              Build telecom infrastructure projects that matter
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Odiscom supports fiber, wireless, tower, and infrastructure
              delivery programs across the United States. We are building a team
              focused on practical execution, dependable communication, and
              real-world project support.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:owners@odiscom.com?subject=Odiscom Careers Inquiry"
                className="rounded-full bg-[#1f8a84] px-7 py-4 font-semibold text-white transition hover:bg-[#18716c]"
              >
                Send Resume
              </a>

              <Link
                href="/contact"
                className="rounded-full border border-slate-300 px-7 py-4 font-semibold text-slate-900 transition hover:border-[#1f8a84] hover:text-[#1f8a84]"
              >
                Contact Odiscom
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
            Why Odiscom
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            A practical team for real infrastructure work
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We value responsiveness, technical professionalism, and the ability
            to help move projects from planning through execution.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1f8a84]">
              Real projects
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Fiber, tower, and telecom infrastructure
            </h3>
            <p className="mt-4 leading-8 text-slate-600">
              Work that directly supports broadband deployment, wireless
              infrastructure, and construction-minded project delivery.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1f8a84]">
              Growth
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Build with a growing company
            </h3>
            <p className="mt-4 leading-8 text-slate-600">
              Help shape process, delivery quality, and long-term client
              relationships as Odiscom expands its engineering and construction
              capabilities.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1f8a84]">
              Execution
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Practical, responsive, accountable
            </h3>
            <p className="mt-4 leading-8 text-slate-600">
              We are looking for people who can communicate clearly, solve
              problems, and support projects with a field-ready mindset.
            </p>
          </div>
        </div>
      </section>

      {/* OPENINGS */}
      <section className="bg-[#f5f7f8]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
              Open Roles
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Current opportunities
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              These roles reflect the type of talent we are building around as
              projects and contract flow continue to grow.
            </p>
          </div>

          <div className="space-y-6">
            {openings.map((role) => (
              <div
                key={role.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-3xl">
                    <h3 className="text-2xl font-semibold">{role.title}</h3>
                    <p className="mt-2 text-sm font-medium text-slate-500">
                      {role.type} • {role.location}
                    </p>
                    <p className="mt-4 leading-8 text-slate-600">
                      {role.description}
                    </p>
                  </div>

                  <div className="shrink-0">
                    <a
                      href={`mailto:owners@odiscom.com?subject=Application - ${encodeURIComponent(
                        role.title
                      )}`}
                      className="inline-block rounded-full bg-[#1f8a84] px-6 py-3 font-semibold text-white transition hover:bg-[#18716c]"
                    >
                      Apply
                    </a>
                  </div>
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
            Interested in working with us?
          </p>

          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Send your resume and introduction
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Even if your role is not listed above, we may be interested in
            hearing from experienced telecom engineering, fielding, and
            construction professionals.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:owners@odiscom.com?subject=General Careers Inquiry"
              className="rounded-full bg-[#1f8a84] px-7 py-4 font-semibold text-white transition hover:bg-[#18716c]"
            >
              Email Odiscom
            </a>

            <Link
              href="/projects"
              className="rounded-full border border-slate-300 px-7 py-4 font-semibold text-slate-900 transition hover:border-[#1f8a84] hover:text-[#1f8a84]"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}