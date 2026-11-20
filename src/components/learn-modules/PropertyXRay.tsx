"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";

type Zone = {
  key: string;
  title: string;
  note: string;
  amount: number;
  explanation: string;
};

export function PropertyXRay({
  eyebrow,
  heading,
  intro,
  purchasePrice,
  zones,
  takeaway,
  disclaimer,
}: {
  eyebrow: string;
  heading: string[];
  intro?: string;
  purchasePrice: number;
  zones: Zone[];
  takeaway: string;
  disclaimer: string;
}) {
  const [explored, setExplored] = useState<string[]>([]);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  const selected = zones.find((zone) => zone.key === selectedKey) ?? null;
  const exploredTotal = zones
    .filter((zone) => explored.includes(zone.key))
    .reduce((sum, zone) => sum + zone.amount, 0);
  const allExplored = explored.length === zones.length;
  const grandTotal = purchasePrice + zones.reduce((sum, zone) => sum + zone.amount, 0);

  const selectZone = (key: string) => {
    setSelectedKey(key);
    setExplored((prev) => (prev.includes(key) ? prev : [...prev, key]));
  };

  const revealAll = () => {
    setExplored(zones.map((zone) => zone.key));
    setSelectedKey(null);
  };

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
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-r-line pb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-r-muted">Advertised Purchase Price</p>
              <p className="mt-1 text-4xl text-r-white">${purchasePrice.toLocaleString()}</p>
            </div>
            <button
              type="button"
              onClick={revealAll}
              className="rounded-full border border-r-gold/50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-r-gold transition-colors hover:border-r-gold"
            >
              Reveal All Costs
            </button>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {zones.map((zone) => {
              const isExplored = explored.includes(zone.key);
              const isSelected = zone.key === selectedKey;
              return (
                <button
                  key={zone.key}
                  type="button"
                  onClick={() => selectZone(zone.key)}
                  className={clsx(
                    "flex flex-col items-center gap-2 rounded-[var(--radius-brand-control)] border px-3 py-4 text-center text-xs font-semibold uppercase tracking-wide transition-colors",
                    isSelected
                      ? "border-r-gold bg-r-gold/10 text-r-white"
                      : isExplored
                        ? "border-r-gold/40 text-r-gold"
                        : "border-r-line text-r-muted hover:border-r-gold/50",
                  )}
                >
                  {isExplored && <Check size={14} aria-hidden />}
                  {zone.title}
                </button>
              );
            })}
          </div>

          {selected && (
            <div className="mt-6 rounded-[var(--radius-brand-card)] border border-r-gold/30 bg-r-bg/60 p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-r-gold">{selected.title}</p>
              <p className="mt-3 text-base leading-relaxed text-r-white font-body normal-case">{selected.note}</p>
              <p className="mt-4 text-3xl text-r-gold">${selected.amount.toLocaleString()}</p>
              <p className="mt-4 text-sm leading-relaxed text-r-muted font-body normal-case">{selected.explanation}</p>
            </div>
          )}

          <div className="mt-6 flex items-center justify-between border-t border-r-line pt-6">
            <p className="text-xs uppercase tracking-[0.15em] text-r-muted">
              {explored.length} Of {zones.length} Components Explored
            </p>
            <p className="text-lg text-r-white">
              Illustrative Total So Far: <span className="text-r-gold">${(purchasePrice + exploredTotal).toLocaleString()}</span>
            </p>
          </div>

          {allExplored && (
            <div className="mt-8 border-t border-r-line pt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-r-gold">Final Illustrative Summary</p>
              <dl className="mt-4 divide-y divide-r-line">
                <div className="flex items-baseline justify-between gap-4 py-2.5">
                  <dt className="text-sm text-r-muted font-body normal-case">Property purchase</dt>
                  <dd className="shrink-0 text-base font-semibold text-r-white">${purchasePrice.toLocaleString()}</dd>
                </div>
                {zones.map((zone) => (
                  <div key={zone.key} className="flex items-baseline justify-between gap-4 py-2.5">
                    <dt className="text-sm text-r-muted font-body normal-case">{zone.title}</dt>
                    <dd className="shrink-0 text-base font-semibold text-r-white">${zone.amount.toLocaleString()}</dd>
                  </div>
                ))}
                <div className="flex items-baseline justify-between gap-4 py-2.5">
                  <dt className="text-sm font-semibold text-r-gold">Total illustrative capital requirement</dt>
                  <dd className="shrink-0 text-xl font-semibold text-r-gold">${grandTotal.toLocaleString()}</dd>
                </div>
              </dl>
            </div>
          )}
        </div>

        <p className="mt-8 max-w-2xl border-l-2 border-r-gold pl-5 text-xl text-r-white md:text-2xl">{takeaway}</p>
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-r-muted/70 font-body normal-case">{disclaimer}</p>
      </div>
    </section>
  );
}
