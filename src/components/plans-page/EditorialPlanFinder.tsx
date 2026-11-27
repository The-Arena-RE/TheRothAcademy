"use client";

import { useRef, useState } from "react";
import { planFinder } from "@/data/plans-content";
import { planDestinations } from "@/data/site-config";

type Step = 0 | 1 | 2;
type ResultKey = "401k" | "ira" | "review";

const RESULT_HREF: Record<ResultKey, string> = {
  "401k": planDestinations.open401k,
  ira: planDestinations.openIra,
  review: "/contact#ask-question",
};

export function EditorialPlanFinder() {
  const [step, setStep] = useState<Step>(0);
  const [selections, setSelections] = useState<Record<number, string>>({});
  const [interests, setInterests] = useState<Set<string>>(new Set());
  const [resultKey, setResultKey] = useState<ResultKey | null>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  function focusHeading() {
    requestAnimationFrame(() => headingRef.current?.focus({ preventScroll: true }));
  }

  function choose(value: string) {
    setSelections((prev) => ({ ...prev, [step]: value }));
    if (step === 0 && value !== "yes") {
      setResultKey(value === "no" ? "ira" : "review");
      focusHeading();
      return;
    }
    if (step === 1 && value !== "no") {
      setResultKey("review");
      focusHeading();
      return;
    }
    setStep((step + 1) as Step);
    focusHeading();
  }

  function toggleInterest(value: string) {
    setInterests((prev) => {
      const next = new Set(prev);
      if (next.has(value)) next.delete(value);
      else next.add(value);
      return next;
    });
  }

  function seeResult() {
    setResultKey("401k");
    focusHeading();
  }

  function goBack() {
    setResultKey(null);
    setStep((step - 1) as Step);
    focusHeading();
  }

  function editAnswers() {
    setResultKey(null);
    setStep(0);
    focusHeading();
  }

  if (resultKey) {
    const result = planFinder.results[resultKey];
    return (
      <div className="finder-card">
        <p className="eyebrow">Your Direction</p>
        <h3 ref={headingRef} tabIndex={-1}>
          {result.heading}
        </h3>
        <div className="finder-actions">
          <p className="result-copy">{result.body}</p>
          <a href={RESULT_HREF[resultKey]} className="button">
            {result.ctaLabel}
          </a>
          <button type="button" className="finder-back" onClick={editAnswers}>
            Edit My Answers
          </button>
          <div className="plan-links result-links">
            {result.links.map((link) => (
              <a href={link.href} className="text-link" key={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const question = step === 0 ? planFinder.questionOne : step === 1 ? planFinder.questionTwo : planFinder.questionThree;
  const isMulti = step === 2;

  return (
    <div className="finder-card">
      <p className="eyebrow">Question {step + 1} of 3</p>
      <div className="finder-steps">
        {[0, 1, 2].map((i) => (
          <span key={i} className={i <= step ? "filled" : undefined} />
        ))}
      </div>
      <h3 ref={headingRef} tabIndex={-1}>
        {question.prompt}
      </h3>
      <div className={isMulti ? "finder-options multi" : "finder-options"}>
        {question.options.map((option) =>
          isMulti ? (
            <button
              key={option.value}
              type="button"
              className="finder-choice"
              aria-pressed={interests.has(option.value)}
              onClick={() => toggleInterest(option.value)}
            >
              {option.label}
            </button>
          ) : (
            <button
              key={option.value}
              type="button"
              className="finder-choice"
              data-previous={selections[step] === option.value ? "true" : undefined}
              onClick={() => choose(option.value)}
            >
              {option.label}
            </button>
          ),
        )}
      </div>
      <div className="finder-actions">
        {isMulti && (
          <button type="button" className="button" onClick={seeResult}>
            See My Result
          </button>
        )}
        {step > 0 && (
          <button type="button" className="finder-back" onClick={goBack}>
            Back
          </button>
        )}
      </div>
    </div>
  );
}
