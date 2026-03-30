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
  },
  {
    label: "Wireless",
    title: "Wireless infrastructure and site support",
    description:
      "Support for wireless programs requiring site documentation, upgrade coordination, and execution-focused delivery.",
    href: "/services/wireless",
  },
  {
    label: "Towers",
    title: "Tower and vertical infrastructure support",
    description:
      "Practical support for tower projects, structural coordination, and execution-minded project delivery.",
    href: "/services/towers",
  },
  {
    label: "Construction",
    title: "Construction-ready telecom project delivery",
    description:
      "Planning, documentation, and coordination built for real field conditions and active telecom construction programs.",
    href: "/services/construction",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
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
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
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

              <div className="mt-8">
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

      {/* CASE STUDIES CTA */}
      <section className="bg-[#f7fbfb] py-20">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
            Project Experience
          </p>

          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            See how we support real telecom projects
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Explore example project support across fiber, wireless, tower, and
            telecom infrastructure programs.
          </p>

          <div className="mt-10">
            <Link
              href="/case-studies"
              className="rounded-full bg-[#1f8a84] px-8 py-4 font-semibold text-white transition hover:bg-[#18716c]"
            >
              View Project Experience
            </Link>
          </div>
        </div>
      </section>

      <BottomCta
        title="Need support on a telecom infrastructure project?"
        description="Tell us what you're building, or book time with our team to get started quickly."
      />
    </main>
  );
}