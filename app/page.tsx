import Link from "next/link";
import Image from "next/image";

const clientLogos = [
  { src: "/logos/att.png", alt: "AT&T" },
  { src: "/logos/Verizon.png", alt: "Verizon" },
  { src: "/logos/TDS.png", alt: "TDS" },
  { src: "/logos/vertical-bridge-logo.svg", alt: "Vertical Bridge" },
  { src: "/logos/Zayo.svg", alt: "Zayo" },
  { src: "/logos/EBI.svg", alt: "EBI" },
  { src: "/logos/smartlink.png", alt: "Smartlink" },
  { src: "/logos/sonic.png", alt: "SONIC" },
  { src: "/logos/Nextlink.png", alt: "Nextlink" },
  { src: "/logos/crowncastle-logo.png", alt: "Crown Castle" },
  { src: "/logos/Ericsson-Symbol.png", alt: "Ericsson" },
  { src: "/logos/nokia.png", alt: "Nokia" },
  { src: "/logos/ATC.png", alt: "American Tower" },
  { src: "/logos/SBA.png", alt: "SBA Communications" },
];

export default function Page() {
  return (
    <>
      {/* Plain CSS (NOT styled-jsx) so this stays a Server Component */}
      <style>{`
        @keyframes odiscom-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: odiscom-marquee 28s linear infinite;
        }
        .marquee:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      <main className="bg-white">
        {/* HERO (no image) */}
        <section className="mx-auto max-w-7xl px-6 pt-10 pb-8">
          <p className="text-sm text-slate-600">
            Telecommunications • Fiber • Towers • Construction
          </p>

          <div className="mt-4 grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Engineering America’s Digital Infrastructure
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Odiscom provides telecommunications engineering, fiber infrastructure development,
                and tower services supporting nationwide network deployment.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/request-proposal"
                  className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
                >
                  Request Proposal
                </Link>
                <Link
                  href="/services"
                  className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
                >
                  View Services
                </Link>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-4">
                <StatCard label="Founded" value="2015" />
                <StatCard label="Coverage" value="Nationwide" />
                <StatCard label="Delivery" value="Engineering + Construction" />
                <StatCard label="Response" value="Rapid mobilization" />
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">
                  Fiber + Tower delivery, under one roof
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Practical design. Field-ready plans. Clean documentation. Safe execution.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li>• OSP / OSP Engineering</li>
                  <li>• Pole loading + make-ready support</li>
                  <li>• Tower A&E + construction support</li>
                  <li>• Program and vendor coordination</li>
                </ul>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-slate-900 hover:underline"
                >
                  Talk to us →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CLIENT LOGOS (scrolling marquee) */}
        <section className="border-t bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-10">
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  Trusted by telecommunications operators and infrastructure owners
                </h2>
                <p className="mt-2 text-sm text-slate-600">Selected clients and partners.</p>
              </div>

              <Link
                href="/clients"
                className="hidden text-sm font-semibold text-slate-900 hover:underline sm:inline-flex"
              >
                View Clients →
              </Link>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
              <div className="relative overflow-hidden rounded-2xl marquee">
                {/* Edge fades (match bg-slate-50) */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-50 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-50 to-transparent" />

                <div className="marquee-track flex w-[200%] items-center py-7">
                  {/* First pass */}
                  <LogoRow logos={clientLogos} />
                  {/* Second pass (duplicate for seamless loop) */}
                  <LogoRow logos={clientLogos} />
                </div>
              </div>

              <p className="px-6 pb-5 text-center text-xs text-slate-500">
                Logos are trademarks of their respective owners.
              </p>
            </div>
          </div>
        </section>

        {/* Next sections */}
        <section className="mx-auto max-w-7xl px-6 py-14">
          <h3 className="text-xl font-bold text-slate-900">What we do</h3>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            Add services, project highlights, certifications, safety culture, and government
            capabilities next.
          </p>
        </section>
      </main>
    </>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="text-xs font-medium text-slate-500">{label}</div>
      <div className="mt-1 text-base font-semibold text-slate-900">{value}</div>
    </div>
  );
}

function LogoRow({ logos }: { logos: { src: string; alt: string }[] }) {
  return (
    <div className="flex min-w-max items-center gap-12 px-10">
      {logos.map((logo) => (
        <div key={logo.src} className="flex items-center">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={200}
            height={70}
            className="h-10 w-auto object-contain"
          />
        </div>
      ))}
    </div>
  );
}