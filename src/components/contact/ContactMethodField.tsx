"use client";

import { clsx } from "clsx";
import { inputClasses, labelClasses } from "@/components/contact/formStyles";

type Method = "email" | "phone";

export function ContactMethodField({
  idPrefix,
  method,
  onMethodChange,
  value,
  onValueChange,
}: {
  idPrefix: string;
  method: Method;
  onMethodChange: (method: Method) => void;
  value: string;
  onValueChange: (value: string) => void;
}) {
  return (
    <div>
      <span className={labelClasses}>How Should We Contact You?</span>
      <div role="radiogroup" aria-label="Preferred contact method" className="mt-2 flex gap-2">
        {(["email", "phone"] as const).map((option) => (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={method === option}
            onClick={() => onMethodChange(option)}
            className={clsx(
              "rounded-[var(--radius-brand-control)] border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors",
              method === option
                ? "border-r-gold bg-r-gold/10 text-r-gold"
                : "border-r-line text-r-muted hover:border-r-gold/50",
            )}
          >
            {option === "email" ? "Email" : "Phone"}
          </button>
        ))}
      </div>
      <label className="sr-only" htmlFor={`${idPrefix}-contact-value`}>
        {method === "email" ? "Email address" : "Phone number"}
      </label>
      <input
        id={`${idPrefix}-contact-value`}
        name="contactValue"
        type={method === "email" ? "email" : "tel"}
        required
        autoComplete={method === "email" ? "email" : "tel"}
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        placeholder={method === "email" ? "you@example.com" : "(555) 555-5555"}
        className={inputClasses}
      />
    </div>
  );
}
