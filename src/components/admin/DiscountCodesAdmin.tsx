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
`;

type DiscountCode = {
  code: string;
  amount_cents: number;
  created_at: string;
  expires_at: string;
  redeemed_at: string | null;
  redeemed_by_application_id: string | null;
};

function statusOf(c: DiscountCode): "active" | "expired" | "redeemed" {
  if (c.redeemed_at) return "redeemed";
  if (new Date(c.expires_at).getTime() < Date.now()) return "expired";
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
  const [justCreated, setJustCreated] = useState<{ code: string; link: string; expiresAt: string; emailed: boolean; emailedTo: string } | null>(
    null
  );

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
        body: JSON.stringify({ leadFirstName, leadEmail }),
      });
      if (!res.ok) throw new Error("Could not generate a code");
      const data: { code: string; amountCents: number; expiresAt: string; link: string; emailed: boolean } = await res.json();
      setJustCreated({ code: data.code, link: data.link, expiresAt: data.expiresAt, emailed: data.emailed, emailedTo: leadEmail });
      setCodes((prev) => [
        { code: data.code, amount_cents: data.amountCents, created_at: new Date().toISOString(), expires_at: data.expiresAt, redeemed_at: null, redeemed_by_application_id: null },
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
          Generate a one-time $500-off link for a specific lead. Valid for 24 hours from creation, and good for one
          checkout only.
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

        <button type="button" className="dca-btn" onClick={generateCode} disabled={generating}>
          {generating ? "Generating..." : "Generate $500 Discount Link"}
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
                Code <strong style={{ color: "#f4f1ea" }}>{justCreated.code}</strong> — expires{" "}
                {new Date(justCreated.expiresAt).toLocaleString()}
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
              <th>Created</th>
              <th>Expires</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {codes.map((c) => {
              const status = statusOf(c);
              return (
                <tr key={c.code}>
                  <td>{c.code}</td>
                  <td>{new Date(c.created_at).toLocaleString()}</td>
                  <td>{new Date(c.expires_at).toLocaleString()}</td>
                  <td>
                    <span className={`dca-badge dca-badge-${status}`}>{status}</span>
                  </td>
                </tr>
              );
            })}
            {codes.length === 0 && (
              <tr>
                <td colSpan={4} style={{ color: "#b7b4ad" }}>
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
