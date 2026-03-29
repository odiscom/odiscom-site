import Image from "next/image";
import Link from "next/link";
import BottomCta from "@/components/BottomCta";

const trustedLogos = [
  { name: "AT&T", logo: "/logos/att.png" },
  { name: "Verizon", logo: "/logos/Verizon.png" },
  { name: "Zayo", logo: "/logos/zayo.png" },
  { name: "TDS Telecommunications", logo: "/logos/TDS.png" },
  { name: "ADB-US", logo: "/logos/adb.png" },
  { name: "Squan", logo: "/logos/squan.png" },
  { name: "Harmoni Towers", logo: "/logos/harmoni.png" },
  { name: "Nextlink", logo: "/logos/nextlink.jpg" },
  { name: "Foresight Communications", logo: "/logos/foresight.png" },
  { name: "EBI", logo: "/logos/ebi.jpeg" },
  { name: "Smartlink", logo: "/logos/smartlink.png" },
  { name: "SONIC", logo: "/logos/sonic.png" },
];

export default function HomePage() {
  const marqueeLogos = [...trustedLogos, ...trustedLogos];

  return (
    <main className="bg-white text-slate-900">
      <section className="relative h-[720px] w-full overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-1/2">
          <Image
            src="/images/Towers/South_Tower.jpg"
            alt="Telecom tower infrastructure"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="absolute inset-y-0 right-0 w-1/2">
          <Image
            src="/images/Fiber/trenching_pic.jpg"
            alt="Fiber trenching"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-[#1f8a84]/25" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-white/20" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              Fiber • Wireless • Towers • Construction
            </p>

            <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
              Telecom Engineering Built for Real-World Deployment
            </h1>

            <p className="mt-6 text-xl leading-9 text-white/90">
              Odiscom delivers fiber, tower, and telecommunications infrastructure support with
              practical design, coordinated execution, and construction-ready documentation.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-white px-8 py-4 font-semibold text-[#1f8a84] transition hover:bg-slate-100"
              >
                Request Proposal
              </Link>

              <a
                href="https://outlook.office.com/book/Odiscom@odiscom.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Book a Meeting
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
              Trusted By
            </p>

            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Telecom operators, contractors, and infrastructure partners
            </h2>
          </div>

          <div className="relative overflow-hidden">
            <div className="marquee-track flex w-max items-center gap-6">
              {marqueeLogos.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex h-20 w-[240px] shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 shadow-sm"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-[40px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">
              What we do
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
              Practical support for fiber, tower, and telecom infrastructure projects
            </h2>

            <p className="mt-5 text-lg text-slate-600">
              Built for real-world deployment, not just design.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-slate-200 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1f8a84]">
                Fiber
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                OSP engineering and infrastructure support
              </h3>

              <p className="mt-4 text-slate-600 leading-8">
                Route development, utility coordination, make-ready support,
                and fielding aligned with deployment schedules.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1f8a84]">
                Towers
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                Wireless site and tower support
              </h3>

              <p className="mt-4 text-slate-600 leading-8">
                A&E coordination, site documentation, and upgrade support
                for carrier and infrastructure programs.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1f8a84]">
                Construction
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                Construction-ready planning and delivery
              </h3>

              <p className="mt-4 text-slate-600 leading-8">
                Documentation and coordination built for field execution,
                contractor alignment, and project delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BottomCta
        title="Need support on a fiber, tower, or telecom infrastructure project?"
        description="Tell us what you're building, or book time with our team to get started quickly."
      />
    </main>
  );
}