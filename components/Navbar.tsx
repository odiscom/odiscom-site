"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Clients", href: "/clients" },
    { label: "Events", href: "/events" },
    { label: "Government", href: "/government" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center">
          <img
            src="/logos/odiscom.png"
            alt="Odiscom"
            className="h-12 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "text-sm font-medium text-[#1f8a84]"
                    : "text-sm font-medium text-[#0f3f3b] transition hover:text-[#1f8a84]"
                }
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:+14695311176"
            className="hidden text-sm font-medium text-[#0f3f3b] md:block"
          >
            (469) 531-1176
          </a>

          <Link
            href="/contact"
            className="rounded-full bg-[#1f8a84] px-6 py-3 text-sm font-semibold !text-white transition hover:bg-[#18716c]"
          >
            Request Proposal
          </Link>
        </div>
      </div>
    </header>
  )
}