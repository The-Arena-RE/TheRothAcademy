"use client";

import { useMemo, useState } from "react";
import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";

type Scenario = {
  key: string;
  label: string;
  startAge: number;
  contributionEndAge: number;
  finalAge: number;
};

function futureValueOfContributions(monthly: number, months: number, monthlyRate: number) {
  if (monthlyRate === 0) return monthly * months;
  return monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
}

function compound(amount: number, months: number, monthlyRate: number) {
  if (monthlyRate === 0) return amount;
  return amount * Math.pow(1 + monthlyRate, months);
}

export function HeadStartTimeline({
  eyebrow,
  heading,
  intro,
  monthlyContribution,
  contributionYears,
  scenarios,
  rateOptions,
  defaultRate,
  disclaimer,
  takeaway,
}: {
  eyebrow: string;
  heading: string[];
  intro?: string;
  monthlyContribution: number;
  contributionYears: number;
  scenarios: Scenario[];
  rateOptions: number[];
  defaultRate: number;
  disclaimer: string;
  takeaway: string;
}) {
  const [rate, setRate] = useState(defaultRate);

  const results = useMemo(() => {
    const monthlyRate = rate / 100 / 12;
    const contributionMonths = contributionYears * 12;
    const totalContributions = monthlyContribution * contributionMonths;
    return scenarios.map((scenario) => {
      const fvAtContributionEnd = futureValueOfContributions(monthlyContribution, contributionMonths, monthlyRate);
      const monthsAfter = (scenario.finalAge - scenario.contributionEndAge) * 12;
      const endingBalance = compound(fvAtContributionEnd, monthsAfter, monthlyRate);
      return { ...scenario, endingBalance, totalContributions };
    });
  }, [rate, scenarios, monthlyContribution, contributionYears]);

  const difference =
    results.length === 2 ? Math.round(results[0].endingBalance) - Math.round(results[1].endingBalance) : 0;

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

        <div className="mt-10 flex flex-wrap gap-3">
          {rateOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setRate(option)}
              className={clsx(
                "rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-wide transition-colors",
                option === rate
                  ? "border-r-gold bg-r-gold text-r-bg"
                  : "border-r-line text-r-muted hover:border-r-gold/50",
              )}
            >
              {option}% Hypothetical Annual Growth
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {results.map((result) => {
            const totalYears = result.finalAge - result.startAge;
            const contributionPct = ((result.contributionEndAge - result.startAge) / totalYears) * 100;
            return (
              <div
                key={result.key}
                className="rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/60 p-7 md:p-8"
              >
                <p className="text-sm font-semibold text-r-white">{result.label}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-r-muted">
                  Age {result.startAge} Through Age {result.finalAge}
                </p>

                <div className="mt-6 h-3 w-full overflow-hidden rounded-full bg-r-stripe-1">
                  <div className="h-full rounded-full bg-r-gold" style={{ width: `${contributionPct}%` }} />
                </div>
                <div className="mt-2 flex flex-wrap justify-between gap-x-4 gap-y-1 text-[11px] uppercase tracking-wide text-r-muted/70">
                  <span>Age {result.startAge}: Contributions Begin</span>
                  <span>Age {result.contributionEndAge}: Contributions Stop</span>
                  <span>Age {result.finalAge}</span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-r-line pt-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-r-muted">Total Contributions</p>
                    <p className="mt-1 text-2xl text-r-white">
                      ${Math.round(result.totalContributions).toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-r-gold">Hypothetical Ending Balance</p>
                    <p className="mt-1 text-2xl text-r-gold">${Math.round(result.endingBalance).toLocaleString()}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {results.length === 2 && (
          <p className="mt-6 text-sm text-r-muted font-body normal-case">
            Difference at age {results[0].finalAge}:{" "}
            <span className="font-semibold text-r-gold">
              ${Math.abs(difference).toLocaleString()} {difference >= 0 ? "more" : "less"}
            </span>{" "}
            for the earlier starter, under the stated assumptions.
          </p>
        )}

        <p className="mt-6 text-xs leading-relaxed text-r-muted/70 font-body normal-case">{disclaimer}</p>
        <p className="mt-8 max-w-2xl border-l-2 border-r-gold pl-5 text-xl text-r-white md:text-2xl">{takeaway}</p>
      </div>
    </section>
  );
}
