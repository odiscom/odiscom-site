"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/clients", label: "Clients" },
  { href: "/events", label: "Events" },
  { href: "/government", label: "Government" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur transition-all duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        <Link href="/" className="flex items-center">
          <Image
            src="/logos/odiscom.png"
            alt="Odiscom"
            width={260}
            height={60}
            priority
            className={`h-auto transition-all duration-300 ${
              scrolled ? "w-[234px]" : "w-[260px]"
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-medium transition-all duration-300 ${
                  scrolled ? "text-[15px]" : "text-base"
                } ${
                  isActive
                    ? "text-[#1f8a84]"
                    : "text-slate-700 hover:text-[#1f8a84]"
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 top-full mt-1 h-0.5 rounded-full bg-[#1f8a84] transition-all duration-300 ${
                    isActive ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </Link>
            )
          })}

          <Link
            href="/contact"
            className={`rounded-full bg-[#1f8a84] font-semibold text-white transition-all duration-300 hover:bg-[#18716c] ${
              scrolled ? "px-5 py-2.5 text-[15px]" : "px-6 py-3 text-base"
            }`}
          >
            Request Proposal
          </Link>
        </nav>

        <Link
          href="/contact"
          className={`rounded-full bg-[#1f8a84] font-semibold text-white transition-all duration-300 hover:bg-[#18716c] md:hidden ${
            scrolled ? "px-4 py-2 text-sm" : "px-5 py-2.5 text-sm"
          }`}
        >
          Contact
        </Link>
      </div>
    </header>
  )
}