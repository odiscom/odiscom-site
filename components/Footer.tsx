import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-white/30 bg-[#187c78] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80">Odiscom</p>
          <h3 className="mt-4 text-2xl font-semibold leading-tight">
            Telecom engineering and infrastructure support
          </h3>
          <p className="mt-4 text-lg leading-8 text-white/90">
            Serving telecom infrastructure nationwide through practical design,
            coordination, and field-aware delivery.
          </p>
        </div>

        <div>
          <h4 className="text-2xl font-semibold">Quick Links</h4>
          <div className="mt-5 space-y-3 text-lg text-white/95">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/clients">Clients</Link>
            <Link href="/events">Events</Link>
          </div>
        </div>

        <div>
          <h4 className="text-2xl font-semibold">Contact</h4>
          <div className="mt-5 space-y-4 text-lg">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">Location</p>
              <p className="mt-1 text-white/95">League City, TX 77573</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">Phone</p>
              <a className="mt-1 block text-white/95" href="tel:+14695311176">(469) 531-1176</a>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">Email</p>
              <a className="mt-1 block text-white/95" href="mailto:owners@odiscom.com">owners@odiscom.com</a>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-2xl font-semibold">Connect</h4>
          <div className="mt-5 space-y-4 text-lg text-white/95">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">LinkedIn</p>
              <a className="mt-1 block" href="https://www.linkedin.com/company/odiscom-llc" target="_blank" rel="noopener noreferrer">
                Follow Odiscom on LinkedIn
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">Focus</p>
              <p className="mt-1">Fiber, towers, and telecom infrastructure delivery</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
