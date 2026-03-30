import Image from "next/image";
import Link from "next/link";
import BottomCta from "@/components/BottomCta";

const trustedLogos = [
  { name: "AT&T", logo: "/logos/att.png", size: "normal" },
  { name: "Verizon", logo: "/logos/verizon.png", size: "xlarge" },
  { name: "Zayo", logo: "/logos/zayo.png", size: "normal" },

  { name: "TDS Telecommunications", logo: "/logos/tds.png", size: "large" },
  { name: "ADB-US", logo: "/logos/adb.png", size: "large" },
  { name: "Squan", logo: "/logos/squan.png", size: "normal" },

  { name: "Harmoni Towers", logo: "/logos/harmoni.png", size: "large" },
  { name: "Nextlink", logo: "/logos/nextlink.png", size: "large" },

  { name: "Foresight Communications", logo: "/logos/foresight.png", size: "xlarge" },

  { name: "EBI", logo: "/logos/ebi.png", size: "small" },

  { name: "Smartlink", logo: "/logos/smartlink.png", size: "large" },
  { name: "SONIC", logo: "/logos/sonic.png", size: "large" },

  { name: "Crown Castle", logo: "/logos/crowncastle.png", size: "normal" },

  { name: "Ericsson", logo: "/logos/ericsson.png", size: "xlarge" },

  { name: "Vertical Bridge", logo: "/logos/verticalbridge.png", size: "xlarge" },
] as const;

function getLogoSizing(size?: "small" | "normal" | "large" | "xlarge") {
  switch (size) {
    case "small":
      return "max-h-[30px] md:max-h-[34px]";
    case "large":
      return "max-h-[44px] md:max-h-[48px]";
    case "xlarge":
      return "max-h-[52px] md:max-h-[56px]";
    default:
      return "max-h-[36px] md:max-h-[40px]";
  }
}

export default function HomePage() {
  const marqueeLogosTop = [...trustedLogos, ...trustedLogos];
  const marqueeLogosBottom = [
    ...trustedLogos.slice().reverse(),
    ...trustedLogos.slice().reverse(),
  ];

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
              Odiscom supports fiber, tower, and telecommunications
              infrastructure programs with practical design, coordinated
              execution, and construction-ready documentation.
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

          <div className="relative overflow-hidden space-y-6">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-white to-transparent" />

            {/* TOP ROW */}
            <div className="group overflow-hidden">
              <div className="logo-marquee flex min-w-max items-center gap-6 group-hover:[animation-play-state:paused]">
                {marqueeLogosTop.map((client, index) => (
                  <div
                    key={`top-${client.name}-${index}`}
                    className="logo-card relative flex h-24 w-[250px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 shadow-sm transition duration-300"
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_center,rgba(31,138,132,0.10),transparent_65%)] opacity-0 transition duration-300 group-hover:opacity-100" />

                    <div className="flex h-full w-full items-center justify-center">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className={`w-auto object-contain align-middle opacity-95 transition duration-300 hover:scale-[1.04] hover:opacity-100 ${getLogoSizing(
                          client.size
                        )}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* BOTTOM ROW */}
            <div className="group overflow-hidden">
              <div className="logo-marquee-reverse flex min-w-max items-center gap-6 group-hover:[animation-play-state:paused]">
                {marqueeLogosBottom.map((client, index) => (
                  <div
                    key={`bottom-${client.name}-${index}`}
                    className="logo-card relative flex h-24 w-[250px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 shadow-sm transition duration-300"
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_center,rgba(31,138,132,0.10),transparent_65%)] opacity-0 transition duration-300 group-hover:opacity-100" />

                    <div className="flex h-full w-full items-center justify-center">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className={`w-auto object-contain align-middle opacity-95 transition duration-300 hover:scale-[1.04] hover:opacity-100 ${getLogoSizing(
                          client.size
                        )}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
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