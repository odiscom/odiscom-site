import { COMPANY } from "@/lib/company"

export default function ContactPage() {
  return (
    <main className="bg-[#e6f1f0] text-slate-900">
      {/* PAGE HEADER */}
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
            Contact
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Let’s talk about your telecom project
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {COMPANY.name} supports telecommunications operators, utilities,
            infrastructure owners, and program partners across the United
            States.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* LEFT SIDE INFO */}
          <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold">Get in Touch</h2>

            <p className="mb-8 leading-8 text-slate-600">
              {COMPANY.name} supports telecommunications operators, utilities,
              infrastructure owners, and program partners across the United
              States.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold tracking-widest text-slate-500">
                  COMPANY
                </p>
                <p className="mt-1 text-lg font-medium text-slate-900">
                  {COMPANY.name}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-widest text-slate-500">
                  LOCATION
                </p>
                <p className="mt-1 text-slate-700">{COMPANY.location}</p>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-widest text-slate-500">
                  PHONE
                </p>
                <p className="mt-1 text-slate-700">
                  <a
                    href={`tel:${COMPANY.phoneLink}`}
                    className="hover:text-[#1f8a84]"
                  >
                    {COMPANY.phoneDisplay}
                  </a>
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-widest text-slate-500">
                  EMAIL
                </p>
                <p className="mt-1 text-slate-700">
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="hover:text-[#1f8a84]"
                  >
                    {COMPANY.email}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
            <form className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium">Name</label>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-[#1f8a84] focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Email</label>

                <input
                  type="email"
                  placeholder="you@email.com"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-[#1f8a84] focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Company
                </label>

                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-[#1f8a84] focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Tell us about your project"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-[#1f8a84] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#0f2147] py-4 font-semibold text-white hover:bg-[#0c1a36]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}