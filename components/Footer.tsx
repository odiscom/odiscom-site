import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#1f8a84] text-white">

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">

        <div>
          <h3 className="text-2xl font-bold">ODISCOM</h3>

          <p className="mt-4 max-w-sm text-white/90">
            Telecommunications engineering, fiber infrastructure development,
            tower services, and construction support nationwide.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Quick Links</h4>

          <div className="mt-4 space-y-3 text-white/90">
            <div><Link href="/services">Services</Link></div>
            <div><Link href="/projects">Projects</Link></div>
            <div><Link href="/clients">Clients</Link></div>
            <div><Link href="/contact">Contact</Link></div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Contact</h4>

          <div className="mt-4 space-y-3 text-white/90">
            <p>
              2600 S Shore Blvd, Suite 300<br/>
              League City, TX 77573
            </p>

            <p>214-392-3490</p>

            <p>owners@odiscom.com</p>
          </div>
        </div>

      </div>

      <div className="border-t border-white/20 px-6 py-4 text-center text-sm text-white/80">
        © {new Date().getFullYear()} Odiscom LLC. All rights reserved.
      </div>

    </footer>
  )
}