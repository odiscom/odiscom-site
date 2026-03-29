import Link from "next/link"

export default function BottomCta({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <section className="mt-24 bg-[#1f8a84]">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
        <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
          {title}
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">
          {description}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-white px-8 py-4 font-semibold text-[#1f8a84] transition hover:bg-[#f0f7f7]"
          >
            Request Proposal
          </Link>

          <a
            href="https://outlook.office.com/book/Odiscom@odiscom.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
          >
            Book a Meeting
          </a>
        </div>
      </div>
    </section>
  )
}