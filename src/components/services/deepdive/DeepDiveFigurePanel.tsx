import { Eyebrow } from "@/components/ui/Eyebrow";

export function DeepDiveFigurePanel({
  eyebrow,
  heading,
  intro,
  figures,
  disclaimer,
}: {
  eyebrow: string;
  heading: string[];
  intro?: string;
  figures: { label: string; value: string }[];
  disclaimer: string;
}) {
  return (
    <section className="bg-r-bg py-20 md:py-28">
      <div className="container-brand max-w-3xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 text-4xl md:text-6xl">
          {heading.map((line, index) => (
            <span key={line} className={index === heading.length - 1 ? "block text-r-gold" : "block"}>
              {line}
            </span>
          ))}
        </h2>
        {intro && <p className="mt-5 text-base text-r-muted font-body normal-case">{intro}</p>}

        <div className="mt-10 rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel p-6 md:p-10">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            {figures.map((figure) => (
              <div key={figure.label} className="flex items-baseline justify-between gap-4 border-b border-r-line pb-3">
                <dt className="text-sm text-r-muted font-body normal-case">{figure.label}</dt>
                <dd className="shrink-0 text-lg font-semibold text-r-white">{figure.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-r-muted/70 font-body normal-case">{disclaimer}</p>
      </div>
    </section>
  );
}
