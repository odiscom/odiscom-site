import Link from "next/link"

export default function EventsNotFound() {
  return (
    <main className="bg-white text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">Events</p>
        <h1 className="mt-4 text-4xl font-semibold md:text-5xl">This events page could not be found</h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">The page may have moved, or the route may not be available yet.</p>
        <div className="mt-8">
          <Link href="/events" className="rounded-full bg-[#1f8a84] px-7 py-4 font-semibold text-white hover:bg-[#18716c]">
            Back to Events
          </Link>
        </div>
      </section>
    </main>
  )
}
