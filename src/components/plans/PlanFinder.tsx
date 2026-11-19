"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, Check } from "lucide-react";
import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { planFinder } from "@/data/plans-content";
import { planDestinations } from "@/data/site-config";

type Step = 1 | 2 | 3 | "result";
type ResultKey = "401k" | "ira" | "review";

export function PlanFinder() {
  const [step, setStep] = useState<Step>(1);
  const [q1, setQ1] = useState<string | undefined>();
  const [q2, setQ2] = useState<string | undefined>();
  const [q3, setQ3] = useState<string[]>([]);
  const [resultKey, setResultKey] = useState<ResultKey | null>(null);

  function chooseQ1(value: string) {
    setQ1(value);
    if (value === "no") {
      setResultKey("ira");
      setStep("result");
    } else if (value === "unsure") {
      setResultKey("review");
      setStep("result");
    } else {
      setStep(2);
    }
  }

  function chooseQ2(value: string) {
    setQ2(value);
    if (value === "no") {
      setStep(3);
    } else {
      setResultKey("review");
      setStep("result");
    }
  }

  function toggleQ3(value: string) {
    setQ3((current) => (current.includes(value) ? current.filter((item) => item !== value) : [...current, value]));
  }

  function submitQ3() {
    setResultKey("401k");
    setStep("result");
  }

  function editAnswers() {
    setStep(1);
    setResultKey(null);
  }

  const result = resultKey ? planFinder.results[resultKey] : null;
  const primaryHref = resultKey === "ira" ? planDestinations.openIra : planDestinations.open401k;

  return (
    <section id="plan-finder" className="scroll-mt-24 border-b border-r-line bg-r-bg py-20 md:py-28">
      <div className="container-brand">
        <div className="max-w-2xl">
          <Eyebrow>{planFinder.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-6xl">
            {planFinder.heading.map((line, index) => (
              <span key={line} className={index === planFinder.heading.length - 1 ? "block text-r-gold" : "block"}>
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-5 text-base text-r-muted font-body normal-case">{planFinder.intro}</p>
        </div>

        <div className="mt-12 max-w-2xl rounded-[var(--radius-brand-card)] border border-r-gold/30 bg-r-panel/50 p-8 shadow-2xl shadow-black/40 md:p-10">
          {step !== "result" && (
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-r-gold">
              Question {step} of 3
            </p>
          )}

          {step === 1 && (
            <FinderQuestion
              prompt={planFinder.questionOne.prompt}
              options={planFinder.questionOne.options}
              selected={q1}
              onSelect={chooseQ1}
            />
          )}

          {step === 2 && (
            <FinderQuestion
              prompt={planFinder.questionTwo.prompt}
              options={planFinder.questionTwo.options}
              selected={q2}
              onSelect={chooseQ2}
              onBack={() => setStep(1)}
            />
          )}

          {step === 3 && (
            <div className="mt-6">
              <p className="text-xl text-r-white">{planFinder.questionThree.prompt}</p>
              <ul className="mt-6 space-y-3">
                {planFinder.questionThree.options.map((option) => {
                  const checked = q3.includes(option.value);
                  return (
                    <li key={option.value}>
                      <button
                        type="button"
                        onClick={() => toggleQ3(option.value)}
                        aria-pressed={checked}
                        className={clsx(
                          "flex w-full items-center gap-3 rounded-[var(--radius-brand-control)] border px-5 py-3 text-left text-sm transition-colors",
                          checked
                            ? "border-r-gold bg-r-gold/10 text-r-white"
                            : "border-r-line text-r-muted hover:border-r-gold/50",
                        )}
                      >
                        <span
                          className={clsx(
                            "flex h-5 w-5 shrink-0 items-center justify-center rounded border",
                            checked ? "border-r-gold bg-r-gold text-r-bg" : "border-r-line",
                          )}
                        >
                          {checked && <Check size={13} aria-hidden />}
                        </span>
                        {option.label}
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <button
                  type="button"
                  onClick={submitQ3}
                  className="inline-flex items-center gap-2 rounded-[var(--radius-brand-control)] bg-r-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light"
                >
                  See My Result
                  <ArrowUpRight size={16} aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-muted hover:text-r-gold"
                >
                  <ArrowLeft size={14} aria-hidden />
                  Back
                </button>
              </div>
            </div>
          )}

          {step === "result" && result && (
            <div className="mt-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-r-gold">Your Direction</p>
              <h3 className="mt-3 text-3xl text-r-white md:text-4xl">{result.heading}</h3>
              <p className="mt-4 text-base leading-relaxed text-r-muted font-body normal-case">{result.body}</p>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Link
                  href={primaryHref}
                  className="inline-flex items-center gap-2 rounded-[var(--radius-brand-control)] bg-r-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light"
                >
                  {result.ctaLabel}
                  <ArrowUpRight size={16} aria-hidden />
                </Link>
                <button
                  type="button"
                  onClick={editAnswers}
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold"
                >
                  Edit My Answers
                </button>
              </div>

              <ul className="mt-8 space-y-2 border-t border-r-line pt-6">
                {result.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-r-muted transition-colors hover:text-r-gold">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <p className="mt-6 max-w-2xl text-xs leading-relaxed text-r-muted/60 font-body normal-case">
          {planFinder.disclaimer}
        </p>
      </div>
    </section>
  );
}

function FinderQuestion({
  prompt,
  options,
  selected,
  onSelect,
  onBack,
}: {
  prompt: string;
  options: { value: string; label: string }[];
  selected?: string;
  onSelect: (value: string) => void;
  onBack?: () => void;
}) {
  return (
    <div className="mt-6">
      <p className="text-xl text-r-white">{prompt}</p>
      <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {options.map((option) => (
          <li key={option.value}>
            <button
              type="button"
              onClick={() => onSelect(option.value)}
              className={clsx(
                "w-full rounded-[var(--radius-brand-control)] border px-5 py-3 text-sm font-semibold uppercase tracking-wide transition-colors",
                selected === option.value
                  ? "border-r-gold bg-r-gold text-r-bg"
                  : "border-r-line text-r-white hover:border-r-gold/50",
              )}
            >
              {option.label}
            </button>
          </li>
        ))}
      </ul>
      {onBack && (
        <button
          type="button"
          onClick={onBack}
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-muted hover:text-r-gold"
        >
          <ArrowLeft size={14} aria-hidden />
          Back
        </button>
      )}
    </div>
  );
}
