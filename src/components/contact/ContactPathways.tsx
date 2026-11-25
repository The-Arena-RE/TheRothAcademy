import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";

type Pathway = {
  number: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export function ContactPathways({
  eyebrow,
  heading,
  intro,
  items,
}: {
  eyebrow: string;
  heading: string[];
  intro?: string;
  items: Pathway[];
}) {
  return (
    <section className="border-b border-r-line bg-r-bg py-16 md:py-24">
      <div className="container-brand">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-4xl md:text-6xl">
          {heading.map((line, index) => (
            <span key={line} className={index === heading.length - 1 ? "block text-r-gold" : "block"}>
              {line}
            </span>
          ))}
        </h2>
        {intro && <p className="mt-4 max-w-xl text-sm text-r-muted font-body normal-case">{intro}</p>}

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.number}
                href={item.href}
                className="group flex flex-col rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/40 p-7 transition-colors hover:border-r-gold/50"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-r-gold/40 text-r-gold">
                  <Icon size={18} aria-hidden />
                </span>
                <span className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-r-gold">
                  {item.number}
                </span>
                <h3 className="mt-2 text-xl text-r-white md:text-2xl">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-r-muted font-body normal-case">
                  {item.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-r-gold">
                  Go There
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
