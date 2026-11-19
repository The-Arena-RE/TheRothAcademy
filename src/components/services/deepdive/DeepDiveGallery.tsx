import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";

type GalleryItem = {
  label: string;
  headline: string;
  copy: string;
  note?: string;
  href?: string;
};

export function DeepDiveGallery({
  eyebrow,
  heading,
  intro,
  items,
  columns = 3,
}: {
  eyebrow: string;
  heading: string[];
  intro?: string;
  items: GalleryItem[];
  columns?: 2 | 3;
}) {
  return (
    <section className="border-y border-r-line bg-r-stripe-1 py-20 md:py-28">
      <div className="container-brand">
        <div className="max-w-2xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-6xl">
            {heading.map((line, index) => (
              <span key={line} className={clsx("block", index === heading.length - 1 && "text-r-gold")}>
                {line}
              </span>
            ))}
          </h2>
          {intro && <p className="mt-5 text-base text-r-muted font-body normal-case">{intro}</p>}
        </div>

        <div
          className={clsx(
            "mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2",
            columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2",
          )}
        >
          {items.map((item, index) => (
            <article
              key={item.headline}
              className="group relative flex flex-col overflow-hidden rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel p-6 transition-colors hover:border-r-gold/50 md:p-7"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-r-gold">
                {item.label ?? String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 text-xl text-r-white">{item.headline}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-r-muted font-body normal-case">
                {item.copy}
              </p>
              {item.note && (
                <p className="mt-4 border-t border-r-line pt-4 text-xs leading-relaxed text-r-muted/70 font-body normal-case">
                  {item.note}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
