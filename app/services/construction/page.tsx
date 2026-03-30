import type { Metadata } from "next";
import Link from "next/link";
import BottomCta from "@/components/BottomCta";

export const metadata: Metadata = {
  title: "Telecom Construction Support",
  description:
    "Odiscom provides construction-ready telecom support, execution-focused coordination, field documentation, and project delivery alignment for fiber, wireless, and tower programs.",
};

export default function ConstructionPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-[#f7fbfb]">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <h1 className="text-4xl font-semibold md:text-6xl">
            Telecom Construction Support
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Odiscom supports telecom construction programs with practical
            coordination, field-ready documentation, and execution-focused
            planning built for real deployment environments.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8 space-y-12">
        <div>
          <h2 className="text-2xl font-semibold">
            Construction-Ready Project Delivery
          </h2>

          <p className="mt-4 text-slate-600 leading-8">
            We help telecom projects move from planning into execution with
            documentation, coordination, and delivery support designed for field
            conditions. Our focus is on reducing friction between engineering,
            contractors, and project teams.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">
            Built Around Real Field Conditions
          </h2>

          <p className="mt-4 text-slate-600 leading-8">
            Construction support only works when it reflects how crews actually
            build. Odiscom takes a practical approach that helps teams stay
            aligned, avoid unnecessary delays, and keep work moving through the
            field.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Services Include</h2>

          <ul className="mt-4 space-y-3 text-slate-600">
            <li>• Construction-ready documentation</li>
            <li>• Execution-focused planning</li>
            <li>• Contractor coordination</li>
            <li>• Field delivery alignment</li>
            <li>• Support across fiber, wireless, and tower builds</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">
            Supporting Active Telecom Construction Programs
          </h2>

          <p className="mt-4 text-slate-600 leading-8">
            Odiscom supports telecom construction efforts across Texas and
            nationwide, helping carriers, contractors, and infrastructure
            partners keep work moving from design into field execution with
            practical coordination and delivery discipline.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1f8a84]">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <h2 className="text-3xl font-semibold text-white md:text-5xl">
            Need support on a telecom construction project?
          </h2>

          <p className="mt-6 text-lg text-white/90">
            Reach out to discuss your construction support, field coordination,
            or telecom infrastructure delivery needs.
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-4 font-semibold text-[#1f8a84]"
            >
              Contact Odiscom
            </Link>
          </div>
        </div>
      </section>
<div className="mt-12 border-t border-slate-200 pt-8">
  <p className="mb-4 text-sm text-slate-500">Explore related services:</p>

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
      <BottomCta
        title="Need support on a construction or telecom infrastructure project?"
        description="Tell us what you're building, or book time with our team to get started quickly."
      />
    </main>
  );
}