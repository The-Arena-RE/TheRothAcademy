import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { standardContent } from "@/data/home-content";

export function StandardSection() {
  return (
    <section className="relative overflow-hidden border-b border-r-line bg-r-bg py-20 md:py-28">
      <div className="container-brand grid gap-12 md:grid-cols-[1fr_0.9fr] md:gap-16">
        <div>
          <Eyebrow>{standardContent.eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-xl text-4xl md:text-6xl">
            {standardContent.heading.map((line, index) => (
              <span key={line} className={index === standardContent.heading.length - 1 ? "block text-r-gold" : "block"}>
                {line}
              </span>
            ))}
          </h2>

          <div className="mt-6 max-w-lg space-y-4">
            {standardContent.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-r-muted font-body normal-case">
                {paragraph}
              </p>
            ))}
          </div>

          <Link
            href="/work-with-us"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold"
          >
            See how we work
            <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>

        <div className="flex items-center">
          <div className="relative w-full overflow-hidden rounded-[var(--radius-brand-card)] border border-r-gold/30 bg-gradient-to-b from-r-panel to-r-panel/70 p-8 shadow-2xl shadow-black/50 md:p-10">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-r-gold-dark via-r-gold to-r-gold-light"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-10 -right-6 select-none font-heading text-[9rem] leading-none text-r-gold/[0.08]"
            >
              &rdquo;
            </span>
            <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-r-gold/40 text-r-gold">
              <ShieldCheck size={18} aria-hidden />
            </span>
            <p className="relative mt-6 text-2xl leading-snug text-r-white md:text-3xl">
              {standardContent.featured}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
