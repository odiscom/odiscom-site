import type { Metadata } from "next";
import Link from "next/link";
import BottomCta from "@/components/BottomCta";

export const metadata: Metadata = {
  title: "Tower Infrastructure Services",
  description:
    "Odiscom provides tower infrastructure support, modifications, upgrades, and telecom project coordination for wireless and vertical assets.",
};

export default function TowersPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-[#f7fbfb]">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <h1 className="text-4xl font-semibold md:text-6xl">
            Tower Infrastructure Services
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Odiscom supports tower infrastructure projects with execution-focused
            coordination, field-ready documentation, and practical project delivery.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8 space-y-12">
        <div>
          <h2 className="text-2xl font-semibold">
            Tower Modifications and Upgrades
          </h2>

          <p className="mt-4 text-slate-600 leading-8">
            We support tower upgrade programs, structural modifications, and
            carrier deployments with coordination that aligns engineering,
            permitting, and field execution.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">
            Built for Field Execution
          </h2>

          <p className="mt-4 text-slate-600 leading-8">
            Our work is designed with the field in mind — reducing rework,
            improving clarity, and helping crews move efficiently through
            tower installations and upgrades.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">
            Services Include
          </h2>

          <ul className="mt-4 space-y-3 text-slate-600">
            <li>• Tower modification support</li>
            <li>• Structural coordination</li>
            <li>• Carrier equipment upgrades</li>
            <li>• Field-ready documentation</li>
            <li>• Project coordination and execution support</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">
            Supporting Nationwide Tower Programs
          </h2>

          <p className="mt-4 text-slate-600 leading-8">
            Odiscom supports tower infrastructure projects across Texas and
            nationwide, working with carriers, tower companies, and contractors
            to keep deployment programs moving.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1f8a84]">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <h2 className="text-3xl font-semibold text-white md:text-5xl">
            Need support on a tower project?
          </h2>

          <p className="mt-6 text-lg text-white/90">
            Reach out to discuss your tower upgrades, modifications, or telecom infrastructure needs.
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
        title="Need support on a tower or telecom infrastructure project?"
        description="Tell us what you're building, or book time with our team to get started quickly."
      />
    </main>
  );
}