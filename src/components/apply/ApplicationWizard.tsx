"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  PLANS,
  ANNUAL_MAINTENANCE,
  UPGRADES,
  UPGRADE_BUNDLE_DISCOUNT,
  UPGRADES_ENABLED,
  calculateUpgradeTotal,
  type PlanId,
  type UpgradeId,
} from "@/data/apply-content";
import { getApplicationSections, summarizeSectionValues, type ApplicationField, type ApplicationSection } from "@/data/application-content";
import { siteConfig } from "@/data/site-config";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SSN_PATTERN = /^(\d{3}-\d{2}-\d{4}|\d{9})$/;

const STYLES = `
.aw-card { color: #1E1C19; }
.aw-eyebrow {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #B89958;
  margin-bottom: 10px;
}
.aw-h2 {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: clamp(22px, 3.4vw, 28px);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 6px;
  color: #1E1C19;
}
.aw-sub { font-size: 14px; line-height: 1.6; color: #6b6558; margin-bottom: 24px; }
.aw-save-status-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 10px; min-height: 16px; }
.aw-save-status { font-size: 11px; color: #8a8376; }
.aw-resume-link { background: none; border: none; padding: 0; color: #B89958; font-size: 13px; font-weight: 700; letter-spacing: 0.02em; text-decoration: underline; cursor: pointer; }
.aw-resume-link:hover { color: #8a6f3f; }
.aw-field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 18px; }
.aw-field label { font-size: 12.5px; font-weight: 700; color: #1E1C19; }
.aw-field .aw-helper { font-size: 12px; color: #8a8376; margin-top: -2px; }
.aw-field input, .aw-field select, .aw-field textarea {
  border: 1.5px solid #E3DCCC;
  border-radius: 10px;
  padding: 12px 14px;
  font-size: 15px;
  font-family: inherit;
  color: #1E1C19;
  background: #FFFDF9;
  outline: none;
  transition: border-color 0.15s;
}
.aw-field input:focus, .aw-field select:focus, .aw-field textarea:focus { border-color: #B89958; }
.aw-field textarea { resize: vertical; min-height: 80px; }
.aw-radio-group { display: flex; gap: 10px; flex-wrap: wrap; }
.aw-radio-choice {
  border: 1.5px solid #ECE5D6;
  border-radius: 9px;
  padding: 10px 18px;
  cursor: pointer;
  background: #FFFDF9;
  font-size: 13.5px;
  font-weight: 600;
  color: #1E1C19;
  transition: border-color 0.15s, background 0.15s;
}
.aw-radio-choice.selected { border-color: #B89958; background: rgba(184,153,88,0.1); }
.aw-nav-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 8px;
  flex-wrap: wrap;
}
.aw-btn-back { background: none; border: none; color: #6b6558; font-size: 13.5px; font-weight: 700; cursor: pointer; padding: 10px 4px; }
.aw-btn-primary {
  background: #B89958;
  color: #1E1C19;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  border: none;
  border-radius: 9px;
  padding: 14px 30px;
  cursor: pointer;
  transition: background 0.15s;
}
.aw-btn-primary:hover { background: #cbad71; }
.aw-section-dots { display: flex; gap: 6px; margin-bottom: 18px; }
.aw-section-dot { width: 8px; height: 8px; border-radius: 50%; background: #ECE5D6; }
.aw-section-dot.active { background: #B89958; }
.aw-section-dot.done { background: #D8CEB5; }
.aw-complete-box {
  background: #FBF7EF;
  border: 1px solid #ECE5D6;
  border-left: 3px solid #B89958;
  border-radius: 10px;
  padding: 18px 20px;
  font-size: 14px;
  color: #1E1C19;
  line-height: 1.6;
}
.aw-complete-box p { margin: 0 0 14px; }
.aw-complete-link { display: inline-block; text-decoration: none; }
.aw-ssn-wrap { position: relative; }
.aw-ssn-wrap input { width: 100%; box-sizing: border-box; padding-right: 44px; }
.aw-ssn-toggle {
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  background: none;
  color: #8a8376;
  cursor: pointer;
  border-radius: 6px;
}
.aw-ssn-toggle:hover { color: #B89958; }
.aw-review-plan {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #FBF7EF;
  border: 1px solid #ECE5D6;
  border-radius: 10px;
  padding: 16px 18px;
  margin-bottom: 20px;
}
.aw-review-plan-name { font-weight: 700; font-size: 15px; color: #1E1C19; }
.aw-review-plan-sub { font-size: 12px; color: #8a8376; margin-top: 2px; }
.aw-review-plan-price { font-weight: 700; font-size: 18px; color: #1E1C19; }
.aw-review-section { border-top: 1px solid #ECE5D6; padding: 18px 0; }
.aw-review-section-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
.aw-review-section-head h3 {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: 16px;
  font-weight: 700;
  color: #1E1C19;
}
.aw-review-edit { background: none; border: none; padding: 0; color: #B89958; font-size: 12px; font-weight: 700; text-decoration: underline; cursor: pointer; }
.aw-review-edit:hover { color: #8a7238; }
.aw-review-row { display: flex; justify-content: space-between; gap: 16px; font-size: 13.5px; padding: 5px 0; color: #1E1C19; }
.aw-review-row span:first-child { color: #8a8376; }
.aw-review-row span:last-child { text-align: right; font-weight: 600; }
.aw-review-empty { font-size: 13px; color: #8a8376; font-style: italic; }
.aw-upgrade-choice {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  border: 1.5px solid #ECE5D6;
  border-radius: 10px;
  padding: 14px 16px;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 13.5px;
  color: #1E1C19;
}
.aw-upgrade-choice input { margin-top: 3px; }
.aw-review-total { border-top: 2px solid #1E1C19; margin-top: 10px; padding-top: 14px; }
.aw-review-total .aw-review-row { font-size: 15px; font-weight: 700; }
.aw-review-row-sub { font-size: 12px !important; font-weight: 400 !important; color: #8a8376 !important; }
.aw-review-row-sub span { font-weight: 400 !important; color: #8a8376 !important; }
`;

type Props = {
  applicationId: string;
  resumeToken: string;
  plan: PlanId;
  initialSectionData?: Record<string, Record<string, string>>;
  initialSectionIndex?: number;
  ssnOnFile?: boolean;
  alreadyComplete?: boolean;
  initialPaymentStatus?: "unpaid" | "paid" | "failed";
  initialDocusignStatus?: "not_sent" | "sent" | "completed";
  initialDiscountCents?: number;
};

function visibleFields(section: ApplicationSection, values: Record<string, string>) {
  return section.fields.filter((f) => !f.showIf || f.showIf(values));
}

function FieldInput({
  field,
  value,
  onChange,
}: {
  field: ApplicationField;
  value: string;
  onChange: (v: string) => void;
}) {
  if (field.type === "radio" && field.options) {
    return (
      <div className="aw-radio-group">
        {field.options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            className={`aw-radio-choice${value === opt.value ? " selected" : ""}`}
            onClick={() => onChange(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    );
  }
  if (field.type === "select" && field.options) {
    return (
      <select id={field.id} value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">Select...</option>
        {field.options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    );
  }
  if (field.type === "textarea") {
    return <textarea id={field.id} value={value} onChange={(e) => onChange(e.target.value)} />;
  }
  if (field.type === "ssn") {
    return <SsnInput id={field.id} value={value} placeholder={field.placeholder} onChange={onChange} />;
  }
  const inputType = field.type === "date" ? "date" : field.type;
  return (
    <input
      id={field.id}
      type={inputType === "text" ? "text" : inputType}
      value={value}
      placeholder={field.placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

function EyeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

// A Social Security Number is always exactly 9 digits -- strip anything
// else as it's typed and insert the standard XXX-XX-XXXX hyphens rather
// than relying on the signer to type them correctly.
function formatSSN(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 9);
  return [digits.slice(0, 3), digits.slice(3, 5), digits.slice(5, 9)].filter(Boolean).join("-");
}

function SsnInput({
  id,
  value,
  placeholder,
  onChange,
}: {
  id: string;
  value: string;
  placeholder?: string;
  onChange: (v: string) => void;
}) {
  const [visible, setVisible] = useState(true);
  return (
    <div className="aw-ssn-wrap">
      <input
        id={id}
        type={visible ? "text" : "password"}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(formatSSN(e.target.value))}
        inputMode="numeric"
        maxLength={11}
        autoComplete="off"
      />
      <button
        type="button"
        className="aw-ssn-toggle"
        onClick={() => setVisible((v) => !v)}
        aria-label={visible ? "Hide Social Security Number" : "Show Social Security Number"}
      >
        {visible ? <EyeOffIcon /> : <EyeIcon />}
      </button>
    </div>
  );
}

export function ApplicationWizard({
  applicationId,
  resumeToken,
  plan,
  initialSectionData,
  initialSectionIndex,
  ssnOnFile = false,
  alreadyComplete = false,
  initialPaymentStatus = "unpaid",
  initialDocusignStatus = "not_sent",
  initialDiscountCents = 0,
}: Props) {
  const sections = getApplicationSections(plan);
  const [sectionIndex, setSectionIndex] = useState(initialSectionIndex ?? 0);
  const [sectionData, setSectionData] = useState<Record<string, Record<string, string>>>(initialSectionData ?? {});
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved">("idle");
  const [complete, setComplete] = useState(alreadyComplete);
  const [signingError, setSigningError] = useState<string | null>(null);
  const [paymentStatus, setPaymentStatus] = useState(initialPaymentStatus);
  const [finishing, setFinishing] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const [resumeCopied, setResumeCopied] = useState(false);
  const [reviewing, setReviewing] = useState(false);
  const [cameFromReview, setCameFromReview] = useState(false);
  const [selectedUpgrades, setSelectedUpgrades] = useState<UpgradeId[]>([]);
  // Keyed per "sectionId:fieldId" so editing one field doesn't cancel
  // another field's pending autosave -- a single shared timer/ref here
  // would silently drop every edit but the most recent one whenever two
  // different fields change within the same 700ms window (fast typing,
  // browser autofill, paste).
  const saveTimers = useRef<Record<string, ReturnType<typeof setTimeout>>>({});
  const pendingSaves = useRef<Record<string, { sectionId: string; fieldId: string; value: string }>>({});

  const section = sections[sectionIndex];
  const values = sectionData[section.id] ?? {};

  function save(sectionId: string, fieldId: string, value: string) {
    setSaveStatus("saving");
    const isSsn = sectionId === "personal_info" && fieldId === "ssn";
    const payload = isSsn
      ? { token: resumeToken, section: "ssn", data: { ssn: value } }
      : { token: resumeToken, section: sectionId, data: { [fieldId]: value }, currentSection: sectionId };
    return fetch(`/api/applications/${applicationId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(() => setSaveStatus("saved"))
      .catch(() => setSaveStatus("idle"));
  }

  function setValue(fieldId: string, value: string) {
    const sectionId = section.id;
    setSectionData((prev) => ({ ...prev, [sectionId]: { ...(prev[sectionId] ?? {}), [fieldId]: value } }));
    const key = `${sectionId}:${fieldId}`;
    pendingSaves.current[key] = { sectionId, fieldId, value };
    if (saveTimers.current[key]) clearTimeout(saveTimers.current[key]);
    saveTimers.current[key] = setTimeout(() => {
      delete pendingSaves.current[key];
      delete saveTimers.current[key];
      save(sectionId, fieldId, value);
    }, 700);
  }

  // Navigating away (section change, Finish, or "Save & finish later") can
  // land within the 700ms debounce window of a recent keystroke -- flush
  // every still-pending field immediately so nothing typed right before
  // leaving is silently dropped.
  function flushPending() {
    const pending = Object.values(pendingSaves.current);
    Object.values(saveTimers.current).forEach(clearTimeout);
    saveTimers.current = {};
    pendingSaves.current = {};
    if (pending.length === 0) return Promise.resolve();
    return Promise.all(pending.map((p) => save(p.sectionId, p.fieldId, p.value)));
  }

  function validateSection() {
    return visibleFields(section, values).every((f) => {
      if (!f.required) return true;
      if (f.type === "ssn" && ssnOnFile) return true;
      const value = (values[f.id] ?? "").trim();
      if (value === "") return false;
      // Required fields only checked for non-emptiness would let a typo'd
      // email reach DocuSign, where it fails with INVALID_EMAIL_ADDRESS_FOR_RECIPIENT
      // after payment -- too late for the customer to fix it themselves.
      if (f.type === "email") return EMAIL_PATTERN.test(value);
      // Unlike email, a malformed SSN isn't rejected by DocuSign -- it's
      // just text on a legal document, so bad data here fails silently
      // all the way through instead of erroring anywhere.
      if (f.type === "ssn") return SSN_PATTERN.test(value);
      return true;
    });
  }

  async function next() {
    if (!validateSection()) {
      alert("Please fill in all required fields with valid values.");
      return;
    }
    await flushPending();

    // Editing a single section from the review screen always returns there,
    // whichever section it was -- there's no "next section" to walk through.
    if (cameFromReview) {
      setCameFromReview(false);
      setReviewing(true);
      return;
    }
    if (sectionIndex + 1 < sections.length) {
      setSectionIndex(sectionIndex + 1);
      return;
    }
    setReviewing(true);
  }

  function back() {
    if (sectionIndex > 0) setSectionIndex(sectionIndex - 1);
  }

  function editSection(index: number) {
    setSectionIndex(index);
    setCameFromReview(true);
    setReviewing(false);
  }

  async function startCheckout() {
    setFinishing(true);
    setCheckoutError(null);
    try {
      const res = await fetch(`/api/applications/${applicationId}/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: resumeToken, selectedUpgrades }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.url) {
        throw new Error(data.error || "Could not start secure checkout");
      }
      // Navigating away -- deliberately don't reset `finishing` here so the
      // button stays disabled/labeled "Submitting..." during the redirect.
      window.location.href = data.url;
    } catch (err) {
      setCheckoutError(err instanceof Error ? err.message : "Could not start secure checkout");
      setFinishing(false);
      setComplete(true);
    }
  }

  // Covers someone who closed the DocuSign tab before finishing and came
  // back via their resume link -- send-for-signature resumes the existing
  // envelope rather than creating a new one when one's already out.
  async function continueToSigning() {
    setFinishing(true);
    setSigningError(null);
    try {
      const res = await fetch(`/api/applications/${applicationId}/send-for-signature`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: resumeToken }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.url) {
        throw new Error(data.error || "Could not resume the signing process");
      }
      window.location.href = data.url;
    } catch (err) {
      setSigningError(err instanceof Error ? err.message : "Could not resume the signing process");
      setFinishing(false);
    }
  }

  async function finishApplication() {
    setFinishing(true);
    try {
      await fetch(`/api/applications/${applicationId}/complete`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: resumeToken }),
      });
    } catch {
      // Autosaved data already lives in D1 either way; this call only
      // notifies GHL, so a network failure here isn't destructive.
    }
    await startCheckout();
  }

  async function copyResumeLink() {
    await flushPending();
    const url = `${window.location.origin}/apply/resume?id=${applicationId}&token=${resumeToken}`;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setResumeCopied(true);
        setTimeout(() => setResumeCopied(false), 2500);
      })
      .catch(() => {
        window.prompt("Copy your resume link:", url);
      });
    // Fire-and-forget -- the clipboard copy above is the guaranteed part of
    // this action; the email is a bonus safety net in case they close the
    // tab without ever pasting that link anywhere.
    fetch(`/api/applications/${applicationId}/email-resume-link`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: resumeToken }),
    }).catch(() => {});
  }

  if (reviewing && !complete) {
    const planInfo = PLANS[plan];
    const upgradesTotal = UPGRADES_ENABLED ? calculateUpgradeTotal(selectedUpgrades) : 0;
    const discountDollars = initialDiscountCents / 100;
    const discountedSetupFee = Math.max(0, planInfo.price - discountDollars);
    const amountDueToday = discountedSetupFee + upgradesTotal;

    return (
      <div className="aw-card">
        <style>{STYLES}</style>
        <div className="aw-eyebrow">Review Your Application</div>
        <h2 className="aw-h2">Everything Look Right?</h2>
        <p className="aw-sub">
          Review your answers below. You can edit any section before continuing, nothing needs to be re-entered.
        </p>

        <div className="aw-review-plan">
          <div>
            <div className="aw-review-plan-name">{planInfo.name}</div>
            <div className="aw-review-plan-sub">
              Setup fee{discountDollars > 0 && ` — $${discountDollars.toLocaleString()} discount applied`}
            </div>
          </div>
          <div className="aw-review-plan-price">
            {discountDollars > 0 && (
              <span style={{ textDecoration: "line-through", opacity: 0.5, marginRight: 8, fontWeight: 400 }}>
                ${planInfo.price.toLocaleString()}
              </span>
            )}
            ${discountedSetupFee.toLocaleString()}
          </div>
        </div>

        {sections.map((s, i) => {
          const lines = summarizeSectionValues(s, sectionData[s.id] ?? {});
          return (
            <div className="aw-review-section" key={s.id}>
              <div className="aw-review-section-head">
                <h3>{s.title}</h3>
                <button type="button" className="aw-review-edit" onClick={() => editSection(i)}>
                  Edit
                </button>
              </div>
              {s.id === "personal_info" && (
                <div className="aw-review-row">
                  <span>Social Security Number</span>
                  <span>{ssnOnFile || sectionData.personal_info?.ssn ? "On file" : "Not provided"}</span>
                </div>
              )}
              {lines.length === 0 ? (
                <p className="aw-review-empty">Nothing entered.</p>
              ) : (
                lines.map((l) => (
                  <div className="aw-review-row" key={l.fieldId}>
                    <span>{l.label}</span>
                    <span>{l.value}</span>
                  </div>
                ))
              )}
            </div>
          );
        })}

        {UPGRADES_ENABLED && (
          <div className="aw-review-section">
            <div className="aw-review-section-head">
              <h3>Optional Upgrades</h3>
            </div>
            <p className="aw-sub" style={{ marginBottom: 12 }}>
              Would you like extra help getting started? Neither is required.
            </p>
            {(Object.keys(UPGRADES) as UpgradeId[]).map((id) => {
              const u = UPGRADES[id];
              const checked = selectedUpgrades.includes(id);
              return (
                <label key={id} className="aw-upgrade-choice">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() =>
                      setSelectedUpgrades((prev) => (checked ? prev.filter((x) => x !== id) : [...prev, id]))
                    }
                  />
                  <span>
                    <strong>{u.name}</strong> — ${u.price}
                    <div className="aw-helper">{u.description}</div>
                  </span>
                </label>
              );
            })}
            {selectedUpgrades.length === 2 && (
              <p className="aw-helper">
                Both upgrades selected: ${UPGRADE_BUNDLE_DISCOUNT} bundle discount applied automatically.
              </p>
            )}
          </div>
        )}

        <div className="aw-review-total">
          <div className="aw-review-row">
            <span>Amount due today</span>
            <span>${amountDueToday.toLocaleString()}</span>
          </div>
          <div className="aw-review-row aw-review-row-sub">
            <span>Annual Tax Academy maintenance</span>
            <span>${ANNUAL_MAINTENANCE}/year, billed each May</span>
          </div>
        </div>

        <div className="aw-nav-row">
          <button type="button" className="aw-btn-back" onClick={() => setReviewing(false)} disabled={finishing}>
            ← Back to Application
          </button>
          <button type="button" className="aw-btn-primary" onClick={finishApplication} disabled={finishing}>
            {finishing ? "Submitting..." : "Proceed to Next Step →"}
          </button>
        </div>
      </div>
    );
  }

  if (complete && paymentStatus === "paid" && initialDocusignStatus === "completed") {
    return (
      <div className="aw-card">
        <style>{STYLES}</style>
        <div className="aw-eyebrow">Fully Signed</div>
        <h2 className="aw-h2">You&apos;re All Set</h2>
        <p className="aw-sub">
          Your application, payment, and signed order form are all complete. We&apos;ll be in touch shortly with next
          steps to get your plan established.
        </p>
      </div>
    );
  }

  if (complete && paymentStatus === "paid" && (plan === "401k" || plan === "ira")) {
    return (
      <div className="aw-card">
        <style>{STYLES}</style>
        <div className="aw-eyebrow">Payment Received</div>
        <h2 className="aw-h2">{signingError ? "One More Step" : "Let's Get Your Order Form Signed"}</h2>
        <p className="aw-sub">
          {signingError
            ? "Your payment is complete, but we couldn't open your order form just now."
            : "Your payment is complete. Signing your order form electronically is the last step."}
        </p>
        {signingError && <p className="aw-sub" style={{ color: "#b3261e", marginTop: -14 }}>{signingError}</p>}
        <button type="button" className="aw-btn-primary" onClick={continueToSigning} disabled={finishing} style={{ marginBottom: 20 }}>
          {finishing ? "Opening..." : signingError ? "Try Again →" : "Continue to Signing →"}
        </button>
        <div className="aw-complete-box">
          <p>
            Rather not sign online right now? Call us at {siteConfig.phone} and we&apos;ll get it sent over another
            way.
          </p>
        </div>
      </div>
    );
  }

  if (complete && paymentStatus === "paid") {
    return (
      <div className="aw-card">
        <style>{STYLES}</style>
        <div className="aw-eyebrow">Payment Received</div>
        <h2 className="aw-h2">You&apos;re All Set</h2>
        <p className="aw-sub">
          Your application and payment are both complete. We&apos;ll be in touch shortly with next steps to get your
          order form signed and your plan established.
        </p>
      </div>
    );
  }

  if (complete) {
    return (
      <div className="aw-card">
        <style>{STYLES}</style>
        <div className="aw-eyebrow">Application Saved</div>
        <h2 className="aw-h2">{checkoutError ? "One More Step" : "That's Everything We Need For Now"}</h2>
        <p className="aw-sub">
          {checkoutError
            ? "Your answers are saved, but we couldn't start secure checkout just now."
            : "Your answers are saved. Secure payment is the last step to get your plan established."}
        </p>
        {checkoutError && <p className="aw-sub" style={{ color: "#b3261e", marginTop: -14 }}>{checkoutError}</p>}
        <button type="button" className="aw-btn-primary" onClick={startCheckout} disabled={finishing} style={{ marginBottom: 20 }}>
          {finishing ? "Starting Checkout..." : checkoutError ? "Try Payment Again →" : "Continue to Secure Payment →"}
        </button>
        <div className="aw-complete-box">
          <p>
            A specialist can also take it from here right away if you&apos;d rather not wait, just book a Retirement
            Certainty Session and mention you&apos;ve already started your application online.
          </p>
          <Link href="/self-directed-certainty-session" className="aw-btn-primary aw-complete-link">
            Book a Retirement Certainty Session
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="aw-card">
      <style>{STYLES}</style>
      <div className="aw-section-dots">
        {sections.map((s, i) => (
          <div key={s.id} className={`aw-section-dot${i === sectionIndex ? " active" : i < sectionIndex ? " done" : ""}`} />
        ))}
      </div>
      <div className="aw-eyebrow">
        Section {sectionIndex + 1} of {sections.length}
      </div>
      <h2 className="aw-h2">{section.title}</h2>
      {section.subtitle && <p className="aw-sub">{section.subtitle}</p>}

      <div className="aw-save-status-row">
        <button type="button" className="aw-resume-link" onClick={copyResumeLink}>
          {resumeCopied ? "Link copied & emailed" : "Save & finish later"}
        </button>
        <span className="aw-save-status">
          {saveStatus === "saving" ? "Saving..." : saveStatus === "saved" ? "Saved" : ""}
        </span>
      </div>

      {visibleFields(section, values).map((field) => (
        <div className="aw-field" key={field.id}>
          <label htmlFor={field.id}>
            {field.label}
            {field.required ? " *" : ""}
          </label>
          {field.helper && <div className="aw-helper">{field.helper}</div>}
          {field.type === "ssn" && ssnOnFile && !values[field.id] && (
            <div className="aw-helper">We already have this on file. Leave blank to keep it, or enter a new one to replace it.</div>
          )}
          <FieldInput field={field} value={values[field.id] ?? ""} onChange={(v) => setValue(field.id, v)} />
        </div>
      ))}

      <div className="aw-nav-row">
        {cameFromReview ? (
          <button type="button" className="aw-btn-primary" onClick={next} style={{ marginLeft: "auto" }}>
            Save & Return to Review
          </button>
        ) : (
          <>
            <button type="button" className="aw-btn-back" onClick={back} disabled={sectionIndex === 0}>
              ← Back
            </button>
            <button type="button" className="aw-btn-primary" onClick={next}>
              {sectionIndex + 1 < sections.length ? "Continue →" : "Review & Continue →"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
