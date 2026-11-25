import Link from "next/link";
import { ArrowUpRight, ShieldAlert, FileText, Landmark } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { objectionBreakerContent as content } from "@/data/home-content";

const referenceIcons = [ShieldAlert, FileText, Landmark];

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

        <div className="rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/60 p-7 shadow-xl shadow-black/30 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-r-gold">Verified Sources</p>
          <ul className="mt-5 space-y-4">
            {content.references.map((reference, index) => {
              const Icon = referenceIcons[index % referenceIcons.length];
              return (
                <li key={reference.href} className="border-t border-r-line pt-4 first:border-t-0 first:pt-0">
                  <a
                    href={reference.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 text-sm leading-relaxed text-r-muted transition-colors font-body normal-case hover:text-r-gold"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-r-line text-r-muted transition-colors group-hover:border-r-gold/50 group-hover:text-r-gold">
                      <Icon size={14} aria-hidden />
                    </span>
                    <span className="flex-1 pt-1">{reference.label}</span>
                    <ArrowUpRight
                      size={14}
                      className="mt-1.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
