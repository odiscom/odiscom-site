import Image from "next/image"
import BottomCta from "@/components/BottomCta"

export default function GovernmentPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative h-[430px] w-full overflow-hidden">
        <Image src="/images/Towers/South_Tower.jpg" alt="Government and infrastructure support" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f3f3b]/85 via-[#0f3f3b]/70 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <p className="mb-4 text-sm tracking-[0.2em] text-white/80">GOVERNMENT • BROADBAND • INFRASTRUCTURE</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">Support for public-sector and infrastructure programs</h1>
            <p className="mt-4 text-lg leading-8 text-white/90">
              Odiscom supports broadband, telecom, and infrastructure work with practical delivery, engineering coordination, and field-aware execution support.
            </p>
          </div>
        </div>
      </section>

      <BottomCta
        title="Need support for a public-sector telecom or infrastructure program?"
        description="Odiscom helps clients navigate delivery with practical coordination, engineering support, and responsive execution."
        secondaryHref="/projects"
        secondaryLabel="View Projects"
      />
    </main>
  )
}
