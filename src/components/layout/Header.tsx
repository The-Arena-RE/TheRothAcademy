"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { clsx } from "clsx";
import { mainNav, planDestinations, taxAcademy } from "@/data/site-config";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 32);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled ? "border-b border-r-line bg-r-bg/95 backdrop-blur" : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-brand flex h-24 items-center justify-between">
        <Link href="/" className="shrink-0">
          <Image
            src="/roth-logo.png"
            alt="Roth Academy"
            width={71}
            height={78}
            className="h-[78px] w-[71px] object-contain"
            priority
          />
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          <nav className="flex items-center gap-8">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-body text-[12px] font-medium uppercase tracking-wide text-r-white/90 transition-colors hover:text-r-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <a
              href={taxAcademy.loginUrl}
              className="font-body text-[12px] font-medium uppercase tracking-wide text-r-muted transition-colors hover:text-r-white"
            >
              Client Login
            </a>
            <span aria-hidden className="h-4 w-px bg-r-line" />
            <Link
              href={planDestinations.openPlan}
              className="inline-flex items-center gap-2 rounded-sm bg-r-gold px-5 py-2.5 font-body text-[12px] font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light"
            >
              Open a Plan
              <ArrowUpRight size={16} aria-hidden />
            </Link>
          </div>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
