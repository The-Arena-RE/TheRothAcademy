import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { investmentShowcase } from "@/data/home-content";

export function AssetClassSection() {
  return (
    <section id="investments" className="scroll-mt-24 border-y border-r-line bg-r-stripe-1 py-20 md:py-28">
      <div className="container-brand max-w-3xl">
        <Eyebrow>{investmentShowcase.eyebrow}</Eyebrow>
        <h2 className="mt-4 text-4xl md:text-6xl">
          {investmentShowcase.heading.map((line, index) => (
            <span
              key={line}
              className={index === investmentShowcase.heading.length - 1 ? "block text-r-gold" : "block"}
            >
              {line}
            </span>
          ))}
        </h2>
        <p className="mt-6 text-base text-r-muted font-body normal-case">{investmentShowcase.intro}</p>
      </div>

      <div className="container-brand mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {investmentShowcase.items.map((item) => {
          const card = (
            <div className="group relative flex h-full min-h-[440px] flex-col justify-end overflow-hidden rounded-[var(--radius-brand-card)] border border-r-line transition-colors hover:border-r-gold/60">
              {item.image ? (
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                  className="absolute inset-0 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(120% 120% at 20% 10%, rgba(184,153,88,0.22) 0%, rgba(13,13,13,0.9) 55%), linear-gradient(160deg, #141414 0%, #0a0a0a 100%)",
                  }}
                />
              )}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(9,10,11,0.97) 0%, rgba(9,10,11,0.9) 46%, rgba(9,10,11,0.5) 68%, rgba(9,10,11,0.12) 88%)",
                }}
              />

              <span className="relative mx-7 mt-7 w-fit text-xs font-semibold uppercase tracking-[0.2em] text-r-gold md:mx-8 md:mt-8">
                {item.number}
              </span>

              <div className="relative mt-auto p-7 md:p-8">
                <h3 className="text-2xl leading-tight text-r-white md:text-[28px]">{item.label}</h3>
                <p className="mt-2 text-sm font-semibold text-r-gold/90 font-body normal-case">{item.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-r-muted font-body normal-case">
                  {item.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 border-t border-r-line/60 pt-4 text-sm font-semibold uppercase tracking-wide text-r-gold">
                  {item.cta}
                  <ArrowUpRight size={15} aria-hidden />
                </span>
              </div>
            </div>
          );

          return (
            <Link href={item.href} key={item.label} className="block h-full">
              {card}
            </Link>
          );
        })}
      </div>

      <div className="container-brand mt-10 border-t border-r-line pt-6">
        <p className="max-w-3xl text-xs text-r-muted/70 font-body normal-case">{investmentShowcase.footnote}</p>
      </div>
    </section>
  );
}
