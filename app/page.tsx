import Image from "next/image"
import Link from "next/link"

const services = [
  {
    title: "Wireless Engineering",
    description:
      "Full A&E services including site design, construction drawings, structural analysis coordination, and permitting for wireless infrastructure.",
  },
  {
    title: "Fiber Engineering",
    description:
      "OSP engineering, route design, make-ready coordination, and construction support for long-haul and metro fiber networks.",
  },
  {
    title: "Construction Services",
    description:
      "Tower and fiber construction services supporting carriers, utilities, and infrastructure developers across the United States.",
  },
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
    <main className="flex flex-col">

      {/* HERO */}

      <section className="bg-[#1f8a84] text-white py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Telecom Engineering & Infrastructure Construction
          </h1>

          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-10">
            Odiscom provides professional engineering, fielding, and
            construction services for wireless and fiber networks
            across the United States.
          </p>

          <div className="flex justify-center gap-4">

            <Link
              href="/contact"
              className="bg-white text-[#1f8a84] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Request a Quote
            </Link>

            <Link
              href="/services"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white/10 transition"
            >
              View Services
            </Link>

          </div>

        </div>
      </section>


      {/* SERVICES */}

      <section className="py-20 bg-[#e6f3f2]">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {services.map((service) => (
              <div
                key={service.title}
                className="p-8 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* CLIENTS */}

      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Trusted By Industry Leaders
          </h2>

          <p className="text-center text-gray-600 mb-12">
            Selected clients and infrastructure partners.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-10 items-center">

            {clients.map((client) => (
              <div key={client.alt} className="flex justify-center">

                <Image
                  src={client.src}
                  alt={client.alt}
                  width={140}
                  height={60}
                  className="object-contain opacity-80 hover:opacity-100 transition"
                />

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* CTA */}

      <section className="bg-[#0b1638] text-white py-20">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-3xl font-bold mb-6">
            Ready to Build Your Next Telecom Project?
          </h2>

          <p className="text-lg text-white/90 mb-8">
            Our engineering and construction teams support telecom
            operators, utilities, and infrastructure developers nationwide.
          </p>

          <Link
            href="/contact"
            className="bg-white text-[#0b1638] font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition"
          >
            Contact Odiscom
          </Link>

        </div>

      </section>

    </main>
  )
}