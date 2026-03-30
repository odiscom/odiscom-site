import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BottomCta from "@/components/BottomCta";

export const metadata: Metadata = {
  title: "Tower Infrastructure Services",
  description:
    "Odiscom provides tower infrastructure support, modifications, upgrades, and telecom project coordination for wireless and vertical assets.",
};

const supportItems = [
  "Tower modification support",
  "Structural coordination",
  "Carrier equipment upgrades",
  "Field-ready documentation",
  "Project coordination and execution support",
  "Vertical infrastructure delivery alignment",
];

export default function TowersPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-[#f7fbfb]">
        <div className="mx-auto grid max-w-7xl overflow-hidden lg:min-h-[620px] lg:grid-cols-2">
          <div className="flex items-center px-6 py-20 lg:px-8 lg:py-28">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
                Tower Infrastructure
              </p>

              <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                Tower project support
                <br className="hidden md:block" />
                built for execution
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Odiscom supports tower infrastructure projects with
                execution-focused coordination, field-ready documentation, and
                practical project delivery.
              </p>
            </div>
          </div>

          <div className="relative min-h-[320px] lg:min-h-full">
            <Image
              src="/images/Towers/South_Tower.jpg"
              alt="Tower infrastructure support"
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
            Practical support for tower upgrades and vertical infrastructure
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We support tower upgrade programs, structural modifications, and
            carrier deployments with coordination that helps align engineering,
            documentation, and field execution.
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
              Built for crews and field conditions
            </h3>
            <p className="mt-4 leading-8 text-slate-600">
              Tower work moves best when documentation is clear, coordination is
              practical, and project teams stay aligned around real field
              conditions. Our support is designed to reduce rework and help
              projects move efficiently.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              We focus on supporting active tower programs with deliverables that
              help teams execute instead of slowing them down.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-[#f7fbfb] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">
              Focus areas
            </p>
            <ul className="mt-5 space-y-4 text-slate-700">
              <li>Tower modifications and upgrades</li>
              <li>Structural coordination support</li>
              <li>Field-driven execution alignment</li>
              <li>Carrier equipment upgrade support</li>
              <li>Vertical infrastructure coordination</li>
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
        title="Need support on a tower project?"
        description="We support tower upgrades, modifications, and infrastructure programs with practical coordination and field-ready delivery."
      />
    </main>
  );
}