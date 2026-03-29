"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Clients", href: "/clients" },
  { label: "Events", href: "/events" },
  { label: "Government", href: "/government" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
]

export default function Footer() {
  const pathname = usePathname()

  return (
    <footer className="border-t border-white/10 bg-[#1f8a84] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-[1.2fr_.9fr_.9fr_.9fr]">
          <div className="max-w-md">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Telecom engineering and infrastructure support
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/85">
              Supporting fiber, wireless, and infrastructure programs with
              practical design, coordinated delivery, and field-aware execution.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold tracking-tight">Quick Links</h3>

            <nav className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4">
              {quickLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href || pathname.startsWith(link.href + "/")

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-lg transition ${
                      isActive
                        ? "font-semibold text-white"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>
          </div>

          <div>
            <h3 className="text-2xl font-semibold tracking-tight">Contact</h3>

            <div className="mt-6 space-y-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/65">
                  Phone
                </p>
                <a
                  href="tel:14695311176"
                  className="mt-3 block text-lg leading-8 text-white/90 hover:text-white"
                >
                  (469) 531-1176
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/65">
                  Email
                </p>
                <a
                  href="mailto:owners@odiscom.com"
                  className="mt-3 block break-words text-lg leading-8 text-white/90 hover:text-white"
                >
                  owners@odiscom.com
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/65">
                  Coverage
                </p>
                <p className="mt-3 text-lg leading-8 text-white/90">
                  Supporting telecom infrastructure programs nationwide
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold tracking-tight">Connect</h3>

            <div className="mt-6 space-y-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/65">
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/company/odiscom"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block text-lg leading-8 text-white/90 hover:text-white"
                >
                  Follow Odiscom on LinkedIn
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/65">
                  Bookings
                </p>
                <a
                  href="https://outlook.office.com/book/Odiscom@odiscom.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block text-lg leading-8 text-white/90 hover:text-white"
                >
                  Book a Meeting
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/65">
            © {new Date().getFullYear()} Odiscom. All rights reserved.
          </p>

          <p className="text-sm text-white/50">
            Built for telecom infrastructure delivery
          </p>
        </div>
      </div>
    </footer>
  )
}