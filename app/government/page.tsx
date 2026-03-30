import type { Metadata } from "next";
import Link from "next/link";
import BottomCta from "@/components/BottomCta";

export const metadata: Metadata = {
  title: "Government",
  description:
    "Odiscom supports government and public-sector telecom infrastructure programs with practical engineering, fiber, wireless, tower, and construction-ready delivery support.",
};

const capabilityPoints = [
  "Fiber and OSP engineering support",
  "Wireless and tower infrastructure coordination",
  "Construction-ready documentation and delivery support",
  "Execution-minded support for public-sector programs",
];

const readinessItems = [
  {
    title: "Procurement Readiness",
    description:
      "Odiscom is positioned to support public-sector procurement environments that require clear scope alignment, professional documentation, responsive communication, and dependable project support.",
  },
  {
    title: "Vendor Onboarding Support",
    description:
      "We understand onboarding requirements including insurance documentation, compliance, invoicing discipline, and coordination across agencies and contractors.",
  },
  {
    title: "Field-Aware Delivery",
    description:
      "Our approach bridges engineering intent and real-world construction conditions to support efficient project execution.",
  },
  {
    title: "Scalable Support Model",
    description:
      "We support both single-site and large-scale infrastructure programs with consistent coordination and delivery support.",
  },
];

const contractReadiness = [
  "Clear communication and scope-focused coordination",
  "Construction-ready documentation support",
  "Execution-minded planning aligned with field conditions",
  "Support across fiber, wireless, tower, and telecom infrastructure",
  "Responsiveness for active public-sector programs",
];

const publicSectorItems = [
  {
    label: "Agency / Municipal Support",
    text:
      "Support for municipalities and agencies requiring telecom infrastructure planning, engineering coordination, and field-ready delivery.",
  },
  {
    label: "Prime / Subcontractor Alignment",
    text:
      "Coordination across primes, subcontractors, and stakeholders in structured project environments.",
  },
  {
    label: "Infrastructure Program Delivery",
    text:
      "Support for fiber deployment, wireless upgrades, tower work, and telecom infrastructure programs.",
  },
];

export default function GovernmentPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-[#f7fbfb]">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
            Government
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Public-sector telecom support built for real-world delivery
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Odiscom supports government and public-sector programs with
            practical telecom engineering, coordination, and construction-ready
            delivery across fiber, wireless, tower, and infrastructure projects.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-[#1f8a84] px-8 py-4 font-semibold text-white hover:bg-[#18716c]"
            >
              Contact Odiscom
            </Link>

            <Link
              href="/case-studies"
              className="rounded-full border border-slate-300 px-8 py-4 font-semibold text-[#1f8a84] hover:bg-[#f0f7f7]"
            >
              View Project Experience
            </Link>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {capabilityPoints.map((point) => (
            <div
              key={point}
              className="rounded-xl border border-slate-200 bg-[#f7fbfb] p-5"
            >
              <p className="text-sm font-semibold text-[#1f8a84] uppercase">
                Capability
              </p>
              <p className="mt-2 text-slate-700">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY ODISCOM */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase text-[#1f8a84]">
              Why Odiscom
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
              Built for real telecom infrastructure delivery — not theory
            </h2>

            <p className="mt-5 text-lg text-slate-600">
              Government projects succeed when engineering, coordination, and
              field execution stay aligned. Odiscom is structured around real
              deployment conditions.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <ul className="space-y-4 text-slate-700">
              <li>✔ Field-aware engineering</li>
              <li>✔ Execution-focused documentation</li>
              <li>✔ Fiber, wireless, and tower expertise</li>
              <li>✔ Built for active deployment environments</li>
              <li>✔ Multi-stakeholder coordination</li>
            </ul>
          </div>
        </div>
      </section>

      {/* READINESS */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8 grid gap-6 xl:grid-cols-2">
        {readinessItems.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 p-8 shadow-sm"
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-4 text-slate-600">{item.description}</p>
          </div>
        ))}
      </section>

      {/* CONTRACT READINESS */}
      <section className="bg-[#f7fbfb] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <p className="text-sm font-semibold uppercase text-[#1f8a84]">
              Contract readiness
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
              Ready for structured public-sector projects
            </h2>
          </div>

          <ul className="bg-white rounded-2xl p-8 shadow-sm space-y-4">
            {contractReadiness.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="h-2 w-2 bg-[#1f8a84] rounded-full mt-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 grid lg:grid-cols-2 gap-10">
        <div className="p-8 border rounded-2xl">
          <h2 className="text-2xl font-semibold">
            Positioned for public-sector engagement
          </h2>

          <p className="mt-4 text-slate-600">
            Odiscom is structured to support government contracting
            environments with clear documentation, coordination, and execution.
          </p>

          <p className="mt-4 text-slate-600">
            Our work aligns with telecommunications engineering and
            infrastructure categories commonly used across procurement systems.
          </p>
        </div>

        <div className="p-8 border rounded-2xl">
          <h2 className="text-2xl font-semibold">
            Certifications & registrations
          </h2>

          <p className="mt-4 text-slate-600">
            Odiscom is positioned to support federal, state, and municipal
            procurement processes and can provide registration, compliance, and
            onboarding documentation as required.
          </p>
        </div>
      </section>

      {/* PUBLIC SECTOR */}
      <section className="border-t py-20">
        <div className="mx-auto max-w-7xl px-6 grid gap-6 xl:grid-cols-3">
          {publicSectorItems.map((item) => (
            <div key={item.label} className="bg-[#f7fbfb] p-8 rounded-2xl">
              <p className="text-sm font-semibold text-[#1f8a84] uppercase">
                {item.label}
              </p>
              <p className="mt-4 text-slate-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <BottomCta
        title="Looking for a qualified telecom infrastructure partner?"
        description="We support government and public-sector programs with practical engineering, coordination, and construction-ready delivery."
      />
    </main>
  );
}