"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { getPageLabel } from "@/lib/page-label";
import { FormCard } from "@/components/contact/FormCard";
import { ContactMethodField } from "@/components/contact/ContactMethodField";
import { useInquiryForm } from "@/components/contact/useInquiryForm";
import { inputClasses, labelClasses } from "@/components/contact/formStyles";

const questionCategories = [
  { value: "401k", label: "Self-Directed 401(k)" },
  { value: "ira", label: "Self-Directed IRA" },
  { value: "eligibility", label: "Plan Eligibility" },
  { value: "services", label: "Roth Academy Services" },
  { value: "existing-setup", label: "Existing Setup Inquiry" },
  { value: "other", label: "Other Question" },
];

export function ContactForm() {
  const pathname = usePathname();
  const { status, submit } = useInquiryForm("general");
  const [method, setMethod] = useState<"email" | "phone">("email");
  const [contactValue, setContactValue] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const ok = await submit({
      name: data.get("name"),
      email: method === "email" ? contactValue : undefined,
      phone: method === "phone" ? contactValue : undefined,
      category: data.get("category"),
      message: data.get("question"),
      page: getPageLabel(pathname),
    });
    if (ok) form.reset();
  }

  if (status === "success") {
    return (
      <FormCard>
        <div className="py-6 text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-r-gold/40 text-r-gold">
            <Check size={26} aria-hidden />
          </span>
          <h2 className="mt-6 text-3xl text-r-gold">Message Received.</h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-r-muted font-body normal-case">
            Thank you, the team will review your question and follow up shortly.
          </p>
        </div>
      </FormCard>
    );
  }

  return (
    <FormCard>
      <form onSubmit={handleSubmit} className="space-y-8">
        <label className="block" htmlFor="contact-form-name">
          <span className={labelClasses}>Your Name</span>
          <input id="contact-form-name" name="name" type="text" required autoComplete="name" className={inputClasses} />
        </label>

        <ContactMethodField
          idPrefix="contact-form"
          method={method}
          onMethodChange={setMethod}
          value={contactValue}
          onValueChange={setContactValue}
        />

        <label className="block" htmlFor="contact-form-category">
          <span className={labelClasses}>What Is Your Question About?</span>
          <select id="contact-form-category" name="category" required defaultValue="" className={inputClasses}>
            <option value="" disabled>
              Choose a category
            </option>
            {questionCategories.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="block" htmlFor="contact-form-question">
          <span className={labelClasses}>How Can We Help?</span>
          <textarea
            id="contact-form-question"
            name="question"
            required
            rows={4}
            className={`${inputClasses} resize-none`}
          />
        </label>

        {status === "error" && (
          <p className="text-sm text-r-gold-light" role="alert">
            Something went wrong sending your message. Please try again.
          </p>
        )}

        <div className="border-t border-r-line pt-8">
          <p className="text-xs leading-relaxed text-r-muted/70 font-body normal-case">
            Please do not include Social Security numbers, account passwords, banking credentials, or other
            sensitive financial information in this form.{" "}
            <a href="/privacy" className="text-r-gold hover:text-r-gold-light">
              View our privacy policy
            </a>
            .
          </p>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius-brand-control)] bg-r-gold px-6 py-4 text-sm font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light disabled:opacity-60 sm:w-auto"
          >
            {status === "submitting" ? "Sending..." : "Send My Message"}
            {status !== "submitting" && <ArrowUpRight size={16} aria-hidden />}
          </button>
        </div>
      </form>
    </FormCard>
  );
}
