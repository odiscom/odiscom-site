import Link from "next/link"
import { COMPANY } from "@/lib/company"

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#0f6f6a] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">
              Odiscom
            </p>

            <h3 className="mt-4 text-2xl font-semibold">
              Telecom engineering and infrastructure support
            </h3>

            <p className="mt-4 max-w-sm leading-8 text-white/85">
              {COMPANY.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold">Quick Links</h4>

            <div className="mt-5 space-y-3 text-white/85">
              <div>
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
              </div>

              <div>
                <Link href="/services" className="transition hover:text-white">
                  Services
                </Link>
              </div>

              <div>
                <Link href="/projects" className="transition hover:text-white">
                  Projects
                </Link>
              </div>

              <div>
                <Link href="/clients" className="transition hover:text-white">
                  Clients
                </Link>
              </div>

              <div>
                <Link href="/events" className="transition hover:text-white">
                  Events
                </Link>
              </div>

              <div>
                <Link href="/contact" className="transition hover:text-white">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold">Contact</h4>

            <div className="mt-5 space-y-4 text-white/85">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/65">
                  Location
                </p>
                <p className="mt-1">{COMPANY.location}</p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/65">
                  Phone
                </p>
                <p className="mt-1">
                  <a
                    href={`tel:${COMPANY.phoneLink}`}
                    className="transition hover:text-white"
                  >
                    {COMPANY.phoneDisplay}
                  </a>
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/65">
                  Email
                </p>
                <p className="mt-1">
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="transition hover:text-white"
                  >
                    {COMPANY.email}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold">Connect</h4>

            <div className="mt-5 space-y-4 text-white/85">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/65">
                  LinkedIn
                </p>

                <p className="mt-1">
                  <a
                    href={COMPANY.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white"
                  >
                    Follow Odiscom on LinkedIn
                  </a>
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/65">
                  Focus
                </p>

                <p className="mt-1">{COMPANY.focus}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/15 pt-5 text-sm text-white/65">
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}