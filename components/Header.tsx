// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Exact match for most pages, but allow sub-routes (ex: /events/calendar)
  const isActive =
    pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    <Link
      href={href}
      className={[
        "relative text-sm font-medium transition-colors",
        isActive ? "text-slate-900" : "text-slate-600 hover:text-slate-900",
      ].join(" ")}
    >
      {children}
      {/* underline indicator */}
      <span
        className={[
          "absolute -bottom-2 left-0 h-[2px] w-full rounded-full transition-opacity",
          isActive ? "opacity-100 bg-slate-900" : "opacity-0",
        ].join(" ")}
      />
    </Link>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logos/odiscom-logo.png"
            alt="Odiscom"
            width={1000}
            height={260}
            priority
            className="h-20 w-auto md:h-22"
          />
        </Link>

        {/* Main nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/clients">Clients</NavLink>
          <NavLink href="/events/calendar">Events</NavLink>
          <NavLink href="/government">Government</NavLink>
          <NavLink href="/careers">Careers</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>

        {/* CTA */}
        <Link
          href="/request-proposal"
          className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
        >
          Request Proposal
        </Link>
      </div>
    </header>
  );
}