import BottomCta from "@/components/BottomCta"

const openings = [
  { title: "OSP Fielding / Fiber Engineering Support", type: "Full-Time / Contract", location: "Texas / Remote / Travel", description: "Support telecom and broadband deployment programs through field verification, make-ready coordination, route documentation, and project delivery support." },
  { title: "Wireless / Tower Project Support", type: "Full-Time / Contract", location: "Nationwide / Travel", description: "Assist with tower and wireless infrastructure programs including site documentation, project coordination, construction support, and client-facing delivery." },
]

export default function CareersPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-[#f7fbfb]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">Careers</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">Build telecom infrastructure projects that matter</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Odiscom supports fiber, wireless, tower, and infrastructure delivery programs across the United States.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="space-y-6">
          {openings.map((role) => (
            <div key={role.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold">{role.title}</h3>
              <p className="mt-2 text-sm font-medium text-slate-500">{role.type} • {role.location}</p>
              <p className="mt-4 leading-8 text-slate-600">{role.description}</p>
            </div>
          ))}
        </div>
      </section>

      <BottomCta
        title="Interested in working with Odiscom?"
        description="Even if your role is not listed above, we may be interested in hearing from experienced telecom engineering, fielding, and construction professionals."
        secondaryHref="/projects"
        secondaryLabel="View Projects"
      />
    </main>
  )
}
