"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

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

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[84px] max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/logos/odiscom.png"
            alt="Odiscom"
            width={260}
            height={60}
            priority
            className="h-auto w-[190px] object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[17px] font-medium transition ${
                  isActive
                    ? "text-[#1f8a84]"
                    : "text-[#0f3f3b] hover:text-[#1f8a84]"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          <a
            href="tel:+14695311176"
            className="hidden text-[16px] font-medium text-[#0f3f3b] lg:block"
          >
            (469) 531-1176
          </a>

          <Link
            href="/contact"
            className="rounded-full bg-[#1f8a84] px-7 py-3 text-[17px] font-semibold text-white transition hover:bg-[#18716c]"
          >
            Request Proposal
          </Link>
        </div>
      </div>
    </header>
  )
}