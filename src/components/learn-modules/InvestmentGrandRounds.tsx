"use client";

import { useState } from "react";
import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";

type Tone = "ok" | "warn" | "bad";

type Case = {
  key: string;
  title: string;
  question: string;
  amount: string;
  scenario: string;
  examine: string;
  outcome: string;
  outcomeTone: Tone;
  conclusion: string;
};

const toneClasses: Record<Tone, string> = {
  ok: "text-r-gold",
  warn: "text-r-gold",
  bad: "text-r-muted",
};

export function InvestmentGrandRounds({
  eyebrow,
  heading,
  intro,
  cases,
  summaryRows,
  conclusion,
}: {
  eyebrow: string;
  heading: string[];
  intro?: string;
  cases: Case[];
  summaryRows: { arrangement: string; outcome: string }[];
  conclusion: string;
}) {
  const [activeKey, setActiveKey] = useState(cases[0]?.key);
  const [showSummary, setShowSummary] = useState(false);
  const active = cases.find((item) => item.key === activeKey) ?? cases[0];

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
          {cases.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setActiveKey(item.key)}
              className={clsx(
                "rounded-[var(--radius-brand-control)] border px-5 py-4 text-left transition-colors",
                item.key === activeKey
                  ? "border-r-gold bg-r-gold/10 text-r-white"
                  : "border-r-line text-r-muted hover:border-r-gold/50",
              )}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-r-gold">{item.amount}</span>
              <p className="mt-2 text-sm font-semibold">{item.title}</p>
            </button>
          ))}
        </div>

        {active && (
          <div className="mt-6 rounded-[var(--radius-brand-card)] border border-r-gold/30 bg-r-panel/60 p-6 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-r-gold">{active.title}</p>
            <p className="mt-2 text-xl text-r-white md:text-2xl">{active.question}</p>
            <p className="mt-4 text-sm leading-relaxed text-r-white font-body normal-case">{active.scenario}</p>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-r-muted">What To Examine</p>
            <p className="mt-2 text-sm leading-relaxed text-r-muted font-body normal-case">{active.examine}</p>

            <div className="mt-6 rounded-[var(--radius-brand-card)] border border-r-line bg-r-bg/60 p-6">
              <p className={clsx("text-xs font-semibold uppercase tracking-[0.15em]", toneClasses[active.outcomeTone])}>
                {active.outcome}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-r-white font-body normal-case">{active.conclusion}</p>
            </div>
          </div>
        )}

        <div className="mt-8 border-t border-r-line pt-8">
          <button
            type="button"
            onClick={() => setShowSummary((prev) => !prev)}
            className="rounded-full border border-r-gold/50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-r-gold transition-colors hover:border-r-gold"
          >
            {showSummary ? "Hide Full Comparison" : "Show Full Comparison"}
          </button>

          {showSummary && (
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-r-line text-xs uppercase tracking-[0.1em] text-r-muted">
                    <th className="py-3 pr-4 font-semibold">Case</th>
                    <th className="py-3 font-semibold">Educational Outcome</th>
                  </tr>
                </thead>
                <tbody>
                  {summaryRows.map((row) => (
                    <tr key={row.arrangement} className="border-b border-r-line align-top">
                      <td className="py-4 pr-4 text-r-white">{row.arrangement}</td>
                      <td className="py-4 text-r-gold font-body normal-case">{row.outcome}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <p className="mt-8 max-w-2xl border-l-2 border-r-gold pl-5 text-xl text-r-white md:text-2xl">{conclusion}</p>
      </div>
    </section>
  );
}
