import type { Metadata } from "next";
import Link from "next/link";
import BottomCta from "@/components/BottomCta";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore example Odiscom project experience across fiber, wireless, tower, and telecom infrastructure support programs.",
};

const caseStudies = [
  {
    category: "Fiber Infrastructure",
    title: "Route development and OSP support",
    description:
      "Support for field verification, route planning, utility coordination, and construction-ready documentation across active fiber deployment programs.",
  },
  {
    category: "Wireless Infrastructure",
    title: "Carrier upgrade coordination",
    description:
      "Execution-minded support for wireless programs requiring documentation alignment, field awareness, and delivery coordination across multiple sites.",
  },
  {
    category: "Tower Infrastructure",
    title: "Tower modifications and upgrade support",
    description:
      "Practical support for tower projects involving upgrade coordination, documentation flow, and field execution alignment.",
  },
  {
    category: "Construction Support",
    title: "Construction-ready telecom delivery",
    description:
      "Support built around real field conditions to help projects move from planning into execution with clearer documentation and better coordination.",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-[#f7fbfb]">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
            Project Experience
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Example project support across telecom infrastructure programs
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Odiscom supports telecom infrastructure work with practical
            engineering, field-aware coordination, and execution-minded
            delivery. Below are representative examples of the types of programs
            we support.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-2">
          {caseStudies.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="inline-flex rounded-full bg-[#e8f6f5] px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#1f8a84]">
                {item.category}
              </div>

              <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-slate-900">
                {item.title}
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f7fbfb] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">
              Delivery mindset
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
              Built to support active infrastructure programs
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Our work is shaped around project environments where engineering,
              documentation, field conditions, and delivery timelines must stay
              aligned to keep work moving.
            </p>

            <p>
              We focus on practical support that helps infrastructure programs
              execute with fewer delays, clearer coordination, and stronger
              alignment between planning and the field.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">
            Explore services
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/services/fiber"
              className="rounded-full border border-slate-300 px-4 py-2 font-semibold text-[#1f8a84] transition hover:bg-[#f0f7f7]"
            >
              Fiber
            </Link>
            <Link
              href="/services/wireless"
              className="rounded-full border border-slate-300 px-4 py-2 font-semibold text-[#1f8a84] transition hover:bg-[#f0f7f7]"
            >
              Wireless
            </Link>
            <Link
              href="/services/towers"
              className="rounded-full border border-slate-300 px-4 py-2 font-semibold text-[#1f8a84] transition hover:bg-[#f0f7f7]"
            >
              Towers
            </Link>
            <Link
              href="/services/construction"
              className="rounded-full border border-slate-300 px-4 py-2 font-semibold text-[#1f8a84] transition hover:bg-[#f0f7f7]"
            >
              Construction
            </Link>
          </div>
        </div>
      </section>

      <BottomCta
        title="Want to discuss a similar project?"
        description="Tell us what you're building, or book time with our team to get started quickly."
      />
    </main>
  );
}