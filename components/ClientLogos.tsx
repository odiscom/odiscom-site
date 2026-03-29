import Image from "next/image"

const logos = [
  { src: "/logos/att.png", alt: "AT&T" },
  { src: "/logos/Verizon.png", alt: "Verizon" },
  { src: "/logos/Zayo.svg", alt: "Zayo" }, // fixed (SVG instead of bad PNG)
  { src: "/logos/crowncastle-logo.png", alt: "Crown Castle" }, // replace later if needed
  { src: "/logos/vertical-bridge-logo.svg", alt: "Vertical Bridge" },
  { src: "/logos/smartlink.png", alt: "Smartlink" },
]

export default function ClientLogos() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Trusted by telecom infrastructure leaders
          </p>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Supporting major fiber and wireless infrastructure programs
          </h2>
        </div>

        {/* Logos Grid */}
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="flex h-24 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:shadow-md"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={60}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}