import Link from "next/link"
import BottomCta from "@/components/BottomCta"

export default function ContactPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* HERO */}
      <section className="border-b border-slate-200 bg-[#f7fbfb]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
              Contact
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              Let’s talk about your project
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Whether you're planning a fiber build, tower upgrade, or infrastructure
              program, we’re ready to support with practical engineering and delivery-focused execution.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">

          {/* LEFT – CONTACT INFO */}
          <div>
            <h2 className="text-2xl font-semibold">Get in touch</h2>

            <p className="mt-4 text-slate-600 leading-8">
              Reach out directly or send us project details using the form. We typically respond quickly and can align with your timeline.
            </p>

            <div className="mt-10 space-y-6">

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1f8a84]">
                  Phone
                </p>
                <p className="mt-1 text-lg">(469) 531-1176</p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1f8a84]">
                  Email
                </p>
                <p className="mt-1 text-lg">owners@odiscom.com</p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1f8a84]">
                  Location
                </p>
                <p className="mt-1 text-lg">League City, TX</p>
              </div>

            </div>

            {/* PROCESS */}
            <div className="mt-12 rounded-2xl border border-slate-200 bg-[#f7fbfb] p-6">
              <h3 className="font-semibold text-lg">What happens next?</h3>

              <ul className="mt-4 space-y-3 text-slate-600">
                <li>• We review your project scope</li>
                <li>• Align on timeline and support needs</li>
                <li>• Provide proposal or next steps quickly</li>
              </ul>
            </div>
          </div>

          {/* RIGHT – FORM */}
          <div className="rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Project inquiry</h2>

            <form className="mt-6 space-y-5">

              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#1f8a84]"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#1f8a84]"
              />

              <input
                type="text"
                placeholder="Company"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#1f8a84]"
              />

              <textarea
                placeholder="Tell us about your project"
                rows={5}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-[#1f8a84]"
              />

              <button
                type="submit"
                className="w-full rounded-full bg-[#1f8a84] px-6 py-4 font-semibold text-white transition hover:bg-[#18716c]"
              >
                Submit Inquiry
              </button>
            </form>
          </div>

        </div>
      </section>

      <BottomCta
        title="Need support on a fiber, tower, or telecom infrastructure project?"
        description="Reach out and we’ll help you move forward quickly and efficiently."
      />
    </main>
  )
}