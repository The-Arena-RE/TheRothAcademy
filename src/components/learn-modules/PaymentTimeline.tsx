"use client";

import { useState } from "react";
import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";

type Checkpoint = {
  key: string;
  label: string;
  payment: string;
  interest: string;
  principal: string;
  remaining: string;
  note: string;
};

type Scenario = {
  key: string;
  label: string;
  description: string;
  figures: { label: string; value: string }[];
  statement: string;
};

export function PaymentTimeline({
  eyebrow,
  heading,
  intro,
  summary,
  checkpoints,
  totals,
  totalsNote,
  scenarios,
  conclusion,
}: {
  eyebrow: string;
  heading: string[];
  intro?: string;
  summary: { label: string; value: string }[];
  checkpoints: Checkpoint[];
  totals: { label: string; value: string }[];
  totalsNote: string;
  scenarios: Scenario[];
  conclusion: string;
}) {
  const [activeCheckpoint, setActiveCheckpoint] = useState(checkpoints[0]?.key);
  const [activeScenario, setActiveScenario] = useState(scenarios[0]?.key);
  const checkpoint = checkpoints.find((c) => c.key === activeCheckpoint) ?? checkpoints[0];
  const scenario = scenarios.find((s) => s.key === activeScenario) ?? scenarios[0];

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

        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.15em] text-r-muted">Select A Payment Checkpoint</p>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {checkpoints.map((cp) => (
            <button
              key={cp.key}
              type="button"
              onClick={() => setActiveCheckpoint(cp.key)}
              className={clsx(
                "rounded-[var(--radius-brand-control)] border px-4 py-3 text-center text-sm font-semibold transition-colors",
                cp.key === activeCheckpoint
                  ? "border-r-gold bg-r-gold/10 text-r-white"
                  : "border-r-line text-r-muted hover:border-r-gold/50",
              )}
            >
              {cp.label}
            </button>
          ))}
        </div>

        {checkpoint && (
          <div className="mt-6 rounded-[var(--radius-brand-card)] border border-r-gold/30 bg-r-panel/60 p-6 md:p-10">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
              <div>
                <dt className="text-xs text-r-muted font-body normal-case">Scheduled Payment</dt>
                <dd className="mt-1 text-xl font-semibold text-r-white">{checkpoint.payment}</dd>
              </div>
              <div>
                <dt className="text-xs text-r-muted font-body normal-case">Interest Portion</dt>
                <dd className="mt-1 text-xl font-semibold text-r-muted">{checkpoint.interest}</dd>
              </div>
              <div>
                <dt className="text-xs text-r-muted font-body normal-case">Principal Repaid</dt>
                <dd className="mt-1 text-xl font-semibold text-r-gold">{checkpoint.principal}</dd>
              </div>
              <div>
                <dt className="text-xs text-r-muted font-body normal-case">Remaining Principal</dt>
                <dd className="mt-1 text-xl font-semibold text-r-white">{checkpoint.remaining}</dd>
              </div>
            </dl>
            <p className="mt-6 border-t border-r-line pt-6 text-sm leading-relaxed text-r-white font-body normal-case">{checkpoint.note}</p>
          </div>
        )}

        <div className="mt-8 border-t border-r-line pt-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {totals.map((item) => (
              <div key={item.label} className="flex items-baseline justify-between gap-4 border-b border-r-line pb-3">
                <dt className="text-sm text-r-muted font-body normal-case">{item.label}</dt>
                <dd className="shrink-0 text-lg font-semibold text-r-white">{item.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-xs leading-relaxed text-r-muted/70 font-body normal-case">{totalsNote}</p>
        </div>

        <div className="mt-10 border-t border-r-line pt-10">
          <h3 className="max-w-2xl text-3xl text-r-white md:text-4xl">On Time. Missed Payment. Early Payoff.</h3>
          <p className="mt-3 max-w-2xl text-sm text-r-muted font-body normal-case">
            The same note can produce very different financial outcomes. Select a path.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {scenarios.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setActiveScenario(item.key)}
                className={clsx(
                  "rounded-[var(--radius-brand-control)] border px-5 py-4 text-left text-sm font-semibold transition-colors",
                  item.key === activeScenario
                    ? "border-r-gold bg-r-gold/10 text-r-white"
                    : "border-r-line text-r-muted hover:border-r-gold/50",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          {scenario && (
            <div className="mt-6 rounded-[var(--radius-brand-card)] border border-r-gold/30 bg-r-panel/60 p-6 md:p-10">
              <p className="text-sm leading-relaxed text-r-white font-body normal-case">{scenario.description}</p>
              <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                {scenario.figures.map((item) => (
                  <div key={item.label} className="flex items-baseline justify-between gap-4 border-b border-r-line pb-3">
                    <dt className="text-sm text-r-muted font-body normal-case">{item.label}</dt>
                    <dd className="shrink-0 text-lg font-semibold text-r-white">{item.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-base text-r-gold">{scenario.statement}</p>
            </div>
          )}
        </div>

        <p className="mt-8 max-w-2xl border-l-2 border-r-gold pl-5 text-xl text-r-white md:text-2xl">{conclusion}</p>
      </div>
    </section>
  );
}
