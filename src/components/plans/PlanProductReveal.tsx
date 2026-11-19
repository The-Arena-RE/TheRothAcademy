import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";

type Feature = { title: string; description: string };

export function PlanProductReveal({
  eyebrow,
  heading,
  goldLine,
  paragraphs,
  features,
  aspiration,
  qualification,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  tone = "dark",
}: {
  eyebrow: string;
  heading: string[];
  goldLine?: number;
  paragraphs: string[];
  features: Feature[];
  aspiration: string;
  qualification: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  tone?: "dark" | "panel";
}) {
  return (
    <section className={clsx("border-b border-r-line py-20 md:py-28", tone === "dark" ? "bg-r-bg" : "bg-r-stripe-2")}>
      <div className="container-brand">
        <div className="max-w-2xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-6xl">
            {heading.map((line, index) => (
              <span key={line} className={clsx("block", index === goldLine && "text-r-gold")}>
                {line}
              </span>
            ))}
          </h2>
          <div className="mt-6 space-y-4">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-r-muted font-body normal-case">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {features.map((feature) => (
            <li
              key={feature.title}
              className="rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/40 p-6"
            >
              <h3 className="text-lg text-r-white">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-r-muted font-body normal-case">{feature.description}</p>
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-2xl border-l-2 border-r-gold pl-5 text-xl text-r-white md:text-2xl">
          {aspiration}
        </p>

        <p className="mt-6 max-w-2xl text-xs leading-relaxed text-r-muted/70 font-body normal-case">
          {qualification}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Link
            href={primaryHref}
            className="inline-flex items-center gap-2 rounded-[var(--radius-brand-control)] bg-r-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light"
          >
            {primaryLabel}
            <ArrowUpRight size={18} aria-hidden />
          </Link>
          <Link href={secondaryHref} className="text-sm font-semibold uppercase tracking-wide text-r-gold">
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
