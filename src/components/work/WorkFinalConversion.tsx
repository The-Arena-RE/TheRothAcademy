"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useContactModal } from "@/components/contact/ContactModalProvider";
import { planDestinations } from "@/data/site-config";

const words = ["Education", "Experience", "Relationships", "That Last"];

export function WorkFinalConversion({
  eyebrow,
  heading,
  description,
  signature,
}: {
  eyebrow: string;
  heading: string[];
  description: string;
  signature: string;
}) {
  const { open } = useContactModal();

  return (
    <section className="relative overflow-hidden border-t border-r-line bg-r-bg py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[15%] top-0 h-full w-[55%] opacity-20 mix-blend-screen md:-right-[5%] md:w-[40%]"
        style={{
          background:
            "conic-gradient(from 200deg at 50% 50%, transparent 0deg, var(--color-r-gold-dark) 60deg, var(--color-r-gold) 110deg, var(--color-r-gold-light) 140deg, transparent 200deg, transparent 360deg)",
          filter: "blur(60px)",
        }}
      />

      <div className="container-brand relative grid gap-10 md:grid-cols-[1fr_1fr_auto] md:items-center md:gap-12">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-r-gold">{eyebrow}</p>
          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl">
            {heading.map((line, index) => (
              <span key={line} className={index === heading.length - 1 ? "block text-r-gold" : "block"}>
                {line}
              </span>
            ))}
          </h2>
        </div>

        <div className="min-w-0">
          <p className="max-w-sm text-sm text-r-muted font-body normal-case">{description}</p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              href={planDestinations.open401k}
              className="inline-flex shrink-0 items-center gap-2 rounded-[var(--radius-brand-control)] bg-r-gold px-6 py-3 text-xs font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light"
            >
              Start My Self-Directed 401(k)
              <ArrowUpRight size={16} aria-hidden />
            </Link>
            <Link
              href={planDestinations.openIra}
              className="inline-flex shrink-0 items-center gap-2 rounded-[var(--radius-brand-control)] bg-r-gold px-6 py-3 text-xs font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light"
            >
              Start My Self-Directed IRA
              <ArrowUpRight size={16} aria-hidden />
            </Link>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-6">
            <button
              type="button"
              onClick={() => open("Events & workshops")}
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold"
            >
              Invite A Specialist
            </button>
            <button
              type="button"
              onClick={() => open("Partnership opportunities")}
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold"
            >
              Explore Partnerships
            </button>
          </div>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.15em] text-r-muted/70">{signature}</p>
        </div>

        <div className="hidden shrink-0 md:block">
          <span className="mb-3 block h-px w-8 bg-r-gold" aria-hidden />
          <ul className="space-y-2 text-xs font-semibold uppercase tracking-[0.15em] text-r-muted">
            {words.map((word) => (
              <li key={word}>{word}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
