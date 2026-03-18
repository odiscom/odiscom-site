import Link from "next/link";

type BottomCtaProps = {
  title: string;
  description: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

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
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/90">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {/* CENTRALIZED BUTTON: white bg => teal text */}
          <Link
            href="/contact"
            className="btn btn-white px-10 py-5 text-[18px] font-semibold"
          >
            Contact Odiscom
          </Link>

          {/* CENTRALIZED BUTTON: teal bg => white text */}
          <Link
            href={secondaryHref}
            className="btn btn-teal px-10 py-5 text-[18px] font-semibold"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}