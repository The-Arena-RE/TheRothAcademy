"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { FormCard } from "@/components/contact/FormCard";
import { ContactMethodField } from "@/components/contact/ContactMethodField";
import { useInquiryForm } from "@/components/contact/useInquiryForm";
import { inputClasses, labelClasses } from "@/components/contact/formStyles";

export function SpecialistInquiryForm() {
  const { status, submit } = useInquiryForm("specialist");
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
      organizationOrEvent: data.get("organizationOrEvent"),
      locationOrVirtual: data.get("locationOrVirtual"),
      eventDate: data.get("eventDate"),
      audienceSize: data.get("audienceSize"),
      subjectInterest: data.get("subjectInterest"),
      additionalInfo: data.get("additionalInfo"),
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
          <h2 className="mt-6 text-3xl text-r-gold">Inquiry Received.</h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-r-muted font-body normal-case">
            Thank you. The team will review your event details and follow up on availability.
          </p>
        </div>
      </FormCard>
    );
  }

  return (
    <FormCard>
      <form onSubmit={handleSubmit} className="space-y-8">
        <label className="block" htmlFor="specialist-form-name">
          <span className={labelClasses}>Contact Name</span>
          <input
            id="specialist-form-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClasses}
          />
        </label>

        <label className="block" htmlFor="specialist-form-org">
          <span className={labelClasses}>Organization or Event Name</span>
          <input id="specialist-form-org" name="organizationOrEvent" type="text" required className={inputClasses} />
        </label>

        <ContactMethodField
          idPrefix="specialist-form"
          method={method}
          onMethodChange={setMethod}
          value={contactValue}
          onValueChange={setContactValue}
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block" htmlFor="specialist-form-location">
            <span className={labelClasses}>City & State, or Virtual</span>
            <input
              id="specialist-form-location"
              name="locationOrVirtual"
              type="text"
              required
              placeholder="e.g. Austin, TX or Virtual"
              className={inputClasses}
            />
          </label>
          <label className="block" htmlFor="specialist-form-date">
            <span className={labelClasses}>Proposed Event Date</span>
            <input
              id="specialist-form-date"
              name="eventDate"
              type="text"
              placeholder="e.g. March 2026 or TBD"
              className={inputClasses}
            />
          </label>
        </div>

        <label className="block" htmlFor="specialist-form-size">
          <span className={labelClasses}>Estimated Audience Size</span>
          <input id="specialist-form-size" name="audienceSize" type="text" className={inputClasses} />
        </label>

        <label className="block" htmlFor="specialist-form-subject">
          <span className={labelClasses}>General Subject or Audience Interests</span>
          <textarea
            id="specialist-form-subject"
            name="subjectInterest"
            required
            rows={3}
            className={`${inputClasses} resize-none`}
          />
        </label>

        <label className="block" htmlFor="specialist-form-additional">
          <span className={labelClasses}>Additional Information (Optional)</span>
          <textarea
            id="specialist-form-additional"
            name="additionalInfo"
            rows={3}
            className={`${inputClasses} resize-none`}
          />
        </label>

        {status === "error" && (
          <p className="text-sm text-r-gold-light" role="alert">
            Something went wrong sending your inquiry. Please try again.
          </p>
        )}

        <div className="border-t border-r-line pt-8">
          <p className="text-xs leading-relaxed text-r-muted/70 font-body normal-case">
            We welcome inquiries about educational presentations, but we cannot promise that every event is
            accepted or guarantee a particular specialist, location, or travel arrangement. Presentation format,
            availability, applicable fees, and other terms are confirmed before an engagement is scheduled.
          </p>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius-brand-control)] bg-r-gold px-6 py-4 text-sm font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light disabled:opacity-60 sm:w-auto"
          >
            {status === "submitting" ? "Sending..." : "Invite a Roth Academy Specialist"}
            {status !== "submitting" && <ArrowUpRight size={16} aria-hidden />}
          </button>
        </div>
      </form>
    </FormCard>
  );
}
