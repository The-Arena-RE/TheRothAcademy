import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";

type Scenario = { number: string; title: string; description: string; pathLabel: string; href: string };

export function PlansScenarios({
  eyebrow,
  heading,
  items,
}: {
  eyebrow: string;
  heading: string[];
  items: Scenario[];
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
        </div>

        <ul className="mt-12 divide-y divide-r-line border-t border-r-line">
          {items.map((item) => (
            <li key={item.number} className="py-8 md:py-10">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-10">
                <span className="shrink-0 font-heading text-3xl text-r-gold md:w-16">{item.number}</span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-2xl text-r-white">{item.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-r-muted font-body normal-case">
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold"
                  >
                    {item.pathLabel}
                    <ArrowUpRight size={15} aria-hidden />
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
