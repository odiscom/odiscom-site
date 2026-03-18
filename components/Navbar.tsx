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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-200 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur shadow-sm" : "bg-white/78 backdrop-blur"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 transition-all duration-300 ${
          isScrolled ? "h-[73px]" : "h-[84px]"
        }`}
      >
        <div className={`flex items-center transition-all duration-300 ${isScrolled ? "gap-9" : "gap-7"}`}>
          <Link href="/" className="flex items-center shrink-0">
            <img
              src="/logos/odiscom.png"
              alt="Odiscom"
              className={`object-contain transition-all duration-300 ${
                isScrolled ? "w-[150px]" : "w-[170px]"
              }`}
            />
          </Link>

          <nav className={`hidden lg:flex items-center transition-all duration-300 ${isScrolled ? "gap-6" : "gap-5"}`}>
            {navItems.map((item) => {
              // Active logic that supports subroutes (ex: /services/* stays active)
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(item.href + "/");

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative rounded-full px-3 py-2 text-[16px] transition ${
                    active
                      ? "font-semibold text-[#1f8a84] bg-[#1f8a84]/10"
                      : "font-medium text-[#0f3f3b] hover:text-[#1f8a84] hover:bg-[#1f8a84]/8"
                  }`}
                >
                  {item.label}

                  {/* underline: always visible when active, animates in on hover otherwise */}
                  <span
                    className={`absolute -bottom-[6px] left-3 right-3 h-[3px] rounded-full bg-[#1f8a84] transition-all duration-300 ${
                      active
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                    }`}
                    style={{ transformOrigin: "left" }}
                  />
                </Link>
              );
            })}
          </nav>
        </div>

        <div className={`flex items-center transition-all duration-300 ${isScrolled ? "gap-5" : "gap-4"}`}>
          <a
            href="tel:+14695311176"
            className="hidden xl:block whitespace-nowrap pl-3 text-[14px] font-medium text-[#0f3f3b]"
          >
            (469) 531-1176
          </a>

          {/* Centralized button rule: teal background => white text */}
          <Link
            href="/contact"
            className={`btn btn-teal whitespace-nowrap font-semibold transition-all duration-300 ${
              isScrolled ? "px-5 py-2.5 text-[15px]" : "px-6 py-3 text-[15px]"
            }`}
          >
            Request Proposal
          </Link>
        </div>
      </div>
    </header>
  );
}