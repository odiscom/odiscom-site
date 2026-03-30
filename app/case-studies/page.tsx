import type { Metadata } from "next";
import Link from "next/link";
import BottomCta from "@/components/BottomCta";

export const metadata: Metadata = {
  title: "Project Experience",
  description:
    "Explore representative Odiscom project experience across fiber, wireless, tower, and telecom construction support programs.",
};

const caseStudies = [
  {
    category: "Fiber Infrastructure",
    title: "OSP route development and construction-ready fiber support",
    summary:
      "Representative support for fiber deployment programs requiring route development, field verification, utility coordination, and execution-minded documentation.",
    challenge:
      "Fiber programs often face delays when route planning, field conditions, permitting needs, and construction requirements are not aligned early.",
    approach:
      "Odiscom supports these efforts by helping move projects from early planning into coordinated, buildable documentation that reflects real field conditions and deployment realities.",
    outcomes: [
      "Improved alignment between planning and field execution",
      "Documentation built to support smoother permitting and construction",
      "Reduced risk of rework caused by field-condition disconnects",
    ],
    relatedService: "/services/fiber",
    serviceLabel: "Explore Fiber Services",
  },
  {
    category: "Wireless Infrastructure",
    title: "Wireless site coordination and carrier upgrade support",
    summary:
      "Representative support for wireless infrastructure programs involving site documentation, upgrade coordination, and delivery-focused execution support.",
    challenge:
      "Wireless programs move fastest when engineering, site conditions, schedules, and deployment teams stay aligned across multiple moving parts.",
    approach:
      "Odiscom provides practical support that helps connect documentation, coordination, and field execution so wireless projects can move with fewer slowdowns.",
    outcomes: [
      "Clearer delivery coordination across active wireless work",
      "Better alignment between documentation and field conditions",
      "Execution-minded support for multi-site infrastructure programs",
    ],
    relatedService: "/services/wireless",
    serviceLabel: "Explore Wireless Services",
  },
  {
    category: "Tower Infrastructure",
    title: "Tower modifications and vertical infrastructure delivery support",
    summary:
      "Representative support for tower projects involving upgrades, modifications, field coordination, and project delivery alignment.",
    challenge:
      "Tower programs require strong coordination between engineering intent, structural considerations, field access, and practical execution timelines.",
    approach:
      "Odiscom supports these environments with field-aware coordination and documentation intended to help teams execute instead of creating unnecessary friction.",
    outcomes: [
      "Better coordination around active tower upgrade work",
      "Improved readiness for field execution",
      "Support designed around practical deployment conditions",
    ],
    relatedService: "/services/towers",
    serviceLabel: "Explore Tower Services",
  },
  {
    category: "Construction Support",
    title: "Construction-ready telecom delivery and field support",
    summary:
      "Representative support for telecom construction programs requiring execution-focused planning, contractor coordination, and field-ready documentation.",
    challenge:
      "Telecom construction efforts can lose time when planning documents and field execution requirements are not aligned around how crews actually build.",
    approach:
      "Odiscom focuses on practical delivery support that helps bridge planning, contractors, and field execution so projects are better prepared to move forward.",
    outcomes: [
      "Construction-minded documentation and coordination",
      "Improved alignment between project teams and field execution",
      "Support built around real deployment conditions",
    ],
    relatedService: "/services/construction",
    serviceLabel: "Explore Construction Services",
  },
];

const capabilityPoints = [
  "Fiber route development and OSP support",
  "Wireless and carrier deployment coordination",
  "Tower upgrade and vertical infrastructure support",
  "Construction-ready telecom delivery",
];

export default function CaseStudiesPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-[#f7fbfb]">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
            Project Experience
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Representative experience across telecom infrastructure programs
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Odiscom supports fiber, wireless, tower, and telecom construction
            efforts with practical engineering, field-aware coordination, and
            execution-focused delivery. The examples below reflect the types of
            project environments and support needs we are built to handle.
          </p>
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
              How we support projects
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Built around real field conditions and delivery timelines
            </h2>
          </div>

          <div className="lg:pl-8">
            <p className="text-lg leading-8 text-slate-600">
              Our work is shaped by project environments where engineering,
              documentation, utility requirements, field access, and
              construction execution must stay aligned to keep work moving.
            </p>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid gap-8">
          {caseStudies.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <div className="inline-flex rounded-full bg-[#e8f6f5] px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#1f8a84]">
                    {item.category}
                  </div>

                  <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-900">
                    {item.title}
                  </h2>

                  <p className="mt-4 leading-8 text-slate-600">
                    {item.summary}
                  </p>

                  <div className="mt-8">
                    <Link
                      href={item.relatedService}
                      className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 font-semibold text-[#1f8a84] transition hover:border-[#1f8a84] hover:bg-[#f0f7f7]"
                    >
                      {item.serviceLabel}
                    </Link>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-1">
                  <div className="rounded-[1.5rem] border border-slate-200 bg-[#f7fbfb] p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1f8a84]">
                      Challenge
                    </p>
                    <p className="mt-3 leading-7 text-slate-700">
                      {item.challenge}
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] border border-slate-200 bg-[#f7fbfb] p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1f8a84]">
                      Approach
                    </p>
                    <p className="mt-3 leading-7 text-slate-700">
                      {item.approach}
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] border border-slate-200 bg-[#f7fbfb] p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1f8a84]">
                      Outcomes
                    </p>
                    <ul className="mt-3 space-y-3 text-slate-700">
                      {item.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-start gap-3">
                          <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#1f8a84]" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* NOTE */}
      <section className="bg-[#f7fbfb] py-20">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">
            Experience Note
          </p>

          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
            Representative examples, built around real delivery conditions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            This page is intended to show the types of telecom infrastructure
            support Odiscom provides across active programs. If you want to
            discuss a specific project environment, delivery model, or scope, we
            can walk through that directly.
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="rounded-full bg-[#1f8a84] px-8 py-4 font-semibold text-white transition hover:bg-[#18716c]"
            >
              Discuss Your Project
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