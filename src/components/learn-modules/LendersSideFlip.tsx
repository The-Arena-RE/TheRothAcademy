"use client";

import { useState } from "react";
import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";

type Outcome = {
  key: string;
  label: string;
  description: string;
  figures: { label: string; value: string }[];
  statement: string;
};

export function LendersSideFlip({
  eyebrow,
  heading,
  intro,
  summary,
  outcomes,
  comparisonNote,
  conclusion,
}: {
  eyebrow: string;
  heading: string[];
  intro?: string;
  summary: { label: string; value: string }[];
  outcomes: Outcome[];
  comparisonNote: string;
  conclusion: string;
}) {
  const [activeKey, setActiveKey] = useState(outcomes[0]?.key);
  const [showComparison, setShowComparison] = useState(false);
  const active = outcomes.find((o) => o.key === activeKey) ?? outcomes[0];

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

        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel p-6 sm:grid-cols-3 md:p-8">
          {summary.map((item) => (
            <div key={item.label}>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-r-gold">{item.label}</p>
              <p className="mt-1 text-2xl text-r-white">{item.value}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.15em] text-r-muted">Choose An Ending</p>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {outcomes.map((outcome) => (
            <button
              key={outcome.key}
              type="button"
              onClick={() => setActiveKey(outcome.key)}
              className={clsx(
                "rounded-[var(--radius-brand-control)] border px-5 py-4 text-left text-sm font-semibold transition-colors",
                outcome.key === activeKey
                  ? "border-r-gold bg-r-gold/10 text-r-white"
                  : "border-r-line text-r-muted hover:border-r-gold/50",
              )}
            >
              {outcome.label}
            </button>
          ))}
        </div>

        {active && (
          <div className="mt-6 rounded-[var(--radius-brand-card)] border border-r-gold/30 bg-r-panel/60 p-6 md:p-10">
            <p className="text-sm leading-relaxed text-r-white font-body normal-case">{active.description}</p>
            <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {active.figures.map((figure) => (
                <div key={figure.label} className="flex items-baseline justify-between gap-4 border-b border-r-line pb-3">
                  <dt className="text-sm text-r-muted font-body normal-case">{figure.label}</dt>
                  <dd className="shrink-0 text-lg font-semibold text-r-white">{figure.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-base text-r-gold">{active.statement}</p>
          </div>
        )}

        <div className="mt-8 border-t border-r-line pt-8">
          <button
            type="button"
            onClick={() => setShowComparison((prev) => !prev)}
            className="rounded-full border border-r-gold/50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-r-gold transition-colors hover:border-r-gold"
          >
            {showComparison ? "Hide All Three Outcomes" : "Show All Three Outcomes"}
          </button>

          {showComparison && (
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-r-line text-xs uppercase tracking-[0.1em] text-r-muted">
                    <th className="py-3 pr-4 font-semibold">Outcome</th>
                    <th className="py-3 pr-4 font-semibold">Total Cash Received</th>
                    <th className="py-3 font-semibold">Result vs. $130,000</th>
                  </tr>
                </thead>
                <tbody>
                  {outcomes.map((outcome) => {
                    const total = outcome.figures.find((f) => f.label === "Total Cash Received");
                    const result = outcome.figures.find((f) => f.label.startsWith("Result"));
                    return (
                      <tr key={outcome.key} className="border-b border-r-line align-top">
                        <td className="py-4 pr-4 text-r-white">{outcome.label}</td>
                        <td className="py-4 pr-4 text-r-muted font-body normal-case">{total?.value}</td>
                        <td className="py-4 text-r-gold font-body normal-case">{result?.value}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
          <p className="mt-6 text-xs leading-relaxed text-r-muted/70 font-body normal-case">{comparisonNote}</p>
        </div>

        <p className="mt-8 max-w-2xl border-l-2 border-r-gold pl-5 text-xl text-r-white md:text-2xl">{conclusion}</p>
      </div>
    </section>
  );
}
