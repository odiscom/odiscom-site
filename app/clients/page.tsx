import Image from "next/image"
import Link from "next/link"

const clients = [
  { name: "AT&T", logo: "/logos/att.png" },
  { name: "Verizon", logo: "/logos/verizon.png" },
  { name: "Zayo", logo: "/logos/zayo.svg" },
  { name: "TDS Telecommunications", logo: "/logos/tds.png" },
  { name: "ADB-US", logo: "/logos/adb.png" },
  { name: "Squan", logo: "/logos/squan.png" },
  { name: "Harmoni Towers", logo: "/logos/harmoni.png" },
  { name: "Nextlink", logo: "/logos/nextlink.png" },
  { name: "Foresight Communications", logo: "/logos/foresight.png" },
  { name: "EBI", logo: "/logos/ebi.svg" },
  { name: "Smartlink", logo: "/logos/smartlink.png" },
  { name: "SONIC", logo: "/logos/sonic.png" },
]

export default function ClientsPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* HERO */}
      <section className="relative h-[520px] w-full overflow-hidden">

        <Image
          src="/images/Towers/South_Tower.jpg"
          alt="Telecommunications infrastructure"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
          <div className="max-w-3xl text-white">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/85">
              Clients
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              Telecommunications operators and infrastructure partners
            </h1>

            <p className="mt-6 text-lg leading-8 text-white/90">
              Odiscom supports telecommunications infrastructure programs
              across wireless, fiber, and broadband deployment environments.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-[#1f8a84] px-7 py-4 font-semibold text-white hover:bg-[#18716c]"
            >
              Work With Odiscom
            </Link>

          </div>
        </div>

      </section>


      {/* CLIENT LOGO GRID */}
      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="mb-12 max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
              Trusted By
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Telecommunications clients and partners
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Odiscom works with carriers, infrastructure contractors,
              tower operators, and broadband providers across the United States.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">

            {clients.map((client) => (

              <div
                key={client.name}
                className="group flex items-center justify-center rounded-2xl border border-slate-200 bg-[#d2eeea] p-8 transition hover:bg-[#c3e7e2] hover:shadow-md"
              >

                <Image
                  src={client.logo}
                  alt={client.name}
                  width={200}
                  height={80}
                  className="h-[60px] w-auto object-contain"
                />

              </div>

            ))}

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
            Looking for a telecom delivery partner?
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            If your program needs dependable engineering support,
            coordinated infrastructure delivery, or field execution,
            we’d be glad to talk.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              href="/contact"
              className="rounded-full bg-[#1f8a84] px-7 py-4 font-semibold text-white hover:bg-[#18716c]"
            >
              Contact Odiscom
            </Link>

            <Link
              href="/projects"
              className="rounded-full border border-slate-300 px-7 py-4 font-semibold text-slate-900 hover:border-[#1f8a84] hover:text-[#1f8a84]"
            >
              View Projects
            </Link>

          </div>

        </div>

      </section>

    </main>
  )
}