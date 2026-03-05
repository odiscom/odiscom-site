import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link href="/" className="text-xl font-bold text-black">
          ODISCOM
        </Link>

        <nav className="flex gap-8 text-sm font-medium text-gray-700">
          <Link href="/services" className="hover:text-black">Services</Link>
          <Link href="/projects" className="hover:text-black">Projects</Link>
          <Link href="/clients" className="hover:text-black">Clients</Link>
          <Link href="/government" className="hover:text-black">Government</Link>
          <Link href="/careers" className="hover:text-black">Careers</Link>
          <Link href="/contact" className="hover:text-black">Contact</Link>
        </nav>

        <Link
          href="/request-proposal"
          className="rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800"
        >
          Request Proposal
        </Link>

      </div>
    </header>
  );
}