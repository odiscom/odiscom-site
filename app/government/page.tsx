import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-white">

      <section className="mx-auto max-w-7xl px-6 pt-12 pb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Government & Public Sector Support
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-slate-600">
          Odiscom supports federal, state, and local telecommunications
          infrastructure programs including broadband expansion,
          critical infrastructure upgrades, and public-sector network
          modernization initiatives.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <Card
            title="Broadband Expansion"
            text="Engineering and deployment support for rural broadband initiatives and federally funded infrastructure programs."
          />

          <Card
            title="Public Infrastructure"
            text="Telecommunications engineering support for public infrastructure modernization including fiber networks and communications systems."
          />

          <Card
            title="Grant-Funded Programs"
            text="Support for broadband and infrastructure deployments funded through federal and state grant programs."
          />

          <Card
            title="Engineering Services"
            text="OSP engineering, structural coordination, infrastructure design, and construction documentation."
          />

          <Card
            title="Program Coordination"
            text="Multi-market coordination and program delivery support across large infrastructure deployments."
          />

          <Card
            title="Infrastructure Consulting"
            text="Strategic planning and advisory support for telecommunications and broadband initiatives."
          />

        </div>
      </section>

      <section className="border-t bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">

          <h2 className="text-2xl font-bold text-slate-900">
            Government Infrastructure Programs
          </h2>

          <p className="mt-2 text-slate-600">
            Odiscom supports telecommunications engineering and
            infrastructure deployment across the United States.
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

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{text}</p>
    </div>
  );
}