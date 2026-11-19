import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { whyRothAcademyContent } from "@/data/home-content";

export function CompanyCredibilitySection() {
  const content = whyRothAcademyContent;

  return (
    <section className="border-b border-r-line bg-r-stripe-2 py-20 md:py-28">
      <div className="container-brand grid gap-14 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <aside className="md:sticky md:top-32 md:self-start">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-brand-card)] border border-r-line">
            <Image
              src={content.portrait.image}
              alt={content.portrait.name}
              fill
              sizes="(min-width: 768px) 32vw, 90vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background: "linear-gradient(0deg, rgba(9,10,11,0.88) 0%, rgba(9,10,11,0.1) 45%, rgba(9,10,11,0) 70%)",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-lg text-r-white">{content.portrait.name}</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-r-gold">{content.portrait.title}</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-r-muted font-body normal-case">{content.portrait.bio}</p>
          <Link
            href={content.portrait.href}
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold"
          >
            {content.portrait.linkLabel}
            <ArrowUpRight size={16} aria-hidden />
          </Link>
        </aside>

        <div className="min-w-0">
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-6xl">
            {content.heading.map((line, index) => (
              <span key={line} className={index === content.heading.length - 1 ? "block text-r-gold" : "block"}>
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-6 max-w-xl text-base text-r-muted font-body normal-case">{content.subheading}</p>

          <div className="mt-6 max-w-xl space-y-4">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-r-muted font-body normal-case">
                {paragraph}
              </p>
            ))}
          </div>

          <p className="mt-8 max-w-xl border-l-2 border-r-gold pl-5 text-xl text-r-white md:text-2xl">
            {content.featured}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {content.cards.map((card) => (
              <div
                key={card.title}
                className="rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/40 p-6 transition-colors hover:border-r-gold/40"
              >
                <h3 className="text-lg text-r-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-r-muted font-body normal-case">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
