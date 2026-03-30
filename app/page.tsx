import Image from "next/image";
import Link from "next/link";
import BottomCta from "@/components/BottomCta";

const trustedLogos = [
  { name: "AT&T", logo: "/logos/att.png" },
  { name: "Verizon", logo: "/logos/verizon.png" },
  { name: "Zayo", logo: "/logos/zayo.png" },
  { name: "TDS Telecommunications", logo: "/logos/tds.png" },
  { name: "ADB-US", logo: "/logos/adb.png" },
  { name: "Squan", logo: "/logos/squan.png" },
  { name: "Harmoni Towers", logo: "/logos/harmoni.png" },
  { name: "Nextlink", logo: "/logos/nextlink.png" },
  { name: "Foresight Communications", logo: "/logos/foresight.png" },
  { name: "EBI", logo: "/logos/ebi.png" },
  { name: "Smartlink", logo: "/logos/smartlink.png" },
  { name: "SONIC", logo: "/logos/sonic.png" },
];

const capabilityPoints = [
  "Fiber deployment support",
  "Wireless and tower execution",
  "Construction-ready coordination",
  "Nationwide program support",
];

const serviceCards = [
  {
    label: "Fiber",
    title: "OSP engineering and infrastructure support",
    description:
      "Route development, utility coordination, make-ready support, and fielding aligned with deployment schedules.",
    href: "/services/fiber",
  },
  {
    label: "Towers",
    title: "Wireless site and tower support",
    description:
      "A&E coordination, site documentation, and upgrade support for carrier and infrastructure programs.",
    href: "/services/wireless",
  },
  {
    label: "Construction",
    title: "Construction-ready planning and delivery",
    description:
      "Documentation and coordination built for field execution, contractor alignment, and project delivery.",
    href: "/services/construction",
  },
];

const projectPreview = [
  {
    category: "Fiber Infrastructure",
    title: "Route development and OSP design support",
    description:
      "Support for field verification, utility coordination, and construction-ready documentation across active fiber deployment programs.",
  },
  {
    category: "Wireless / Tower",
    title: "Site upgrades and delivery coordination",
    description:
      "Coordinated support for site documentation, A&E workflows, and execution across multi-site wireless programs.",
  },
  {
    category: "Construction Support",
    title: "Execution-focused delivery support",
    description:
      "Practical coordination, documentation flow, and field support from kickoff through closeout.",
  },
];

export default function HomePage() {
  const marqueeLogos = [...trustedLogos, ...trustedLogos];

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative min-h-[760px] overflow-hidden">
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

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-[#1f8a84]/20" />
        <div className="absolute left-1/2 top-0 hidden h-full w-px bg-white/20 lg:block" />

        <div className="relative z-10 mx-auto flex min-h-[760px] max-w-7xl items-center px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
              Fiber • Wireless • Towers • Construction
            </p>

            <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              Telecom engineering built for real-world deployment
            </h1>

            <p className="mt-7 max-w-2xl text-xl leading-9 text-white/90">
              Odiscom supports fiber, tower, and telecommunications infrastructure
              programs with practical design, coordinated execution, and
              construction-ready documentation.
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

      {/* TRUST STRIP */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
              Trusted By
            </p>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              Telecom operators, contractors, and infrastructure partners
            </h2>
          </div>

          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

            <div className="logo-marquee flex w-max items-center gap-6">
              {marqueeLogos.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex h-20 w-[240px] shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 shadow-sm"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-[40px] object-contain opacity-70 transition duration-300 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BottomCta
        title="Need support on a fiber, tower, or telecom infrastructure project?"
        description="Tell us what you're building, or book time with our team to get started quickly."
      />

      {/* SAFE SCOPED ANIMATION */}
      <style jsx>{`
        .logo-marquee {
          animation: scroll 40s linear infinite;
        }

        .logo-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </main>
  );
}