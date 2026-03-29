export default function ClientLogos() {
  const logos = [
    { src: "/logos/att.png", alt: "AT&T" },
    { src: "/logos/verizon.png", alt: "Verizon" },
    { src: "/logos/tmobile.png", alt: "T-Mobile" },
    { src: "/logos/zayo.png", alt: "Zayo" },
    { src: "/logos/crown.png", alt: "Crown Castle" },
    { src: "/logos/american-tower.png", alt: "American Tower" },
  ]

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Trusted by telecom infrastructure leaders
          </p>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Supporting major fiber and wireless infrastructure programs
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 items-center gap-x-12 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="flex items-center justify-center grayscale opacity-70 transition duration-300 hover:grayscale-0 hover:opacity-100"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}