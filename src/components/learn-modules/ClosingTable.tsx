"use client";

import { useState } from "react";
import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";

type Mode = {
  key: string;
  label: string;
  owner: string;
  explanation: string;
  purchaseFunds: string;
  income: string;
  expenses: string;
  commission: string;
  takeaway: string;
  note: string;
};

type ComparisonRow = { question: string; client: string; personal: string; plan: string };

export function ClosingTable({
  eyebrow,
  heading,
  intro,
  propertyPrice,
  modes,
  comparisonRows,
  finalStatement,
}: {
  eyebrow: string;
  heading: string[];
  intro?: string;
  propertyPrice: number;
  modes: Mode[];
  comparisonRows: ComparisonRow[];
  finalStatement: string;
}) {
  const [activeKey, setActiveKey] = useState(modes[0]?.key);
  const active = modes.find((mode) => mode.key === activeKey) ?? modes[0];
  const [showComparison, setShowComparison] = useState(false);

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

        <div className="mt-10 rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/60 p-6 md:p-10">
          <p className="text-xs uppercase tracking-[0.15em] text-r-muted">Property Listed At</p>
          <p className="mt-1 text-4xl text-r-white">${propertyPrice.toLocaleString()}</p>

          <div className="mt-8 grid grid-cols-1 gap-3 border-t border-r-line pt-8 sm:grid-cols-3">
            {modes.map((mode) => (
              <button
                key={mode.key}
                type="button"
                onClick={() => setActiveKey(mode.key)}
                className={clsx(
                  "rounded-[var(--radius-brand-control)] border px-5 py-4 text-left text-sm font-semibold transition-colors",
                  mode.key === activeKey
                    ? "border-r-gold bg-r-gold/10 text-r-white"
                    : "border-r-line text-r-muted hover:border-r-gold/50",
                )}
              >
                {mode.label}
              </button>
            ))}
          </div>

          {active && (
            <div className="mt-6 rounded-[var(--radius-brand-card)] border border-r-gold/30 bg-r-bg/60 p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-r-gold">Owner: {active.owner}</p>
              <p className="mt-4 text-base leading-relaxed text-r-white font-body normal-case">{active.explanation}</p>

              <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 border-t border-r-line pt-6 sm:grid-cols-2">
                <div>
                  <dt className="text-xs uppercase tracking-[0.15em] text-r-muted">Purchase Funds</dt>
                  <dd className="mt-1 text-sm text-r-white font-body normal-case">{active.purchaseFunds}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.15em] text-r-muted">Property Income</dt>
                  <dd className="mt-1 text-sm text-r-white font-body normal-case">{active.income}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.15em] text-r-muted">Property Expenses</dt>
                  <dd className="mt-1 text-sm text-r-white font-body normal-case">{active.expenses}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.15em] text-r-gold">Personal Commission To Avery</dt>
                  <dd className="mt-1 text-sm text-r-white font-body normal-case">{active.commission}</dd>
                </div>
              </dl>

              <p className="mt-6 border-t border-r-line pt-6 text-lg text-r-white md:text-xl">{active.takeaway}</p>
              <p className="mt-4 text-xs leading-relaxed text-r-muted/70 font-body normal-case">{active.note}</p>
            </div>
          )}

          <div className="mt-8 border-t border-r-line pt-8">
            <button
              type="button"
              onClick={() => setShowComparison((prev) => !prev)}
              className="rounded-full border border-r-gold/50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-r-gold transition-colors hover:border-r-gold"
            >
              {showComparison ? "Hide Full Comparison" : "Show Full Comparison"}
            </button>

            {showComparison && (
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-r-line text-xs uppercase tracking-[0.1em] text-r-muted">
                      <th className="py-3 pr-4 font-semibold">Question</th>
                      <th className="py-3 pr-4 font-semibold">Client Purchase</th>
                      <th className="py-3 pr-4 font-semibold">Personal Purchase</th>
                      <th className="py-3 font-semibold">Retirement-Plan Purchase</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr key={row.question} className="border-b border-r-line align-top">
                        <td className="py-4 pr-4 font-semibold text-r-white">{row.question}</td>
                        <td className="py-4 pr-4 text-r-muted font-body normal-case">{row.client}</td>
                        <td className="py-4 pr-4 text-r-muted font-body normal-case">{row.personal}</td>
                        <td className="py-4 text-r-gold font-body normal-case">{row.plan}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        <p className="mt-8 max-w-2xl border-l-2 border-r-gold pl-5 text-xl text-r-white md:text-2xl">{finalStatement}</p>
      </div>
    </section>
  );
}
