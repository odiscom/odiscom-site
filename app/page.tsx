// app/page.tsx
import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-20 pb-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-4 text-sm text-gray-500">
            Telecommunications • Fiber • Towers • Construction
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-slate-900">
            Engineering America’s Digital Infrastructure
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Odiscom provides telecommunications engineering, fiber infrastructure
            development, and tower services supporting nationwide network deployment.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/request-proposal"
              className="rounded-lg bg-slate-900 px-6 py-3 text-white shadow hover:bg-black"
            >
              Request Proposal
            </Link>

            <Link
              href="/services"
              className="rounded-lg border border-slate-200 bg-white px-6 py-3 text-slate-700 hover:bg-slate-50"
            >
              View Services
            </Link>
          </div>

          {/* STATS */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Stat label="Founded" value="2015" />
            <Stat label="Coverage" value="Nationwide" />
            <Stat label="Delivery" value="Engineering + Construction" />
            <Stat label="Response" value="Rapid Mobilization" />
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="border-t border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Trusted by telecommunications operators and infrastructure owners
              </h2>
              <p className="mt-2 text-gray-500">Selected clients and partners.</p>
            </div>

            <Link
              href="/clients"
              className="text-sm font-medium text-slate-900 hover:underline"
            >
              View Clients →
            </Link>
          </div>

          {/* SCROLLING LOGOS */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 py-8 shadow-sm">
            {/* fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />

            <div className="logo-marquee flex items-center gap-16">
              <img src="/logos/att.png" className="h-10 w-auto" alt="AT&T" />
              <img src="/logos/Verizon.png" className="h-10 w-auto" alt="Verizon" />
              <img src="/logos/TDS.png" className="h-10 w-auto" alt="TDS" />
              <img
                src="/logos/vertical-bridge-logo.svg"
                className="h-10 w-auto"
                alt="Vertical Bridge"
              />
              <img src="/logos/Zayo.svg" className="h-10 w-auto" alt="Zayo" />
              <img src="/logos/EBI.svg" className="h-10 w-auto" alt="EBI" />
              <img src="/logos/smartlink.png" className="h-10 w-auto" alt="Smartlink" />
              <img src="/logos/sonic.png" className="h-10 w-auto" alt="SONIC" />
              <img src="/logos/Nextlink.png" className="h-10 w-auto" alt="Nextlink" />
              <img
                src="/logos/crowncastle-logo.png"
                className="h-10 w-auto"
                alt="Crown Castle"
              />
              <img src="/logos/ATC.png" className="h-10 w-auto" alt="American Tower" />
              <img src="/logos/SBA.png" className="h-10 w-auto" alt="SBA Communications" />
              <img
                src="/logos/Ericsson-Symbol.png"
                className="h-10 w-auto"
                alt="Ericsson"
              />
              <img src="/logos/nokia.png" className="h-10 w-auto" alt="Nokia" />

              {/* duplicate for seamless scroll */}
              <img src="/logos/att.png" className="h-10 w-auto" alt="" aria-hidden="true" />
              <img
                src="/logos/Verizon.png"
                className="h-10 w-auto"
                alt=""
                aria-hidden="true"
              />
              <img src="/logos/TDS.png" className="h-10 w-auto" alt="" aria-hidden="true" />
              <img
                src="/logos/vertical-bridge-logo.svg"
                className="h-10 w-auto"
                alt=""
                aria-hidden="true"
              />
              <img src="/logos/Zayo.svg" className="h-10 w-auto" alt="" aria-hidden="true" />
              <img src="/logos/EBI.svg" className="h-10 w-auto" alt="" aria-hidden="true" />
              <img
                src="/logos/smartlink.png"
                className="h-10 w-auto"
                alt=""
                aria-hidden="true"
              />
              <img
                src="/logos/sonic.png"
                className="h-10 w-auto"
                alt=""
                aria-hidden="true"
              />
              <img
                src="/logos/Nextlink.png"
                className="h-10 w-auto"
                alt=""
                aria-hidden="true"
              />
              <img
                src="/logos/crowncastle-logo.png"
                className="h-10 w-auto"
                alt=""
                aria-hidden="true"
              />
              <img src="/logos/ATC.png" className="h-10 w-auto" alt="" aria-hidden="true" />
              <img src="/logos/SBA.png" className="h-10 w-auto" alt="" aria-hidden="true" />
              <img
                src="/logos/Ericsson-Symbol.png"
                className="h-10 w-auto"
                alt=""
                aria-hidden="true"
              />
              <img
                src="/logos/nokia.png"
                className="h-10 w-auto"
                alt=""
                aria-hidden="true"
              />
            </div>

            <p className="mt-8 text-center text-xs text-gray-400">
              Logos are trademarks of their respective owners.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-slate-900">
              Telecommunications Engineering and Infrastructure Services
            </h2>

            <p className="mt-4 text-gray-600">
              Odiscom supports telecommunications carriers, infrastructure owners, and
              public agencies with engineering, fiber deployment, tower services, and
              network construction across the United States.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              title="Engineering"
              description="Full A&E services including site design, permitting, structural analysis, and regulatory compliance."
              href="/services"
            />
            <ServiceCard
              title="Fiber Infrastructure"
              description="OSP engineering, route design, pole attachments, make-ready coordination, and construction support."
              href="/services"
            />
            <ServiceCard
              title="Tower Services"
              description="Tower structural upgrades, inspections, equipment installs, and modernization projects."
              href="/services"
            />
            <ServiceCard
              title="Construction"
              description="Fiber construction, tower crews, field services, and rapid mobilization for network deployment."
              href="/services"
            />
          </div>
        </div>
      </section>

      {/* PROJECT TYPES */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-slate-900">Project types</h2>
            <p className="mt-4 text-gray-600">
              Representative scopes we routinely support. Full references and examples
              available upon request.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProjectChip title="Macro Cell Sites" desc="New builds, collocations, and modernization support." />
            <ProjectChip title="Small Cell Deployment" desc="Poles, street furniture, permits, and closeout." />
            <ProjectChip title="Long-Haul Fiber" desc="Route engineering, permitting, and constructability review." />
            <ProjectChip title="Municipal Broadband" desc="Public sector delivery aligned to grant programs." />
            <ProjectChip title="Tower Reinforcement" desc="Structural analysis coordination and repair scoping." />
            <ProjectChip title="Closeout Packages" desc="As-builts, documentation, QA/QC, and turnover." />
          </div>
        </div>
      </section>

      {/* WHY ODISCOM */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900">Why Odiscom</h2>
              <p className="mt-4 text-gray-600">
                Our approach is documentation-first, safety-minded, and built for
                multi-market deployment—helping owners and operators move faster with
                fewer surprises.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <WhyCard title="Nationwide delivery" desc="Support for multi-state deployments and rapid scaling." />
                <WhyCard title="Engineering + construction" desc="Integrated support from design through execution." />
                <WhyCard title="QA/QC discipline" desc="Documentation, checklists, and clean closeouts." />
                <WhyCard title="Fast mobilization" desc="Structured onboarding and field-ready workflows." />
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Typical deliverables</h3>
              <ul className="mt-4 grid gap-3 text-sm text-slate-700">
                <li>• Construction-ready plan sets and permit packages</li>
                <li>• Route engineering, pole attachment, and make-ready coordination</li>
                <li>• Tower inspection and repair scoping documentation</li>
                <li>• As-builts, closeout binders, and turnover packages</li>
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
                >
                  Explore services
                </Link>
                <Link
                  href="/request-proposal"
                  className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white hover:bg-slate-800"
                >
                  Request proposal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-950 py-16">
        <div className="mx-auto max-w-7xl px-6 text-white">
          <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                Ready to deploy your next network project?
              </h2>
              <p className="mt-3 text-white/70">
                Tell us what market you’re working in and what you need—engineering,
                construction support, or full lifecycle delivery.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <Link
                href="/request-proposal"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-medium text-slate-950 hover:bg-white/90"
              >
                Request Proposal
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-sm font-medium hover:bg-white/10"
              >
                Contact Odiscom
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- components ---------- */

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="mt-2 text-xl font-semibold text-slate-900">{value}</div>
    </div>
  );
}

function ServiceCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm text-gray-600">{description}</p>
      <div className="mt-5">
        <Link href={href} className="text-sm font-medium text-slate-900 hover:underline">
          Learn more →
        </Link>
      </div>
    </div>
  );
}

function ProjectChip({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
      <div className="text-lg font-semibold text-slate-900">{title}</div>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function WhyCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
      <div className="text-base font-semibold text-slate-900">{title}</div>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  );
}