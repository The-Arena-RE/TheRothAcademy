"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ApplicationWizard } from "./ApplicationWizard";
import { PLANS, ELIGIBILITY_QUESTIONS, ANNUAL_MAINTENANCE, type PlanId } from "@/data/apply-content";
import { siteConfig } from "@/data/site-config";
import { generateEventId, getAttributionSnapshot, trackGA4Event } from "@/lib/tracking";

// Creates the GHL contact + opportunity on lead capture (New Lead), moves it
// to Eligibility Questions as soon as screening starts, then on to either
// Application In Progress or Closed / Unsupported Application once the
// eligibility outcome is known.
const N8N_APPLY_WEBHOOK = "https://n8n.coreautomations.org/webhook/apply-lead-ghl";

type Step = "plan" | "help-me-choose" | "lead" | "eligibility" | "outcome" | "application";

type LeadData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

type Outcome =
  | { kind: "stopped"; questionId: string; message: string }
  | { kind: "eligible" };

const STYLES = `
.apply-root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background:
    linear-gradient(180deg, rgba(9,10,11,0.55) 0%, rgba(9,10,11,0.45) 45%, rgba(9,10,11,0.6) 100%),
    url('/gold-dust-hero.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  font-family: var(--font-inter), 'Inter', sans-serif;
  color: #1E1C19;
  padding: 40px 0;
}

@media (max-width: 640px) {
  .apply-root { background-attachment: scroll; }
}

.apply-shell {
  max-width: 760px;
  margin: 0 auto;
  padding: 28px 20px 80px;
}

.apply-wordmark {
  text-align: center;
  margin-bottom: 28px;
}

.apply-wordmark a {
  display: inline-block;
}

.apply-progress-wrap {
  max-width: 760px;
  margin: 0 auto 32px;
  padding: 0 20px;
}

.apply-progress-label {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(244,241,234,0.65);
  margin-bottom: 8px;
}

.apply-progress-track {
  height: 6px;
  border-radius: 999px;
  background: rgba(244,241,234,0.18);
  overflow: hidden;
}

.apply-progress-fill {
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #B89958, #D4B877);
  transition: width 0.35s ease;
}

.apply-card {
  background: #FFFFFF;
  border: 1px solid #ECE5D6;
  border-radius: 18px;
  box-shadow: 0 2px 10px rgba(30,28,25,0.04), 0 20px 50px -30px rgba(30,28,25,0.15);
  padding: 36px;
}

@media (max-width: 640px) {
  .apply-card { padding: 24px 20px; border-radius: 14px; }
  .apply-shell { padding: 20px 14px 60px; }
}

.apply-eyebrow {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #B89958;
  margin-bottom: 10px;
}

.apply-h1 {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: clamp(26px, 4vw, 34px);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 10px;
  color: #1E1C19;
  text-transform: none;
  letter-spacing: normal;
}

.apply-sub {
  font-size: 15px;
  line-height: 1.65;
  color: #6b6558;
  margin-bottom: 28px;
  max-width: 560px;
}

.apply-plan-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin-bottom: 20px;
}

@media (max-width: 640px) {
  .apply-plan-grid { grid-template-columns: 1fr; }
}

.apply-plan-card {
  border: 1.5px solid #ECE5D6;
  border-radius: 14px;
  padding: 26px 22px;
  text-align: left;
  background: #FFFDF9;
  cursor: pointer;
  transition: border-color 0.15s, box-shadow 0.15s, transform 0.15s;
  display: flex;
  flex-direction: column;
}

.apply-plan-card:hover {
  border-color: #B89958;
  box-shadow: 0 10px 30px -18px rgba(184,153,88,0.5);
  transform: translateY(-2px);
}

.apply-plan-name {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: 19px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #1E1C19;
}

.apply-plan-blurb {
  font-size: 13.5px;
  line-height: 1.55;
  color: #6b6558;
  margin-bottom: 18px;
  flex-grow: 1;
}

.apply-plan-price {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: 26px;
  font-weight: 700;
  color: #B89958;
  margin-bottom: 16px;
}

.apply-plan-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #1E1C19;
  color: #F3E9D2;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 12px 20px;
  border-radius: 8px;
  border: none;
  width: 100%;
  cursor: pointer;
  transition: background 0.15s;
}

.apply-plan-btn:hover { background: #352F28; }

.apply-helpme-link {
  text-align: center;
  font-size: 13.5px;
  color: #6b6558;
}

.apply-helpme-link button {
  background: none;
  border: none;
  color: #B89958;
  font-weight: 700;
  cursor: pointer;
  text-decoration: underline;
  font-size: 13.5px;
  padding: 0;
}

.apply-field-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 20px;
}

@media (max-width: 560px) {
  .apply-field-grid { grid-template-columns: 1fr; }
}

.apply-field { display: flex; flex-direction: column; gap: 6px; }

.apply-field label {
  font-size: 12.5px;
  font-weight: 700;
  color: #1E1C19;
}

.apply-field input {
  border: 1.5px solid #E3DCCC;
  border-radius: 10px;
  padding: 13px 14px;
  font-size: 15px;
  font-family: inherit;
  color: #1E1C19;
  background: #FFFDF9;
  outline: none;
  transition: border-color 0.15s;
}

.apply-field input:focus { border-color: #B89958; }

.apply-field input.apply-field-error { border-color: #c0392b; }

.apply-choice-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 28px;
}

.apply-choice {
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1.5px solid #ECE5D6;
  border-radius: 10px;
  padding: 15px 18px;
  cursor: pointer;
  background: #FFFDF9;
  transition: border-color 0.15s, background 0.15s;
  font-size: 14.5px;
  font-weight: 600;
  color: #1E1C19;
  text-align: left;
}

.apply-choice:hover { border-color: #B89958; }

.apply-choice-radio {
  width: 18px;
  height: 18px;
  min-width: 18px;
  border-radius: 50%;
  border: 2px solid #D8CEB5;
  position: relative;
}

.apply-choice-radio.checked { border-color: #B89958; }
.apply-choice-radio.checked::after {
  content: '';
  position: absolute;
  inset: 3px;
  border-radius: 50%;
  background: #B89958;
}

.apply-nav-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 8px;
  flex-wrap: wrap;
}

.apply-btn-back {
  background: none;
  border: none;
  color: #6b6558;
  font-size: 13.5px;
  font-weight: 700;
  cursor: pointer;
  padding: 10px 4px;
}

.apply-btn-primary {
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

.apply-btn-primary:hover { background: #cbad71; }
.apply-btn-primary:disabled { opacity: 0.45; cursor: not-allowed; }

.apply-helper-text {
  font-size: 12.5px;
  color: #8a8376;
  margin: -10px 0 16px;
  line-height: 1.5;
}

.apply-outcome-icon {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  font-size: 24px;
}

.apply-outcome-icon.stop { background: #F7EDE3; color: #B8864A; }
.apply-outcome-icon.go { background: #EAF4EC; color: #3E8A54; }

.apply-cta-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 24px;
}

.apply-cta-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #1E1C19;
  color: #F3E9D2;
  font-size: 13.5px;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  padding: 14px 24px;
  border-radius: 9px;
  text-decoration: none;
}

.apply-cta-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: 1.5px solid #E3DCCC;
  color: #1E1C19;
  font-size: 13.5px;
  font-weight: 700;
  padding: 13px 22px;
  border-radius: 9px;
  text-decoration: none;
}

.apply-summary-box {
  background: #FBF7EF;
  border: 1px solid #ECE5D6;
  border-left: 3px solid #B89958;
  border-radius: 10px;
  padding: 16px 18px;
  font-size: 13.5px;
  color: #6b6558;
  margin-top: 22px;
  line-height: 1.6;
}
`;

const STEP_SEQUENCE: Step[] = ["plan", "lead", "eligibility", "outcome"];

function stepIndex(step: Step) {
  const i = STEP_SEQUENCE.indexOf(step);
  return i === -1 ? 0 : i;
}

export type ResumeData = {
  applicationId: string;
  resumeToken: string;
  plan: PlanId;
  leadFirstName: string;
  initialSectionData: Record<string, Record<string, string>>;
  initialSectionIndex: number;
  ssnOnFile: boolean;
  alreadyComplete: boolean;
  paymentStatus: "unpaid" | "paid" | "failed";
  docusignStatus: "not_sent" | "sent" | "completed";
  discountCents: number;
};

export function ApplyWizard({ resume, discountCode }: { resume?: ResumeData; discountCode?: string } = {}) {
  const [step, setStep] = useState<Step>(resume ? "application" : "plan");
  const [plan, setPlan] = useState<PlanId | null>(resume?.plan ?? null);
  const [lead, setLead] = useState<LeadData>({ firstName: resume?.leadFirstName ?? "", lastName: "", email: "", phone: "" });
  const [leadErrors, setLeadErrors] = useState<Record<string, boolean>>({});
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [outcome, setOutcome] = useState<Outcome | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [leadEventId] = useState(() => generateEventId());
  const [application, setApplication] = useState<{ id: string; resumeToken: string } | null>(
    resume ? { id: resume.applicationId, resumeToken: resume.resumeToken } : null
  );
  const [startingApplication, setStartingApplication] = useState(false);
  const [discountCents, setDiscountCents] = useState(resume?.discountCents ?? 0);

  function startApplication() {
    setStartingApplication(true);
    fetch("/api/applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ plan, lead, eligibilityAnswers: answers, discountCode }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Could not start application");
        return res.json();
      })
      .then((data: { id: string; resumeToken: string; existing?: boolean; discountCents?: number }) => {
        if (data.existing) {
          // Already has an unpaid application for this email + plan -- send
          // them into the real resume flow (full saved section data,
          // current step, payment/docusign state) instead of rendering a
          // blank wizard that would silently overwrite their progress.
          // Navigating away -- deliberately don't reset startingApplication
          // here so the button stays disabled during the redirect.
          window.location.href = `/apply/resume?id=${data.id}&token=${data.resumeToken}`;
          return;
        }
        setApplication(data);
        setDiscountCents(data.discountCents ?? 0);
        setStep("application");
        setStartingApplication(false);
      })
      .catch(() => {
        alert("We couldn't start your application right now. Please try again in a moment.");
        setStartingApplication(false);
      });
  }

  // Readable "Question: Answer" lines for GHL, built from the same question
  // text/option labels shown on screen, instead of a raw {id: value} dump.
  function formatEligibilitySummary(planId: PlanId, forAnswers: Record<string, string>) {
    const lines: string[] = [];
    for (const q of ELIGIBILITY_QUESTIONS[planId]) {
      const raw = forAnswers[q.id];
      if (!raw) continue;
      const label = q.options.find((o) => o.value === raw)?.label ?? raw;
      lines.push(`${q.question}: ${label}`);
    }
    return lines.join("\n");
  }

  function postApplyEvent(payload: Record<string, unknown>) {
    return fetch(N8N_APPLY_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lead_event_id: leadEventId,
        plan,
        ...payload,
        attribution: getAttributionSnapshot(),
      }),
      keepalive: true,
    }).catch(() => {});
  }

  function choosePlan(id: PlanId) {
    setPlan(id);
    trackGA4Event("apply_plan_selected", { plan: id });
    setStep("lead");
  }

  function validateLead() {
    const errs: Record<string, boolean> = {};
    if (!lead.firstName.trim()) errs.firstName = true;
    if (!lead.lastName.trim()) errs.lastName = true;
    if (!lead.email.trim() || !lead.email.includes("@")) errs.email = true;
    if (!lead.phone.trim()) errs.phone = true;
    setLeadErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function submitLead() {
    if (!validateLead()) return;
    setSubmitting(true);
    trackGA4Event("apply_lead_captured", { plan });
    // Chained (not fired in parallel) so the GHL contact + opportunity from
    // lead_captured exist by the time eligibility_started's n8n workflow
    // searches for them.
    postApplyEvent({
      stage: "lead_captured",
      customer_details: lead,
    }).then(() => {
      postApplyEvent({
        stage: "eligibility_started",
        customer_details: lead,
      });
    });
    setSubmitting(false);
    setQIndex(0);
    setStep("eligibility");
  }

  function answerQuestion(questionId: string, value: string) {
    const nextAnswers = { ...answers, [questionId]: value };
    setAnswers(nextAnswers);

    if (!plan) return;
    const questions = ELIGIBILITY_QUESTIONS[plan];
    const q = questions[qIndex];

    if (q.stopValues.includes(value)) {
      const result: Outcome = { kind: "stopped", questionId: q.id, message: q.stopMessage(value) };
      setOutcome(result);
      trackGA4Event("apply_eligibility_stopped", { plan, question: q.id, answer: value });
      postApplyEvent({
        stage: "eligibility_stopped",
        customer_details: lead,
        eligibility_answers: formatEligibilitySummary(plan, nextAnswers),
        stopped_question: q.id,
      });
      setStep("outcome");
      return;
    }

    if (qIndex + 1 < questions.length) {
      setQIndex(qIndex + 1);
    } else {
      setOutcome({ kind: "eligible" });
      trackGA4Event("apply_eligibility_passed", { plan });
      postApplyEvent({
        stage: "eligibility_passed",
        customer_details: lead,
        eligibility_answers: formatEligibilitySummary(plan, nextAnswers),
      });
      setStep("outcome");
    }
  }

  function backFromEligibility() {
    if (qIndex === 0) {
      setStep("lead");
    } else {
      setQIndex(qIndex - 1);
    }
  }

  const currentIndex = stepIndex(step);
  const totalSteps = STEP_SEQUENCE.length;
  const progressPct = step === "eligibility" && plan
    ? ((currentIndex + qIndex / ELIGIBILITY_QUESTIONS[plan].length) / totalSteps) * 100
    : (currentIndex / (totalSteps - 1)) * 100;

  return (
    <div className="apply-root">
      <style>{STYLES}</style>

      <div className="apply-wordmark">
        <Link href="/">
          <Image src="/roth-logo.png" alt="Roth Academy" width={71} height={78} className="h-24 w-auto" priority />
        </Link>
      </div>

      {step !== "plan" && step !== "help-me-choose" && step !== "application" && (
        <div className="apply-progress-wrap">
          <div className="apply-progress-label">
            <span>
              Step {currentIndex + 1} of {totalSteps}
            </span>
            <span>{Math.round(progressPct)}% complete</span>
          </div>
          <div className="apply-progress-track">
            <div className="apply-progress-fill" style={{ width: `${Math.max(progressPct, 6)}%` }} />
          </div>
        </div>
      )}

      <div className="apply-shell">
        <div className="apply-card">
          {step === "plan" && <PlanSelectionView onChoose={choosePlan} onHelpMeChoose={() => setStep("help-me-choose")} />}

          {step === "help-me-choose" && (
            <HelpMeChooseView
              onPick={(id) => choosePlan(id)}
              onBack={() => setStep("plan")}
            />
          )}

          {step === "lead" && plan && (
            <LeadCaptureView
              plan={plan}
              lead={lead}
              errors={leadErrors}
              submitting={submitting}
              onChange={(field, value) => setLead((prev) => ({ ...prev, [field]: value }))}
              onBack={() => setStep("plan")}
              onContinue={submitLead}
            />
          )}

          {step === "eligibility" && plan && (
            <EligibilityView
              plan={plan}
              qIndex={qIndex}
              answers={answers}
              onAnswer={answerQuestion}
              onBack={backFromEligibility}
            />
          )}

          {step === "outcome" && outcome && plan && (
            <OutcomeView
              plan={plan}
              outcome={outcome}
              lead={lead}
              onBack={() => {
                setOutcome(null);
                setStep("eligibility");
              }}
              onStartApplication={startApplication}
              startingApplication={startingApplication}
            />
          )}

          {step === "application" && application && plan && (
            <ApplicationWizard
              applicationId={application.id}
              resumeToken={application.resumeToken}
              plan={plan}
              initialSectionData={resume?.initialSectionData}
              initialSectionIndex={resume?.initialSectionIndex}
              ssnOnFile={resume?.ssnOnFile}
              alreadyComplete={resume?.alreadyComplete}
              initialPaymentStatus={resume?.paymentStatus}
              initialDocusignStatus={resume?.docusignStatus}
              initialDiscountCents={discountCents}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function PlanSelectionView({ onChoose, onHelpMeChoose }: { onChoose: (id: PlanId) => void; onHelpMeChoose: () => void }) {
  return (
    <>
      <div className="apply-eyebrow">Get Started</div>
      <h1 className="apply-h1">Let&apos;s Get Your Retirement Plan Started</h1>
      <p className="apply-sub">
        Choose the plan that&apos;s right for you. We&apos;ll guide you through the process step by step. No
        retirement-plan experience needed.
      </p>

      <div className="apply-plan-grid">
        {(Object.keys(PLANS) as PlanId[]).map((id) => {
          const p = PLANS[id];
          return (
            <div className="apply-plan-card" key={id}>
              <div className="apply-plan-name">{p.name}</div>
              <div className="apply-plan-blurb">{p.blurb}</div>
              <div className="apply-plan-price">${p.price.toLocaleString()}</div>
              <button type="button" className="apply-plan-btn" onClick={() => onChoose(id)}>
                Get Started
              </button>
            </div>
          );
        })}
      </div>

      <div className="apply-helpme-link">
        Not sure which plan you need?{" "}
        <button type="button" onClick={onHelpMeChoose}>
          Help Me Choose
        </button>
      </div>
    </>
  );
}

function HelpMeChooseView({ onPick, onBack }: { onPick: (id: PlanId) => void; onBack: () => void }) {
  const [answer, setAnswer] = useState<"yes" | "no" | "unsure" | null>(null);

  return (
    <>
      <div className="apply-eyebrow">Help Me Choose</div>
      <h1 className="apply-h1">Do you currently operate a business or work for yourself?</h1>
      <p className="apply-sub">This quick question points you toward the right starting plan. It isn&apos;t personalized legal or tax advice.</p>

      <div className="apply-choice-group">
        {(["yes", "no", "unsure"] as const).map((v) => (
          <button key={v} type="button" className="apply-choice" onClick={() => setAnswer(v)}>
            <span className={`apply-choice-radio${answer === v ? " checked" : ""}`} />
            {v === "yes" ? "Yes" : v === "no" ? "No" : "I'm not sure"}
          </button>
        ))}
      </div>

      {answer === "yes" && (
        <div className="apply-summary-box">
          Business owners and self-employed individuals are generally who the Solo 401(k) is built for, subject to
          eligibility. Let&apos;s explore that option.
          <div className="apply-cta-row">
            <button type="button" className="apply-cta-primary" onClick={() => onPick("401k")} style={{ border: "none", cursor: "pointer" }}>
              Explore the Solo 401(k)
            </button>
          </div>
        </div>
      )}

      {answer === "no" && (
        <div className="apply-summary-box">
          Without current business or self-employed income, a Self-Directed IRA is typically the better starting
          point.
          <div className="apply-cta-row">
            <button type="button" className="apply-cta-primary" onClick={() => onPick("ira")} style={{ border: "none", cursor: "pointer" }}>
              Explore the Self-Directed IRA
            </button>
          </div>
        </div>
      )}

      {answer === "unsure" && (
        <div className="apply-summary-box">
          No problem. Take a look at both options below, or book a Retirement Certainty Session with Tim Berry to
          talk it through before deciding.
          <div className="apply-cta-row">
            <button type="button" className="apply-cta-primary" onClick={onBack} style={{ border: "none", cursor: "pointer" }}>
              View Both Plans
            </button>
            <Link className="apply-cta-secondary" href="/self-directed-certainty-session">
              Book a Certainty Session
            </Link>
          </div>
        </div>
      )}

      <div className="apply-nav-row">
        <button type="button" className="apply-btn-back" onClick={onBack}>
          ← Back to plans
        </button>
      </div>
    </>
  );
}

function LeadCaptureView({
  plan,
  lead,
  errors,
  submitting,
  onChange,
  onBack,
  onContinue,
}: {
  plan: PlanId;
  lead: LeadData;
  errors: Record<string, boolean>;
  submitting: boolean;
  onChange: (field: keyof LeadData, value: string) => void;
  onBack: () => void;
  onContinue: () => void;
}) {
  return (
    <>
      <div className="apply-eyebrow">{PLANS[plan].shortName}</div>
      <h1 className="apply-h1">First, Where Can We Reach You?</h1>
      <p className="apply-sub">We&apos;ll save your progress here so you never have to start over, even if you step away.</p>

      <div className="apply-field-grid">
        <div className="apply-field">
          <label htmlFor="apply-firstName">First Name</label>
          <input
            id="apply-firstName"
            className={errors.firstName ? "apply-field-error" : ""}
            value={lead.firstName}
            onChange={(e) => onChange("firstName", e.target.value)}
          />
        </div>
        <div className="apply-field">
          <label htmlFor="apply-lastName">Last Name</label>
          <input
            id="apply-lastName"
            className={errors.lastName ? "apply-field-error" : ""}
            value={lead.lastName}
            onChange={(e) => onChange("lastName", e.target.value)}
          />
        </div>
        <div className="apply-field">
          <label htmlFor="apply-email">Email Address</label>
          <input
            id="apply-email"
            type="email"
            className={errors.email ? "apply-field-error" : ""}
            value={lead.email}
            onChange={(e) => onChange("email", e.target.value)}
          />
        </div>
        <div className="apply-field">
          <label htmlFor="apply-phone">Mobile Phone</label>
          <input
            id="apply-phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            className={errors.phone ? "apply-field-error" : ""}
            value={lead.phone}
            onChange={(e) => onChange("phone", e.target.value)}
          />
        </div>
      </div>

      <div className="apply-nav-row">
        <button type="button" className="apply-btn-back" onClick={onBack}>
          ← Back
        </button>
        <button type="button" className="apply-btn-primary" onClick={onContinue} disabled={submitting}>
          Continue →
        </button>
      </div>
    </>
  );
}

function EligibilityView({
  plan,
  qIndex,
  answers,
  onAnswer,
  onBack,
}: {
  plan: PlanId;
  qIndex: number;
  answers: Record<string, string>;
  onAnswer: (questionId: string, value: string) => void;
  onBack: () => void;
}) {
  const questions = ELIGIBILITY_QUESTIONS[plan];
  const q = questions[qIndex];
  const selected = answers[q.id];

  return (
    <>
      <div className="apply-eyebrow">
        Eligibility Question {qIndex + 1} of {questions.length}
      </div>
      <h1 className="apply-h1">{q.question}</h1>
      {q.helper && <p className="apply-sub">{q.helper}</p>}

      <div className="apply-choice-group">
        {q.options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            className="apply-choice"
            onClick={() => onAnswer(q.id, opt.value)}
          >
            <span className={`apply-choice-radio${selected === opt.value ? " checked" : ""}`} />
            {opt.label}
          </button>
        ))}
      </div>

      <div className="apply-nav-row">
        <button type="button" className="apply-btn-back" onClick={onBack}>
          ← Back
        </button>
      </div>
    </>
  );
}

function OutcomeView({
  plan,
  outcome,
  lead,
  onBack,
  onStartApplication,
  startingApplication,
}: {
  plan: PlanId;
  outcome: Outcome;
  lead: LeadData;
  onBack: () => void;
  onStartApplication: () => void;
  startingApplication: boolean;
}) {
  if (outcome.kind === "stopped") {
    return (
      <>
        <div className="apply-outcome-icon stop">!</div>
        <div className="apply-eyebrow">Let&apos;s Make Sure This Is Right For You</div>
        <h1 className="apply-h1">We Need a Specialist to Take a Look First</h1>
        <p className="apply-sub">{outcome.message}</p>

        <div className="apply-summary-box">
          Good news: nothing is lost. We&apos;ve saved what you&apos;ve entered so far, {lead.firstName || "there"},
          and a specialist can pick up right where you left off.
        </div>

        <div className="apply-cta-row">
          <Link className="apply-cta-primary" href="/self-directed-certainty-session">
            Book a Retirement Certainty Session
          </Link>
          <a className="apply-cta-secondary" href={`tel:${siteConfig.phoneTel}`}>
            Call {siteConfig.phone}
          </a>
        </div>

        <div className="apply-nav-row">
          <button type="button" className="apply-btn-back" onClick={onBack}>
            ← Back to that question
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="apply-outcome-icon go">✓</div>
      <div className="apply-eyebrow">You&apos;re Eligible</div>
      <h1 className="apply-h1">Great News: You&apos;re a Fit for the {PLANS[plan].shortName}</h1>
      <p className="apply-sub">
        We&apos;ve saved your progress, {lead.firstName || "there"}. Continue below to finish your details, review
        your order form, and pay securely.
      </p>

      <div className="apply-summary-box">
        Setup fee: <strong>${PLANS[plan].price.toLocaleString()}</strong> · Annual Tax Academy maintenance:{" "}
        <strong>${ANNUAL_MAINTENANCE}</strong>/year, billed each May.
      </div>

      <div className="apply-cta-row">
        <button type="button" className="apply-cta-primary" onClick={onStartApplication} disabled={startingApplication} style={{ border: "none", cursor: "pointer" }}>
          {startingApplication ? "Starting..." : "Continue to Application →"}
        </button>
        <Link className="apply-cta-secondary" href="/self-directed-certainty-session">
          Talk to a Specialist Instead
        </Link>
      </div>

      <div className="apply-nav-row">
        <button type="button" className="apply-btn-back" onClick={onBack}>
          ← Back to review your answers
        </button>
      </div>
    </>
  );
}
