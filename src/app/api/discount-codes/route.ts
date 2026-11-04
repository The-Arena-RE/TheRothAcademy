import { NextResponse } from "next/server";
import { getDb, getDiscountAdminSecret } from "@/lib/applications-db";

const CODE_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no 0/O/1/I -- read aloud/typed from a screen
const DEFAULT_AMOUNT_CENTS = 50000; // $500
const EXPIRY_HOURS = 24;

function generateCode() {
  let code = "";
  const bytes = crypto.getRandomValues(new Uint8Array(8));
  for (const byte of bytes) code += CODE_CHARS[byte % CODE_CHARS.length];
  return code;
}

async function requireAdmin(request: Request) {
  const secret = await getDiscountAdminSecret();
  const authHeader = request.headers.get("authorization");
  return Boolean(secret) && authHeader === `Bearer ${secret}`;
}

export async function POST(request: Request) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let db;
  try {
    db = await getDb();
  } catch {
    return NextResponse.json({ error: "Database is not configured yet" }, { status: 503 });
  }

  const code = generateCode();
  const expiresAt = new Date(Date.now() + EXPIRY_HOURS * 60 * 60 * 1000).toISOString();

  await db
    .prepare(`INSERT INTO discount_codes (code, amount_cents, expires_at) VALUES (?1, ?2, ?3)`)
    .bind(code, DEFAULT_AMOUNT_CENTS, expiresAt)
    .run();

  return NextResponse.json({ code, amountCents: DEFAULT_AMOUNT_CENTS, expiresAt });
}

export async function GET(request: Request) {
  if (!(await requireAdmin(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let db;
  try {
    db = await getDb();
  } catch {
    return NextResponse.json({ error: "Database is not configured yet" }, { status: 503 });
  }

  const { results } = await db
    .prepare(
      `SELECT code, amount_cents, created_at, expires_at, redeemed_at, redeemed_by_application_id
         FROM discount_codes ORDER BY created_at DESC LIMIT 50`
    )
    .all();

  return NextResponse.json({ codes: results });
}
