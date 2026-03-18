export default function ContactPage() {
  return (
    <main className="bg-[#f7fbfb] text-slate-900">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">Get in touch with Odiscom</h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Contact Details</h2>
            <div className="mt-8 space-y-6 text-lg">
              <div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Company</p><p className="mt-2">Odiscom LLC</p></div>
              <div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Location</p><p className="mt-2">League City, TX 77573</p></div>
              <div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Phone</p><a className="mt-2 block" href="tel:+14695311176">(469) 531-1176</a></div>
              <div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Email</p><a className="mt-2 block" href="mailto:owners@odiscom.com">owners@odiscom.com</a></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
