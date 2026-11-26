"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { getPageLabel } from "@/lib/page-label";
import { useInquiryForm } from "@/components/contact/useInquiryForm";
import { EditorialContactMethodField } from "@/components/contact-page/EditorialContactMethodField";

const questionCategories = [
  { value: "401k", label: "Self-Directed 401(k)" },
  { value: "ira", label: "Self-Directed IRA" },
  { value: "eligibility", label: "Plan Eligibility" },
  { value: "services", label: "Roth Academy Services" },
  { value: "existing-setup", label: "Existing Setup Inquiry" },
  { value: "other", label: "Other Question" },
];

export function EditorialContactForm() {
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
    if (ok) {
      form.reset();
      setContactValue("");
    }
  }

  return (
    <div className="contact-form-card">
      <h3>Send a message</h3>
      <p className="form-note">* Required fields</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-fields">
          <div className="field">
            <label htmlFor="contact-form-name">Your Name *</label>
            <input id="contact-form-name" type="text" required autoComplete="name" name="name" />
          </div>

          <EditorialContactMethodField
            idPrefix="contact-form"
            method={method}
            onMethodChange={setMethod}
            value={contactValue}
            onValueChange={setContactValue}
          />

          <div className="field">
            <label htmlFor="contact-form-category">What Is Your Question About? *</label>
            <select id="contact-form-category" name="category" required defaultValue="">
              <option value="" disabled>
                Choose a category
              </option>
              {questionCategories.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="field wide">
            <label htmlFor="contact-form-question">How Can We Help? *</label>
            <textarea id="contact-form-question" name="question" required rows={4} />
          </div>
        </div>

        <p className="form-note notice">
          Please do not include Social Security numbers, account passwords, banking credentials, or other sensitive
          financial information in this form. <a href="/privacy">View our privacy policy</a>.
        </p>

        <button type="submit" disabled={status === "submitting"} className="button">
          {status === "submitting" ? "Sending…" : "Send My Message"}
        </button>

        {status !== "idle" && (
          <div role="status" aria-live="polite" className="form-status">
            {status === "submitting" && "Sending…"}
            {status === "success" && "Message received. The team will review your question and follow up shortly."}
            {status === "error" && "We couldn’t send your message. Please try again or reach us by email or phone."}
          </div>
        )}
      </form>
    </div>
  );
}
