import Link from "next/link";
import Image from "next/image";

const clients = [
  { name: "AT&T", logo: "/logos/att.png" },
  { name: "Verizon", logo: "/logos/Verizon.png" },
  { name: "TDS", logo: "/logos/TDS.png" },
  { name: "Vertical Bridge", logo: "/logos/vertical-bridge-logo.svg" },
  { name: "Zayo", logo: "/logos/Zayo.svg" },
  { name: "EBI", logo: "/logos/EBI.svg" },
  { name: "Smartlink", logo: "/logos/smartlink.png" },
  { name: "SONIC", logo: "/logos/sonic.png" },
  { name: "Nextlink", logo: "/logos/Nextlink.png" },
  { name: "Crown Castle", logo: "/logos/crowncastle-logo.png" },
  { name: "Ericsson", logo: "/logos/Ericsson-Symbol.png" },
  { name: "Nokia", logo: "/logos/nokia.png" },
  { name: "American Tower", logo: "/logos/ATC.png" },
  { name: "SBA Communications", logo: "/logos/SBA.png" },
];

export default function Page() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-6 pt-12 pb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Clients and Industry Partners
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-slate-600">
          Odiscom supports telecommunications carriers, tower owners,
          infrastructure operators, equipment providers, and deployment
          partners across the United States.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <div className="grid grid-cols-2 gap-x-10 gap-y-10 md:grid-cols-4 lg:grid-cols-5">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center rounded-xl bg-white px-4 py-6 shadow-sm"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={180}
                  height={70}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-slate-500">
            Logos are trademarks of their respective owners.
          </p>
        </div>
      </section>

      <section className="border-t bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-3">
          <InfoCard
            title="Carrier Support"
            text="Engineering and deployment support for carrier-led network upgrades, expansions, and infrastructure programs."
          />
          <InfoCard
            title="Tower and Infrastructure Owners"
            text="Support for tower modifications, structural coordination, and modernization initiatives."
          />
          <InfoCard
            title="Technology and Delivery Partners"
            text="Coordination with OEMs, field vendors, and program stakeholders across complex multi-market deployments."
          />
        </div>
      </section>

      <section className="border-t bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            Looking for a reliable infrastructure partner?
          </h2>

          <p className="mt-2 text-slate-600">
            Odiscom supports engineering, construction, and program execution
            for telecommunications infrastructure projects nationwide.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/request-proposal"
              className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Request Proposal
            </Link>

            <Link
              href="/services"
              className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm text-slate-600">{text}</p>
    </div>
  );
}