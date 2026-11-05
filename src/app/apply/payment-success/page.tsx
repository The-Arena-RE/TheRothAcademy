"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";

const STYLES = `
.ps-root {
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
  padding: 40px 20px;
}
@media (max-width: 640px) {
  .ps-root { background-attachment: scroll; }
}
.ps-wordmark { text-align: center; margin-bottom: 28px; }
.ps-card {
  width: 100%;
  max-width: 520px;
  background: #FFFDF9;
  border-radius: 18px;
  padding: 36px 32px;
  box-shadow: 0 30px 60px rgba(0,0,0,0.35);
}
.ps-eyebrow {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #B89958;
  margin-bottom: 10px;
}
.ps-h2 {
  font-family: var(--font-playfair-display), 'Playfair Display', serif;
  font-size: clamp(22px, 3.4vw, 28px);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 14px;
  color: #1E1C19;
}
.ps-sub { font-size: 14px; line-height: 1.6; color: #6b6558; margin-bottom: 24px; }
.ps-spinner {
  width: 28px;
  height: 28px;
  border: 3px solid #ECE5D6;
  border-top-color: #B89958;
  border-radius: 50%;
  animation: ps-spin 0.8s linear infinite;
  margin-bottom: 20px;
}
@keyframes ps-spin { to { transform: rotate(360deg); } }
.ps-btn-primary {
  background: #B89958;
  color: #1E1C19;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  border: none;
  border-radius: 9px;
  padding: 14px 26px;
  text-decoration: none;
  display: inline-block;
}
`;

type Status = "confirming" | "redirecting" | "paid" | "signing_unavailable" | "timeout";

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const token = searchParams.get("token");
  const [status, setStatus] = useState<Status>("confirming");

  useEffect(() => {
    if (!id || !token) {
      setStatus("timeout");
      return;
    }

    let attempts = 0;
    const maxAttempts = 10;
    let cancelled = false;

    async function startSigning() {
      try {
        const res = await fetch(`/api/applications/${id}/send-for-signature`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });
        const data = await res.json().catch(() => ({}));
        if (res.ok && data.url) {
          window.location.href = data.url;
          return;
        }
      } catch {
        // Fall through to the "we'll be in touch" fallback below.
      }
      if (!cancelled) {
        setStatus("signing_unavailable");
        // Best-effort -- send-for-signature's own safety-net email only
        // fires on its success path, so if we got here (its call to n8n
        // failed or timed out on our end, even if DocuSign itself actually
        // went through), the customer otherwise gets no email at all. This
        // guarantees they have a working link back in, regardless of why
        // the automatic redirect didn't happen.
        fetch(`/api/applications/${id}/email-signing-fallback`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        }).catch(() => {});
      }
    }

    async function poll() {
      attempts++;
      try {
        const res = await fetch(`/api/applications/${id}?token=${token}`);
        if (res.ok) {
          const data = await res.json();
          if (data.paymentStatus === "paid") {
            if (cancelled) return;
            // "not_sent" starts a brand new envelope; "sent" means one's
            // already out (e.g. they closed the signing tab before
            // finishing) -- send-for-signature resumes that same envelope
            // instead of refusing. Only "completed" skips straight to the
            // generic "you're all set" copy.
            if (
              (data.plan === "401k" || data.plan === "ira") &&
              (data.docusignStatus === "not_sent" || data.docusignStatus === "sent")
            ) {
              setStatus("redirecting");
              startSigning();
            } else {
              setStatus("paid");
            }
            return;
          }
        }
      } catch {
        // Keep polling; a single failed check isn't worth surfacing.
      }
      if (attempts >= maxAttempts) {
        if (!cancelled) setStatus("timeout");
        return;
      }
      setTimeout(poll, 1500);
    }

    poll();
    return () => {
      cancelled = true;
    };
  }, [id, token]);

  return (
    <div className="ps-root">
      <style>{STYLES}</style>
      <div className="ps-wordmark">
        <Link href="/">
          <Image src="/roth-logo.png" alt="Roth Academy" width={71} height={78} className="h-24 w-auto" priority />
        </Link>
      </div>
      <div className="ps-card">
        {status === "confirming" && (
          <>
            <div className="ps-spinner" />
            <div className="ps-eyebrow">Confirming Payment</div>
            <h2 className="ps-h2">Just a Moment</h2>
            <p className="ps-sub">We&apos;re confirming your payment with Stripe. This usually takes just a few seconds.</p>
          </>
        )}
        {status === "redirecting" && (
          <>
            <div className="ps-spinner" />
            <div className="ps-eyebrow">Payment Confirmed</div>
            <h2 className="ps-h2">Taking You to Your Order Form</h2>
            <p className="ps-sub">Your payment has been received. We&apos;re opening your order form for signature now.</p>
          </>
        )}
        {status === "paid" && (
          <>
            <div className="ps-eyebrow">Payment Confirmed</div>
            <h2 className="ps-h2">You&apos;re All Set</h2>
            <p className="ps-sub">
              Your payment has been received. We&apos;ll be in touch shortly with next steps to get your order form
              signed and your plan established.
            </p>
            <Link href="/" className="ps-btn-primary">
              Return Home
            </Link>
          </>
        )}
        {status === "signing_unavailable" && (
          <>
            <div className="ps-eyebrow">Payment Confirmed</div>
            <h2 className="ps-h2">You&apos;re All Set</h2>
            <p className="ps-sub">
              Your payment has been received. We hit a snag opening your order form automatically, but we&apos;ve
              emailed you a link to finish signing -- just check your inbox. If you don&apos;t see it, call us at{" "}
              {siteConfig.phone}.
            </p>
            <Link href="/" className="ps-btn-primary">
              Return Home
            </Link>
          </>
        )}
        {status === "timeout" && (
          <>
            <div className="ps-eyebrow">Still Confirming</div>
            <h2 className="ps-h2">Almost There</h2>
            <p className="ps-sub">
              Your payment is still being confirmed. This can occasionally take a little longer than expected.
              You don&apos;t need to do anything. If you don&apos;t hear from us within a few minutes, call us at{" "}
              {siteConfig.phone} and we&apos;ll confirm it directly.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={null}>
      <PaymentSuccessContent />
    </Suspense>
  );
}
