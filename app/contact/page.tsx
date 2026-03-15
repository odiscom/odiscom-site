export default function ContactPage() {
  return (
    <main className="bg-[#e6f3f2] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <h1 className="text-4xl font-bold text-[#0b1638] md:text-5xl">
            Contact Odiscom
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-700">
            Speak with our team about wireless engineering, fiber infrastructure,
            tower work, permitting, fielding, or construction support.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#0b1638]">
              Get in Touch
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              Odiscom supports telecommunications operators, utilities,
              infrastructure owners, and program partners across the United
              States.
            </p>

            <div className="mt-8 space-y-6 text-slate-800">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Company
                </p>
                <p className="mt-1 text-lg font-medium text-[#0b1638]">
                  Odiscom LLC
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Headquarters
                </p>
                <p className="mt-1 text-lg text-[#0b1638]">
                  2600 S Shore Blvd, Suite 300
                  <br />
                  League City, TX 77573
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Phone
                </p>
                <p className="mt-1 text-lg font-medium text-[#0b1638]">
                  214-392-3490
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Email
                </p>
                <p className="mt-1 text-lg font-medium text-[#0b1638]">
                  owners@odiscom.com
                </p>
              </div>
            </div>
          </div>

          <form className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="grid gap-6">
              <div>
                <label className="mb-2 block font-medium text-[#0b1638]">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-[#1f8a84] focus:outline-none focus:ring-2 focus:ring-[#1f8a84]/20"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-[#0b1638]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-[#1f8a84] focus:outline-none focus:ring-2 focus:ring-[#1f8a84]/20"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-[#0b1638]">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-[#1f8a84] focus:outline-none focus:ring-2 focus:ring-[#1f8a84]/20"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-[#0b1638]">
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Tell us about your project"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-[#1f8a84] focus:outline-none focus:ring-2 focus:ring-[#1f8a84]/20"
                />
              </div>

              <button
                type="submit"
                className="rounded-xl bg-[#0b1638] px-6 py-3 font-semibold text-white transition hover:bg-[#1f8a84]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}