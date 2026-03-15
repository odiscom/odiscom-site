import Image from "next/image"
import Link from "next/link"

const services = [
  {
    title: "Wireless Engineering",
    text: "Design and engineering support for macro, small cell, and related wireless infrastructure projects.",
    items: [
      "Site design and construction drawings",
      "Equipment layouts and mount details",
      "Structural coordination",
      "Permitting and jurisdiction support",
      "Field verification and documentation",
    ],
  },
  {
    title: "Fiber Engineering",
    text: "OSP engineering and field-ready documentation supporting metro, middle-mile, and long-haul deployments.",
    items: [
      "Route design and engineered plans",
      "Pole loading analysis",
      "Aerial and underground design",
      "Fielding and constructability review",
      "Permit packages and utility coordination",
    ],
  },
  {
    title: "Tower Infrastructure",
    text: "Practical support for tower modifications, telecom upgrades, and infrastructure modernization.",
    items: [
      "Tower A&E drawing packages",
      "Equipment replacement and upgrades",
      "Grounding and power coordination",
      "Site walks and documentation",
      "Construction support packages",
    ],
  },
  {
    title: "Construction Services",
    text: "Execution support for telecom construction scopes focused on safety and delivery.",
    items: [
      "Tower construction coordination",
      "Fiber deployment oversight",
      "Vendor coordination",
      "Mobilization and scheduling",
      "Closeout documentation",
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* HERO */}
      <section className="relative h-[650px] w-full overflow-hidden">

        <Image
          src="/images/Fiber/trenching_pic.jpg"
          alt="Fiber trenching and conduit installation"
          fill
          priority
          className="object-cover"
        />

        {/* overlay for text readability */}
        <div className="absolute inset-0 bg-black/35" />

        {/* fade into page */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-white" />

        {/* hero content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">

          <div className="max-w-3xl text-white">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/85">
              Services
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              Telecom Engineering and Infrastructure Services
            </h1>

            <p className="mt-6 text-lg leading-8 text-white/90">
              Odiscom delivers engineering, fielding, and construction
              support for fiber networks, wireless infrastructure, and
              telecom deployment programs across the United States.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-[#1f8a84] px-7 py-4 font-semibold text-white transition hover:bg-[#18716c]"
            >
              Request Proposal
            </Link>

          </div>

        </div>

      </section>


      {/* INTRO */}
      <section className="border-b border-slate-200">

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
              What we do
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Practical support for fiber, tower, and telecom infrastructure projects
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our work is built around deployment realities, clean
              documentation, field coordination, and support that helps projects
              move from concept to construction.
            </p>

          </div>

        </div>

      </section>


      {/* SERVICES GRID */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="grid gap-8 md:grid-cols-2">

          {services.map((service) => (

            <div
              key={service.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="mb-6 h-1 w-14 rounded bg-[#1f8a84]" />

              <h2 className="text-2xl font-semibold">
                {service.title}
              </h2>

              <p className="mt-4 text-slate-600 leading-8">
                {service.text}
              </p>

              <ul className="mt-6 space-y-3">

                {service.items.map((item) => (

                  <li key={item} className="flex items-start gap-3">

                    <span className="mt-2 h-2 w-2 rounded-full bg-[#1f8a84]" />

                    <span>{item}</span>

                  </li>

                ))}

              </ul>

            </div>

          ))}

        </div>

      </section>


      {/* PROCESS */}
      <section className="bg-[#f5f7f8]">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
              How we support deployment
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Built for real-world project delivery
            </h2>

          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <div className="mb-4 h-1 w-12 rounded bg-[#1f8a84]" />
              <h3 className="text-lg font-semibold">Plan</h3>
              <p className="mt-3 text-slate-600 leading-7">
                Define scope, field conditions, stakeholders, and documentation requirements early.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <div className="mb-4 h-1 w-12 rounded bg-[#1f8a84]" />
              <h3 className="text-lg font-semibold">Design</h3>
              <p className="mt-3 text-slate-600 leading-7">
                Develop practical engineering packages and field-ready plans aligned with deployment needs.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <div className="mb-4 h-1 w-12 rounded bg-[#1f8a84]" />
              <h3 className="text-lg font-semibold">Deliver</h3>
              <p className="mt-3 text-slate-600 leading-7">
                Support construction and closeout with coordinated documentation and communication.
              </p>
            </div>

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
            Need telecom engineering support?
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Tell us about your project and we’ll help determine the right
            support model for your market, scope, and timeline.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              href="/contact"
              className="rounded-full bg-[#1f8a84] px-7 py-4 font-semibold text-white transition hover:bg-[#18716c]"
            >
              Contact Odiscom
            </Link>

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