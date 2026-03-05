import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid gap-8 md:grid-cols-3">

          <div>
            <h3 className="text-lg font-semibold">ODISCOM</h3>
            <p className="mt-2 text-sm text-slate-600">
              Telecommunications engineering and infrastructure support
              serving operators, tower owners, and broadband programs
              nationwide.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-2 space-y-2 text-sm text-slate-600">
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/clients">Clients</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Headquarters</h4>
            <p className="mt-2 text-sm text-slate-600">
              League City, Texas
            </p>
            <p className="text-sm text-slate-600">
              AT&T Vendor ID: 6345PBB
            </p>
          </div>

        </div>

        <div className="mt-8 border-t pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Odiscom. All rights reserved.
        </div>

      </div>
    </footer>
  );
}