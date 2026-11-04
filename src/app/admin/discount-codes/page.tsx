import type { Metadata } from "next";
import { DiscountCodesAdmin } from "@/components/admin/DiscountCodesAdmin";

export const metadata: Metadata = {
  title: "Discount Codes",
  robots: { index: false, follow: false },
};

export default function DiscountCodesAdminPage() {
  return <DiscountCodesAdmin />;
}
