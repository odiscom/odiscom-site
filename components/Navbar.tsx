"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

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
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-200 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur shadow-sm" : "bg-white/78 backdrop-blur"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 transition-all duration-300 ${
          isScrolled ? "h-[73px]" : "h-[86px]"
        }`}
      >
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center shrink-0">
            <img
              src="/logos/odiscom.png"
              alt="Odiscom"
              className={`object-contain transition-all duration-300 ${
                isScrolled ? "w-[153px]" : "w-[180px]"
              }`}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
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

        <div className="flex items-center gap-8">
          <a
            href="tel:+14695311176"
            className="hidden xl:block whitespace-nowrap pl-4 text-[15px] font-medium text-[#0f3f3b]"
          >
            (469) 531-1176
          </a>

          <Link
            href="/contact"
            className={`whitespace-nowrap rounded-full font-semibold transition-all duration-300 hover:bg-[#18716c] ${
              isScrolled ? "px-6 py-2.5 text-[15px]" : "px-7 py-3 text-[16px]"
            }`}
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