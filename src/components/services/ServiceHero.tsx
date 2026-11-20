"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { clsx } from "clsx";
import { useContactModal } from "@/components/contact/ContactModalProvider";

// href navigates normally; omit it to open the shared contact modal instead.
type Cta = { label: string; href?: string };

type Summary = {
  tag: string;
  title: string;
  subtitle: string;
  checklist: string[];
  note: string;
};

export function ServiceHero({
  eyebrow,
  title,
  goldLine,
  description,
  whoItsFor,
  stats,
  contactTopic,
  primaryCta,
  secondaryCta,
  summary,
  videoSrc,
  imageSrc,
  titleScale = "default",
}: {
  eyebrow: string;
  title: string[];
  goldLine?: number;
  description: string;
  whoItsFor?: string;
  stats?: string[];
  contactTopic?: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  summary?: Summary;
  videoSrc?: string;
  imageSrc?: string;
  // "compact" suits long, sentence-style headlines (e.g. learn-module
  // titles) that would otherwise wrap across too many lines at the
  // default display size.
  titleScale?: "default" | "compact";
}) {
  const { open } = useContactModal();

  return (
    <section className="relative overflow-hidden border-b border-r-line bg-r-stripe-2">
      {videoSrc && (
        <>
          <video
            aria-hidden
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-r-bg/90" />
        </>
      )}

      {!videoSrc && imageSrc && (
        <>
          <Image
            aria-hidden
            src={imageSrc}
            alt=""
            fill
            priority
            sizes="100vw"
            className="pointer-events-none object-cover"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, rgba(9,10,11,0.95) 0%, rgba(9,10,11,0.85) 30%, rgba(9,10,11,0.5) 55%, rgba(9,10,11,0.3) 100%), linear-gradient(0deg, rgba(9,10,11,0.85) 0%, rgba(9,10,11,0.1) 30%, rgba(9,10,11,0.3) 100%)",
            }}
          />
        </>
      )}

      {/* Abstract gold arc — echoes the homepage hero at a quieter scale */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[20%] top-0 h-full w-[60%] opacity-25 mix-blend-screen md:-right-[10%] md:w-[45%]"
        style={{
          background:
            "conic-gradient(from 200deg at 50% 50%, transparent 0deg, var(--color-r-gold-dark) 60deg, var(--color-r-gold) 110deg, var(--color-r-gold-light) 140deg, transparent 200deg, transparent 360deg)",
          filter: "blur(50px)",
        }}
      />

      <div className="container-brand relative pb-16 pt-40 md:pb-20 md:pt-48">
        <div className={clsx(summary && "grid gap-14 md:grid-cols-[1.15fr_1fr] md:items-stretch md:gap-12")}>
          <div className="min-w-0">
            <p
              className="flex items-center gap-3 font-semibold uppercase text-r-gold"
              style={{ fontSize: 11, letterSpacing: "0.14em" }}
            >
              <span className="h-px w-8 bg-r-gold" aria-hidden />
              {eyebrow}
            </p>

            <h1
              className={clsx(!summary && "max-w-3xl")}
              style={{
                marginTop: 35,
                fontSize: summary
                  ? "clamp(48px, 6vw, 84px)"
                  : titleScale === "compact"
                    ? "clamp(40px, 6.5vw, 92px)"
                    : "clamp(76px, 10.8vw, 146px)",
                lineHeight: 0.95,
                letterSpacing: "-0.025em",
              }}
            >
              {title.map((line, index) => (
                <span key={line} className={clsx("block", index === goldLine && "text-r-gold")}>
                  {line}
                </span>
              ))}
            </h1>

            <p className="mt-6 max-w-lg text-base text-r-muted font-body normal-case">{description}</p>
            {whoItsFor && (
              <p className="mt-3 max-w-lg text-sm text-r-muted/70 font-body normal-case">{whoItsFor}</p>
            )}

            {stats && stats.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                {stats.map((stat) => (
                  <span key={stat} className="text-xs uppercase tracking-[0.15em] text-r-muted">
                    {stat}
                  </span>
                ))}
              </div>
            )}

            {(primaryCta || secondaryCta) && (
              <div className="mt-10 flex flex-wrap items-center gap-4">
                {primaryCta && (primaryCta.href ? (
                  <Link
                    href={primaryCta.href}
                    className="inline-flex items-center gap-2 rounded-[var(--radius-brand-control)] bg-r-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light"
                  >
                    {primaryCta.label}
                    <ArrowUpRight size={18} aria-hidden />
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => open(contactTopic)}
                    className="inline-flex items-center gap-2 rounded-[var(--radius-brand-control)] bg-r-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-r-bg transition-colors hover:bg-r-gold-light"
                  >
                    {primaryCta.label}
                    <ArrowUpRight size={18} aria-hidden />
                  </button>
                ))}
                {secondaryCta && (secondaryCta.href ? (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex items-center gap-2 rounded-[var(--radius-brand-control)] border border-r-line/60 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-r-white transition-colors hover:border-r-gold hover:text-r-gold"
                  >
                    {secondaryCta.label}
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => open(contactTopic)}
                    className="inline-flex items-center gap-2 rounded-[var(--radius-brand-control)] border border-r-line/60 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-r-white transition-colors hover:border-r-gold hover:text-r-gold"
                  >
                    {secondaryCta.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {summary && (
            <aside className="relative flex h-full flex-col overflow-hidden rounded-[var(--radius-brand-card)] border border-r-gold/30 bg-gradient-to-b from-r-panel to-r-panel/70 p-8 shadow-2xl shadow-black/50 backdrop-blur md:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-r-gold/10 blur-3xl"
              />
              <span aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-r-gold-dark via-r-gold to-r-gold-light" />
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-10 -right-4 select-none font-heading text-[10rem] leading-none text-r-white/[0.04]"
              >
                {summary.title}
              </span>

              <div className="relative border-b border-r-line pb-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-r-gold">{summary.tag}</p>
                <p className="mt-4 text-5xl text-r-white">{summary.title}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.15em] text-r-muted">{summary.subtitle}</p>
              </div>

              <ul className="relative mt-8 flex-1 space-y-5">
                {summary.checklist.map((item, index) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-r-gold/40 text-[11px] font-semibold text-r-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="pt-0.5 text-sm leading-relaxed text-r-white font-body normal-case">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="relative mt-8 border-t border-r-line pt-6 text-xs text-r-muted/70 font-body normal-case">
                {summary.note}
              </p>
            </aside>
          )}
        </div>
      </div>
    </section>
  );
}
