"use client";

import { ArrowUpRight } from "lucide-react";
import { useContactModal } from "@/components/contact/ContactModalProvider";

function ModalCta({ label, topic }: { label: string; topic: string }) {
  const { open } = useContactModal();

  return (
    <button
      type="button"
      onClick={() => open(topic)}
      className="mt-8 inline-flex items-center gap-2 rounded-[var(--radius-brand-control)] bg-r-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light"
    >
      {label}
      <ArrowUpRight size={16} aria-hidden />
    </button>
  );
}

export function InviteSpecialistCta({ label, topic }: { label: string; topic: string }) {
  return <ModalCta label={label} topic={topic} />;
}

export function PartnerCta({ label, topic }: { label: string; topic: string }) {
  return <ModalCta label={label} topic={topic} />;
}
