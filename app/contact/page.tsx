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

      <section className="bg-[#148a84] text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Telecom Engineering & Infrastructure Construction
          </h1>

          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
            Odiscom provides professional engineering, fielding, and construction
            services for wireless and fiber networks across the United States.
          </p>

          <div className="flex justify-center gap-4">

            <Link
              href="/contact"
              className="bg-white text-[#148a84] hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold"
            >
              Request a Quote
            </Link>

            <Link
              href="/services"
              className="border border-white px-6 py-3 rounded-lg"
            >
              View Services
            </Link>

          </div>
        </div>
      </section>


      {/* SERVICES */}

      <section className="py-20 bg-[#e8f5f3]">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {services.map((service) => (
              <div
                key={service.title}
                className="p-8 bg-white border rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-700">
                  {service.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* CLIENTS */}

      <section className="py-20 bg-[#148a84]">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Trusted By Industry Leaders
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">

            {clients.map((client) => (
              <div key={client.alt} className="flex justify-center">

                <Image
                  src={client.src}
                  alt={client.alt}
                  width={140}
                  height={60}
                  className="object-contain brightness-0 invert opacity-90"
                />

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* CTA */}

      <section className="bg-[#0f3d44] text-white py-20">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-3xl font-bold mb-6">
            Ready to Build Your Next Telecom Project?
          </h2>

          <p className="mb-8 text-lg text-white/90">
            Our team supports telecom operators, utilities, and infrastructure
            developers with engineering and construction services nationwide.
          </p>

          <Link
            href="/contact"
            className="bg-white text-[#0f3d44] font-semibold px-8 py-4 rounded-lg"
          >
            Contact Odiscom
          </Link>

        </div>
      </section>

    </main>
  )
}