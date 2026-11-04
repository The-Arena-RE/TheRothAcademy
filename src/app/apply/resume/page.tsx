import type { Metadata } from "next";
import { getApplicationByToken } from "@/lib/applications-db";
import { getApplicationSections } from "@/data/application-content";
import { ApplyWizard } from "@/components/apply/ApplyWizard";
import { ResumeError } from "@/components/apply/ResumeError";

export const metadata: Metadata = {
  title: "Resume Your Application",
  robots: { index: false, follow: false },
};

type SearchParams = Promise<{ id?: string; token?: string }>;

export default async function ResumeApplicationPage({ searchParams }: { searchParams: SearchParams }) {
  const { id, token } = await searchParams;

  if (!id || !token) {
    return (
      <ResumeError message="This link is missing some information and can't be used to resume an application. Please use the exact link we gave you, or contact us for help." />
    );
  }

  let application;
  try {
    application = await getApplicationByToken(id, token);
  } catch {
    return <ResumeError message="We couldn't reach your application right now. Please try again in a moment." />;
  }

  if (!application) {
    return (
      <ResumeError message="This link is invalid or has expired. Please contact us and we'll help you pick up where you left off." />
    );
  }

  const sections = getApplicationSections(application.plan);
  const sectionIndex = sections.findIndex((s) => s.id === application.currentSection);

  return (
    <ApplyWizard
      resume={{
        applicationId: application.id,
        resumeToken: token,
        plan: application.plan,
        leadFirstName: application.leadFirstName,
        initialSectionData: application.sections,
        initialSectionIndex: sectionIndex === -1 ? 0 : sectionIndex,
        ssnOnFile: application.ssnOnFile,
        alreadyComplete: application.status === "complete",
        paymentStatus: application.paymentStatus,
        docusignStatus: application.docusignStatus,
        discountCents: application.discountCents,
      }}
    />
  );
}
