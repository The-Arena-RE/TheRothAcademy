"use client";

import { useState } from "react";
import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function ContributionMeter({
  eyebrow,
  heading,
  intro,
  limit,
  taxYear,
  presets,
  note,
}: {
  eyebrow: string;
  heading: string[];
  intro?: string;
  limit: number;
  taxYear: number;
  presets: number[];
  note: string;
}) {
  const [contributed, setContributed] = useState(presets[1] ?? presets[0]);
  const remaining = Math.max(limit - contributed, 0);
  const contributedPct = Math.min((contributed / limit) * 100, 100);

  return (
    <section className="border-b border-r-line bg-r-bg py-20 md:py-28">
      <div className="container-brand max-w-3xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 text-4xl md:text-6xl">
          {heading.map((line, index) => (
            <span key={line} className={index === heading.length - 1 ? "block text-r-gold" : "block"}>
              {line}
            </span>
          ))}
        </h2>
        {intro && <p className="mt-5 text-base text-r-muted font-body normal-case">{intro}</p>}

        <div className="mt-10 rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/60 p-7 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-r-muted">
            {taxYear} Regular Employee Deferral Limit: ${limit.toLocaleString()}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {presets.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setContributed(preset)}
                className={clsx(
                  "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors",
                  preset === contributed
                    ? "border-r-gold bg-r-gold text-r-bg"
                    : "border-r-line text-r-muted hover:border-r-gold/50",
                )}
              >
                ${preset.toLocaleString()} contributed at work
              </button>
            ))}
          </div>

          <div className="mt-8 h-3 w-full overflow-hidden rounded-full bg-r-stripe-1">
            <div
              className="h-full rounded-full bg-r-gold transition-all duration-500"
              style={{ width: `${contributedPct}%` }}
            />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-r-muted">Already Contributed At Work</p>
              <p className="mt-1 text-3xl text-r-white">${contributed.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-r-gold">Remaining Deferral Room</p>
              <p className="mt-1 text-3xl text-r-gold">${remaining.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-r-muted/60 font-body normal-case">{note}</p>
      </div>
    </section>
  );
}
