"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Clients", href: "/clients" },
  { label: "Events", href: "/events" },
  { label: "Government", href: "/government" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-200 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 shadow-md backdrop-blur"
          : "bg-white/80 backdrop-blur"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ${
          isScrolled ? "h-[74px]" : "h-[88px]"
        }`}
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <img
            src="/logos/odiscom.png"
            alt="Odiscom"
            className={`transition-all duration-300 ${
              isScrolled ? "w-[150px]" : "w-[170px]"
            }`}
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href ||
                  pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-[15px] font-medium rounded-full transition ${
                  active
                    ? "text-[#1f8a84] font-semibold"
                    : "text-[#0f3f3b] hover:text-[#1f8a84]"
                }`}
              >
                {item.label}

                {/* underline */}
                <span
                  className={`absolute left-3 right-3 -bottom-[6px] h-[2px] bg-[#1f8a84] transition-all duration-300 ${
                    active ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                  }`}
                  style={{ transformOrigin: "left" }}
                />
              </Link>
            );
          })}
        </nav>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:+14695311176"
            className="text-sm text-slate-500 hover:text-[#1f8a84]"
          >
            (469) 531-1176
          </a>

          <Link
            href="/contact"
            className="rounded-full bg-[#1f8a84] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#18716c]"
          >
            Request Proposal
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-[#0f3f3b]"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block text-lg font-medium text-[#0f3f3b]"
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-4 border-t border-slate-200 space-y-3">
            <a
              href="tel:+14695311176"
              className="block text-sm text-slate-600"
            >
              (469) 531-1176
            </a>

            <Link
              href="/contact"
              className="block text-center rounded-full bg-[#1f8a84] px-6 py-3 text-white font-semibold"
            >
              Request Proposal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}