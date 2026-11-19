import { Eyebrow } from "@/components/ui/Eyebrow";
import type { InvestmentPossibility } from "@/data/goals-content";

export function ExplorerNav({
  eyebrow,
  heading,
  intro,
  items,
}: {
  eyebrow: string;
  heading: string[];
  intro?: string;
  items: InvestmentPossibility[];
}) {
  return (
    <section id="gallery" className="scroll-mt-24 border-b border-r-line bg-r-stripe-2 py-16 md:py-20">
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

        <ul className="mt-10 flex flex-wrap gap-3">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="inline-flex items-center gap-2 rounded-full border border-r-line px-5 py-2.5 text-sm text-r-white transition-colors hover:border-r-gold hover:text-r-gold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
