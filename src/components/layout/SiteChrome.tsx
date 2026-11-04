"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Standalone ad-landing pages render without the site header/footer/nav.
const STANDALONE_PATHS = [
  "/self-directed-certainty-session",
  "/certainty-session",
  "/apply",
  "/apply/resume",
  "/apply/payment-success",
  "/apply/payment-cancelled",
  "/apply/signing-complete",
  "/admin/discount-codes",
];

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (STANDALONE_PATHS.includes(pathname)) {
    return <div id="main-content">{children}</div>;
  }

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
