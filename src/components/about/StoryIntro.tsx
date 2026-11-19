import Image from "next/image";
import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";

const DEFAULT_PORTRAIT = "/about/kevin-portrait.webp";

export function StoryIntro({
  byline,
  portraitCaption,
  portraitSrc = DEFAULT_PORTRAIT,
  portraitAlt = byline.name,
  sectionId = "the-story",
  watermark = "01",
  kicker,
  heading,
  lead,
  pullQuote,
  paragraphs,
  sourceLink,
}: {
  byline: { tag: string; name: string; role: string };
  portraitCaption: string;
  portraitSrc?: string;
  portraitAlt?: string;
  sectionId?: string;
  watermark?: string;
  kicker: string;
  heading: string[];
  lead: string;
  pullQuote?: string;
  paragraphs: string[];
  sourceLink?: { label: string; href: string };
}) {
  return (
    <section id={sectionId} className="relative overflow-hidden border-b border-r-line bg-r-bg py-16 md:py-24">
      {watermark && (
        <span
          aria-hidden
          className="pointer-events-none absolute -top-10 right-0 select-none font-heading text-[280px] leading-none text-r-white/[0.03] md:text-[420px]"
        >
          {watermark}
        </span>
      )}

      <div className="container-brand relative grid gap-12 md:grid-cols-[320px_1fr] md:gap-12 lg:gap-20">
        <aside className="md:sticky md:top-32 md:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-r-gold">{byline.tag}</p>
          <p className="mt-3 text-2xl text-r-white">{byline.name}</p>
          <p className="mt-1 text-sm text-r-muted font-body normal-case">{byline.role}</p>

          <div className="relative mt-6 aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-brand-card)] border border-r-gold/30 shadow-xl shadow-black/40">
            <Image src={portraitSrc} alt={portraitAlt} fill sizes="320px" className="object-cover" />
          </div>
          <p className="mt-3 text-[11px] uppercase tracking-[0.15em] text-r-muted/70">{portraitCaption}</p>
        </aside>

        <article className="min-w-0 md:self-center">
          <Eyebrow>{kicker}</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-7xl lg:text-8xl">
            {heading.map((line, index) => (
              <span key={line} className={clsx("block", index === heading.length - 1 && "text-r-gold")}>
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-r-white font-body normal-case">{lead}</p>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 max-w-2xl text-sm text-r-muted font-body normal-case">
              {paragraph}
            </p>
          ))}

          {pullQuote && (
            <blockquote className="mt-8 max-w-xl border-l-2 border-r-gold pl-6">
              <p className="text-2xl text-r-white md:text-3xl">&ldquo;{pullQuote}&rdquo;</p>
            </blockquote>
          )}

          {sourceLink && (
            <a
              href={sourceLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-1 text-xs uppercase tracking-[0.1em] text-r-muted/70 transition-colors hover:text-r-gold"
            >
              {sourceLink.label}
            </a>
          )}
        </article>
      </div>
    </section>
  );
}
