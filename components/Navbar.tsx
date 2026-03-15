"use client"

import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link href="/">
          <Image
            src="/logos/odiscom.png"
            alt="Odiscom"
            width={260}
            height={60}
          />
        </Link>

        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/clients">Clients</Link>
          <Link href="/events">Events</Link>
          <Link href="/government">Government</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link
          href="/contact"
          className="bg-[#0b1638] text-white px-5 py-2 rounded-lg font-semibold"
        >
          Request Proposal
        </Link>

      </div>
    </header>
  )
}