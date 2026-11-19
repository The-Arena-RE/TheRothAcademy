import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";

type PathItem = { number: string; label: string; tagline: string; description: string; ctaLabel: string; href: string };

export function WorkPathsSection({
  eyebrow,
  heading,
  items,
}: {
  eyebrow: string;
  heading: string[];
  items: PathItem[];
}) {
  return (
    <section id="paths" className="scroll-mt-24 border-b border-r-line bg-r-bg py-20 md:py-28">
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
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item) => (
            <li key={item.number}>
              <a
                href={item.href}
                className="group flex h-full flex-col rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/60 p-7 transition-colors hover:border-r-gold md:p-8"
              >
                <span className="text-2xl font-heading text-r-gold">{item.number}</span>
                <h3 className="mt-4 text-2xl text-r-white">{item.label}</h3>
                <p className="mt-2 text-sm font-semibold text-r-gold/90 font-body normal-case">{item.tagline}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-r-muted font-body normal-case">
                  {item.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 border-t border-r-line/60 pt-5 text-sm font-semibold uppercase tracking-wide text-r-gold">
                  {item.ctaLabel}
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
