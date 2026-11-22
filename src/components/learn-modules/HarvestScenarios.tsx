"use client";

import { useState } from "react";
import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";

type Scenario = {
  key: string;
  label: string;
  status: string;
  description: string;
  figures: { label: string; value: string }[];
  statement: string;
};

export function HarvestScenarios({
  eyebrow,
  heading,
  intro,
  scenarios,
  tableColumns,
  comparisonNote,
  conclusion,
}: {
  eyebrow: string;
  heading: string[];
  intro?: string;
  scenarios: Scenario[];
  tableColumns: { label: string; index: number }[];
  comparisonNote: string;
  conclusion: string;
}) {
  const [activeKey, setActiveKey] = useState(scenarios[0]?.key);
  const [showComparison, setShowComparison] = useState(false);
  const active = scenarios.find((s) => s.key === activeKey) ?? scenarios[0];

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

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {scenarios.map((scenario) => (
            <button
              key={scenario.key}
              type="button"
              onClick={() => setActiveKey(scenario.key)}
              className={clsx(
                "rounded-[var(--radius-brand-control)] border px-5 py-4 text-left transition-colors",
                scenario.key === activeKey
                  ? "border-r-gold bg-r-gold/10 text-r-white"
                  : "border-r-line text-r-muted hover:border-r-gold/50",
              )}
            >
              <span className="text-sm font-semibold">{scenario.label}</span>
              <p className="mt-1 text-xs text-r-gold">{scenario.status}</p>
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
            {showComparison ? "Hide Full Comparison" : "Show Full Comparison"}
          </button>

          {showComparison && (
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-r-line text-xs uppercase tracking-[0.1em] text-r-muted">
                    <th className="py-3 pr-4 font-semibold">Scenario</th>
                    {tableColumns.map((col) => (
                      <th key={col.label} className="py-3 pr-4 font-semibold">
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {scenarios.map((scenario) => (
                    <tr key={scenario.key} className="border-b border-r-line align-top">
                      <td className="py-4 pr-4 text-r-white">{scenario.label}</td>
                      {tableColumns.map((col, colIndex) => (
                        <td
                          key={col.label}
                          className={clsx(
                            "py-4 pr-4 font-body normal-case",
                            colIndex === tableColumns.length - 1 ? "text-r-gold" : "text-r-muted",
                          )}
                        >
                          {scenario.figures[col.index].value}
                        </td>
                      ))}
                    </tr>
                  ))}
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
