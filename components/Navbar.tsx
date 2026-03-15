"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const navItems = [
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
    const handleScroll = () => setScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-slate-200 bg-white/95 shadow-md backdrop-blur"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/logos/odiscom.png"
            alt="Odiscom"
            width={520}
            height={120}
            className="h-auto w-[220px] md:w-[320px]"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <nav className="flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-[15px] font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-slate-950"
                      : "text-slate-700 hover:text-slate-950"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute left-0 -bottom-2 h-0.5 w-full rounded-full bg-[#148a84] transition-transform duration-200 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              )
            })}
          </nav>

          <Link
            href="/contact"
            className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#148a84]"
          >
            Request Proposal
          </Link>
        </div>

        <div className="lg:hidden">
          <Link
            href="/contact"
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#148a84]"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}