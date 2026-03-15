import Link from "next/link"
import Image from "next/image"

const stats = [
  { label: "Founded", value: "2015" },
  { label: "Coverage", value: "Nationwide" },
  { label: "Delivery", value: "Engineering + Construction" },
  { label: "Response", value: "Rapid mobilization" },
]

const clients = [
  { src: "/logos/att.png", alt: "AT&T" },
  { src: "/logos/Verizon.png", alt: "Verizon" },
  { src: "/logos/Zayo.svg", alt: "Zayo" },
  { src: "/logos/EBI.svg", alt: "EBI" },
  { src: "/logos/smartlink.png", alt: "Smartlink" },
  { src: "/logos/sonic.png", alt: "SONIC" },
]

export default function Home() {
  return (
    <main className="bg-[#f5f7f8] text-slate-900">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.9fr] lg:items-start">
          <div>
            <p className="mb-6 text-[15px] font-medium text-slate-600">
              Telecommunications • Fiber • Towers • Construction
            </p>

            <h1 className="max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-tight text-[#0b1638] md:text-7xl">
              Engineering America’s Digital Infrastructure
            </h1>

            <p className="mt-8 max-w-4xl text-xl leading-10 text-slate-600">
              Odiscom provides telecommunications engineering, fiber
              infrastructure development, and tower services supporting
              nationwide network deployment.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-2xl bg-[#0b1638] px-7 py-4 text-lg font-semibold text-white shadow-sm transition hover:bg-[#148a84]"
              >
                Request Proposal
              </Link>

              <Link
                href="/services"
                className="rounded-2xl border border-slate-300 bg-white px-7 py-4 text-lg font-semibold text-[#0b1638] shadow-sm transition hover:border-[#148a84] hover:text-[#148a84]"
              >
                View Services
              </Link>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-sm font-medium text-slate-500">
                    {stat.label}
                  </p>
                  <p className="mt-3 text-2xl font-semibold leading-tight text-[#0b1638]">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#0b1638]">
              Fiber + Tower delivery, under one roof
            </h2>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Practical design. Field-ready plans. Clean documentation. Safe
              execution.
            </p>

            <div className="mt-8 space-y-5 text-lg text-slate-700">
              <p>• OSP / OSP Engineering</p>
              <p>• Pole loading + make-ready support</p>
              <p>• Tower A&amp;E + construction support</p>
              <p>• Program and vendor coordination</p>
            </div>

            <Link
              href="/contact"
              className="mt-10 inline-block text-2xl font-semibold text-[#0b1638] transition hover:text-[#148a84]"
            >
              Talk to us →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#0b1638] md:text-5xl">
                Trusted by telecommunications operators and infrastructure owners
              </h2>
              <p className="mt-4 text-xl text-slate-600">
                Selected clients and partners.
              </p>
            </div>

            <Link
              href="/clients"
              className="text-xl font-semibold text-[#0b1638] transition hover:text-[#148a84]"
            >
              View Clients →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 border-t border-slate-200 pt-10 md:grid-cols-3 lg:grid-cols-6">
            {clients.map((client) => (
              <div
                key={client.alt}
                className="flex min-h-[80px] items-center justify-center"
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={150}
                  height={70}
                  className="h-auto max-h-[52px] w-auto object-contain opacity-80 transition hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}