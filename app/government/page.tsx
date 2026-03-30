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

const focusAreas = [
  {
    title: "Telecom Infrastructure Support",
    description:
      "Support for public-sector telecom and communications infrastructure projects requiring practical engineering, coordination, and field-aware delivery.",
  },
  {
    title: "Fiber Deployment Programs",
    description:
      "Route development, OSP support, utility coordination, and construction-ready documentation aligned with deployment goals and jurisdictional requirements.",
  },
  {
    title: "Tower and Wireless Programs",
    description:
      "Support for wireless infrastructure, tower upgrades, site coordination, and project documentation across active government and agency environments.",
  },
  {
    title: "Construction Delivery Support",
    description:
      "Execution-focused planning, documentation, and coordination that helps bridge engineering intent and real-world field conditions.",
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
              What we support
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Practical support for agency, municipal, and public infrastructure work
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

      {/* FOCUS AREAS */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-2">
          {focusAreas.map((item) => (
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