export default function RequestProposal() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight">
        Request a Proposal
      </h1>

      <p className="mt-4 text-slate-600">
        Tell us about your project and our team will respond shortly.
      </p>

      <form className="mt-10 grid gap-6">

        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            className="mt-1 w-full rounded-lg border px-4 py-2"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Company</label>
          <input
            type="text"
            className="mt-1 w-full rounded-lg border px-4 py-2"
            placeholder="Company name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            className="mt-1 w-full rounded-lg border px-4 py-2"
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Service Needed</label>
          <select className="mt-1 w-full rounded-lg border px-4 py-2">
            <option>Telecom Engineering</option>
            <option>Fiber Infrastructure</option>
            <option>Tower Services</option>
            <option>Construction Support</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Project Description</label>
          <textarea
            rows={5}
            className="mt-1 w-full rounded-lg border px-4 py-2"
            placeholder="Tell us about the project..."
          />
        </div>

        <button
          className="w-fit rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800"
        >
          Submit Request
        </button>

      </form>
    </main>
  );
}