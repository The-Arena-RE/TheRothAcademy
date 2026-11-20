"use client";

import { useState } from "react";
import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";

type Mode = {
  key: string;
  label: string;
  mayaLines?: string[];
  gabrielLines?: string[];
  combinedLine?: string;
  singleNote?: string;
  explanation: string;
  statement: string;
};

export function TwoKeysOnePlan({
  eyebrow,
  heading,
  intro,
  modes,
  revelation,
  conclusion,
}: {
  eyebrow: string;
  heading: string[];
  intro?: string;
  modes: Mode[];
  revelation: { business: string; maya: string; gabriel: string; plan: string };
  conclusion: string;
}) {
  const [activeKey, setActiveKey] = useState(modes[0]?.key);
  const [showSummary, setShowSummary] = useState(false);
  const active = modes.find((mode) => mode.key === activeKey) ?? modes[0];

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
          <div className="mt-6 rounded-[var(--radius-brand-card)] border border-r-gold/30 bg-r-panel/60 p-6 md:p-10">
            {active.mayaLines && active.gabrielLines ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-[var(--radius-brand-card)] border border-r-line bg-r-bg/60 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-r-gold">Maya</p>
                  <ul className="mt-3 space-y-1.5">
                    {active.mayaLines.map((line) => (
                      <li key={line} className="text-sm text-r-white font-body normal-case">{line}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[var(--radius-brand-card)] border border-r-line bg-r-bg/60 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-r-gold">Gabriel</p>
                  <ul className="mt-3 space-y-1.5">
                    {active.gabrielLines.map((line) => (
                      <li key={line} className="text-sm text-r-white font-body normal-case">{line}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              active.singleNote && (
                <div className="rounded-[var(--radius-brand-card)] border border-r-line bg-r-bg/60 p-6 text-center">
                  <p className="text-lg text-r-gold">{active.singleNote}</p>
                </div>
              )
            )}

            {active.combinedLine && (
              <p className="mt-4 text-center text-sm font-semibold uppercase tracking-[0.1em] text-r-gold">{active.combinedLine}</p>
            )}

            <p className="mt-6 border-t border-r-line pt-6 text-sm leading-relaxed text-r-white font-body normal-case">{active.explanation}</p>
            <p className="mt-4 text-lg text-r-white md:text-xl">{active.statement}</p>
          </div>
        )}

        <div className="mt-8 border-t border-r-line pt-8">
          <button
            type="button"
            onClick={() => setShowSummary((prev) => !prev)}
            className="rounded-full border border-r-gold/50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-r-gold transition-colors hover:border-r-gold"
          >
            {showSummary ? "Hide Full Summary" : "Show Full Summary"}
          </button>

          {showSummary && (
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-[var(--radius-brand-card)] border border-r-line bg-r-bg/40 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-r-gold">The Business</p>
                <p className="mt-2 text-sm text-r-muted font-body normal-case">{revelation.business}</p>
              </div>
              <div className="rounded-[var(--radius-brand-card)] border border-r-line bg-r-bg/40 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-r-gold">Maya&apos;s Benefits</p>
                <p className="mt-2 text-sm text-r-muted font-body normal-case">{revelation.maya}</p>
              </div>
              <div className="rounded-[var(--radius-brand-card)] border border-r-line bg-r-bg/40 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-r-gold">Gabriel&apos;s Benefits</p>
                <p className="mt-2 text-sm text-r-muted font-body normal-case">{revelation.gabriel}</p>
              </div>
              <div className="rounded-[var(--radius-brand-card)] border border-r-line bg-r-bg/40 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-r-gold">The Plan</p>
                <p className="mt-2 text-sm text-r-muted font-body normal-case">{revelation.plan}</p>
              </div>
            </div>
          )}
        </div>

        <p className="mt-8 max-w-2xl border-l-2 border-r-gold pl-5 text-xl text-r-white md:text-2xl">{conclusion}</p>
      </div>
    </section>
  );
}
