import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { InvestmentPossibility } from "@/data/goals-content";

export function InvestmentPossibilities({
  items,
  footnote,
}: {
  items: InvestmentPossibility[];
  footnote?: string;
}) {
  return (
    <>
      {items.map((item, index) => {
        const reverse = index % 2 === 1;
        return (
          <section
            key={item.id}
            id={item.id}
            className={clsx(
              "scroll-mt-24 border-b border-r-line py-20 md:py-28",
              index % 2 === 0 ? "bg-r-bg" : "bg-r-stripe-1",
            )}
          >
            <div className="container-brand grid items-center gap-14 md:grid-cols-[1.05fr_1fr] md:gap-16">
              <div className={clsx("min-w-0", reverse && "md:order-2")}>
                <Eyebrow>{item.number}</Eyebrow>
                <h2 className="mt-4 text-4xl md:text-6xl">{item.label}</h2>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-r-muted font-body normal-case">
                  {item.description}
                </p>
                <p className="mt-4 max-w-md border-t border-r-line pt-4 text-sm text-r-muted/80 font-body normal-case italic">
                  {item.example}
                </p>
                <p className="mt-4 max-w-md text-xs leading-relaxed text-r-muted/60 font-body normal-case">
                  {item.riskNote}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                  {item.link401k && (
                    <Link
                      href={item.link401k.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold"
                    >
                      {item.link401k.label}
                      <ArrowUpRight size={15} aria-hidden />
                    </Link>
                  )}
                  {item.linkIra && (
                    <Link
                      href={item.linkIra.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold"
                    >
                      {item.linkIra.label}
                      <ArrowUpRight size={15} aria-hidden />
                    </Link>
                  )}
                </div>
              </div>

              <div
                className={clsx(
                  "relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[var(--radius-brand-card)] border border-r-gold/30 shadow-2xl shadow-black/50",
                  reverse && "md:order-1 md:mx-0",
                )}
              >
                {item.image ? (
                  <Image src={item.image} alt="" fill sizes="(min-width: 768px) 35vw, 90vw" className="object-cover" />
                ) : (
                  <div
                    aria-hidden
                    className="absolute inset-0 flex items-center justify-center overflow-hidden"
                    style={{
                      background:
                        "radial-gradient(120% 120% at 25% 15%, rgba(184,153,88,0.25) 0%, rgba(13,13,13,0.92) 55%), linear-gradient(160deg, #161616 0%, #0a0a0a 100%)",
                    }}
                  >
                    <span className="select-none font-heading text-[9rem] leading-none text-r-gold/10">
                      {item.number}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })}

      {footnote && (
        <div className="border-b border-r-line bg-r-bg py-6">
          <div className="container-brand">
            <p className="max-w-3xl text-xs text-r-muted/70 font-body normal-case">{footnote}</p>
          </div>
        </div>
      )}
    </>
  );
}
