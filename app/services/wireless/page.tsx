import type { Metadata } from "next";
import Link from "next/link";
import BottomCta from "@/components/BottomCta";

export const metadata: Metadata = {
  title: "Wireless Infrastructure Services",
  description:
    "Odiscom provides wireless infrastructure support, site coordination, telecom upgrades, and execution-focused project delivery for carrier and infrastructure programs.",
};

export default function WirelessPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-[#f7fbfb]">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <h1 className="text-4xl font-semibold md:text-6xl">
            Wireless Infrastructure Services
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Odiscom supports wireless infrastructure programs with practical
            coordination, field-ready documentation, and execution-minded
            delivery for carrier and telecom environments.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8 space-y-12">
        <div>
          <h2 className="text-2xl font-semibold">
            Wireless Site Support and Program Coordination
          </h2>

          <p className="mt-4 text-slate-600 leading-8">
            We support wireless deployments, upgrades, and infrastructure
            programs with coordination that keeps engineering, documentation,
            field conditions, and execution timelines aligned.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">
            Built for Real Deployment Environments
          </h2>

          <p className="mt-4 text-slate-600 leading-8">
            Wireless projects move fastest when teams have clear documentation,
            strong coordination, and practical support that reflects real field
            conditions. Odiscom focuses on helping projects move from planning
            into execution with fewer slowdowns and less rework.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Services Include</h2>

          <ul className="mt-4 space-y-3 text-slate-600">
            <li>• Wireless site support</li>
            <li>• Carrier upgrade coordination</li>
            <li>• Telecom infrastructure documentation</li>
            <li>• Field-ready execution support</li>
            <li>• Project delivery alignment</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">
            Supporting Carrier and Infrastructure Programs
          </h2>

          <p className="mt-4 text-slate-600 leading-8">
            Odiscom supports wireless infrastructure work across Texas and
            nationwide, helping carriers, contractors, and infrastructure
            partners keep deployment programs moving with clarity and
            coordination.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1f8a84]">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <h2 className="text-3xl font-semibold text-white md:text-5xl">
            Need support on a wireless project?
          </h2>

          <p className="mt-6 text-lg text-white/90">
            Reach out to discuss your wireless upgrades, infrastructure work, or
            telecom deployment needs.
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

      <BottomCta
        title="Need support on a wireless or telecom infrastructure project?"
        description="Tell us what you're building, or book time with our team to get started quickly."
      />
    </main>
  );
}