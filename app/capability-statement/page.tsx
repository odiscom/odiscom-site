import type { Metadata } from "next";
import Link from "next/link";
import BottomCta from "@/components/BottomCta";

export const metadata: Metadata = {
  title: "Capability Statement",
  description:
    "Odiscom capability statement for government, carrier, and infrastructure opportunities across fiber, wireless, towers, and telecom project delivery.",
};

const coreCompetencies = [
  "OSP / fiber route development and field-aware engineering support",
  "Wireless infrastructure coordination and carrier program support",
  "Tower upgrade, modification, and vertical infrastructure support",
  "Construction-ready documentation and execution-focused delivery support",
  "Permit support, utility coordination, and field verification workflows",
  "Project coordination aligned with real deployment conditions",
];

const differentiators = [
  "Practical, execution-minded approach built around real field conditions",
  "Support across fiber, wireless, tower, and telecom construction environments",
  "Responsive coordination designed to help projects move with fewer delays",
  "Documentation and delivery support focused on constructability and clarity",
  "Flexible support model for agencies, primes, contractors, and infrastructure partners",
];

const companyData = [
  ["Legal Name", "Odiscom LLC"],
  ["Website", "www.odiscom.com"],
  ["Email", "owners@odiscom.com"],
  ["Phone", "(469) 531-1176"],
  ["Headquarters", "League City, Texas"],
  ["Ownership", "51% woman-owned"],
  ["Public-Sector Readiness", "Capability statement and onboarding materials available"],
  ["Registrations", "UEI / CAGE / NAICS available upon request or to be added here"],
];

export default function CapabilityStatementPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-[#f7fbfb]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
            Odiscom LLC
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Capability Statement
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Odiscom supports government, carrier, contractor, and infrastructure
            programs with practical telecom engineering, field-aware
            coordination, and construction-ready delivery across fiber,
            wireless, towers, and telecom infrastructure.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-[#1f8a84] px-8 py-4 font-semibold text-white transition hover:bg-[#18716c]"
            >
              Contact Odiscom
            </Link>

            <a
              href="/Odiscom-Capability-Statement.pdf"
              className="rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-[#1f8a84] transition hover:bg-[#f0f7f7]"
            >
              Download PDF
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">
              Core Competencies
            </p>

            <ul className="mt-6 space-y-4 text-slate-700">
              {coreCompetencies.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#1f8a84]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-[#f7fbfb] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">
              Company Snapshot
            </p>

            <div className="mt-5 space-y-4">
              {companyData.map(([label, value]) => (
                <div key={label} className="border-b border-slate-200 pb-4 last:border-b-0">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
                    {label}
                  </p>
                  <p className="mt-1 text-slate-800">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#f7fbfb]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">
                Differentiators
              </p>

              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                Built around real deployment conditions, not abstract design
              </h2>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <ul className="space-y-4 text-slate-700">
                {differentiators.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#1f8a84]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-3">
          <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1f8a84]">
              Government
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Support for agency, municipal, and public-sector telecom
              infrastructure projects requiring practical engineering,
              coordination, and clear delivery support.
            </p>
          </article>

          <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1f8a84]">
              Carrier / Infrastructure
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Support across carrier, tower, contractor, and infrastructure
              partner programs involving fiber, wireless, tower, and telecom
              construction workflows.
            </p>
          </article>

          <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1f8a84]">
              Contract Readiness
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Capability statement, onboarding materials, and procurement
              support can be tailored for public-sector, prime contractor, and
              structured infrastructure opportunities.
            </p>
          </article>
        </div>
      </section>

      <BottomCta
        title="Need a qualified telecom infrastructure partner?"
        description="Tell us what you're building, and we can discuss scope, teaming, and delivery support."
      />
    </main>
  );
}
