"use client";

import { useState } from "react";
import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";

type Tone = "ok" | "warn" | "bad";

type Scenario = {
  key: string;
  label: string;
  outcome: string;
  outcomeTone: Tone;
  explanation: string;
};

const toneClasses: Record<Tone, string> = {
  ok: "text-r-gold",
  warn: "text-r-gold",
  bad: "text-r-muted",
};

export function Fenceline({
  eyebrow,
  heading,
  intro,
  parcelA,
  parcelB,
  scenarios,
  summaryRows,
  conclusion,
}: {
  eyebrow: string;
  heading: string[];
  intro?: string;
  parcelA: { label: string; owner: string; description: string };
  parcelB: { label: string; owner: string; description: string };
  scenarios: Scenario[];
  summaryRows: { arrangement: string; outcome: string }[];
  conclusion: string;
}) {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [showSummary, setShowSummary] = useState(false);
  const active = scenarios.find((scenario) => scenario.key === activeKey) ?? null;

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

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-[var(--radius-brand-card)] border border-r-line/60 bg-r-panel/40 p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-r-muted">{parcelA.label}</p>
            <p className="mt-2 text-lg text-r-white">{parcelA.owner}</p>
            <p className="mt-3 text-sm text-r-muted font-body normal-case">{parcelA.description}</p>
          </div>
          <div className="rounded-[var(--radius-brand-card)] border border-r-gold/50 bg-r-panel/60 p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-r-gold">{parcelB.label}</p>
            <p className="mt-2 text-lg text-r-white">{parcelB.owner}</p>
            <p className="mt-3 text-sm text-r-muted font-body normal-case">{parcelB.description}</p>
          </div>
        </div>

        <div className="mt-8 rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/60 p-6 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-r-muted">What If Sam Tried This?</p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {scenarios.map((scenario) => (
              <button
                key={scenario.key}
                type="button"
                onClick={() => setActiveKey(scenario.key)}
                className={clsx(
                  "rounded-[var(--radius-brand-control)] border px-5 py-4 text-left text-sm font-semibold transition-colors",
                  scenario.key === activeKey
                    ? "border-r-gold bg-r-gold/10 text-r-white"
                    : "border-r-line text-r-muted hover:border-r-gold/50",
                )}
              >
                {scenario.label}
              </button>
            ))}
          </div>

          {active && (
            <div className="mt-6 rounded-[var(--radius-brand-card)] border border-r-gold/30 bg-r-bg/60 p-6 md:p-8">
              <p className={clsx("text-xs font-semibold uppercase tracking-[0.15em]", toneClasses[active.outcomeTone])}>
                {active.outcome}
              </p>
              <p className="mt-4 text-base leading-relaxed text-r-white font-body normal-case">{active.explanation}</p>
            </div>
          )}

          <div className="mt-8 border-t border-r-line pt-8">
            <button
              type="button"
              onClick={() => setShowSummary((prev) => !prev)}
              className="rounded-full border border-r-gold/50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-r-gold transition-colors hover:border-r-gold"
            >
              {showSummary ? "Hide All Scenarios" : "Reveal All Scenarios"}
            </button>

            {showSummary && (
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-r-line text-xs uppercase tracking-[0.1em] text-r-muted">
                      <th className="py-3 pr-4 font-semibold">Proposed Arrangement</th>
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
        </div>

        <p className="mt-8 max-w-2xl border-l-2 border-r-gold pl-5 text-xl text-r-white md:text-2xl">{conclusion}</p>
      </div>
    </section>
  );
}
