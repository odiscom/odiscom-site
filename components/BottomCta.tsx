import Link from "next/link"

type BottomCtaProps = {
  title: string
  description: string
  secondaryHref?: string
  secondaryLabel?: string
}

export default function BottomCta({
  title,
  description,
  secondaryHref = "/services",
  secondaryLabel = "Explore Services",
}: BottomCtaProps) {
  return (
    <section className="bg-[#1f8a84] text-white">
      <div className="mx-auto max-w-5xl px-6 py-16 text-center lg:px-8">
        <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/90">{description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="rounded-full bg-white px-10 py-5 text-[18px] font-semibold text-[#1f8a84] transition hover:bg-[#e8f5f4]">
            Contact Odiscom
          </Link>
          <Link href={secondaryHref} className="rounded-full border border-white/70 px-10 py-5 text-[18px] font-semibold text-white transition hover:bg-white/10">
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
