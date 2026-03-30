import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BottomCta from "@/components/BottomCta";

export const metadata: Metadata = {
  title: "Telecom Construction Support",
  description:
    "Odiscom provides construction-ready telecom support, execution-focused coordination, field documentation, and project delivery alignment for fiber, wireless, and tower programs.",
};

const supportItems = [
  "Construction-ready documentation",
  "Execution-focused planning",
  "Contractor coordination",
  "Field delivery alignment",
  "Support across fiber, wireless, and tower builds",
  "Practical deployment support for active programs",
];

export default function ConstructionPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-[#f7fbfb]">
        <div className="mx-auto grid max-w-7xl overflow-hidden lg:min-h-[620px] lg:grid-cols-2">
          <div className="flex items-center px-6 py-20 lg:px-8 lg:py-28">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
                Construction Support
              </p>

              <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                Construction-ready telecom
                <br className="hidden md:block" />
                delivery support
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Odiscom supports telecom construction programs with practical
                coordination, field-ready documentation, and execution-focused
                planning built for real deployment environments.
              </p>
            </div>
          </div>

          <div className="relative min-h-[320px] lg:min-h-full">
            <Image
              src="/images/Fiber/trenching_pic.jpg"
              alt="Telecom construction support"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1f8a84]/25" />
          </div>
        </div>
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">
            What we support
          </p>

          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            Practical support that helps telecom projects move into the field
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We help telecom projects move from planning into execution with
            documentation, coordination, and delivery support designed for field
            conditions and real construction workflows.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {supportItems.map((item) => (
            <div
              key={item}
              className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-[#1f8a84]" />
                <div className="h-px flex-1 bg-slate-200" />
              </div>
              <p className="text-base leading-7 text-slate-700">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
              Built around real construction conditions
            </h3>
            <p className="mt-4 leading-8 text-slate-600">
              Construction support only works when it reflects how crews
              actually build. Our approach helps teams stay aligned, avoid
              unnecessary delays, and keep work moving from planning through
              field execution.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              We focus on practical coordination that bridges engineering,
              contractors, and project stakeholders in active telecom programs.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-[#f7fbfb] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">
              Focus areas
            </p>
            <ul className="mt-5 space-y-4 text-slate-700">
              <li>Construction package support</li>
              <li>Execution-focused planning</li>
              <li>Contractor coordination</li>
              <li>Field-ready documentation</li>
              <li>Delivery alignment across active builds</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8">
          <p className="mb-4 text-sm text-slate-500">
            Explore related services:
          </p>

          <div className="flex flex-wrap gap-3">
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
        title="Need support on a telecom construction project?"
        description="We support field execution, contractor coordination, and construction-ready delivery across active telecom programs."
      />
    </main>
  );
}