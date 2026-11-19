import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";

type Scenario = { label: string; headline: string; copy: string; href: string };

export function StoryScenarios({
  eyebrow,
  heading,
  intro,
  items,
  note,
}: {
  eyebrow: string;
  heading: string[];
  intro?: string;
  items: Scenario[];
  note?: string;
}) {
  return (
    <section className="border-b border-r-line bg-r-stripe-1 py-16 md:py-24">
      <div className="container-brand">
        <div className="max-w-2xl">
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

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group flex flex-col rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel p-6 transition-colors hover:border-r-gold/50 md:p-7"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-r-gold">{item.label}</span>
              <p className="mt-4 text-xl text-r-white">{item.headline}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-r-muted font-body normal-case">{item.copy}</p>
              <span className="mt-5 inline-flex items-center gap-2 border-t border-r-line/60 pt-4 text-xs font-semibold uppercase tracking-wide text-r-gold">
                Read more
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
              </span>
            </Link>
          ))}
        </div>

        {note && <p className="mt-10 max-w-3xl text-xs text-r-muted/70 font-body normal-case">{note}</p>}
      </div>
    </section>
  );
}
