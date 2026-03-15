import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative h-[680px] w-full overflow-hidden">
        {/* Left Image */}
        <div className="absolute inset-y-0 left-0 w-1/2">
          <Image
            src="/images/Towers/South_Tower.jpg"
            alt="Telecom tower infrastructure"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Right Image */}
        <div className="absolute inset-y-0 right-0 w-1/2">
          <Image
            src="/images/fiber/trenching__pic.jpg"
            alt="Fiber conduit trenching"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Soft teal tint */}
        <div className="absolute inset-0 bg-[#1f8a84]/25" />

        {/* Divider */}
        <div className="absolute left-1/2 top-0 h-full w-px bg-white/20" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white/85">
              Telecommunications • Fiber • Towers • Construction
            </p>

            <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              Engineering America’s Digital Infrastructure
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-white/90">
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
                className="rounded-full border border-white/80 px-7 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">
              What we do
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Practical support for fiber, tower, and telecom infrastructure projects
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Odiscom delivers engineering, fielding, and construction support
              built for real-world deployment across telecommunications programs.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-slate-200 p-8 shadow-sm">
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

            <div className="rounded-[2rem] border border-slate-200 p-8 shadow-sm">
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

            <div className="rounded-[2rem] border border-slate-200 p-8 shadow-sm">
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

      {/* CTA */}
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