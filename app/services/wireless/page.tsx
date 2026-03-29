import Image from "next/image"
import BottomCta from "@/components/BottomCta"

const supportItems = [
  "Site documentation and field verification",
  "A&E coordination for carrier and infrastructure programs",
  "Upgrade planning and deployment support",
  "Drawing package development and revision support",
  "Closeout documentation coordination",
  "Program delivery support across multiple sites",
]

export default function WirelessServicePage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-[#f7fbfb]">
        <div className="mx-auto grid max-w-7xl overflow-hidden lg:min-h-[620px] lg:grid-cols-2">
          <div className="flex items-center px-6 py-20 lg:px-8 lg:py-28">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
                Wireless / Tower Program Support
              </p>

              <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                Wireless site support
                <br className="hidden md:block" />
                for tower and carrier programs
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Odiscom supports wireless and tower projects with practical
                documentation, coordinated delivery support, and field-informed
                execution aligned with program requirements.
              </p>
            </div>
          </div>

          <div className="relative min-h-[320px] lg:min-h-full">
            <Image
              src="/images/tower/tower-crew.jpg"
              alt="Wireless tower and field support work"
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
            Coordinated support for wireless deployment and tower upgrade programs
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We help clients manage the documentation, coordination, and delivery
            support needed to keep wireless infrastructure programs moving from
            field conditions to final closeout.
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
              Delivery support that stays grounded in the field
            </h3>
            <p className="mt-4 leading-8 text-slate-600">
              Wireless projects often require tight coordination across multiple
              stakeholders, rapid changes, and schedule-sensitive site activity.
              We help support the flow of information between field teams,
              engineering, project management, and client expectations.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              From site upgrades to broader carrier programs, our focus is on
              reliable documentation, organized delivery support, and execution
              that reflects real site conditions.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-[#f7fbfb] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1f8a84]">
              Focus areas
            </p>
            <ul className="mt-5 space-y-4 text-slate-700">
              <li>Wireless site documentation</li>
              <li>Tower upgrade coordination</li>
              <li>A&E delivery support</li>
              <li>Multi-site program execution</li>
              <li>Closeout and revision workflows</li>
            </ul>
          </div>
        </div>
      </section>

      <BottomCta
        title="Need support for a wireless or tower program?"
        description="We help keep site documentation, coordination, and delivery moving across active wireless infrastructure projects."
      />
    </main>
  )
}