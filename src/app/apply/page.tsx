import type { Metadata } from "next";
import { ApplyWizard } from "@/components/apply/ApplyWizard";

export const metadata: Metadata = {
  title: "Get Started",
  description:
    "Start your Self-Directed Solo 401(k) or Self-Directed IRA with Checkbook LLC setup. A simple, guided signup — no retirement-plan experience needed.",
  robots: { index: false, follow: false },
};

type SearchParams = Promise<{ discount?: string }>;

export default async function ApplyPage({ searchParams }: { searchParams: SearchParams }) {
  const { discount } = await searchParams;
  return <ApplyWizard discountCode={discount} />;
}
