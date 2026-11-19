import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { objectionBreakerContent as content } from "@/data/home-content";

export function ObjectionBreakerSection() {
  return (
    <section className="border-y border-r-line bg-r-stripe-1 py-20 md:py-28">
      <div className="container-brand grid gap-12 md:grid-cols-[1fr_0.9fr] md:gap-16">
        <div className="max-w-xl">
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-6xl">
            {content.heading.map((line, index) => (
              <span key={line} className={index === content.heading.length - 1 ? "block text-r-gold" : "block"}>
                {line}
              </span>
            ))}
          </h2>

          <div className="mt-6 space-y-4">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-r-muted font-body normal-case">
                {paragraph}
              </p>
            ))}
          </div>

          <p className="mt-8 border-l-2 border-r-gold pl-5 text-xl text-r-white md:text-2xl">{content.featured}</p>

          <Link
            href={content.ctaHref}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold"
          >
            {content.ctaLabel}
            <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>

        <div className="rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/40 p-7 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-r-muted">Further Reading</p>
          <ul className="mt-5 space-y-4">
            {content.references.map((reference) => (
              <li key={reference.href} className="border-t border-r-line pt-4 first:border-t-0 first:pt-0">
                <a
                  href={reference.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-start gap-2 text-sm leading-relaxed text-r-muted transition-colors font-body normal-case hover:text-r-gold"
                >
                  {reference.label}
                  <ArrowUpRight size={14} className="mt-0.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
