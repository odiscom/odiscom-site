import type { Metadata } from "next";
import Link from "next/link";
import BottomCta from "@/components/BottomCta";

export const metadata: Metadata = {
  title: "Telecom Services",
  description:
    "Odiscom provides fiber engineering, wireless infrastructure support, tower services, and construction-ready telecom project delivery across Texas and nationwide.",
};

const services = [
  {
    label: "Fiber",
    title: "OSP engineering and fiber infrastructure support",
    description:
      "Route development, fielding, utility coordination, permitting support, and construction-ready documentation aligned with active deployment schedules.",
    href: "/services/fiber",
    bullets: [
      "OSP engineering and route planning",
      "Field verification and design support",
      "Permit and utility coordination",
      "Aerial and underground fiber support",
    ],
  },
  {
    label: "Wireless",
    title: "Wireless infrastructure and site support",
    description:
      "Support for wireless and telecom programs requiring site documentation, upgrade coordination, and execution-minded project delivery.",
    href: "/services/wireless",
    bullets: [
      "Site documentation and field support",
      "Carrier upgrade coordination",
      "Infrastructure program support",
      "Deployment-focused execution planning",
    ],
  },
  {
    label: "Towers",
    title: "Tower and vertical infrastructure support",
    description:
      "Practical support for tower projects, structural coordination, field execution planning, and documentation that helps crews move efficiently.",
    href: "/services/towers",
    bullets: [
      "Tower project coordination",
      "Upgrade and modification support",
      "Field-driven documentation",
      "Vertical infrastructure execution support",
    ],
  },
  {
    label: "Construction",
    title: "Construction-ready telecom project delivery",
    description:
      "Documentation, coordination, and planning built around real field conditions so projects are ready for execution instead of rework.",
    href: "/services/construction",
    bullets: [
      "Construction package support",
      "Execution-focused planning",
      "Contractor coordination",
      "Project delivery alignment",
    ],
  },
];

const supportPoints = [
  "Fiber route development and OSP support",
  "Wireless and tower project coordination",
  "Construction-minded documentation",
  "Nationwide telecom deployment support",
];

export default function ServicesPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-[#f7fbfb]">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
            Services
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Telecom support built for real-world deployment
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Odiscom supports fiber, wireless, tower, and telecom infrastructure
            programs with practical engineering, field-aware coordination, and
            construction-ready delivery.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-[#1f8a84] px-8 py-4 font-semibold text-white transition hover:bg-[#18716c]"
            >
              Request Proposal
            </Link>

            <a
              href="https://outlook.office.com/book/Odiscom@odiscom.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-[#1f8a84] transition hover:bg-[#f0f7f7]"
            >
              Book a Meeting
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {supportPoints.map((point) => (
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

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="inline-flex w-fit rounded-full bg-[#e8f6f5] px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#1f8a84]">
                {service.label}
              </div>

              <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-slate-900">
                {service.title}
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                {service.description}
              </p>

              <ul className="mt-6 space-y-3 text-slate-700">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#1f8a84]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-2">
                <Link
                  href={service.href}
                  className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 font-semibold text-[#1f8a84] transition hover:border-[#1f8a84] hover:bg-[#f0f7f7]"
                >
                  Learn More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f7fbfb] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">
              Delivery approach
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
              Built to support active telecom programs
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Odiscom works in project environments where engineering, field
              conditions, documentation, and construction schedules must stay
              aligned to keep work moving.
            </p>

            <p>
              Our approach is practical and execution-minded. We focus on
              deliverables that support real deployment, reduce friction in the
              field, and help infrastructure projects move from planning to
              completion with fewer delays.
            </p>
          </div>
        </div>
      </section>

      <BottomCta
        title="Need support on a fiber, wireless, tower, or telecom infrastructure project?"
        description="Tell us what you're building, or book time with our team to get started quickly."
      />
    </main>
  );
}
<div className="mt-16 text-center">
  <a
    href="/case-studies"
    className="rounded-full border border-slate-300 px-8 py-4 font-semibold text-[#1f8a84] transition hover:bg-[#f0f7f7]"
  >
    View Project Experience
  </a>
</div>