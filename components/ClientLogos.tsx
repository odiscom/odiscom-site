import Image from "next/image"

const logos = [
  // Tier 1 – Carriers
  { src: "/logos/att.png", alt: "AT&T" },
  { src: "/logos/Verizon.png", alt: "Verizon" },
  { src: "/logos/sonic.png", alt: "Sonic" },

  // Tier 2 – Infrastructure / Towers
  { src: "/logos/crowncastle-logo.png", alt: "Crown Castle" },
  { src: "/logos/vertical-bridge-logo.svg", alt: "Vertical Bridge" },
  { src: "/logos/zayo.png", alt: "Zayo" },

  // Tier 3 – Vendors / Ecosystem
  { src: "/logos/smartlink.png", alt: "Smartlink" },
  { src: "/logos/Ericsson-Symbol.png", alt: "Ericsson" },
  { src: "/logos/nokia.png", alt: "Nokia" },
  { src: "/logos/nextlink.png", alt: "Nextlink" },
  { src: "/logos/foresight.png", alt: "Foresight" },
  { src: "/logos/ebi.jpeg", alt: "EBI Consulting" },
]

export default function ClientLogos() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Trusted by telecom infrastructure leaders
          </p>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Supporting fiber, wireless, and tower infrastructure programs
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="flex h-24 items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
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