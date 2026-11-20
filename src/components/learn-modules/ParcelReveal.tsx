"use client";

import { useState } from "react";
import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";

type Layer = {
  key: string;
  label: string;
  title: string;
  body: string;
  statement: string;
  note: string;
};

type Dossier = {
  heading: string;
  figures: { label: string; value: string }[];
};

export function ParcelReveal({
  eyebrow,
  heading,
  intro,
  layers,
  dossier,
  conclusion,
}: {
  eyebrow: string;
  heading: string[];
  intro?: string;
  layers: Layer[];
  dossier: Dossier;
  conclusion: string;
}) {
  const [activeKey, setActiveKey] = useState(layers[0]?.key);
  const [explored, setExplored] = useState<string[]>([layers[0]?.key].filter(Boolean) as string[]);
  const [showAll, setShowAll] = useState(false);
  const active = layers.find((layer) => layer.key === activeKey) ?? layers[0];

  const select = (key: string) => {
    setActiveKey(key);
    setExplored((prev) => (prev.includes(key) ? prev : [...prev, key]));
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

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {layers.map((layer, index) => (
            <button
              key={layer.key}
              type="button"
              onClick={() => select(layer.key)}
              className={clsx(
                "rounded-[var(--radius-brand-control)] border px-5 py-4 text-left transition-colors",
                layer.key === activeKey
                  ? "border-r-gold bg-r-gold/10 text-r-white"
                  : "border-r-line text-r-muted hover:border-r-gold/50",
              )}
            >
              <span className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.15em] text-r-gold">
                Layer {String(index + 1).padStart(2, "0")}
                {explored.includes(layer.key) && <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-r-gold" />}
              </span>
              <p className="mt-2 text-sm font-semibold">{layer.label}</p>
            </button>
          ))}
        </div>

        {active && (
          <div className="mt-6 rounded-[var(--radius-brand-card)] border border-r-gold/30 bg-r-panel/60 p-6 md:p-10">
            <p className="text-xl text-r-white md:text-2xl">{active.title}</p>
            <p className="mt-4 text-sm leading-relaxed text-r-white font-body normal-case">{active.body}</p>
            <div className="mt-6 rounded-[var(--radius-brand-card)] border border-r-line bg-r-bg/60 p-5">
              <p className="text-base text-r-gold">{active.statement}</p>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-r-muted/70 font-body normal-case">{active.note}</p>
          </div>
        )}

        <div className="mt-8 border-t border-r-line pt-8">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="rounded-full border border-r-gold/50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-r-gold transition-colors hover:border-r-gold"
          >
            {showAll ? "Hide All Layers (Full Text)" : "Show All Layers (Full Text)"}
          </button>

          {showAll && (
            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {layers.map((layer) => (
                <div key={layer.key} className="rounded-[var(--radius-brand-card)] border border-r-line bg-r-bg/40 p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-r-gold">{layer.label}</span>
                  <p className="mt-2 text-lg text-r-white">{layer.title}</p>
                  <p className="mt-3 text-xs leading-relaxed text-r-muted font-body normal-case">{layer.body}</p>
                  <p className="mt-3 text-xs leading-relaxed text-r-gold font-body normal-case">{layer.statement}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-10 border-t border-r-line pt-10">
          <h3 className="max-w-2xl text-3xl text-r-white md:text-4xl">{dossier.heading}</h3>
          <div className="mt-8 rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel p-6 md:p-10">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
              {dossier.figures.map((figure) => (
                <div key={figure.label} className="flex items-baseline justify-between gap-4 border-b border-r-line pb-3">
                  <dt className="text-sm text-r-muted font-body normal-case">{figure.label}</dt>
                  <dd className="shrink-0 text-lg font-semibold text-r-white">{figure.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <p className="mt-8 max-w-2xl border-l-2 border-r-gold pl-5 text-xl text-r-white md:text-2xl">{conclusion}</p>
      </div>
    </section>
  );
}
