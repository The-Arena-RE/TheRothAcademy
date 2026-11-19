import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { planDestinations } from "@/data/site-config";

type Card = {
  number: string;
  label: string;
  tagline: string;
  description: string;
  primaryLabel: string;
  secondaryLabel: string;
  href: string;
};

export function StoryTwoWays({
  eyebrow,
  heading,
  intro,
  cards,
  supportingLabel,
  supportingHref,
}: {
  eyebrow: string;
  heading: string[];
  intro?: string;
  cards: Card[];
  supportingLabel: string;
  supportingHref: string;
}) {
  return (
    <section className="border-b border-r-line bg-r-bg py-20 md:py-28">
      <div className="container-brand">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-6xl">
              {heading.map((line, index) => (
                <span key={line} className={index === heading.length - 1 ? "block text-r-gold" : "block"}>
                  {line}
                </span>
              ))}
            </h2>
            {intro && <p className="mt-5 text-base text-r-muted font-body normal-case">{intro}</p>}
          </div>
          <Link
            href={supportingHref}
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold"
          >
            {supportingLabel}
            <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {cards.map((card) => {
            const primaryHref = card.label.includes("401") ? planDestinations.open401k : planDestinations.openIra;
            return (
              <div
                key={card.label}
                className="flex flex-col rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/40 p-7 md:p-8"
              >
                <span className="text-2xl font-heading text-r-gold">{card.number}</span>
                <h3 className="mt-4 text-2xl text-r-white md:text-3xl">{card.label}</h3>
                <p className="mt-2 text-sm font-semibold text-r-gold/90 font-body normal-case">{card.tagline}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-r-muted font-body normal-case">
                  {card.description}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-5 border-t border-r-line pt-6">
                  <Link
                    href={primaryHref}
                    className="inline-flex items-center gap-2 rounded-[var(--radius-brand-control)] bg-r-gold px-5 py-3 text-xs font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light"
                  >
                    {card.primaryLabel}
                    <ArrowUpRight size={15} aria-hidden />
                  </Link>
                  <Link href={card.href} className="text-xs font-semibold uppercase tracking-wide text-r-gold">
                    {card.secondaryLabel}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
