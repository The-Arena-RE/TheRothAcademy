"use client";

import { useState } from "react";
import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";

type Pathway = {
  key: string;
  title: string;
  example: string;
  explanation: string;
  checkpoint: string;
  note: string;
};

export function PathwaysSelector({
  eyebrow,
  heading,
  intro,
  pathways,
  takeaway,
}: {
  eyebrow: string;
  heading: string[];
  intro?: string;
  pathways: Pathway[];
  takeaway: string;
}) {
  const [activeKey, setActiveKey] = useState(pathways[0]?.key);
  const active = pathways.find((pathway) => pathway.key === activeKey) ?? pathways[0];

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
          {pathways.map((pathway) => (
            <button
              key={pathway.key}
              type="button"
              onClick={() => setActiveKey(pathway.key)}
              className={clsx(
                "rounded-[var(--radius-brand-control)] border px-5 py-4 text-left text-sm font-semibold transition-colors",
                pathway.key === activeKey
                  ? "border-r-gold bg-r-gold/10 text-r-white"
                  : "border-r-line text-r-muted hover:border-r-gold/50",
              )}
            >
              {pathway.title}
            </button>
          ))}
        </div>

        {active && (
          <div className="mt-6 rounded-[var(--radius-brand-card)] border border-r-gold/30 bg-r-panel/60 p-7 md:p-10">
            <p className="text-sm font-semibold text-r-gold/90 font-body normal-case">{active.example}</p>
            <p className="mt-4 text-base leading-relaxed text-r-white font-body normal-case">{active.explanation}</p>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-r-line px-4 py-2 text-xs font-semibold uppercase tracking-wide text-r-gold">
              {active.checkpoint}
            </p>
            <p className="mt-5 border-t border-r-line pt-5 text-xs leading-relaxed text-r-muted/70 font-body normal-case">
              {active.note}
            </p>
          </div>
        )}

        <p className="mt-8 max-w-2xl border-l-2 border-r-gold pl-5 text-xl text-r-white md:text-2xl">{takeaway}</p>
      </div>
    </section>
  );
}
