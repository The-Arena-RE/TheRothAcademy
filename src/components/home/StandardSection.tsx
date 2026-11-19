import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { standardContent } from "@/data/home-content";

export function StandardSection() {
  return (
    <section className="border-b border-r-line bg-r-bg py-20 md:py-28">
      <div className="container-brand grid gap-12 md:grid-cols-[1fr_0.9fr] md:gap-16">
        <div>
          <Eyebrow>{standardContent.eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-xl text-4xl md:text-6xl">
            {standardContent.heading.map((line, index) => (
              <span key={line} className={index === standardContent.heading.length - 1 ? "block text-r-gold" : "block"}>
                {line}
              </span>
            ))}
          </h2>

          <div className="mt-6 max-w-lg space-y-4">
            {standardContent.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-r-muted font-body normal-case">
                {paragraph}
              </p>
            ))}
          </div>

          <Link
            href="/work-with-us"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold"
          >
            See how we work
            <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>

        <div className="flex items-center">
          <p className="border-l-2 border-r-gold pl-6 text-2xl leading-snug text-r-white md:text-3xl">
            {standardContent.featured}
          </p>
        </div>
      </div>
    </section>
  );
}
