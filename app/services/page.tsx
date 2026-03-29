import ClientLogos from "@/components/ClientLogos"
import ProjectsPreview from "@/components/ProjectsPreview"
import Image from "next/image"
import Link from "next/link"
import BottomCta from "@/components/BottomCta"

const serviceCards = [
  {
    title: "OSP / Fiber Engineering",
    description:
      "Route development, field verification, make-ready support, utility coordination, and plan production aligned with deployment needs.",
    href: "/services/fiber",
  },
  {
    title: "Wireless / Tower Program Support",
    description:
      "Site documentation, A&E coordination, upgrade planning, and project delivery support for carrier and infrastructure programs.",
    href: "/services/wireless",
  },
  {
    title: "Construction Delivery Coordination",
    description:
      "Construction-minded documentation, vendor coordination, field support, and execution planning from kickoff through closeout.",
    href: "/services/construction",
  },
]

export default function ServicesPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-[#f7fbfb]">
        <div className="mx-auto grid max-w-7xl overflow-hidden lg:min-h-[620px] lg:grid-cols-2">
          <div className="flex items-center px-6 py-20 lg:px-8 lg:py-28">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
                Services
              </p>

              <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                Telecom engineering
                <br className="hidden md:block" />
                & infrastructure delivery
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Odiscom supports fiber, wireless, tower, and telecommunications
                infrastructure programs with practical design, coordinated
                delivery, and construction-minded execution.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-[#1f8a84] px-7 py-4 font-semibold text-white transition hover:bg-[#18716c]"
                >
                  Request Proposal
                </Link>

                <Link
                  href="/projects"
                  className="rounded-full border border-slate-300 bg-white px-7 py-4 font-semibold text-[#1f8a84] transition hover:bg-[#f0f7f7]"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </div>

          <div className="relative min-h-[320px] lg:min-h-full">
            <Image
              src="/images/Fiber/trenching_pic.jpg"
              alt="Fiber trenching and infrastructure work"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1f8a84]/25" />
          </div>
        </div>
      </section>

      <ClientLogos />

      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">
            What we do
          </p>

          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            Practical support for fiber, tower, and telecom infrastructure projects
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We help clients move telecom projects from field conditions and design
            requirements into coordinated, buildable execution.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {serviceCards.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#1f8a84]/30 hover:shadow-xl"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-[#1f8a84]" />
                <div className="h-px flex-1 bg-slate-200 transition group-hover:bg-[#1f8a84]/30" />
              </div>

              <h3 className="text-2xl font-semibold leading-snug text-slate-900">
                {service.title}
              </h3>

              <p className="mt-4 flex-1 leading-8 text-slate-600">
                {service.description}
              </p>

              <div className="mt-8">
                <span className="inline-flex items-center text-sm font-semibold tracking-wide text-[#1f8a84]">
                  Learn more
                  <span className="ml-2 transition group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <ProjectsPreview />

      <BottomCta
        title="Need support on a fiber, tower, or telecom infrastructure project?"
        description="Tell us what you're building, where you need support, and how quickly you need to move."
      />
    </main>
  )
}