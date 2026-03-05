import Link from "next/link";
import Image from "next/image";

const clients = [
  { name: "AT&T", logo: "/logos/att.png" },
  { name: "Verizon", logo: "/logos/verizon.png" },
  { name: "TDS Telecom", logo: "/logos/tds.png" },
  { name: "Vertical Bridge", logo: "/logos/vertical-bridge-logo.svg" },
  { name: "Zayo", logo: "/logos/zayo.svg" },
  { name: "EBI Consulting", logo: "/logos/EBI.svg" },
  { name: "Smartlink", logo: "/logos/smartlink.png" },
  { name: "SONIC", logo: "/logos/sonic.png" },
];

const services = [
  {
    title: "Telecom Engineering",
    desc: "OSP engineering, fielding, permitting, and construction-ready design packages.",
  },
  {
    title: "Fiber Infrastructure",
    desc: "Metro and long-haul deployment support from plan through closeout.",
  },
  {
    title: "Tower Services",
    desc: "Inspections, maintenance support, repairs, and structural coordination.",
  },
  {
    title: "Construction Management",
    desc: "Schedule, QA/QC, safety coordination, and deployment execution.",
  },
];

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative border-b bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091870622-1e7c2f9d1f5c')] bg-cover bg-center opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          <p className="text-sm font-medium text-slate-600">
            Telecommunications • Fiber • Towers • Construction
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Engineering America’s Digital Infrastructure
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            Odiscom provides telecommunications engineering, fiber infrastructure
            development, and tower services supporting nationwide network
            deployment.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/request-proposal"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white hover:bg-slate-800"
            >
              Request Proposal
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
            >
              View Services
            </Link>
          </div>

          {/* Credibility strip */}
          <div className="mt-10 grid gap-4 rounded-2xl border bg-white p-5 shadow-sm md:grid-cols-4">
            <Stat label="Founded" value="2015" />
            <Stat label="Coverage" value="Nationwide" />
            <Stat label="Delivery" value="Engineering + Construction" />
            <Stat label="Response" value="Rapid mobilization" />
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Trusted by telecommunications operators and infrastructure owners
            </h2>
            <p className="mt-2 text-slate-600">
              Selected clients and partners.
            </p>
          </div>

          <Link
            href="/clients"
            className="text-sm font-medium text-slate-900 hover:underline"
          >
            View Clients →
          </Link>
        </div>

        {/* Logos grid */}
        <div className="mt-8 grid items-center gap-6 sm:grid-cols-2 md:grid-cols-4">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center rounded-xl border bg-white p-6 shadow-sm"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={180}
                height={70}
                className="h-[48px] w-auto object-contain grayscale hover:grayscale-0 transition"
                priority={false}
              />
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Logos are displayed for recognition; additional references available upon request.
        </p>
      </section>

      {/* SERVICES */}
      <section className="border-y bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <h2 className="text-2xl font-semibold tracking-tight">Services</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            From engineering and permitting to construction execution and closeout,
            Odiscom supports full lifecycle deployment.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border bg-white p-6 shadow-sm"
              >
                <div className="text-lg font-semibold text-slate-900">
                  {s.title}
                </div>
                <p className="mt-2 text-slate-600">{s.desc}</p>
                <div className="mt-4">
                  <Link
                    href="/services"
                    className="text-sm font-medium text-slate-900 hover:underline"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="text-2xl font-semibold tracking-tight">Featured work</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Representative examples of the type of work we support. Project details
          and references available upon request.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <FeatureCard
            title="Tower rehabilitation support"
            desc="Structural coordination, field documentation, repair scope development, and closeout packages."
          />
          <FeatureCard
            title="Multi-state fiber route engineering"
            desc="Design support, permitting coordination, constructability review, and deployment documentation."
          />
          <FeatureCard
            title="Metro fiber build support"
            desc="Fielding, OSP plan sets, make-ready coordination, and QA/QC for construction execution."
          />
        </div>
      </section>

      {/* GOVERNMENT */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-8 rounded-3xl border bg-white p-8 shadow-sm md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Government & public sector support
            </h2>
            <p className="mt-2 text-slate-600">
              Capability-aligned delivery for telecom modernization, broadband
              expansion, and infrastructure programs.
            </p>

            <ul className="mt-5 grid gap-2 text-sm text-slate-700">
              <li>• Documentation-first engineering and closeout packages</li>
              <li>• Multi-market coordination and rapid mobilization</li>
              <li>• Safety-minded execution and QA/QC discipline</li>
            </ul>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/government"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
              >
                Government capabilities
              </Link>
              <Link
                href="/request-proposal"
                className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white hover:bg-slate-800"
              >
                Request proposal
              </Link>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-50 p-6">
            <div className="text-sm font-semibold text-slate-900">
              What we deliver
            </div>
            <div className="mt-4 grid gap-3 text-sm text-slate-700">
              <Pill text="Telecom engineering support packages" />
              <Pill text="Fiber deployment coordination" />
              <Pill text="Tower services and maintenance support" />
              <Pill text="Construction management and closeout" />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-14 text-white">
          <h2 className="text-2xl font-semibold tracking-tight">
            Let’s build what’s next.
          </h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Tell us what market you’re working in and what you need
            deployed—engineering, construction support, or full lifecycle
            delivery.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/request-proposal"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-medium text-slate-950 hover:bg-white/90"
            >
              Request Proposal
            </Link>
            <Link
              href="/careers"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-sm font-medium hover:bg-white/10"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-slate-50 p-4">
      <div className="text-xs font-medium text-slate-600">{label}</div>
      <div className="mt-1 text-lg font-semibold text-slate-900">{value}</div>
    </div>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="text-lg font-semibold text-slate-900">{title}</div>
      <p className="mt-2 text-slate-600">{desc}</p>
    </div>
  );
}

function Pill({ text }: { text: string }) {
  return <div className="rounded-xl border bg-white px-4 py-3">{text}</div>;
}