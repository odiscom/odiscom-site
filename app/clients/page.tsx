import Image from "next/image"
import BottomCta from "@/components/BottomCta"

const clients = [
  { name: "AT&T", logo: "/logos/att.png" },
  { name: "Verizon", logo: "/logos/Verizon.png" },
  { name: "Zayo", logo: "/logos/zayo.png" },
  { name: "TDS Telecommunications", logo: "/logos/TDS.png" },
  { name: "ADB-US", logo: "/logos/adb.png" },
  { name: "Squan", logo: "/logos/squan.png" },
  { name: "Harmoni Towers", logo: "/logos/harmoni.png" },
  { name: "Nextlink", logo: "/logos/nextlink.jpg" },
  { name: "Foresight Communications", logo: "/logos/foresight.png" },
  { name: "EBI", logo: "/logos/ebi.jpeg" },
  { name: "Smartlink", logo: "/logos/smartlink.png" },
  { name: "SONIC", logo: "/logos/sonic.png" },
]

export default function ClientsPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative h-[430px] w-full overflow-hidden">
        <Image src="/logos/clients.png" alt="Odiscom client partnerships" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f3f3b]/85 via-[#0f3f3b]/70 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <p className="mb-4 text-sm tracking-[0.2em] text-white/80">PARTNERSHIPS • CLIENTS • TRUSTED DELIVERY</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">Trusted by Industry Leaders Nationwide</h1>
            <p className="mt-4 text-lg leading-8 text-white/90">
              Odiscom partners with carriers, infrastructure providers, and contractors to deliver reliable, scalable telecommunications solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbfb]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">Selected Clients & Partners</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Organizations we have supported</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {clients.map((client) => (
              <div key={client.name} className="flex h-32 items-center justify-center rounded-[1.5rem] border border-slate-200 bg-white px-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <img src={client.logo} alt={client.name} className="max-h-[52px] max-w-[190px] object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <BottomCta
        title="Looking for a dependable telecom infrastructure partner?"
        description="Odiscom supports clients with practical engineering, responsive coordination, and construction-minded delivery across fiber, tower, and telecom programs."
        secondaryHref="/projects"
        secondaryLabel="View Projects"
      />
    </main>
  )
}
