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
      "We understand the importance of onboarding requirements such as insurance documentation, contract compliance, scope clarification, invoicing discipline, and project coordination across agency and contractor stakeholders.",
  },
  {
    title: "Field-Aware Delivery",
    description:
      "Our approach is built around real deployment conditions, helping bridge engineering intent, documentation, and construction execution across active telecom infrastructure programs.",
  },
  {
    title: "Scalable Support Model",
    description:
      "Odiscom supports public-sector work with a practical model that can align engineering, field coordination, and project delivery support across single-site and multi-site programs.",
  },
];

const contractReadiness = [
  "Clear communication and scope-focused coordination",
  "Construction-ready documentation support",
  "Execution-minded planning aligned with field conditions",
  "Support across fiber, wireless, tower, and telecom infrastructure work",
  "Responsiveness for active public-sector and contractor-led programs",
];

const publicSectorItems = [
  {
    label: "Agency / Municipal Support",
    text:
      "Support for municipalities, agencies, and public-sector entities requiring telecom infrastructure planning, engineering coordination, and practical delivery alignment.",
  },
  {
    label: "Prime / Subcontractor Alignment",
    text:
      "Support for public-sector project environments where coordination between owners, primes, subcontractors, and field teams must stay clear and organized.",
  },
  {
    label: "Infrastructure Program Delivery",
    text:
      "Execution-focused support for programs involving fiber deployment, wireless upgrades, tower work, and associated telecom infrastructure needs.",
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
            practical telecom engineering, field-aware coordination, and
            construction-ready delivery across fiber, wireless, tower, and
            infrastructure projects.
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
          </div>
        </div>
      </section>

      {/* CAPABILITIES STRIP */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {capabilityPoints.map((point) => (
              <div
                key={point}
                className="rounded-[1.25rem] border border-slate-200 bg-[#f7fbfb] px-5 py-5"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1f8a84]">
                  Capability
                </p>
                <p className="mt-2 leading-7 text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">
              Public-sector positioning
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Built to support agency, municipal, and public infrastructure work
            </h2>
          </div>

          <div className="lg:pl-8">
            <p className="text-lg leading-8 text-slate-600">
              Government projects move best when planning, documentation, field
              conditions, and delivery expectations stay aligned. Odiscom
              supports telecom infrastructure programs with a practical approach
              focused on execution, coordination, and clear deliverables.
            </p>
          </div>
        </div>
      </section>

      {/* READINESS GRID */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-2">
          {readinessItems.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold leading-tight tracking-tight text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CONTRACT READINESS */}
      <section className="bg-[#f7fbfb] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">
              Contract readiness
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
              Ready to support structured public-sector project environments
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Odiscom is built around the realities of structured project
              delivery where documentation quality, responsiveness, coordination,
              and execution discipline matter.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <ul className="space-y-4 text-slate-700">
              {contractReadiness.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#1f8a84]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS / BUSINESS PROFILE */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">
              Business profile
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-900">
              Positioned for public-sector engagement
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Odiscom’s structure and project approach are designed to support
              serious infrastructure work requiring dependable communication,
              professional documentation, and practical delivery support.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              As part of our ongoing public-sector positioning, we can discuss
              procurement pathway alignment, vendor onboarding materials,
              insurance documentation, and contract support needs directly with
              agencies, primes, and public-sector stakeholders.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">
              Certifications and registrations
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-900">
              Ready to discuss procurement and vendor qualifications
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              If your project requires specific procurement documentation,
              registration details, ownership information, or qualification
              materials, Odiscom can provide the appropriate information during
              the engagement process.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              For agency, municipal, utility, or public-sector opportunities,
              we are prepared to discuss onboarding requirements, contract
              readiness, and the best path for engagement.
            </p>
          </div>
        </div>
      </section>

      {/* PUBLIC SECTOR FOCUS */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">
              Public-sector focus areas
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
              Support across agency, municipal, and infrastructure programs
            </h2>
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            {publicSectorItems.map((item) => (
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

      {/* RELATED LINKS */}
      <section className="bg-[#f7fbfb] py-20">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">
            Explore More
          </p>

          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
            Related services and project experience
          </h2>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/services/fiber"
              className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-[#1f8a84] transition hover:bg-white"
            >
              Fiber
            </Link>
            <Link
              href="/services/wireless"
              className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-[#1f8a84] transition hover:bg-white"
            >
              Wireless
            </Link>
            <Link
              href="/services/towers"
              className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-[#1f8a84] transition hover:bg-white"
            >
              Towers
            </Link>
            <Link
              href="/services/construction"
              className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-[#1f8a84] transition hover:bg-white"
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
        </div>
      </section>

      <BottomCta
        title="Need support on a government or public-sector telecom project?"
        description="Tell us what you're building, or book time with our team to get started quickly."
      />
    </main>
  );
}