import BottomCta from "@/components/BottomCta"

export default function GovernmentPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-[#f7fbfb]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
              Government
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              Support for public-sector telecom and infrastructure programs
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Odiscom supports public-sector and infrastructure-related programs
              with practical engineering coordination, field-aware delivery, and
              responsive execution aligned with real project conditions.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-4xl space-y-6 text-lg leading-8 text-slate-600">
          <p>
            Telecom and infrastructure programs in the public sector often require
            clear coordination, dependable documentation, and execution that stays
            aligned with timelines, stakeholders, and field realities.
          </p>

          <p>
            Odiscom helps support those efforts with practical delivery-minded
            services across engineering, field verification, coordination, and
            infrastructure execution support.
          </p>

          <p>
            Our approach is grounded in helping projects move forward with clarity,
            responsiveness, and documentation that supports real deployment needs.
          </p>
        </div>
      </section>

      <BottomCta
        title="Need support for a public-sector telecom or infrastructure program?"
        description="Odiscom helps clients navigate delivery with practical coordination, engineering support, and responsive execution."
      />
    </main>
  )
}