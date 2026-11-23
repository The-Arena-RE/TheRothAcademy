"use client";

import { useState } from "react";
import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";

type Status = "prohibited" | "permissible" | "review";

type Decision = {
  key: string;
  label: string;
  status: Status;
  statusLabel: string;
  action: string;
  explanation: string;
  takeaway: string;
};

const statusStyles: Record<Status, string> = {
  prohibited: "border-red-500/40 bg-red-500/10 text-red-300",
  permissible: "border-r-gold/40 bg-r-gold/10 text-r-gold",
  review: "border-r-line bg-r-panel text-r-muted",
};

export function DecisionStudio({
  eyebrow,
  heading,
  intro,
  decisions,
  note,
}: {
  eyebrow: string;
  heading: string[];
  intro?: string;
  decisions: Decision[];
  note: string;
}) {
  const [activeKey, setActiveKey] = useState(decisions[0]?.key);
  const active = decisions.find((decision) => decision.key === activeKey) ?? decisions[0];

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
          {decisions.map((decision, index) => (
            <button
              key={decision.key}
              type="button"
              onClick={() => setActiveKey(decision.key)}
              className={clsx(
                "rounded-[var(--radius-brand-control)] border px-5 py-4 text-left transition-colors",
                decision.key === activeKey
                  ? "border-r-gold bg-r-gold/10"
                  : "border-r-line hover:border-r-gold/50",
              )}
            >
              <span className="text-xs font-semibold text-r-gold/70">{String(index + 1).padStart(2, "0")}</span>
              <p className="mt-1 text-sm font-semibold text-r-white font-body normal-case">{decision.label}</p>
            </button>
          ))}
        </div>

        {active && (
          <div className="mt-6 rounded-[var(--radius-brand-card)] border border-r-gold/30 bg-r-panel/60 p-7 md:p-10">
            <span
              className={clsx(
                "inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wide",
                statusStyles[active.status],
              )}
            >
              {active.statusLabel}
            </span>
            <p className="mt-5 text-sm font-semibold text-r-gold/90 font-body normal-case">{active.action}</p>
            <p className="mt-4 text-base leading-relaxed text-r-white font-body normal-case">{active.explanation}</p>
            <p className="mt-5 border-t border-r-line pt-5 text-sm leading-relaxed text-r-muted font-body normal-case">
              {active.takeaway}
            </p>
          </div>
        )}

        <p className="mt-8 max-w-2xl border-l-2 border-r-gold pl-5 text-xl text-r-white md:text-2xl">{note}</p>
      </div>
    </section>
  );
}
