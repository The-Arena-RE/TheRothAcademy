"use client";

import { useState } from "react";
import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";

type MonthRow = {
  month: string;
  investmentCash: number;
  distribution: number;
  endingCash: number;
};

type Scenario = {
  key: string;
  label: string;
  status: string;
  months: MonthRow[];
  totals: { netInvestmentCash: number; grossDistributions: number; endingCash: number };
  explanation: string;
};

function formatSigned(value: number) {
  const abs = Math.abs(value).toLocaleString("en-US");
  return value < 0 ? `-$${abs}` : `+$${abs}`;
}

function formatPlain(value: number) {
  return `$${value.toLocaleString("en-US")}`;
}

export function RetirementPaycheckTest({
  eyebrow,
  heading,
  intro,
  portfolioSummary,
  monthlyDistribution,
  scenarios,
  disclaimer,
}: {
  eyebrow: string;
  heading: string[];
  intro?: string;
  portfolioSummary: { label: string; value: string }[];
  monthlyDistribution: string;
  scenarios: Scenario[];
  disclaimer: string;
}) {
  const [activeKey, setActiveKey] = useState(scenarios[0]?.key);
  const active = scenarios.find((scenario) => scenario.key === activeKey) ?? scenarios[0];

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

        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/60 p-6 sm:grid-cols-2 md:grid-cols-4 md:p-8">
          {portfolioSummary.map((item) => (
            <div key={item.label}>
              <p className="text-xs uppercase tracking-wide text-r-muted">{item.label}</p>
              <p className="mt-1 text-lg font-semibold text-r-white">{item.value}</p>
            </div>
          ))}
          <div>
            <p className="text-xs uppercase tracking-wide text-r-muted">Planned Monthly IRA Distribution</p>
            <p className="mt-1 text-lg font-semibold text-r-gold">{monthlyDistribution}</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {scenarios.map((scenario) => (
            <button
              key={scenario.key}
              type="button"
              onClick={() => setActiveKey(scenario.key)}
              className={clsx(
                "rounded-[var(--radius-brand-control)] border px-5 py-4 text-left text-sm font-semibold transition-colors",
                scenario.key === activeKey
                  ? "border-r-gold bg-r-gold/10 text-r-white"
                  : "border-r-line text-r-muted hover:border-r-gold/50",
              )}
            >
              {scenario.label}
              <span className="mt-1 block text-xs font-normal text-r-muted">{scenario.status}</span>
            </button>
          ))}
        </div>

        {active && (
          <div className="mt-6 rounded-[var(--radius-brand-card)] border border-r-gold/30 bg-r-panel/60 p-6 md:p-8">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-r-line text-left text-xs uppercase tracking-wide text-r-muted">
                    <th className="py-2 pr-4 font-semibold">Month</th>
                    <th className="py-2 pr-4 font-semibold">Investment Cash</th>
                    <th className="py-2 pr-4 font-semibold">IRA Distribution</th>
                    <th className="py-2 font-semibold">Ending IRA Cash</th>
                  </tr>
                </thead>
                <tbody>
                  {active.months.map((row) => (
                    <tr key={row.month} className="border-b border-r-line/60">
                      <td className="py-2 pr-4 text-r-white">{row.month}</td>
                      <td
                        className={clsx(
                          "py-2 pr-4 font-semibold",
                          row.investmentCash < 0 ? "text-red-300" : "text-r-white",
                        )}
                      >
                        {formatSigned(row.investmentCash)}
                      </td>
                      <td className="py-2 pr-4 text-r-muted">-{formatPlain(row.distribution)}</td>
                      <td className="py-2 font-semibold text-r-white">{formatPlain(row.endingCash)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 border-t border-r-line pt-6 sm:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-wide text-r-muted">Net Investment Cash Movement</p>
                <p className="mt-1 text-xl font-semibold text-r-white">{formatSigned(active.totals.netInvestmentCash)}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-r-muted">Gross IRA Distributions</p>
                <p className="mt-1 text-xl font-semibold text-r-white">-{formatPlain(active.totals.grossDistributions)}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-r-muted">Ending Available IRA Cash</p>
                <p className="mt-1 text-xl font-semibold text-r-gold">{formatPlain(active.totals.endingCash)}</p>
              </div>
            </div>

            <p className="mt-6 border-t border-r-line pt-5 text-base leading-relaxed text-r-white font-body normal-case">
              {active.explanation}
            </p>
          </div>
        )}

        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-r-muted/70 font-body normal-case">{disclaimer}</p>
      </div>
    </section>
  );
}
