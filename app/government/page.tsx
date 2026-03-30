import type { Metadata } from "next";
import Link from "next/link";
import BottomCta from "@/components/BottomCta";

export const metadata: Metadata = {
  title: "Government",
  description:
    "Odiscom supports government and public-sector telecom infrastructure programs with practical engineering, field-aware coordination, and construction-ready delivery across fiber, wireless, tower, and telecom projects.",
};

const coreCapabilities = [
  "Fiber and OSP engineering support",
  "Wireless and tower infrastructure coordination",
  "Construction-ready documentation and delivery support",
  "Execution-minded support for public-sector programs",
];

const differentiators = [
  {
    title: "Built for real deployment environments",
    text: "Odiscom approaches public-sector telecom work with a field-aware mindset that connects engineering intent, documentation, and actual construction conditions.",
  },
  {
    title: "Practical, execution-focused delivery",
    text: "We prioritize clear coordination, responsive communication, and deliverables that help projects move instead of creating extra friction in the field.",
  },
  {
    title: "Support across multiple infrastructure types",
    text: "Our capabilities align with fiber, wireless, tower, and broader telecom infrastructure environments where agencies and public-sector stakeholders need dependable support.",
  },
  {
    title: "Structured for serious project environments",
    text: "We understand the importance of scope clarity, documentation discipline, onboarding requirements, and organized coordination in public-sector contracting.",
  },
];

const readinessItems = [
  "Vendor onboarding and contract support",
  "Insurance and compliance documentation coordination",
  "Scope-focused project communication",
  "Construction-ready documentation support",
  "Field-aware execution planning",
  "Support across active infrastructure programs",
];

const procurementItems = [
  {
    label: "Agency and municipal support",
    text: "Support for municipalities, agencies, utilities, and public-sector entities requiring telecom infrastructure coordination and delivery support.",
  },
  {
    label: "Prime and subcontract alignment",
    text: "Support for project environments where owners, primes, subcontractors, and field teams must stay aligned across scope, schedule, and execution.",
  },
  {
    label: "Infrastructure program delivery",
    text: "Execution-minded support for public-sector efforts involving fiber deployment, wireless upgrades, tower work, and telecom construction support.",
  },
];

const engagementCards = [
  {
    title: "Government and municipal telecom projects",
    text: "We support public-sector work where telecom infrastructure planning, engineering, and construction delivery must stay coordinated and execution-ready.",
  },
  {
    title: "Public broadband and connectivity initiatives",
    text: "Odiscom is well aligned for projects that require practical support across fiber route development, field coordination, and infrastructure delivery.",
  },
  {
    title: "Utility, agency, and contractor-led programs",
    text: "Our approach fits structured environments where documentation quality, field awareness, and timely coordination are essential.",
  },
];

export default function GovernmentPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-[linear-gradient(180deg,#f7fbfb_0%,#eef7f6_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1f8a84]">
              Government
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Public-sector telecom support built for real-world delivery
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Odiscom supports government and public-sector telecom
              infrastructure programs with practical engineering, field-aware
              coordination, and construction-ready delivery across fiber,
              wireless, tower, and telecom project environments.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#1f8a84] px-8 py-4 font-semibold text-white transition hover:bg-[#18716c]"
              >
                Contact Odiscom
              </Link>

              <Link
                href="/case-studies"
                className="rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-[#1f8a84] transition hover:bg-[#f0f7f7]"
              >
                View Project Experience
              </Link>

              <a
                href="/Odiscom-Capability-Statement.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-[#1f8a84] transition hover:bg-[#f0f7f7]"
              >
                Download Capability Statement
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITY STRIP */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-10 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {coreCapabilities.map((item) => (
            <div
              key={item}
              className="rounded-[1.25rem] border border-slate-200 bg-[#f7fbfb] px-5 py-5"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1f8a84]">
                Capability
              </p>
              <p className="mt-2 leading-7 text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY ODISCOM */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">
              Why Odiscom
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Built for telecom infrastructure delivery, not just theory
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Public-sector projects succeed when planning, documentation, field
              conditions, and execution stay aligned. Odiscom is structured
              around practical project support in environments where real
              deployment conditions matter.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {differentiators.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTRACT READINESS */}
      <section className="bg-[#f7fbfb] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">
              Contract readiness
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
              Ready for structured public-sector project environments
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Odiscom is built around the realities of environments where
              documentation quality, responsiveness, scope discipline, and
              coordinated delivery matter.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <ul className="space-y-4 text-slate-700">
              {readinessItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#1f8a84]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROCUREMENT / PROFILE */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">
              Business profile
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-900">
              Positioned for public-sector engagement
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Odiscom is positioned to support federal, state, local, utility,
              and municipal telecom infrastructure work requiring dependable
              communication, organized project support, and practical delivery
              coordination.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Our work aligns with telecommunications engineering,
              infrastructure development, and construction support categories
              commonly used across public-sector procurement environments.
            </p>
          </article>

          <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">
              Registrations and qualifications
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-900">
              Ready to discuss onboarding and procurement requirements
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              If your opportunity requires vendor onboarding details,
              registration information, insurance documentation, ownership
              information, or qualification materials, Odiscom can provide the
              appropriate information during the procurement and engagement
              process.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              We are prepared to support discussions around SAM alignment,
              vendor onboarding, compliance documentation, and contract
              readiness for public-sector opportunities.
            </p>

            <div className="mt-8">
              <Link
                href="/capability-statement"
                className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 font-semibold text-[#1f8a84] transition hover:bg-[#f0f7f7]"
              >
                View Capability Statement
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* PUBLIC-SECTOR FIT */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">
              Public-sector fit
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
              Support across agency, municipal, and infrastructure programs
            </h2>
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            {procurementItems.map((item) => (
              <article
                key={item.label}
                className="rounded-[2rem] border border-slate-200 bg-[#f7fbfb] p-8"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1f8a84]">
                  {item.label}
                </p>
                <p className="mt-4 leading-8 text-slate-700">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT TYPES */}
      <section className="bg-[#f7fbfb] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">
              Engagement types
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
              Well aligned for the types of projects government teams actually run
            </h2>
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            {engagementCards.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-4 leading-8 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED LINKS */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">
          Explore More
        </p>

        <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
          Related services and project experience
        </h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/services/fiber"
            className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-[#1f8a84] transition hover:bg-[#f0f7f7]"
          >
            Fiber
          </Link>
          <Link
            href="/services/wireless"
            className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-[#1f8a84] transition hover:bg-[#f0f7f7]"
          >
            Wireless
          </Link>
          <Link
            href="/services/towers"
            className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-[#1f8a84] transition hover:bg-[#f0f7f7]"
          >
            Towers
          </Link>
          <Link
            href="/services/construction"
            className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-[#1f8a84] transition hover:bg-[#f0f7f7]"
          >
            Construction
          </Link>
          <Link
            href="/case-studies"
            className="rounded-full bg-[#1f8a84] px-6 py-3 font-semibold text-white transition hover:bg-[#18716c]"
          >
            Project Experience
          </Link>
        </div>
      </section>

      <BottomCta
        title="Looking for a qualified telecom infrastructure partner?"
        description="We support government and public-sector programs with practical engineering, coordination, and construction-ready delivery."
      />
    </main>
  );
}