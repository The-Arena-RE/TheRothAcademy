"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { mainNav, planDestinations, taxAcademy } from "@/data/site-config";

function subscribeNoop() {
  return () => {};
}

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // The header applies backdrop-filter once the page scrolls, which makes it
  // the containing block for any `fixed` descendant — pinning this panel to
  // the header's own box instead of the viewport. Portal it out to escape
  // that, once mounted (document.body isn't available during SSR).
  const mounted = useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false,
  );

  useEffect(() => {
    if (!open) return;
    closeButtonRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function close() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  const overlay = (
    <>
      {/* Backdrop */}
      <div
        aria-hidden
        onClick={close}
        className={`fixed inset-0 z-40 bg-black/70 transition-opacity duration-300 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Slide-in panel */}
      <div
        className={`fixed inset-y-0 right-0 z-50 flex w-[85%] max-w-sm flex-col overflow-y-auto border-l border-r-line bg-r-bg transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!open}
      >
        <div className="flex items-start justify-between p-6">
          <div>
            <p className="text-lg font-heading tracking-wide text-r-gold">Roth Academy</p>
            <p className="mt-1 text-xs text-r-muted font-body normal-case">Choose your next move.</p>
          </div>
          <button ref={closeButtonRef} className="text-r-white" aria-label="Close menu" type="button" onClick={close}>
            <X size={22} aria-hidden />
          </button>
        </div>

        <nav className="flex-1 border-t border-r-line px-6" aria-label="Primary">
          {mainNav.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className="group flex items-center justify-between gap-4 border-b border-r-line px-0 py-[18px]"
            >
              <span className="flex items-center gap-4">
                <span className="text-xs text-r-gold">{String(index + 1).padStart(2, "0")}</span>
                <span className="font-heading text-[30px] uppercase text-r-white">{item.label}</span>
              </span>
              <ArrowUpRight
                size={18}
                className="shrink-0 text-r-gold transition-transform group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          ))}
        </nav>

        <div className="p-6">
          <Link
            href={planDestinations.openPlan}
            onClick={close}
            className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-r-gold px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light"
          >
            Open a Plan
            <ArrowUpRight size={16} aria-hidden />
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={taxAcademy.loginUrl}
              onClick={close}
              className="font-body text-sm font-medium uppercase tracking-wide text-r-muted transition-colors hover:text-r-gold"
            >
              Client Login
            </a>
            <Link
              href="/contact"
              onClick={close}
              className="font-body text-sm font-medium normal-case text-r-white/90 transition-colors hover:text-r-gold"
            >
              Get Help
            </Link>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        className="text-r-white"
        aria-label="Open menu"
        aria-expanded={open}
        type="button"
        onClick={() => setOpen(true)}
      >
        <Menu size={26} aria-hidden />
      </button>

      {mounted && createPortal(overlay, document.body)}
    </div>
  );
}
