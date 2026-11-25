"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Clock, Search } from "lucide-react";
import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FilterPill } from "@/components/ui/FilterPill";
import { learnGuides, learnLevels, type LearnLevel } from "@/data/learn-content";

type FilterKey = "all" | LearnLevel;

const badgeByLevel = Object.fromEntries(learnLevels.map((level) => [level.key, level.badge])) as Record<
  LearnLevel,
  string
>;

export function LearnDirectory() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [query, setQuery] = useState("");

  const filteredGuides = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return learnGuides.filter((guide) => {
      if (!guide.featured) return false;
      if (activeFilter !== "all" && guide.level !== activeFilter) return false;
      if (!normalizedQuery) return true;
      return (
        guide.title.toLowerCase().includes(normalizedQuery) ||
        guide.description.toLowerCase().includes(normalizedQuery) ||
        guide.kicker.toLowerCase().includes(normalizedQuery)
      );
    });
  }, [activeFilter, query]);

  return (
    <section className="border-b border-r-line bg-r-bg py-20 md:py-28">
      <div className="container-brand">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>For Active Plans & Established Customers</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-6xl">Plan Administration & Ongoing Guides.</h2>
          </div>

          <label className="relative w-full max-w-xs">
            <span className="sr-only">Search the knowledge library</span>
            <Search size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-r-muted" aria-hidden />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Find a topic or question"
              className="w-full rounded-sm border border-r-line bg-r-panel py-2.5 pl-10 pr-4 text-sm text-r-white font-body normal-case placeholder:text-r-muted/60 transition-colors focus:border-r-gold focus:outline-none"
            />
          </label>
        </div>

        <div
          role="tablist"
          aria-label="Filter guides by level"
          className="mt-8 flex snap-x gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <FilterPill active={activeFilter === "all"} onClick={() => setActiveFilter("all")}>
            All guides
          </FilterPill>
          {learnLevels.map((level) => (
            <FilterPill key={level.key} active={activeFilter === level.key} onClick={() => setActiveFilter(level.key)}>
              {level.tabLabel}
            </FilterPill>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between text-xs uppercase tracking-[0.15em] text-r-muted">
          <span>
            {filteredGuides.length} guide{filteredGuides.length === 1 ? "" : "s"}
          </span>
          <span className="hidden sm:inline">Already Underway? Keep Learning Here.</span>
        </div>

        {filteredGuides.length > 0 ? (
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredGuides.map((guide) => (
              <li key={guide.slug}>
                <Link
                  href={`/learn/${guide.slug}`}
                  className="group flex h-full flex-col rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/40 p-6 transition-colors hover:border-r-gold hover:bg-r-panel"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-2xl font-heading text-r-gold">{guide.number}</span>
                    <span
                      className={clsx(
                        "rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em]",
                        guide.level === "advanced" ? "border-r-line text-r-muted" : "border-r-gold/40 text-r-gold",
                      )}
                    >
                      {badgeByLevel[guide.level]}
                    </span>
                  </div>

                  <span className="mt-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-r-gold/80">
                    {guide.kicker}
                  </span>
                  <h3 className="mt-1 text-xl leading-tight text-r-white">{guide.title}</h3>
                  <p className="mt-2 text-sm text-r-muted font-body normal-case">{guide.description}</p>

                  <div className="mt-auto flex items-center justify-between pt-6 text-[11px] uppercase tracking-[0.15em] text-r-muted">
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} aria-hidden />
                      {guide.minutes} min read
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-r-gold transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      aria-hidden
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-12 text-sm text-r-muted font-body normal-case">
            No guides match &quot;{query}&quot;. Try a different term, or{" "}
            <button type="button" onClick={() => setQuery("")} className="text-r-gold underline underline-offset-2">
              clear your search
            </button>
            .
          </p>
        )}
      </div>
    </section>
  );
}
