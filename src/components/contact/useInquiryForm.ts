"use client";

import { useState } from "react";

export type InquiryStatus = "idle" | "submitting" | "success" | "error" | "missing-contact";

export function useInquiryForm(formType: string) {
  const [status, setStatus] = useState<InquiryStatus>("idle");

  async function submit(payload: Record<string, unknown>) {
    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType, ...payload }),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      return true;
    } catch {
      setStatus("error");
      return false;
    }
  }

  return { status, setStatus, submit };
}
