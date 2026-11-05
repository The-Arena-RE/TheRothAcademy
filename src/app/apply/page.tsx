import type { Metadata } from "next";
import { ApplyWizard } from "@/components/apply/ApplyWizard";
import { getDiscountCodeAmountCents } from "@/lib/applications-db";

export const metadata: Metadata = {
  title: "Get Started",
  description:
    "Start your Self-Directed Solo 401(k) or Self-Directed IRA with Checkbook LLC setup. A simple, guided signup — no retirement-plan experience needed.",
  robots: { index: false, follow: false },
};

type SearchParams = Promise<{ discount?: string }>;

export default async function ApplyPage({ searchParams }: { searchParams: SearchParams }) {
  const { discount } = await searchParams;

  // Checked up front purely so we can tell the customer right away whether
  // their link is dead or show them the discounted price -- application
  // creation and checkout both re-validate independently regardless, so a
  // stale result here can never actually overcharge anyone.
  let discountAmountCents: number | null = null;
  if (discount) {
    try {
      discountAmountCents = await getDiscountCodeAmountCents(discount);
    } catch {
      // DB unreachable -- fail open on the warning message rather than
      // block the page; the real checks downstream still protect pricing.
    }
  }

  return (
    <ApplyWizard
      discountCode={discount}
      discountCodeInvalid={Boolean(discount) && discountAmountCents === null}
      discountAmountCents={discountAmountCents ?? undefined}
    />
  );
}
