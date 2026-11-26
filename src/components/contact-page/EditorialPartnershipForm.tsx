"use client";

import { useState } from "react";
import { useInquiryForm } from "@/components/contact/useInquiryForm";
import { EditorialContactMethodField } from "@/components/contact-page/EditorialContactMethodField";

const partnershipInterests = [
  { value: "education", label: "Education" },
  { value: "referrals", label: "Referrals" },
  { value: "approved-sales-representation", label: "Approved Sales Representation" },
  { value: "other", label: "Other" },
];

export function EditorialPartnershipForm() {
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
    if (ok) {
      form.reset();
      setContactValue("");
    }
  }

  return (
    <div className="contact-form-card">
      <h3>Tell us about your partnership idea</h3>
      <p className="form-note">* Required fields</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-fields">
          <div className="field">
            <label htmlFor="partnership-form-name">Contact Name *</label>
            <input id="partnership-form-name" type="text" required autoComplete="name" name="name" />
          </div>
          <div className="field">
            <label htmlFor="partnership-form-business">Business or Organization *</label>
            <input
              id="partnership-form-business"
              type="text"
              required
              name="businessOrOrganization"
              autoComplete="organization"
            />
          </div>

          <EditorialContactMethodField
            idPrefix="partnership-form"
            method={method}
            onMethodChange={setMethod}
            value={contactValue}
            onValueChange={setContactValue}
          />

          <div className="field">
            <label htmlFor="partnership-form-website">Website or Professional Profile (Optional)</label>
            <input id="partnership-form-website" type="text" name="websiteOrProfile" />
          </div>
          <div className="field">
            <label htmlFor="partnership-form-audience">Type of Audience or Customers Served *</label>
            <input id="partnership-form-audience" type="text" required name="audienceType" />
          </div>
          <div className="field wide">
            <label htmlFor="partnership-form-interest">Partnership Interest *</label>
            <select id="partnership-form-interest" name="partnershipInterest" required defaultValue="">
              <option value="" disabled>
                Choose an option
              </option>
              {partnershipInterests.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="field wide">
            <label htmlFor="partnership-form-description">Short Description of the Proposed Relationship *</label>
            <textarea id="partnership-form-description" name="description" required rows={4} />
          </div>
        </div>

        <p className="form-note notice">
          Submitting this inquiry does not make you an authorized Roth Academy representative. Any partnership,
          referral compensation, promotional arrangement, or sales authority must be approved through the applicable
          review and a separate written agreement.
        </p>

        <button type="submit" disabled={status === "submitting"} className="button">
          {status === "submitting" ? "Sending…" : "Explore a Roth Academy Partnership"}
        </button>

        {status !== "idle" && (
          <div role="status" aria-live="polite" className="form-status">
            {status === "submitting" && "Sending…"}
            {status === "success" && "Inquiry received. The team will review your idea and follow up."}
            {status === "error" && "We couldn’t send your message. Please try again or reach us by email or phone."}
          </div>
        )}
      </form>
    </div>
  );
}
