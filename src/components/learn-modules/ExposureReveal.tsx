"use client";

import { useState } from "react";
import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";

type Asset = {
  key: string;
  label: string;
  value: string;
  exposed?: boolean;
  sublabel?: string;
};

type DownturnRow = {
  label: string;
  before: string;
  after: string;
  loss: string;
};

type View = "assets" | "risks" | "downturn";

const viewOptions: { key: View; label: string }[] = [
  { key: "assets", label: "See My Assets" },
  { key: "risks", label: "Reveal Shared Risks" },
  { key: "downturn", label: "Explore a Downturn" },
];

export function ExposureReveal({
  eyebrow,
  heading,
  intro,
  assets,
  sharedRiskNote,
  downturn,
  unaffectedTotal,
  startingTotal,
  endingTotal,
  totalDecline,
  disclaimer,
}: {
  eyebrow: string;
  heading: string[];
  intro?: string;
  assets: Asset[];
  sharedRiskNote: string;
  downturn: DownturnRow[];
  unaffectedTotal: string;
  startingTotal: string;
  endingTotal: string;
  totalDecline: string;
  disclaimer: string;
}) {
  const [view, setView] = useState<View>("assets");

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

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {viewOptions.map((option) => (
            <button
              key={option.key}
              type="button"
              onClick={() => setView(option.key)}
              className={clsx(
                "rounded-[var(--radius-brand-control)] border px-5 py-4 text-left text-sm font-semibold transition-colors",
                view === option.key
                  ? "border-r-gold bg-r-gold/10 text-r-white"
                  : "border-r-line text-r-muted hover:border-r-gold/50",
              )}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="mt-6 rounded-[var(--radius-brand-card)] border border-r-gold/30 bg-r-panel/60 p-6 md:p-8">
          {(view === "assets" || view === "risks") && (
            <>
              <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                {assets.map((asset) => (
                  <div
                    key={asset.key}
                    className={clsx(
                      "rounded-[var(--radius-brand-control)] border p-4",
                      view === "risks" && asset.exposed
                        ? "border-r-gold/50 bg-r-gold/10"
                        : "border-r-line",
                    )}
                  >
                    <p className="flex items-center justify-between text-sm text-r-muted">
                      {asset.label}
                      {view === "risks" && asset.exposed && (
                        <span className="rounded-full border border-r-gold/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-r-gold">
                          Shared Exposure
                        </span>
                      )}
                    </p>
                    {asset.sublabel && <p className="mt-0.5 text-xs text-r-muted/70">{asset.sublabel}</p>}
                    <p className="mt-1 text-lg font-semibold text-r-white">{asset.value}</p>
                  </div>
                ))}
              </div>
              {view === "risks" && (
                <p className="mt-6 border-t border-r-line pt-5 text-base leading-relaxed text-r-white font-body normal-case">
                  {sharedRiskNote}
                </p>
              )}
            </>
          )}

          {view === "downturn" && (
            <>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-r-line text-left text-xs uppercase tracking-wide text-r-muted">
                      <th className="py-2 pr-4 font-semibold">Asset</th>
                      <th className="py-2 pr-4 font-semibold">Before</th>
                      <th className="py-2 pr-4 font-semibold">After Decline</th>
                      <th className="py-2 font-semibold">Illustrative Loss</th>
                    </tr>
                  </thead>
                  <tbody>
                    {downturn.map((row) => (
                      <tr key={row.label} className="border-b border-r-line/60">
                        <td className="py-2 pr-4 text-r-white">{row.label}</td>
                        <td className="py-2 pr-4 text-r-muted">{row.before}</td>
                        <td className="py-2 pr-4 text-r-white">{row.after}</td>
                        <td className="py-2 font-semibold text-red-300">-{row.loss}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-4 border-t border-r-line pt-6 sm:grid-cols-2 md:grid-cols-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-r-muted">Other Assets, Unchanged</p>
                  <p className="mt-1 text-lg font-semibold text-r-white">{unaffectedTotal}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-r-muted">Starting Net Position</p>
                  <p className="mt-1 text-lg font-semibold text-r-white">{startingTotal}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-r-muted">Illustrative Ending Position</p>
                  <p className="mt-1 text-lg font-semibold text-r-white">{endingTotal}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-r-muted">Hypothetical Decline</p>
                  <p className="mt-1 text-lg font-semibold text-r-gold">{totalDecline}</p>
                </div>
              </div>
            </>
          )}
        </div>

        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-r-muted/70 font-body normal-case">{disclaimer}</p>
      </div>
    </section>
  );
}
