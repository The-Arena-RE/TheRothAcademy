"use client";

import { useMemo, useState } from "react";
import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";

type MonthData = { month: string; payments: number; expenses: number };

type ViewKey = "payments" | "expenses" | "profit";

const views: { key: ViewKey; label: string; color: string }[] = [
  { key: "payments", label: "Client Payments", color: "bg-r-gold" },
  { key: "expenses", label: "Business Expenses", color: "bg-r-muted" },
  { key: "profit", label: "Business Profit", color: "bg-r-gold" },
];

export function ContractYearChart({
  eyebrow,
  heading,
  intro,
  months,
  takeaway,
}: {
  eyebrow: string;
  heading: string[];
  intro?: string;
  months: MonthData[];
  takeaway: string;
}) {
  const [view, setView] = useState<ViewKey>("payments");
  const [activeIndex, setActiveIndex] = useState(0);

  const rows = useMemo(
    () => months.map((entry) => ({ ...entry, profit: entry.payments - entry.expenses })),
    [months],
  );

  const totals = useMemo(
    () => ({
      payments: rows.reduce((sum, row) => sum + row.payments, 0),
      expenses: rows.reduce((sum, row) => sum + row.expenses, 0),
      profit: rows.reduce((sum, row) => sum + row.profit, 0),
    }),
    [rows],
  );

  const maxValue = Math.max(...rows.map((row) => row[view]));
  const active = rows[activeIndex];

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
          {views.map((v) => (
            <button
              key={v.key}
              type="button"
              onClick={() => setView(v.key)}
              className={clsx(
                "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors",
                v.key === view
                  ? "border-r-gold bg-r-gold text-r-bg"
                  : "border-r-line text-r-muted hover:border-r-gold/50",
              )}
            >
              {v.label}
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/60 p-6 md:p-10">
          <div className="flex items-end gap-1.5 sm:gap-2.5" style={{ height: 180 }}>
            {rows.map((row, index) => {
              const value = row[view];
              const heightPct = maxValue > 0 ? Math.max((value / maxValue) * 100, 4) : 4;
              return (
                <button
                  key={row.month}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`${row.month}: $${value.toLocaleString()}`}
                  className="group flex h-full flex-1 flex-col items-center justify-end"
                >
                  <div
                    className={clsx(
                      "w-full rounded-t-sm transition-all",
                      index === activeIndex ? "bg-r-gold" : "bg-r-line group-hover:bg-r-gold/50",
                    )}
                    style={{ height: `${heightPct}%` }}
                  />
                </button>
              );
            })}
          </div>
          <div className="mt-3 flex gap-1.5 sm:gap-2.5">
            {rows.map((row, index) => (
              <span
                key={row.month}
                className={clsx(
                  "flex-1 text-center text-[10px] uppercase tracking-tight",
                  index === activeIndex ? "text-r-gold" : "text-r-muted/60",
                )}
              >
                {row.month.slice(0, 3)}
              </span>
            ))}
          </div>

          {active && (
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-r-line pt-6">
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-r-muted">{active.month} Payments</p>
                <p className="mt-1 text-2xl text-r-white">${active.payments.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-r-muted">{active.month} Expenses</p>
                <p className="mt-1 text-2xl text-r-white">${active.expenses.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-r-gold">{active.month} Profit</p>
                <p className="mt-1 text-2xl text-r-gold">${active.profit.toLocaleString()}</p>
              </div>
            </div>
          )}

          <div className="mt-6 grid grid-cols-3 gap-4 border-t border-r-line pt-6 text-xs text-r-muted/70 font-body normal-case">
            <p>Annual payments: ${totals.payments.toLocaleString()}</p>
            <p>Annual expenses: ${totals.expenses.toLocaleString()}</p>
            <p>Annual profit: ${totals.profit.toLocaleString()}</p>
          </div>
        </div>

        <p className="mt-8 max-w-2xl border-l-2 border-r-gold pl-5 text-xl text-r-white md:text-2xl">{takeaway}</p>
      </div>
    </section>
  );
}
