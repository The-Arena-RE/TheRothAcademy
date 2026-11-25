import { Eyebrow } from "@/components/ui/Eyebrow";
import { controversyContent } from "@/data/home-content";
import { compensationCategories } from "@/data/why-self-directed-content";

const expandedUniverse = [
  "Real Estate",
  "Private Lending",
  "Private Businesses",
  "Precious Metals",
  "Digital Assets",
];

export function ControversyShowcase() {
  const content = controversyContent;

  return (
    <section className="relative overflow-hidden border-b border-r-line bg-r-bg py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[10%] top-0 h-full w-[45%] opacity-[0.14] mix-blend-screen"
        style={{
          background:
            "conic-gradient(from 20deg at 50% 50%, transparent 0deg, var(--color-r-gold-dark) 60deg, var(--color-r-gold) 110deg, transparent 200deg, transparent 360deg)",
          filter: "blur(60px)",
        }}
      />

      <div className="container-brand relative max-w-3xl">
        <Eyebrow>{content.eyebrow}</Eyebrow>
        <h2 className="mt-4 text-4xl md:text-6xl">
          {content.heading.map((line, index) => (
            <span key={line} className={index === content.goldLine ? "block text-r-gold" : "block"}>
              {line}
            </span>
          ))}
        </h2>

        <div className="mt-6 space-y-4">
          {content.paragraphs.slice(0, 2).map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-r-muted font-body normal-case">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="container-brand relative mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/40 p-7 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-r-muted">The Conventional Menu</p>
          <p className="mt-2 text-sm leading-relaxed text-r-muted/80 font-body normal-case">
            What a financial professional might earn from your account.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {compensationCategories.items.map((item) => (
              <li
                key={item.number}
                className="rounded-[var(--radius-brand-control)] border border-r-line/70 bg-r-bg/40 px-4 py-3"
              >
                <span className="text-sm text-r-white">{item.title}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[var(--radius-brand-card)] border border-r-gold/30 bg-gradient-to-b from-r-panel to-r-panel/70 p-7 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-r-gold">The Expanded Universe</p>
          <p className="mt-2 text-sm leading-relaxed text-r-muted font-body normal-case">
            What your own retirement plan could hold instead.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {expandedUniverse.map((label) => (
              <li
                key={label}
                className="rounded-[var(--radius-brand-control)] border border-r-gold/30 bg-r-bg/30 px-4 py-3"
              >
                <span className="text-sm font-semibold text-r-gold">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-brand relative mt-12 max-w-3xl">
        <div className="space-y-4">
          {content.paragraphs.slice(2).map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-r-muted font-body normal-case">
              {paragraph}
            </p>
          ))}
        </div>

        <p className="mt-8 border-l-2 border-r-gold pl-5 text-xl text-r-white md:text-2xl">{content.featured}</p>

        {content.note && (
          <p className="mt-8 text-xs leading-relaxed text-r-muted/70 font-body normal-case">{content.note}</p>
        )}
      </div>
    </section>
  );
}
