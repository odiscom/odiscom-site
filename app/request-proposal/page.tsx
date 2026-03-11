export default function Page() {
  return (
    <main className="bg-white">

      <section className="mx-auto max-w-3xl px-6 pt-12 pb-16">

        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
          Request a Proposal
        </h1>

        <p className="mt-4 text-slate-600">
          Tell us about your telecommunications infrastructure project and
          our team will follow up to discuss scope, timeline, and support.
        </p>

        <form
          action="mailto:owners@odiscom.com"
          method="post"
          encType="text/plain"
          className="mt-8 space-y-6"
        >

          <div>
            <label className="text-sm font-semibold text-slate-900">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-900">
              Company
            </label>
            <input
              type="text"
              name="company"
              className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-900">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-900">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-900">
              Project Type
            </label>

            <select
              name="project"
              className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm"
            >
              <option>Fiber Engineering</option>
              <option>Tower Engineering</option>
              <option>Telecom Construction</option>
              <option>Program Management</option>
              <option>Infrastructure Consulting</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-900">
              Project Details
            </label>

            <textarea
              name="message"
              rows={5}
              className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm"
            />
          </div>

          <button
            type="submit"
            className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Submit Request
          </button>

        </form>

      </section>

    </main>
  );
}