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
        isScrolled ? "bg-white/95 shadow-sm backdrop-blur" : "bg-white/78 backdrop-blur"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 transition-all duration-300 ${
          isScrolled ? "h-[73px]" : "h-[84px]"
        }`}
      >
        <div
          className={`flex min-w-0 items-center transition-all duration-300 ${
            isScrolled ? "gap-8" : "gap-6"
          }`}
        >
          <Link href="/" className="flex shrink-0 items-center">
            <img
              src="/logos/odiscom.png"
              alt="Odiscom"
              className={`object-contain transition-all duration-300 ${
                isScrolled ? "w-[150px]" : "w-[170px]"
              }`}
            />
          </Link>

          <nav
            className={`hidden min-w-0 items-center transition-all duration-300 lg:flex ${
              isScrolled ? "gap-3 xl:gap-4" : "gap-4 xl:gap-5"
            }`}
          >
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(item.href + "/");

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative rounded-full px-3 py-2 text-[15px] transition xl:text-[16px] ${
                    active
                      ? "bg-[#1f8a84]/10 font-semibold text-[#1f8a84]"
                      : "font-medium text-[#0f3f3b] hover:bg-[#1f8a84]/8 hover:text-[#1f8a84]"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-[6px] left-3 right-3 h-[3px] rounded-full bg-[#1f8a84] transition-all duration-300 ${
                      active
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                    }`}
                    style={{ transformOrigin: "left" }}
                  />
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="ml-6 flex shrink-0 items-center gap-4 transition-all duration-300">
          <a
            href="tel:+14695311176"
            className="hidden whitespace-nowrap text-[14px] font-medium text-[#0f3f3b] xl:block"
          >
            (469) 531-1176
          </a>

          <Link
            href="/contact"
            className={`btn btn-primary whitespace-nowrap ${
              isScrolled ? "btn-sm" : "btn-md"
            }`}
          >
            Request Proposal
          </Link>
        </div>
      </div>
    </header>
  );
}