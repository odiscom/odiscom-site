import Image from "next/image"
import Link from "next/link"
import BottomCta from "@/components/BottomCta"

const clients = [
  {
    name: "AT&T",
    logo: "/logos/att.png",
    category: "Carrier / Telecom",
    description:
      "Support aligned with telecommunications infrastructure deployment and program delivery requirements.",
  },
  {
    name: "Verizon",
    logo: "/logos/verizon.png",
    category: "Carrier / Telecom",
    description:
      "Experience supporting wireless and telecom infrastructure work with practical field and delivery coordination.",
  },
  {
    name: "Zayo",
    logo: "/logos/zayo.png",
    category: "Fiber / Network Infrastructure",
    description:
      "Support across fiber infrastructure environments requiring field-aware engineering and coordinated execution.",
  },
  {
    name: "TDS Telecommunications",
    logo: "/logos/tds.png",
    category: "Carrier / Telecom",
    description:
      "Telecom support shaped around deployment realities, documentation needs, and infrastructure delivery workflows.",
  },
  {
    name: "ADB-US",
    logo: "/logos/adb.png",
    category: "Construction / Delivery Partner",
    description:
      "Coordination and support for infrastructure programs where execution, documentation, and field delivery must stay aligned.",
  },
  {
    name: "Squan",
    logo: "/logos/squan.png",
    category: "Construction / Delivery Partner",
    description:
      "Support for telecom construction and field operations where practical coordination and execution readiness matter.",
  },
  {
    name: "Harmoni Towers",
    logo: "/logos/harmoni.png",
    category: "Tower Infrastructure",
    description:
      "Project support aligned with tower infrastructure programs, field conditions, and delivery expectations.",
  },
  {
    name: "Nextlink",
    logo: "/logos/nextlink.png",
    category: "Broadband / Wireless",
    description:
      "Broadband and infrastructure support with attention to constructability, coordination, and deployment timing.",
  },
  {
    name: "Foresight Communications",
    logo: "/logos/foresight.png",
    category: "Telecom Partner",
    description:
      "Support across telecom project environments that require dependable coordination and field-minded execution.",
  },
  {
    name: "EBI",
    logo: "/logos/ebi.png",
    category: "Consulting / Infrastructure Support",
    description:
      "Experience supporting infrastructure-related project workflows, documentation, and coordination requirements.",
  },
  {
    name: "Smartlink",
    logo: "/logos/smartlink.png",
    category: "Wireless / Field Services",
    description:
      "Support for wireless and field service environments where execution, logistics, and documentation must stay connected.",
  },
  {
    name: "SONIC",
    logo: "/logos/sonic.png",
    category: "Fiber / Network Partner",
    description:
      "Telecom and network infrastructure support built around deployment progress and practical field realities.",
  },
]

const capabilityPoints = [
  "Fiber route development and OSP support",
  "Wireless site and tower project coordination",
  "Construction-minded documentation and delivery support",
  "Field verification and execution alignment",
]

export default function ClientsPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-[#f7fbfb]">
        <div className="mx-auto grid max-w-7xl overflow-hidden lg:min-h-[620px] lg:grid-cols-2">
          <div className="flex items-center px-6 py-20 lg:px-8 lg:py-28">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
                Clients
              </p>

              <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                Supporting telecom
                <br className="hidden md:block" />
                infrastructure leaders
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Odiscom supports carriers, tower companies, contractors, and
                infrastructure partners with practical engineering, coordination,
                and construction-minded execution.
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
              src="/images/Towers/South_Tower.jpg"
              alt="Telecom tower infrastructure"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1f8a84]/25" />
          </div>
        </div>
      </section>

      {/* CAPABILITIES STRIP */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {capabilityPoints.map((point) => (
              <div
                key={point}
                className="rounded-[1.25rem] border border-slate-200 bg-[#f7fbfb] px-5 py-5"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1f8a84]">
                  Capability
                </p>
                <p className="mt-2 leading-7 text-slate-700">{point}</p>
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
              Who we support
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Experience across carriers, contractors, and infrastructure partners
            </h2>
          </div>

          <div className="lg:pl-8">
            <p className="text-lg leading-8 text-slate-600">
              Our work is shaped around real deployment environments where
              engineering, field conditions, documentation, and delivery timelines
              must stay aligned to keep programs moving.
            </p>
          </div>
        </div>
      </section>

      {/* CLIENT GRID */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {clients.map((client) => (
            <article
              key={client.name}
              className="group flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-24 items-center justify-center rounded-[1.5rem] border border-slate-200 bg-[#f7fbfb] p-5">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={180}
                  height={70}
                  className="max-h-14 w-auto object-contain"
                />
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1f8a84]">
                  {client.category}
                </p>

                <h3 className="mt-3 text-2xl font-semibold leading-snug text-slate-900">
                  {client.name}
                </h3>

                <p className="mt-4 flex-1 leading-8 text-slate-600">
                  {client.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* RELATIONSHIP NOTE */}
      <section className="bg-[#f7fbfb] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">
              Delivery mindset
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
              Built to support active infrastructure programs
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Odiscom works in project environments where progress depends on
              practical communication, field-aware support, and documentation that
              helps teams execute instead of creating delays.
            </p>
            <p>
              Whether the client is a carrier, tower company, contractor, or
              infrastructure partner, our role is centered on helping telecom work
              move forward with clarity, coordination, and delivery discipline.
            </p>
          </div>
        </div>
      </section>

      <BottomCta
        title="Looking for a practical telecom infrastructure partner?"
        description="Tell us about your program, your delivery needs, and where you need engineering, field, or construction support."
      />
    </main>
  )
}