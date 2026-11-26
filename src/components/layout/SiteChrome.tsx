"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EditorialFooter } from "@/components/editorial/EditorialFooter";
import { newsreader, dmSans } from "@/lib/editorial-fonts";

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

// Pages rebuilt with the editorial design system get the matching
// (dark/gold, Newsreader + DM Sans) footer instead of the site default.
const EDITORIAL_FOOTER_SCOPE: Record<string, string> = {
  "/": "homepage-page",
  "/services/self-directed-401k": "service-401k-page",
};

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (STANDALONE_PATHS.includes(pathname)) {
    return <div id="main-content">{children}</div>;
  }

  const editorialScope = EDITORIAL_FOOTER_SCOPE[pathname];

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      {editorialScope ? (
        <div className={`${newsreader.variable} ${dmSans.variable} ${editorialScope}`}>
          <EditorialFooter />
        </div>
      ) : (
        <Footer />
      )}
    </>
  );
}
