"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, X } from "lucide-react";
import { useContactModal } from "@/components/contact/ContactModalProvider";
import { getPageLabel } from "@/lib/page-label";

const INTEREST_OPTIONS = [
  "I am exploring my options",
  "Self-Directed 401(k)",
  "Self-Directed IRA",
  "Advanced services",
  "Events & workshops",
  "Partnership opportunities",
];

const inputClasses =
  "mt-2 block w-full rounded-sm border border-r-line bg-r-bg px-4 py-3 text-sm text-r-white font-body normal-case placeholder:text-r-muted/50 transition-colors focus:border-r-gold focus:outline-none";
const labelClasses = "text-xs font-semibold uppercase tracking-[0.15em] text-r-muted";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactModal() {
  const { isOpen, topic, detail, close } = useContactModal();
  const pathname = usePathname();
  const [status, setStatus] = useState<Status>("idle");
  const nameInputRef = useRef<HTMLInputElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  const defaultInterest = topic && INTEREST_OPTIONS.includes(topic) ? topic : INTEREST_OPTIONS[0];

  useEffect(() => {
    if (!isOpen) return;

    lastFocusedRef.current = document.activeElement as HTMLElement | null;
    nameInputRef.current?.focus();
    document.body.style.overflow = "hidden";

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  useEffect(() => {
    if (isOpen) return;
    lastFocusedRef.current?.focus();
    const resetTimer = setTimeout(() => setStatus("idle"), 300);
    return () => clearTimeout(resetTimer);
  }, [isOpen]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("first_name"),
          email: data.get("email"),
          phone: data.get("phone"),
          location: data.get("location"),
          interest: data.get("interest"),
          message: data.get("message"),
          otherParties: data.get("otherparties"),
          deadline: data.get("deadline"),
          page: getPageLabel(pathname),
        }),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto px-4 py-10 sm:items-center">
      {/* Backdrop */}
      <div aria-hidden onClick={close} className="fixed inset-0 bg-black/75 backdrop-blur-sm" />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-heading"
        className="relative w-full max-w-2xl rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel p-6 shadow-2xl shadow-black/60 sm:p-8"
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-5 top-5 text-r-muted transition-colors hover:text-r-gold"
        >
          <X size={20} aria-hidden />
        </button>

        {status === "success" ? (
          <div className="py-6">
            <h2 id="contact-modal-heading" className="max-w-xs text-3xl text-r-gold">
              Request Received.
            </h2>
            <p className="mt-4 text-sm text-r-muted font-body normal-case">
              Thank you, the team will review your request and follow up shortly.
            </p>
            <button
              type="button"
              onClick={close}
              className="mt-8 inline-flex items-center gap-2 rounded-[var(--radius-brand-control)] bg-r-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <h2 id="contact-modal-heading" className="max-w-xs text-3xl text-r-white">
              Tell Us What You Want To <span className="text-r-gold">Accomplish.</span>
            </h2>
            <p className="mt-3 text-sm text-r-muted font-body normal-case">
              Share the basics. The team reviews every request before reaching out.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <label className="block" htmlFor="contact-name">
                <span className={labelClasses}>Your name</span>
                <input
                  ref={nameInputRef}
                  id="contact-name"
                  name="first_name"
                  type="text"
                  required
                  autoComplete="name"
                  className={inputClasses}
                />
              </label>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block" htmlFor="contact-email">
                  <span className={labelClasses}>Email</span>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={inputClasses}
                  />
                </label>
                <label className="block" htmlFor="contact-phone">
                  <span className={labelClasses}>
                    Phone <span className="normal-case text-r-muted/60">(optional)</span>
                  </span>
                  <input id="contact-phone" name="phone" type="tel" autoComplete="tel" className={inputClasses} />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block" htmlFor="contact-location">
                  <span className={labelClasses}>State / Country</span>
                  <input
                    id="contact-location"
                    name="location"
                    type="text"
                    required
                    placeholder="e.g. Texas, United States"
                    className={inputClasses}
                  />
                </label>
                <label className="block" htmlFor="contact-interest">
                  <span className={labelClasses}>Your Starting Point</span>
                  <select
                    id="contact-interest"
                    name="interest"
                    defaultValue={defaultInterest}
                    className={`${inputClasses} appearance-none`}
                  >
                    {INTEREST_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="block" htmlFor="contact-message">
                <span className={labelClasses}>What do you want to accomplish?</span>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={3}
                  defaultValue={detail}
                  className={`${inputClasses} resize-none`}
                />
              </label>

              <label className="block" htmlFor="contact-other-parties">
                <span className={labelClasses}>
                  Other People Or Businesses Involved <span className="normal-case text-r-muted/60">(optional)</span>
                </span>
                <textarea
                  id="contact-other-parties"
                  name="otherparties"
                  rows={2}
                  placeholder="Names for the initial review"
                  className={`${inputClasses} resize-none`}
                />
              </label>

              <label className="block" htmlFor="contact-deadline">
                <span className={labelClasses}>
                  Relevant Deadline <span className="normal-case text-r-muted/60">(optional)</span>
                </span>
                <input
                  id="contact-deadline"
                  name="deadline"
                  type="date"
                  className={`${inputClasses} [color-scheme:dark]`}
                />
              </label>

              {status === "error" && (
                <p className="text-sm text-r-gold-light" role="alert">
                  Something went wrong sending your request. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius-brand-control)] bg-r-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light disabled:opacity-60"
              >
                {status === "submitting" ? "Sending..." : "Send My Request"}
                {status !== "submitting" && <ArrowUpRight size={16} aria-hidden />}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
