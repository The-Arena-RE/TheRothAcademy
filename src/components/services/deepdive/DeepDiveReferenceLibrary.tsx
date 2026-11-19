import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";

type Reference = { title: string; description: string; href: string };

export function DeepDiveReferenceLibrary({ references }: { references: Reference[] }) {
  return (
    <section className="border-t border-r-line bg-r-stripe-1 py-16 md:py-20">
      <div className="container-brand max-w-3xl">
        <Eyebrow>Official References</Eyebrow>
        <h2 className="mt-4 text-3xl md:text-4xl">Explore The Rules Behind The Possibilities</h2>

        <ul className="mt-8 space-y-5">
          {references.map((reference) => (
            <li key={reference.href} className="border-b border-r-line pb-5 last:border-0">
              <a
                href={reference.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-start gap-2 text-sm font-semibold text-r-white transition-colors hover:text-r-gold"
              >
                {reference.title}
                <ArrowUpRight size={14} aria-hidden className="mt-1 shrink-0" />
              </a>
              <p className="mt-1.5 text-xs leading-relaxed text-r-muted font-body normal-case">
                {reference.description}
              </p>
              <p className="mt-1 break-all text-[11px] text-r-muted/50 font-body normal-case">
                {reference.href}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-xs leading-relaxed text-r-muted/60 font-body normal-case">
          These references support the factual statements on this page. They are not an endorsement of
          Roth Academy by any government agency.
        </p>
      </div>
    </section>
  );
}
