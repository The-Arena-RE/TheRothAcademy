"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "roth_discount_admin_secret";

const STYLES = `
.dca-root {
  min-height: 100vh;
  background: #090a0b;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 20px;
  font-family: var(--font-inter), 'Inter', sans-serif;
}
.dca-card { width: 100%; max-width: 720px; background: #15171a; border: 1px solid rgba(244,241,234,0.14); border-radius: 12px; padding: 32px; }
.dca-h1 { font-size: 22px; font-weight: 700; color: #f4f1ea; margin-bottom: 6px; }
.dca-sub { font-size: 14px; color: #b7b4ad; margin-bottom: 24px; }
.dca-input { width: 100%; padding: 12px 14px; border: 1px solid rgba(244,241,234,0.14); border-radius: 8px; font-size: 14px; margin-bottom: 12px; box-sizing: border-box; background: #1b1d20; color: #f4f1ea; }
.dca-input::placeholder { color: #71706c; }
.dca-input:focus { outline: none; border-color: #c6a466; }
.dca-btn { background: #c6a466; color: #090a0b; border: none; border-radius: 8px; padding: 12px 20px; font-size: 14px; font-weight: 600; cursor: pointer; }
.dca-btn:disabled { opacity: 0.6; cursor: default; }
.dca-error { color: #e4877b; font-size: 13px; margin-bottom: 12px; }
.dca-result { margin-top: 24px; padding: 20px; border: 1px solid rgba(244,241,234,0.14); border-radius: 10px; background: #1b1d20; display: flex; gap: 20px; align-items: flex-start; flex-wrap: wrap; }
.dca-link-row { display: flex; gap: 8px; align-items: center; margin-bottom: 8px; }
.dca-link-box { flex: 1; min-width: 220px; font-family: monospace; font-size: 13px; padding: 8px 10px; background: #090a0b; color: #f4f1ea; border: 1px solid rgba(244,241,234,0.14); border-radius: 6px; word-break: break-all; }
.dca-copy-btn { background: #c6a466; color: #090a0b; border: none; border-radius: 6px; padding: 8px 12px; font-size: 12px; font-weight: 600; cursor: pointer; }
.dca-table { width: 100%; border-collapse: collapse; margin-top: 28px; font-size: 13px; color: #f4f1ea; }
.dca-table th { color: #b7b4ad; font-weight: 600; }
.dca-table th, .dca-table td { text-align: left; padding: 8px 10px; border-bottom: 1px solid rgba(244,241,234,0.14); }
.dca-badge { display: inline-block; padding: 2px 8px; border-radius: 999px; font-size: 11px; font-weight: 600; }
.dca-badge-active { background: rgba(97, 191, 130, 0.16); color: #6fd398; }
.dca-badge-expired { background: rgba(183, 180, 173, 0.16); color: #b7b4ad; }
.dca-badge-redeemed { background: rgba(140, 170, 230, 0.16); color: #9ab8ef; }
.dca-badge-disabled { background: rgba(228, 135, 123, 0.16); color: #e4877b; }
.dca-row-toggle { display: flex; align-items: center; gap: 8px; margin-bottom: 12px; }
.dca-small-btn { background: transparent; border: 1px solid rgba(244,241,234,0.24); color: #f4f1ea; border-radius: 6px; padding: 4px 10px; font-size: 12px; cursor: pointer; }
.dca-small-btn:hover { border-color: #c6a466; }
`;

type DiscountCode = {
  code: string;
  amount_cents: number;
  created_at: string;
  expires_at: string;
  redeemed_at: string | null;
  redeemed_by_application_id: string | null;
  unlimited: number;
  disabled_at: string | null;
};

function statusOf(c: DiscountCode): "active" | "expired" | "redeemed" | "disabled" {
  if (c.disabled_at) return "disabled";
  if (c.redeemed_at) return "redeemed";
  if (!c.unlimited && new Date(c.expires_at).getTime() < Date.now()) return "expired";
  return "active";
}

export function DiscountCodesAdmin() {
  const [secret, setSecret] = useState(() =>
    typeof window === "undefined" ? "" : (sessionStorage.getItem(STORAGE_KEY) ?? "")
  );
  const [authed, setAuthed] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [checking, setChecking] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [codes, setCodes] = useState<DiscountCode[]>([]);
  const [leadFirstName, setLeadFirstName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [amountDollars, setAmountDollars] = useState("500");
  const [unlimited, setUnlimited] = useState(false);
  const [togglingCode, setTogglingCode] = useState<string | null>(null);
  const [justCreated, setJustCreated] = useState<{
    code: string;
    link: string;
    expiresAt: string;
    unlimited: boolean;
    emailed: boolean;
    emailedTo: string;
  } | null>(null);

  async function tryAuth(candidateSecret: string) {
    setError(null);
    const res = await fetch("/api/discount-codes", { headers: { Authorization: `Bearer ${candidateSecret}` } });
    if (!res.ok) {
      setAuthed(false);
      setError("Incorrect password.");
      return false;
    }
    const data = await res.json().catch(() => ({ codes: [] }));
    setCodes(data.codes ?? []);
    setAuthed(true);
    sessionStorage.setItem(STORAGE_KEY, candidateSecret);
    return true;
  }

  useEffect(() => {
    if (secret) {
      // One-time check of a password already saved in this tab's session --
      // not a reactive sync, so the setState calls inside tryAuth on mount
      // are intentional here.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      tryAuth(secret).finally(() => setChecking(false));
    } else {
      setChecking(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function generateCode() {
    setGenerating(true);
    setError(null);
    try {
      const res = await fetch("/api/discount-codes", {
        method: "POST",
        headers: { Authorization: `Bearer ${secret}`, "Content-Type": "application/json" },
        body: JSON.stringify({ leadFirstName, leadEmail, amountDollars: Number(amountDollars) || undefined, unlimited }),
      });
      if (!res.ok) throw new Error("Could not generate a code");
      const data: { code: string; amountCents: number; expiresAt: string; unlimited: boolean; link: string; emailed: boolean } =
        await res.json();
      setJustCreated({
        code: data.code,
        link: data.link,
        expiresAt: data.expiresAt,
        unlimited: data.unlimited,
        emailed: data.emailed,
        emailedTo: leadEmail,
      });
      setCodes((prev) => [
        {
          code: data.code,
          amount_cents: data.amountCents,
          created_at: new Date().toISOString(),
          expires_at: data.expiresAt,
          redeemed_at: null,
          redeemed_by_application_id: null,
          unlimited: data.unlimited ? 1 : 0,
          disabled_at: null,
        },
        ...prev,
      ]);
      setLeadFirstName("");
      setLeadEmail("");
    } catch {
      setError("Could not generate a code. Please try again.");
    } finally {
      setGenerating(false);
    }
  }

  async function toggleDisabled(code: string, disabled: boolean) {
    setTogglingCode(code);
    try {
      const res = await fetch("/api/discount-codes", {
        method: "PATCH",
        headers: { Authorization: `Bearer ${secret}`, "Content-Type": "application/json" },
        body: JSON.stringify({ code, disabled }),
      });
      if (!res.ok) throw new Error("Could not update code");
      setCodes((prev) =>
        prev.map((c) => (c.code === code ? { ...c, disabled_at: disabled ? new Date().toISOString() : null } : c))
      );
    } catch {
      setError("Could not update that code. Please try again.");
    } finally {
      setTogglingCode(null);
    }
  }

  async function deleteCode(code: string) {
    if (!window.confirm(`Permanently delete code ${code}? This can't be undone.`)) return;
    setTogglingCode(code);
    try {
      const res = await fetch("/api/discount-codes", {
        method: "DELETE",
        headers: { Authorization: `Bearer ${secret}`, "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      if (!res.ok) throw new Error("Could not delete code");
      setCodes((prev) => prev.filter((c) => c.code !== code));
    } catch {
      setError("Could not delete that code. Please try again.");
    } finally {
      setTogglingCode(null);
    }
  }

  function copyLink(link: string) {
    navigator.clipboard?.writeText(link).catch(() => {});
  }

  if (checking) return null;

  if (!authed) {
    return (
      <div className="dca-root">
        <style>{STYLES}</style>
        <div className="dca-card">
          <div className="dca-h1">Discount Codes</div>
          <div className="dca-sub">Staff access only.</div>
          {error && <div className="dca-error">{error}</div>}
          <input
            type="password"
            className="dca-input"
            placeholder="Password"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && tryAuth(secret)}
          />
          <button type="button" className="dca-btn" onClick={() => tryAuth(secret)}>
            Unlock
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="dca-root">
      <style>{STYLES}</style>
      <div className="dca-card">
        <div className="dca-h1">Discount Codes</div>
        <div className="dca-sub">
          {unlimited
            ? "Generate a reusable discount link anyone can use, with no expiry -- take it down manually whenever you're done with it."
            : "Generate a one-time discount link for a specific lead. Valid for 24 hours from creation, and good for one checkout only."}
        </div>

        {error && <div className="dca-error">{error}</div>}

        <input
          type="text"
          className="dca-input"
          placeholder="Lead's first name (optional)"
          value={leadFirstName}
          onChange={(e) => setLeadFirstName(e.target.value)}
        />
        <input
          type="email"
          className="dca-input"
          placeholder="Lead's email (optional -- fill in to email them the link automatically)"
          value={leadEmail}
          onChange={(e) => setLeadEmail(e.target.value)}
        />
        <input
          type="number"
          min="1"
          step="1"
          className="dca-input"
          placeholder="Discount amount in dollars (default $500)"
          value={amountDollars}
          onChange={(e) => setAmountDollars(e.target.value)}
        />
        <label className="dca-row-toggle">
          <input type="checkbox" checked={unlimited} onChange={(e) => setUnlimited(e.target.checked)} />
          <span style={{ fontSize: 13, color: "#b7b4ad" }}>
            Unlimited (no expiry, any number of people can use it -- take down manually)
          </span>
        </label>

        <button type="button" className="dca-btn" onClick={generateCode} disabled={generating}>
          {generating ? "Generating..." : unlimited ? "Generate Unlimited Discount Link" : "Generate Discount Link"}
        </button>

        {justCreated && (
          <div className="dca-result">
            <div style={{ background: "#fff", padding: 10, borderRadius: 8, lineHeight: 0 }}>
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(justCreated.link)}`}
                alt="QR code for discount link"
                width={180}
                height={180}
              />
            </div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <div className="dca-link-row">
                <div className="dca-link-box">{justCreated.link}</div>
                <button type="button" className="dca-copy-btn" onClick={() => copyLink(justCreated.link)}>
                  Copy
                </button>
              </div>
              <div style={{ fontSize: 13, color: "#b7b4ad" }}>
                Code <strong style={{ color: "#f4f1ea" }}>{justCreated.code}</strong>
                {justCreated.unlimited ? " — no expiry" : ` — expires ${new Date(justCreated.expiresAt).toLocaleString()}`}
              </div>
              {justCreated.emailedTo && (
                <div style={{ fontSize: 13, marginTop: 6, color: justCreated.emailed ? "#6fd398" : "#e4877b" }}>
                  {justCreated.emailed
                    ? `Emailed to ${justCreated.emailedTo}`
                    : `Could not send email to ${justCreated.emailedTo} -- copy the link above and send it yourself.`}
                </div>
              )}
            </div>
          </div>
        )}

        <table className="dca-table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Amount</th>
              <th>Created</th>
              <th>Expires</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {codes.map((c) => {
              const status = statusOf(c);
              const canToggle = status === "active" || status === "disabled";
              return (
                <tr key={c.code}>
                  <td>
                    {c.code}
                    {c.unlimited ? " ♾️" : ""}
                  </td>
                  <td>${(c.amount_cents / 100).toLocaleString()}</td>
                  <td>{new Date(c.created_at).toLocaleString()}</td>
                  <td>{c.unlimited ? "—" : new Date(c.expires_at).toLocaleString()}</td>
                  <td>
                    <span className={`dca-badge dca-badge-${status}`}>{status}</span>
                  </td>
                  <td style={{ display: "flex", gap: 6 }}>
                    {canToggle && (
                      <button
                        type="button"
                        className="dca-small-btn"
                        disabled={togglingCode === c.code}
                        onClick={() => toggleDisabled(c.code, status === "active")}
                      >
                        {status === "active" ? "Take down" : "Reactivate"}
                      </button>
                    )}
                    <button
                      type="button"
                      className="dca-small-btn"
                      disabled={togglingCode === c.code}
                      onClick={() => deleteCode(c.code)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
            {codes.length === 0 && (
              <tr>
                <td colSpan={6} style={{ color: "#b7b4ad" }}>
                  No codes generated yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
