"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b transition-all",
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm"
          : "bg-white border-transparent shadow-none",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logos/odiscom-logo.png"
            alt="Odiscom"
            width={420}
            height={120}
            priority
            className="h-[95px] w-auto"
          />
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          <Link href="/services" className="hover:text-black">
            Services
          </Link>
          <Link href="/projects" className="hover:text-black">
            Projects
          </Link>
          <Link href="/clients" className="hover:text-black">
            Clients
          </Link>
          <Link href="/government" className="hover:text-black">
            Government
          </Link>
          <Link href="/careers" className="hover:text-black">
            Careers
          </Link>
          <Link href="/contact" className="hover:text-black">
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href="/request-proposal"
          className="rounded-lg bg-black px-5 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          Request Proposal
        </Link>
      </div>
    </header>
  );
}