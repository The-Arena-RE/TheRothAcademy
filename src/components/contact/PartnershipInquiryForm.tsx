"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { FormCard } from "@/components/contact/FormCard";
import { ContactMethodField } from "@/components/contact/ContactMethodField";
import { useInquiryForm } from "@/components/contact/useInquiryForm";
import { inputClasses, labelClasses } from "@/components/contact/formStyles";

const partnershipInterests = [
  { value: "education", label: "Education" },
  { value: "referrals", label: "Referrals" },
  { value: "approved-sales-representation", label: "Approved Sales Representation" },
  { value: "other", label: "Other" },
];

export function PartnershipInquiryForm() {
  const { status, submit } = useInquiryForm("partnership");
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
      businessOrOrganization: data.get("businessOrOrganization"),
      websiteOrProfile: data.get("websiteOrProfile"),
      audienceType: data.get("audienceType"),
      partnershipInterest: data.get("partnershipInterest"),
      description: data.get("description"),
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
            Thank you. The team will review your idea and follow up.
          </p>
        </div>
      </FormCard>
    );
  }

  return (
    <FormCard>
      <form onSubmit={handleSubmit} className="space-y-8">
        <label className="block" htmlFor="partnership-form-name">
          <span className={labelClasses}>Contact Name</span>
          <input
            id="partnership-form-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClasses}
          />
        </label>

        <label className="block" htmlFor="partnership-form-business">
          <span className={labelClasses}>Business or Organization</span>
          <input
            id="partnership-form-business"
            name="businessOrOrganization"
            type="text"
            required
            className={inputClasses}
          />
        </label>

        <ContactMethodField
          idPrefix="partnership-form"
          method={method}
          onMethodChange={setMethod}
          value={contactValue}
          onValueChange={setContactValue}
        />

        <label className="block" htmlFor="partnership-form-website">
          <span className={labelClasses}>Website or Professional Profile (Optional)</span>
          <input id="partnership-form-website" name="websiteOrProfile" type="text" className={inputClasses} />
        </label>

        <label className="block" htmlFor="partnership-form-audience">
          <span className={labelClasses}>Type of Audience or Customers Served</span>
          <input id="partnership-form-audience" name="audienceType" type="text" required className={inputClasses} />
        </label>

        <label className="block" htmlFor="partnership-form-interest">
          <span className={labelClasses}>Partnership Interest</span>
          <select
            id="partnership-form-interest"
            name="partnershipInterest"
            required
            defaultValue=""
            className={inputClasses}
          >
            <option value="" disabled>
              Choose an option
            </option>
            {partnershipInterests.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="block" htmlFor="partnership-form-description">
          <span className={labelClasses}>Short Description of the Proposed Relationship</span>
          <textarea
            id="partnership-form-description"
            name="description"
            required
            rows={4}
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
            Submitting this inquiry does not make you an authorized Roth Academy representative. Any partnership,
            referral compensation, promotional arrangement, or sales authority must be approved through the
            applicable review and a separate written agreement.
          </p>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius-brand-control)] bg-r-gold px-6 py-4 text-sm font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light disabled:opacity-60 sm:w-auto"
          >
            {status === "submitting" ? "Sending..." : "Explore a Roth Academy Partnership"}
            {status !== "submitting" && <ArrowUpRight size={16} aria-hidden />}
          </button>
        </div>
      </form>
    </FormCard>
  );
}
