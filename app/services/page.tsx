import Image from "next/image"
import Link from "next/link"
import BottomCta from "@/components/BottomCta"

const serviceCards = [
  {
    title: "OSP / Fiber Engineering",
    description:
      "Route development, field verification, make-ready support, utility coordination, and plan production aligned with deployment needs.",
  },
  {
    title: "Wireless / Tower Support",
    description:
      "Site documentation, A&E coordination, upgrade planning, and project delivery support for carrier and infrastructure programs.",
  },
  {
    title: "Construction Delivery Support",
    description:
      "Construction-minded documentation, vendor coordination, field support, and execution planning from kickoff through closeout.",
  },
]

export default function ServicesPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#f7fbfb]">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
          <Image src="/images/Fiber/trenching_pic.jpg" alt="Fiber trenching and infrastructure work" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-[#1f8a84]/25" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-4xl lg:max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">Services</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              Telecom engineering and infrastructure delivery support
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Odiscom supports fiber, wireless, tower, and telecommunications infrastructure programs with practical design, coordinated delivery, and construction-minded execution.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="rounded-full bg-[#1f8a84] px-7 py-4 font-semibold text-white transition hover:bg-[#18716c]">Request Proposal</Link>
              <Link href="/projects" className="rounded-full border border-slate-300 px-7 py-4 font-semibold text-slate-900 transition hover:border-[#1f8a84] hover:text-[#1f8a84]">View Projects</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">What we do</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
            Practical support for fiber, tower, and telecom infrastructure projects
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {serviceCards.map((service) => (
            <div key={service.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 h-1 w-14 rounded bg-[#1f8a84]" />
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="mt-4 leading-8 text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <BottomCta
        title="Need support on a fiber, tower, or telecom infrastructure project?"
        description="Tell us what you're building, where you need support, and how quickly you need to move."
      />
    </main>
  )
}
