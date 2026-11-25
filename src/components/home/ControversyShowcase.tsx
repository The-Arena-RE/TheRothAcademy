import Image from "next/image";
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
      <Image
        aria-hidden
        src="/services/401k/overview.webp"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover opacity-25"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(9,10,11,0.75) 0%, rgba(9,10,11,0.92) 30%, rgba(9,10,11,0.97) 60%, rgba(9,10,11,1) 100%)",
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

        <p className="mt-6 text-base leading-relaxed text-r-muted font-body normal-case">{content.paragraphs[0]}</p>
      </div>

      <div className="container-brand relative mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-[var(--radius-brand-card)] border border-r-line bg-r-bg/70 p-7 backdrop-blur-sm md:p-8">
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

      <div className="container-brand relative mt-10 max-w-3xl">
        <p className="text-base leading-relaxed text-r-muted font-body normal-case">{content.paragraphs[1]}</p>

        <p className="mt-8 border-l-2 border-r-gold pl-5 text-xl text-r-white md:text-2xl">{content.featured}</p>

        {content.note && (
          <p className="mt-8 text-xs leading-relaxed text-r-muted/70 font-body normal-case">{content.note}</p>
        )}
      </div>
    </section>
  );
}
