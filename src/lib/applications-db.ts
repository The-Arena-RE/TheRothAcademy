import { getCloudflareContext } from "@opennextjs/cloudflare";
import type { ApplicationSectionId } from "@/data/application-content";
import type { PlanId } from "@/data/apply-content";

export async function getDb() {
  const { env } = await getCloudflareContext({ async: true });
  return env.DB;
}

export async function getAbandonedCheckSecret() {
  const { env } = await getCloudflareContext({ async: true });
  return env.ABANDONED_CHECK_SECRET;
}

export async function getDiscountAdminSecret() {
  const { env } = await getCloudflareContext({ async: true });
  return env.DISCOUNT_ADMIN_SECRET;
}

// Used only to decide whether to show the customer an "this link has
// expired" message as soon as they land on /apply?discount=CODE -- the
// actual pricing/charging logic re-validates independently at application
// creation and checkout, so this never needs to be the source of truth.
export async function isDiscountCodeValid(code: string): Promise<boolean> {
  const db = await getDb();
  const row = await db
    .prepare(
      `SELECT 1 FROM discount_codes
        WHERE code = ?1 AND disabled_at IS NULL AND (unlimited = 1 OR redeemed_at IS NULL) AND expires_at > datetime('now')`
    )
    .bind(code)
    .first();
  return Boolean(row);
}

export type ApplicationRecord = {
  id: string;
  plan: PlanId;
  status: "in_progress" | "complete";
  leadFirstName: string;
  leadLastName: string;
  leadEmail: string;
  leadPhone: string;
  eligibilityAnswers: Record<string, string> | null;
  sections: Record<ApplicationSectionId, Record<string, string>>;
  currentSection: string;
  ssnOnFile: boolean;
  paymentStatus: "unpaid" | "paid" | "failed";
  docusignStatus: "not_sent" | "sent" | "completed";
  discountCents: number;
};

// Shared by the resume-by-link page and the GET /api/applications/[id]
// route, so both read the application the same way and never leak the
// encrypted SSN columns to a response.
export async function getApplicationByToken(id: string, token: string): Promise<ApplicationRecord | null> {
  const db = await getDb();
  const row = await db
    .prepare(
      `SELECT applications.id, plan, status, lead_first_name, lead_last_name, lead_email, lead_phone, eligibility_answers,
              personal_info, spouse_info, business_info, retirement_accounts, setup_details,
              current_section, ssn_encrypted, payment_status, docusign_status,
              discount_codes.amount_cents AS discount_amount_cents
         FROM applications
         LEFT JOIN discount_codes
           ON discount_codes.code = applications.discount_code
          AND discount_codes.disabled_at IS NULL
          AND (discount_codes.unlimited = 1 OR discount_codes.redeemed_at IS NULL)
          AND discount_codes.expires_at > datetime('now')
        WHERE applications.id = ?1 AND resume_token = ?2`
    )
    .bind(id, token)
    .first<Record<string, unknown>>();

  if (!row) return null;

  const parse = (col: unknown) => (col ? JSON.parse(col as string) : {});

  return {
    id: row.id as string,
    plan: row.plan as PlanId,
    status: row.status as "in_progress" | "complete",
    leadFirstName: row.lead_first_name as string,
    leadLastName: row.lead_last_name as string,
    leadEmail: row.lead_email as string,
    leadPhone: row.lead_phone as string,
    eligibilityAnswers: row.eligibility_answers ? JSON.parse(row.eligibility_answers as string) : null,
    sections: {
      personal_info: parse(row.personal_info),
      spouse_info: parse(row.spouse_info),
      business_info: parse(row.business_info),
      retirement_accounts: parse(row.retirement_accounts),
      setup_details: parse(row.setup_details),
    },
    currentSection: (row.current_section as string) ?? "personal_info",
    ssnOnFile: Boolean(row.ssn_encrypted),
    paymentStatus: (row.payment_status as "unpaid" | "paid" | "failed") ?? "unpaid",
    docusignStatus: (row.docusign_status as "not_sent" | "sent" | "completed") ?? "not_sent",
    discountCents: (row.discount_amount_cents as number) ?? 0,
  };
}

export async function getSsnEncryptionKey() {
  const { env } = await getCloudflareContext({ async: true });
  return env.SSN_ENCRYPTION_KEY;
}

// AES-256-GCM, keyed from the SSN_ENCRYPTION_KEY Worker secret. That secret
// must be a long random string (e.g. `openssl rand -base64 48`), not a
// human-chosen passphrase — PBKDF2 here just turns it into a proper key
// shape, it doesn't make a weak secret strong.
async function deriveKey(secret: string): Promise<CryptoKey> {
  const keyMaterial = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), "PBKDF2", false, [
    "deriveKey",
  ]);
  return crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: new TextEncoder().encode("roth-academy-ssn-v1"),
      iterations: 100_000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
}

function toBase64(bytes: ArrayBuffer | Uint8Array) {
  const arr = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  let binary = "";
  for (const b of arr) binary += String.fromCharCode(b);
  return btoa(binary);
}

function fromBase64(b64: string): Uint8Array<ArrayBuffer> {
  const binary = atob(b64);
  const bytes = new Uint8Array(new ArrayBuffer(binary.length));
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

export async function encryptSSN(ssn: string, secret: string): Promise<{ ciphertext: string; iv: string }> {
  const key = await deriveKey(secret);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ciphertext = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, new TextEncoder().encode(ssn));
  return { ciphertext: toBase64(ciphertext), iv: toBase64(iv) };
}

// Only ever call this server-side, at the one moment a signed document is
// actually being generated — never to display or return the SSN anywhere.
export async function decryptSSN(ciphertext: string, iv: string, secret: string): Promise<string> {
  const key = await deriveKey(secret);
  const plaintext = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv: fromBase64(iv) },
    key,
    fromBase64(ciphertext)
  );
  return new TextDecoder().decode(plaintext);
}
