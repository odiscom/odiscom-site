import Image from "next/image"
import BottomCta from "@/components/BottomCta"

const projectCards = [
  { title: "Fiber Route Engineering Support", market: "Broadband Infrastructure", scope: "Route development, field verification, utility coordination, make-ready support, and construction-aligned documentation for fiber deployment programs." },
  { title: "Tower Upgrade Program Support", market: "Wireless Infrastructure", scope: "Project coordination, site documentation, upgrade planning support, and delivery assistance for carrier and tower-related infrastructure work." },
  { title: "Telecom Construction Coordination", market: "Program Delivery", scope: "Construction-minded planning, vendor coordination, and field support designed to help keep schedules moving and documentation aligned." },
]

export default function ProjectsPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative h-[430px] w-full overflow-hidden">
        <Image src="/images/Towers/South_Tower.jpg" alt="Telecom infrastructure projects" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f3f3b]/85 via-[#0f3f3b]/70 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <p className="mb-4 text-sm tracking-[0.2em] text-white/80">PROJECTS • DELIVERY • INFRASTRUCTURE SUPPORT</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">Projects built around real telecom infrastructure needs</h1>
            <p className="mt-4 text-lg leading-8 text-white/90">
              Odiscom supports fiber, tower, wireless, and telecom delivery programs with practical execution, responsive coordination, and field-aware project support.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbfb]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">Representative Work</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Typical project support areas</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projectCards.map((project) => (
              <div key={project.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1f8a84]">{project.market}</p>
                <h3 className="mt-4 text-2xl font-semibold">{project.title}</h3>
                <p className="mt-4 leading-8 text-slate-600">{project.scope}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BottomCta
        title="Want to discuss a project or active program?"
        description="Odiscom supports clients with practical engineering, responsive coordination, and infrastructure delivery support across fiber, tower, and telecom programs."
        secondaryHref="/clients"
        secondaryLabel="View Clients"
      />
    </main>
  )
}
