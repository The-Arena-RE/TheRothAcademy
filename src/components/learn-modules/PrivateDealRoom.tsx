"use client";

import { useState } from "react";
import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";

type Dossier = {
  key: string;
  amountLabel: string;
  title: string;
  headline: string;
  opportunity: string;
  whatPlanOwns: string;
  potential: string;
  risks: string;
  finePrint: string;
  outcomeLabel: string;
};

type Allocation = {
  heading: string;
  figures: { label: string; value: string }[];
  note: string;
};

export function PrivateDealRoom({
  eyebrow,
  heading,
  intro,
  dossiers,
  allocation,
  conclusion,
}: {
  eyebrow: string;
  heading: string[];
  intro?: string;
  dossiers: Dossier[];
  allocation: Allocation;
  conclusion: string;
}) {
  const [activeKey, setActiveKey] = useState(dossiers[0]?.key);
  const [showAll, setShowAll] = useState(false);
  const active = dossiers.find((dossier) => dossier.key === activeKey) ?? dossiers[0];

  return (
    <section className="border-b border-r-line bg-r-stripe-2 py-20 md:py-28">
      <div className="container-brand">
        <div className="max-w-2xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-6xl">
            {heading.map((line, index) => (
              <span key={line} className={index === heading.length - 1 ? "block text-r-gold" : "block"}>
                {line}
              </span>
            ))}
          </h2>
          {intro && <p className="mt-5 text-base text-r-muted font-body normal-case">{intro}</p>}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {dossiers.map((dossier) => (
            <button
              key={dossier.key}
              type="button"
              onClick={() => setActiveKey(dossier.key)}
              className={clsx(
                "rounded-[var(--radius-brand-control)] border px-5 py-4 text-left transition-colors",
                dossier.key === activeKey
                  ? "border-r-gold bg-r-gold/10 text-r-white"
                  : "border-r-line text-r-muted hover:border-r-gold/50",
              )}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-r-gold">{dossier.amountLabel}</span>
              <p className="mt-2 text-sm font-semibold">{dossier.title}</p>
            </button>
          ))}
        </div>

        {active && (
          <div className="mt-6 rounded-[var(--radius-brand-card)] border border-r-gold/30 bg-r-panel/60 p-6 md:p-10">
            <p className="text-xl text-r-white md:text-2xl">{active.headline}</p>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-r-gold">The Opportunity</p>
                <p className="mt-2 text-sm leading-relaxed text-r-white font-body normal-case">{active.opportunity}</p>
              </div>
              <div className="border-t border-r-line pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-r-gold">What The Plan Owns</p>
                <p className="mt-2 text-sm leading-relaxed text-r-white font-body normal-case">{active.whatPlanOwns}</p>
              </div>
              <div className="border-t border-r-line pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-r-gold">The Potential</p>
                <p className="mt-2 text-sm leading-relaxed text-r-white font-body normal-case">{active.potential}</p>
              </div>
              <div className="border-t border-r-line pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-r-muted">The Risks</p>
                <p className="mt-2 text-sm leading-relaxed text-r-muted font-body normal-case">{active.risks}</p>
              </div>
              <div className="border-t border-r-line pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-r-muted">The Fine Print</p>
                <p className="mt-2 text-sm leading-relaxed text-r-muted font-body normal-case">{active.finePrint}</p>
              </div>
            </div>

            <div className="mt-6 rounded-[var(--radius-brand-card)] border border-r-line bg-r-bg/60 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-r-gold">{active.outcomeLabel}</p>
            </div>
          </div>
        )}

        <div className="mt-8 border-t border-r-line pt-8">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="rounded-full border border-r-gold/50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-r-gold transition-colors hover:border-r-gold"
          >
            {showAll ? "Hide All Dossiers (Full Text)" : "Show All Dossiers (Full Text)"}
          </button>

          {showAll && (
            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {dossiers.map((dossier) => (
                <div key={dossier.key} className="rounded-[var(--radius-brand-card)] border border-r-line bg-r-bg/40 p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-r-gold">{dossier.amountLabel}</span>
                  <p className="mt-2 text-lg text-r-white">{dossier.title}</p>
                  <p className="mt-3 text-xs leading-relaxed text-r-muted font-body normal-case">{dossier.opportunity}</p>
                  <p className="mt-3 text-xs leading-relaxed text-r-muted font-body normal-case"><span className="text-r-gold">Owns: </span>{dossier.whatPlanOwns}</p>
                  <p className="mt-3 text-xs leading-relaxed text-r-muted font-body normal-case"><span className="text-r-gold">Risks: </span>{dossier.risks}</p>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.1em] text-r-muted/60 font-body">{dossier.outcomeLabel}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-10 border-t border-r-line pt-10">
          <h3 className="max-w-2xl text-3xl text-r-white md:text-4xl">{allocation.heading}</h3>
          <div className="mt-8 rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel p-6 md:p-10">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
              {allocation.figures.map((figure) => (
                <div key={figure.label} className="flex items-baseline justify-between gap-4 border-b border-r-line pb-3">
                  <dt className="text-sm text-r-muted font-body normal-case">{figure.label}</dt>
                  <dd className="shrink-0 text-lg font-semibold text-r-white">{figure.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="mt-6 max-w-3xl text-xs leading-relaxed text-r-muted/70 font-body normal-case">{allocation.note}</p>
        </div>

        <p className="mt-8 max-w-2xl border-l-2 border-r-gold pl-5 text-xl text-r-white md:text-2xl">{conclusion}</p>
      </div>
    </section>
  );
}
