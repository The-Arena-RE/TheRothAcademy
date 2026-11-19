import { Check, AlertTriangle } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function DeepDiveComparisonTable({
  eyebrow,
  heading,
  leftLabel,
  rightLabel,
  rows,
  footnote,
}: {
  eyebrow: string;
  heading: string[];
  leftLabel: string;
  rightLabel: string;
  rows: { left: string; right: string }[];
  footnote?: string;
}) {
  return (
    <section className="bg-r-bg py-20 md:py-28">
      <div className="container-brand max-w-4xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 text-4xl md:text-6xl">
          {heading.map((line, index) => (
            <span key={line} className={index === heading.length - 1 ? "block text-r-gold" : "block"}>
              {line}
            </span>
          ))}
        </h2>

        <div className="mt-12 overflow-hidden rounded-[var(--radius-brand-card)] border border-r-line">
          <div className="grid grid-cols-1 divide-y divide-r-line sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            <div className="bg-r-panel p-5 sm:p-6">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-r-gold">
                <Check size={14} aria-hidden /> {leftLabel}
              </p>
            </div>
            <div className="bg-r-panel p-5 sm:p-6">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-r-muted">
                <AlertTriangle size={14} aria-hidden /> {rightLabel}
              </p>
            </div>
          </div>

          {rows.map((row) => (
            <div
              key={row.left}
              className="grid grid-cols-1 divide-y divide-r-line border-t border-r-line sm:grid-cols-2 sm:divide-x sm:divide-y-0"
            >
              <p className="p-5 text-sm leading-relaxed text-r-white font-body normal-case sm:p-6">
                {row.left}
              </p>
              <p className="p-5 text-sm leading-relaxed text-r-muted font-body normal-case sm:p-6">
                {row.right}
              </p>
            </div>
          ))}
        </div>

        {footnote && (
          <p className="mt-6 text-xs leading-relaxed text-r-muted/70 font-body normal-case">{footnote}</p>
        )}
      </div>
    </section>
  );
}
