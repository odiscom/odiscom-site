import Image from "next/image"
import Link from "next/link"

const clients = [
  { src: "/logos/att.png", alt: "AT&T" },
  { src: "/logos/verizon.png", alt: "Verizon" },
  { src: "/logos/zayo.svg", alt: "Zayo" },
  { src: "/logos/ebi.svg", alt: "EBI" },
  { src: "/logos/smartlink.png", alt: "Smartlink" },
  { src: "/logos/sonic.png", alt: "SONIC" },
]

const capabilities = [
  "Telecommunications engineering",
  "Fiber infrastructure development",
  "Tower services and modifications",
  "Field-ready plans and documentation",
]

const highlights = [
  { label: "Founded", value: "2015" },
  { label: "Coverage", value: "Nationwide" },
  { label: "Focus", value: "Fiber + Tower" },
]

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden">
        <div className="absolute right-0 top-0 hidden h-full w-[36%] bg-[#e7f4f2] lg:block" />
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
                Odiscom
              </p>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
                Telecom engineering built for real-world deployment.
              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
                Odiscom supports fiber, tower, and telecommunications
                infrastructure programs with practical design, coordinated
                delivery, and construction-minded execution.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-[#1f8a84] px-7 py-4 text-lg font-semibold text-white transition hover:bg-[#18716c]"
                >
                  Request Proposal
                </Link>

                <Link
                  href="/services"
                  className="rounded-full border border-slate-300 px-7 py-4 text-lg font-semibold text-slate-900 transition hover:border-[#1f8a84] hover:text-[#1f8a84]"
                >
                  View Services
                </Link>
              </div>

              <div className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm"
                  >
                    <p className="text-sm text-slate-500">{item.label}</p>
                    <p className="mt-2 text-2xl font-semibold text-slate-900">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                <div className="mb-8 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-[#1f8a84]" />
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Core capabilities
                  </p>
                </div>

                <div className="space-y-5">
                  {capabilities.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 rounded-2xl bg-[#f8fbfb] px-5 py-4"
                    >
                      <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#1f8a84]" />
                      <p className="text-lg leading-8 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl bg-[#1f8a84] px-6 py-6 text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/80">
                    Delivery
                  </p>
                  <p className="mt-3 text-2xl font-semibold leading-snug">
                    Practical plans. Clean documentation. Field-aware execution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[#fbfcfc]">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">
                Trusted by
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
                Operators, infrastructure owners, and delivery partners
              </h2>
            </div>

            <Link
              href="/clients"
              className="text-lg font-semibold text-[#1f8a84] transition hover:text-[#18716c]"
            >
              View Clients →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 border-t border-slate-200 pt-10 md:grid-cols-3 lg:grid-cols-6">
            {clients.map((client) => (
              <div
                key={client.alt}
                className="flex min-h-[90px] items-center justify-center rounded-2xl bg-white px-4 shadow-sm"
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={150}
                  height={70}
                  className="h-auto max-h-[52px] w-auto object-contain opacity-85 transition hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-slate-200 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1f8a84]">
                Fiber
              </p>
              <h3 className="mt-4 text-2xl font-semibold">
                OSP engineering and infrastructure support
              </h3>
              <p className="mt-4 leading-8 text-slate-600">
                Route development, utility coordination, make-ready support,
                fielding, and plan production aligned with deployment needs.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1f8a84]">
                Towers
              </p>
              <h3 className="mt-4 text-2xl font-semibold">
                Wireless site and tower project execution support
              </h3>
              <p className="mt-4 leading-8 text-slate-600">
                A&amp;E coordination, site documentation, upgrade support, and
                project delivery tailored to carrier and infrastructure programs.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1f8a84]">
                Construction
              </p>
              <h3 className="mt-4 text-2xl font-semibold">
                Construction-minded planning and delivery
              </h3>
              <p className="mt-4 leading-8 text-slate-600">
                Documentation and coordination built to support field teams,
                mobilization, vendor alignment, and real-world execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1f8a84] text-white">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center lg:px-8">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Need support on a fiber, tower, or telecom infrastructure project?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/90">
            Tell us what you are building, where you need support, and how fast
            you need to move.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 font-semibold text-[#1f8a84] transition hover:bg-slate-100"
            >
              Contact Odiscom
            </Link>

            <Link
              href="/services"
              className="rounded-full border border-white/70 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}