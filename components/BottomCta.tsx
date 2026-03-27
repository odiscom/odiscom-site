import Link from "next/link";

type BottomCtaProps = {
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function BottomCta({
  title,
  description,
  primaryHref = "/contact",
  primaryLabel = "Contact Odiscom",
  secondaryHref = "/services",
  secondaryLabel = "Explore Services",
}: BottomCtaProps) {
  return (
    <section className="border-t border-white/20 bg-[#edf8f7] text-[#0f3f3b]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
            {title}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-600">
            {description}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href={primaryHref} className="btn btn-lg">
              {primaryLabel}
            </Link>

            <Link href={secondaryHref} className="btn btn-lg">
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}