"use client";

import { useState } from "react";
import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";

type Category = "business" | "retirement" | "prohibited";

type Decision = {
  key: string;
  label: string;
  category: Category;
  outcome: string;
  explanation: string;
};

const categoryStyles: Record<Category, string> = {
  business: "text-r-white",
  retirement: "text-r-gold",
  prohibited: "text-r-muted",
};

export function SecondDashboard({
  eyebrow,
  heading,
  intro,
  envA,
  envB,
  decisions,
  revelation,
  conclusion,
}: {
  eyebrow: string;
  heading: string[];
  intro?: string;
  envA: { label: string; description: string };
  envB: { label: string; description: string };
  decisions: Decision[];
  revelation: {
    business: { label: string; items: string[] };
    retirement: { label: string; items: string[] };
    prohibited: { label: string; items: string[] };
  };
  conclusion: string;
}) {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [showRevelation, setShowRevelation] = useState(false);
  const active = decisions.find((decision) => decision.key === activeKey) ?? null;

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

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
          <div
            className={clsx(
              "rounded-[var(--radius-brand-card)] border p-6 transition-colors",
              active?.category === "business" ? "border-r-white/50 bg-r-panel/70" : "border-r-line/60 bg-r-panel/40",
            )}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-r-white">{envA.label}</p>
            <p className="mt-3 text-sm text-r-muted font-body normal-case">{envA.description}</p>
          </div>
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-r-muted">
            Separate Assets.
            <br />
            Separate Rules.
          </p>
          <div
            className={clsx(
              "rounded-[var(--radius-brand-card)] border p-6 transition-colors",
              active?.category === "retirement" ? "border-r-gold bg-r-gold/10" : "border-r-gold/40 bg-r-panel/40",
            )}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-r-gold">{envB.label}</p>
            <p className="mt-3 text-sm text-r-muted font-body normal-case">{envB.description}</p>
          </div>
        </div>

        <div className="mt-8 rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/60 p-6 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-r-muted">Select A Financial Decision</p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {decisions.map((decision) => (
              <button
                key={decision.key}
                type="button"
                onClick={() => setActiveKey(decision.key)}
                className={clsx(
                  "rounded-[var(--radius-brand-control)] border px-5 py-4 text-left text-sm font-semibold transition-colors",
                  decision.key === activeKey
                    ? "border-r-gold bg-r-gold/10 text-r-white"
                    : "border-r-line text-r-muted hover:border-r-gold/50",
                )}
              >
                {decision.label}
              </button>
            ))}
          </div>

          {active && (
            <div className="mt-6 rounded-[var(--radius-brand-card)] border border-r-gold/30 bg-r-bg/60 p-6 md:p-8">
              <p className={clsx("text-xs font-semibold uppercase tracking-[0.15em]", categoryStyles[active.category])}>
                {active.outcome}
              </p>
              <p className="mt-4 text-base leading-relaxed text-r-white font-body normal-case">{active.explanation}</p>
            </div>
          )}

          <div className="mt-8 border-t border-r-line pt-8">
            <button
              type="button"
              onClick={() => setShowRevelation((prev) => !prev)}
              className="rounded-full border border-r-gold/50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-r-gold transition-colors hover:border-r-gold"
            >
              {showRevelation ? "Hide Full Overview" : "Show Full Overview"}
            </button>

            {showRevelation && (
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {([revelation.business, revelation.retirement, revelation.prohibited] as const).map((group) => (
                  <div key={group.label} className="rounded-[var(--radius-brand-card)] border border-r-line bg-r-bg/40 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-r-gold">{group.label}</p>
                    <ul className="mt-3 space-y-1.5">
                      {group.items.map((item) => (
                        <li key={item} className="text-sm text-r-muted font-body normal-case">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <p className="mt-8 max-w-2xl border-l-2 border-r-gold pl-5 text-xl text-r-white md:text-2xl">{conclusion}</p>
      </div>
    </section>
  );
}
