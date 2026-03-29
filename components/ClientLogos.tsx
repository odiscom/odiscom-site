import Image from "next/image"

const logos = [
  { src: "/logos/att.png", alt: "AT&T" },
  { src: "/logos/Verizon.png", alt: "Verizon" },
  { src: "/logos/sonic.png", alt: "Sonic" },

  { src: "/logos/crowncastle-logo.png", alt: "Crown Castle" },
  { src: "/logos/vertical-bridge-logo.svg", alt: "Vertical Bridge" },
  { src: "/logos/Zayo.svg", alt: "Zayo" },

  { src: "/logos/smartlink.png", alt: "Smartlink" },
  { src: "/logos/Ericsson-Symbol.png", alt: "Ericsson" },
  { src: "/logos/nokia.png", alt: "Nokia" },
  { src: "/logos/nextlink.png", alt: "Nextlink" },
  { src: "/logos/foresight.png", alt: "Foresight" },
  { src: "/logos/ebi.jpeg", alt: "EBI Consulting" },
]

export default function ClientLogos() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Trusted by telecom infrastructure leaders
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">
            Supporting fiber, wireless, and tower infrastructure programs
          </h2>

          <p className="mt-4 text-slate-600">
            Experience across carriers, tower companies, and infrastructure partners.
          </p>
        </div>

        {/* Logos */}
        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="group flex h-24 items-center justify-center rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={60}
                className="max-h-10 w-auto object-contain opacity-80 transition group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}