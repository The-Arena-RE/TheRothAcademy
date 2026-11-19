import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { plansComparison } from "@/data/plans-content";
import { planDestinations } from "@/data/site-config";

export function PlansComparison() {
  return (
    <section id="comparison" className="scroll-mt-24 border-b border-r-line bg-r-bg py-16 md:py-24">
      <div className="container-brand">
        <Eyebrow>{plansComparison.eyebrow}</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-4xl md:text-6xl">
          {plansComparison.heading.map((line, index) => (
            <span
              key={line}
              className={index === plansComparison.heading.length - 1 ? "block text-r-gold" : "block"}
            >
              {line}
            </span>
          ))}
        </h2>
        <p className="mt-6 max-w-xl text-sm text-r-muted font-body normal-case">{plansComparison.intro}</p>

        {/* Desktop / tablet: real table */}
        <div className="mt-10 hidden overflow-x-auto md:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-r-gold/40">
                <th className="py-4 pr-6 text-xs font-semibold uppercase tracking-[0.15em] text-r-muted">
                  Start with the question
                </th>
                {plansComparison.columns.map((column) => (
                  <th
                    key={column}
                    className="py-4 pr-6 text-xs font-semibold uppercase tracking-[0.15em] text-r-gold"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-r-line">
              {plansComparison.rows.map((row) => (
                <tr key={row.question}>
                  <th scope="row" className="py-5 pr-6 align-top text-sm font-semibold text-r-white">
                    {row.question}
                  </th>
                  {row.answers.map((answer, index) => (
                    <td
                      key={`${row.question}-${index}`}
                      className="py-5 pr-6 align-top text-sm text-r-muted font-body normal-case"
                    >
                      {answer}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: stacked cards, same data */}
        <div className="mt-10 divide-y divide-r-line border-t border-r-line md:hidden">
          {plansComparison.rows.map((row) => (
            <div key={row.question} className="py-6">
              <p className="text-sm font-semibold text-r-white">{row.question}</p>
              <dl className="mt-4 space-y-4">
                {plansComparison.columns.map((column, index) => (
                  <div key={column}>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.15em] text-r-gold">{column}</dt>
                    <dd className="mt-1 text-sm text-r-muted font-body normal-case">{row.answers[index]}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 border-t border-r-line pt-8 sm:grid-cols-2">
          {plansComparison.columnCtas.map((cta) => (
            <Link
              key={cta.label}
              href={cta.href}
              className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-brand-control)] bg-r-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light"
            >
              {cta.label}
              <ArrowUpRight size={16} aria-hidden />
            </Link>
          ))}
        </div>

        <Link
          href={planDestinations.getHelp}
          className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold"
        >
          Help Me Choose
          <ArrowUpRight size={16} aria-hidden />
        </Link>

        {plansComparison.note && (
          <p className="mt-10 max-w-2xl border-l-2 border-r-gold pl-5 text-lg text-r-white md:text-xl">
            {plansComparison.note}
          </p>
        )}

        {plansComparison.references && plansComparison.references.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
            {plansComparison.references.map((reference) => (
              <li key={reference.href}>
                <a
                  href={reference.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-r-muted/70 underline decoration-r-line underline-offset-4 transition-colors hover:text-r-gold"
                >
                  {reference.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
