"use client"

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
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-[86px] max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center">
            <img
              src="/logos/odiscom.png"
              alt="Odiscom"
              className="w-[180px] object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => {
              const active = pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[16px] font-medium transition ${
                    active
                      ? "text-[#1f8a84]"
                      : "text-[#0f3f3b] hover:text-[#1f8a84]"
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6">

          {/* PHONE */}
          <a
            href="tel:+14695311176"
            className="hidden whitespace-nowrap text-[15px] font-medium text-[#0f3f3b] xl:block"
          >
            (469) 531-1176
          </a>

          {/* BUTTON */}
          <Link
            href="/contact"
            className="rounded-full px-7 py-3 text-[16px] font-semibold transition hover:bg-[#18716c]"
            style={{
              backgroundColor: "#1f8a84",
              color: "#ffffff",
            }}
          >
            Request Proposal
          </Link>
        </div>

      </div>
    </header>
  )
}