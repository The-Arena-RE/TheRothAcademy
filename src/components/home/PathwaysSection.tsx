import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { pathways } from "@/data/home-content";

export function PathwaysSection() {
  return (
    <section id="pathways" className="border-b border-r-line bg-r-bg py-20 md:py-28">
      <div className="container-brand">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Your Pathway</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-6xl">Where Do You Start?</h2>
          </div>
          <p className="max-w-sm text-sm text-r-muted font-body normal-case">
            Two clear starting points. Both lead to the same standard of care.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {pathways.map((item) => {
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group relative flex h-full min-h-[460px] flex-col justify-between overflow-hidden rounded-[var(--radius-brand-card)] border border-r-line p-7 transition-colors hover:border-r-gold md:min-h-[540px] md:p-8"
                >
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 40vw, (min-width: 768px) 45vw, 90vw"
                    className="absolute inset-0 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(9,10,11,0.97) 0%, rgba(9,10,11,0.92) 48%, rgba(9,10,11,0.55) 72%, rgba(9,10,11,0.15) 92%)",
                    }}
                  />

                  <div className="relative flex items-start justify-between">
                    <span className="text-2xl font-heading text-r-gold">{item.number}</span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-r-gold/50 text-r-gold transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight size={16} aria-hidden />
                    </span>
                  </div>

                  <div className="relative">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-r-gold">
                      {item.eyebrow}
                    </p>
                    <h3 className="mt-3 text-2xl leading-tight text-r-white md:text-3xl">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-r-muted font-body normal-case">
                      {item.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 border-t border-r-line/60 pt-4 text-sm font-semibold uppercase tracking-wide text-r-gold">
                      {item.secondaryLabel}
                      <ArrowUpRight size={15} aria-hidden />
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
