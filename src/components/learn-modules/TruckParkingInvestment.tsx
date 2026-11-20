"use client";

import { useState } from "react";
import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function TruckParkingInvestment({
  eyebrow,
  heading,
  intro,
  capital,
  occupancyOptions,
  totalSpaces,
  monthlyRatePerSpace,
  annualOperatingExpenses,
  lowOccupancyNote,
  fullOccupancyNote,
  takeaway,
  disclaimer,
}: {
  eyebrow: string;
  heading: string[];
  intro?: string;
  capital: { purchase: number; improvements: number; closingCosts: number; reserve: number };
  occupancyOptions: number[];
  totalSpaces: number;
  monthlyRatePerSpace: number;
  annualOperatingExpenses: number;
  lowOccupancyNote: string;
  fullOccupancyNote: string;
  takeaway: string;
  disclaimer: string;
}) {
  const [occupied, setOccupied] = useState(occupancyOptions[occupancyOptions.length - 1]);

  const acquisitionTotal = capital.purchase + capital.improvements + capital.closingCosts;
  const totalCapital = acquisitionTotal + capital.reserve;

  const annualGrossRevenue = occupied * monthlyRatePerSpace * 12;
  const annualResult = annualGrossRevenue - annualOperatingExpenses;
  const isSurplus = annualResult >= 0;
  const isFull = occupied === totalSpaces;
  const isLow = occupied <= totalSpaces / 2;

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
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-r-gold">Total Illustrative Capital Allocation</p>
          <p className="mt-2 text-4xl text-r-white">${totalCapital.toLocaleString()}</p>
          <p className="mt-2 text-xs text-r-muted font-body normal-case">
            ${acquisitionTotal.toLocaleString()} planned acquisition and improvement costs ($
            {capital.purchase.toLocaleString()} purchase, ${capital.improvements.toLocaleString()} site preparation, $
            {capital.closingCosts.toLocaleString()} closing costs and permits) + ${capital.reserve.toLocaleString()} reserve for future needs.
          </p>

          <div className="mt-8 border-t border-r-line pt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-r-muted">Select Occupied Spaces</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {occupancyOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setOccupied(option)}
                  className={clsx(
                    "rounded-full border px-5 py-3 text-sm font-semibold uppercase tracking-wide transition-colors",
                    option === occupied
                      ? "border-r-gold bg-r-gold text-r-bg"
                      : "border-r-line text-r-muted hover:border-r-gold/50",
                  )}
                >
                  {option} Of {totalSpaces}
                </button>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2" aria-hidden>
              {Array.from({ length: totalSpaces }).map((_, index) => (
                <div
                  key={index}
                  className={clsx(
                    "flex h-14 w-10 items-center justify-center rounded-sm border text-[10px] font-semibold uppercase",
                    index < occupied
                      ? "border-r-gold bg-r-gold/20 text-r-gold"
                      : "border-r-line/60 text-r-muted/40",
                  )}
                >
                  {index < occupied ? "Occ" : "Open"}
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 border-t border-r-line pt-6 sm:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-r-muted">Annual Gross Revenue</p>
                <p className="mt-1 text-2xl text-r-white">${annualGrossRevenue.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-r-muted">Illustrative Operating Expenses</p>
                <p className="mt-1 text-2xl text-r-white">${annualOperatingExpenses.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-r-gold">
                  Illustrative Operating {isSurplus ? "Surplus" : "Loss"}
                </p>
                <p className="mt-1 text-2xl text-r-gold">
                  {isSurplus ? "" : "-"}${Math.abs(annualResult).toLocaleString()}
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-r-white font-body normal-case">
              {isLow ? lowOccupancyNote : isFull ? fullOccupancyNote : ""}
            </p>
          </div>
        </div>

        <p className="mt-8 max-w-2xl border-l-2 border-r-gold pl-5 text-xl text-r-white md:text-2xl">{takeaway}</p>
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-r-muted/70 font-body normal-case">{disclaimer}</p>
      </div>
    </section>
  );
}
