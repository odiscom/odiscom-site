import Image from "next/image"
import BottomCta from "@/components/BottomCta"

const supportItems = [
  "Route development and corridor planning",
  "Field verification and constructability review",
  "Make-ready and utility coordination",
  "Aerial and underground design support",
  "Permit and construction drawing production",
  "Construction-ready plan set development",
]

export default function FiberServicePage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-[#f7fbfb]">
        <div className="mx-auto grid max-w-7xl overflow-hidden lg:min-h-[620px] lg:grid-cols-2">
          <div className="flex items-center px-6 py-20 lg:px-8 lg:py-28">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
                OSP / Fiber Engineering
              </p>

              <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                Fiber network design
                <br className="hidden md:block" />
                and field execution support
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Odiscom supports fiber deployment programs from early route
                planning through construction-ready design, helping align field
                conditions, utility requirements, and project delivery goals.
              </p>
            </div>
          </div>

          <div className="relative min-h-[320px] lg:min-h-full">
            <Image
              src="/images/Fiber/trenching_pic.jpg"
              alt="Fiber trenching and infrastructure work"
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
            Practical engineering support for fiber infrastructure deployment
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We help clients move fiber projects from concept and field
            verification into coordinated, buildable documentation that supports
            smoother execution in the field.
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
              Built for real-world field conditions
            </h3>
            <p className="mt-4 leading-8 text-slate-600">
              Fiber projects succeed when engineering, utility coordination,
              permitting, and field execution stay aligned. Our approach focuses
              on practical deliverables that support deployment teams and reduce
              rework, schedule delays, and avoidable field conflicts.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Whether the project involves aerial, underground, urban, or rural
              infrastructure, we support the documentation and coordination
              needed to move work forward with confidence.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-[#f7fbfb] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">
              Focus areas
            </p>
            <ul className="mt-5 space-y-4 text-slate-700">
              <li>OSP route development</li>
              <li>Utility coordination support</li>
              <li>Field-driven design alignment</li>
              <li>Permit and construction packages</li>
              <li>Execution-minded documentation</li>
            </ul>
          </div>
        </div>
      </section>

      <BottomCta
        title="Planning a fiber deployment?"
        description="We support projects from early routing through construction-ready design and coordinated field execution."
      />
    </main>
  )
}