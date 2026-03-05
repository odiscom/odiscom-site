import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <Link href="/" className="flex items-center">
         <Image
  src="/logos/odiscom-logo.png"
  alt="Odiscom"
  width={1000}
  height={260}
  priority
  className="h-20 w-auto md:h-22"
/>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          <Link href="/services" className="hover:text-black">Services</Link>
          <Link href="/projects" className="hover:text-black">Projects</Link>
          <Link href="/clients" className="hover:text-black">Clients</Link>
          <Link href="/government" className="hover:text-black">Government</Link>
          <Link href="/careers" className="hover:text-black">Careers</Link>
          <Link href="/contact" className="hover:text-black">Contact</Link>
        </nav>

        <Link
          href="/request-proposal"
          className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800"
        >
          Request Proposal
        </Link>
      </div>
    </header>
  );
}