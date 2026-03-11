import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pt-12 pb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Telecommunications Infrastructure Services
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-slate-600">
          Odiscom provides engineering, infrastructure development, and construction
          support services for telecommunications networks across the United States.
          Our teams support carriers, tower companies, ISPs, utilities, and public
          sector infrastructure programs.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <ServiceCard
            title="Fiber Engineering"
            description="OSP route design, permitting support, make-ready engineering, and construction drawing packages for metro and long-haul fiber networks."
            items={[
              "OSP route design",
              "Pole loading analysis",
              "Make-ready engineering",
              "Permit and utility coordination",
              "Construction plan sets",
            ]}
          />

          <ServiceCard
            title="Tower Engineering"
            description="Engineering and structural coordination services supporting tower modifications, equipment installations, and infrastructure upgrades."
            items={[
              "Structural analysis",
              "Mount design",
              "Equipment upgrades",
              "A&E services",
              "Construction drawings",
            ]}
          />

          <ServiceCard
            title="Telecom Construction"
            description="Field execution support for telecommunications infrastructure deployments including fiber builds, tower upgrades, and network expansions."
            items={[
              "Fiber deployment",
              "Tower modifications",
              "Equipment installation",
              "Field supervision",
              "Construction coordination",
            ]}
          />

          <ServiceCard
            title="Program Management"
            description="Coordination of complex telecommunications infrastructure deployments across multiple markets and vendors."
            items={[
              "Deployment scheduling",
              "Vendor coordination",
              "Budget tracking",
              "QA/QC oversight",
              "Project reporting",
            ]}
          />

          <ServiceCard
            title="Infrastructure Consulting"
            description="Strategic planning and advisory services for telecommunications operators, infrastructure investors, and network builders."
            items={[
              "Network expansion planning",
              "Infrastructure strategy",
              "Program development",
              "Vendor evaluation",
              "Deployment planning",
            ]}
          />

          <ServiceCard
            title="Government Infrastructure Support"
            description="Engineering and infrastructure services supporting broadband expansion, federal infrastructure programs, and public-sector telecommunications initiatives."
            items={[
              "Broadband program support",
              "Infrastructure engineering",
              "Federal project coordination",
              "Grant-funded deployment support",
              "Program compliance",
            ]}
          />

        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">

          <h2 className="text-2xl font-bold text-slate-900">
            Ready to start a project?
          </h2>

          <p className="mt-2 text-slate-600">
            Contact Odiscom to discuss your telecommunications infrastructure needs.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/request-proposal"
              className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Request Proposal
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}

function ServiceCard({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>

      <p className="mt-2 text-sm text-slate-600">{description}</p>

      <ul className="mt-4 space-y-1 text-sm text-slate-700">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}