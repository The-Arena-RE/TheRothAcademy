"use client";

import { useState } from "react";
import { useInquiryForm } from "@/components/contact/useInquiryForm";
import { EditorialContactMethodField } from "@/components/contact-page/EditorialContactMethodField";

export function EditorialSpecialistForm() {
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
    if (ok) {
      form.reset();
      setContactValue("");
    }
  }

  return (
    <div className="contact-form-card">
      <h3>Tell us about your event</h3>
      <p className="form-note">* Required fields</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-fields">
          <div className="field">
            <label htmlFor="specialist-form-name">Contact Name *</label>
            <input id="specialist-form-name" type="text" required autoComplete="name" name="name" />
          </div>
          <div className="field">
            <label htmlFor="specialist-form-org">Organization or Event Name *</label>
            <input id="specialist-form-org" type="text" required name="organizationOrEvent" autoComplete="organization" />
          </div>

          <EditorialContactMethodField
            idPrefix="specialist-form"
            method={method}
            onMethodChange={setMethod}
            value={contactValue}
            onValueChange={setContactValue}
          />

          <div className="field">
            <label htmlFor="specialist-form-location">City &amp; State, or Virtual *</label>
            <input
              id="specialist-form-location"
              type="text"
              required
              placeholder="e.g. Austin, TX or Virtual"
              name="locationOrVirtual"
            />
          </div>
          <div className="field">
            <label htmlFor="specialist-form-date">Proposed Event Date</label>
            <input id="specialist-form-date" type="text" placeholder="e.g. March 2026 or TBD" name="eventDate" />
          </div>
          <div className="field">
            <label htmlFor="specialist-form-size">Estimated Audience Size</label>
            <input id="specialist-form-size" type="text" name="audienceSize" />
          </div>
          <div className="field wide">
            <label htmlFor="specialist-form-subject">General Subject or Audience Interests *</label>
            <textarea id="specialist-form-subject" name="subjectInterest" required rows={3} />
          </div>
          <div className="field wide">
            <label htmlFor="specialist-form-additional">Additional Information (Optional)</label>
            <textarea id="specialist-form-additional" name="additionalInfo" rows={3} />
          </div>
        </div>

        <p className="form-note notice">
          We welcome inquiries about educational presentations, but we cannot promise that every event is accepted or
          guarantee a particular specialist, location, or travel arrangement. Presentation format, availability,
          applicable fees, and other terms are confirmed before an engagement is scheduled.
        </p>

        <button type="submit" disabled={status === "submitting"} className="button">
          {status === "submitting" ? "Sending…" : "Invite a Roth Academy Specialist"}
        </button>

        {status !== "idle" && (
          <div role="status" aria-live="polite" className="form-status">
            {status === "submitting" && "Sending…"}
            {status === "success" && "Inquiry received. The team will review your event details and follow up on availability."}
            {status === "error" && "We couldn’t send your message. Please try again or reach us by email or phone."}
          </div>
        )}
      </form>
    </div>
  );
}
