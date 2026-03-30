import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BottomCta from "@/components/BottomCta";

export const metadata: Metadata = {
  title: "Wireless Infrastructure Services",
  description:
    "Odiscom provides wireless infrastructure support, site coordination, telecom upgrades, and execution-focused project delivery for carrier and infrastructure programs.",
};

const supportItems = [
  "Wireless site documentation support",
  "Carrier upgrade coordination",
  "Field-ready deployment alignment",
  "Infrastructure program support",
  "Execution-minded documentation",
  "Delivery coordination across active wireless programs",
];

export default function WirelessPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-[#f7fbfb]">
        <div className="mx-auto grid max-w-7xl overflow-hidden lg:min-h-[620px] lg:grid-cols-2">
          <div className="flex items-center px-6 py-20 lg:px-8 lg:py-28">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
                Wireless Infrastructure
              </p>

              <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                Wireless deployment
                <br className="hidden md:block" />
                and site support
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Odiscom supports wireless infrastructure programs with practical
                coordination, field-ready documentation, and execution-minded
                delivery for carrier and telecom environments.
              </p>
            </div>
          </div>

          <div className="relative min-h-[320px] lg:min-h-full">
            <Image
              src="/images/Towers/South_Tower.jpg"
              alt="Wireless infrastructure support"
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
            Practical support for wireless infrastructure programs
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We help carrier and infrastructure teams keep wireless deployments
            moving by aligning documentation, field conditions, and execution
            timelines.
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
              Built for active deployment environments
            </h3>
            <p className="mt-4 leading-8 text-slate-600">
              Wireless infrastructure work moves fastest when site conditions,
              documentation, and project teams stay aligned. Our approach is
              centered on practical support that reduces delays and improves
              execution in the field.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              We support wireless projects with coordination that reflects real
              deployment conditions instead of creating extra friction for crews
              and stakeholders.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-[#f7fbfb] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">
              Focus areas
            </p>
            <ul className="mt-5 space-y-4 text-slate-700">
              <li>Wireless site coordination</li>
              <li>Carrier upgrade support</li>
              <li>Field-aware execution planning</li>
              <li>Infrastructure documentation</li>
              <li>Program delivery alignment</li>
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
        title="Need support on a wireless project?"
        description="We support wireless infrastructure programs with practical coordination and execution-minded delivery."
      />
    </main>
  );
}