"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { COMPANY } from "@/lib/company"

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

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logos/odiscom-logo.png"
            alt="Odiscom"
            width={170}
            height={40}
            priority
          />
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition ${
                  active
                    ? "text-[#1f8a84]"
                    : "text-slate-700 hover:text-[#1f8a84]"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">

          <a
            href={`tel:${COMPANY.phoneLink}`}
            className="hidden text-sm font-medium text-slate-700 hover:text-[#1f8a84] md:block"
          >
            {COMPANY.phoneDisplay}
          </a>

          <Link
            href="/contact"
            className="rounded-full bg-[#1f8a84] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#18716c]"
          >
            Request Proposal
          </Link>

        </div>

      </div>
    </header>
  )
}