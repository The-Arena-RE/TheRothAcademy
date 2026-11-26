"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { learnGuides, learnLevels, type LearnLevel } from "@/data/learn-content";

const featuredGuides = learnGuides.filter((guide) => guide.featured);
const tabLabelByLevel = Object.fromEntries(learnLevels.map((level) => [level.key, level.tabLabel])) as Record<
  LearnLevel,
  string
>;

type LevelFilter = "all" | LearnLevel;

export function GuideDirectorySection() {
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<LevelFilter>("all");

  const filteredGuides = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return featuredGuides.filter((guide) => {
      if (level !== "all" && guide.level !== level) return false;
      if (!normalizedQuery) return true;
      return (
        guide.title.toLowerCase().includes(normalizedQuery) ||
        guide.description.toLowerCase().includes(normalizedQuery) ||
        guide.kicker.toLowerCase().includes(normalizedQuery)
      );
    });
  }, [level, query]);

  function resetFilters() {
    setQuery("");
    setLevel("all");
  }

  return (
    <section className="learn-band learn-directory" id="plan-guides">
      <div className="learn-wrap">
        <div className="learn-intro">
          <p className="eyebrow">For Active Plans &amp; Established Customers</p>
          <h2>Plan Administration &amp; Ongoing Guides.</h2>
        </div>

        <div className="directory-tools">
          <label className="search-field">
            Search the knowledge library
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Find a topic or question"
            />
          </label>
          <div role="group" aria-label="Filter guides by level" className="learn-filters">
            <button type="button" aria-pressed={level === "all"} onClick={() => setLevel("all")}>
              All guides
            </button>
            {learnLevels.map((item) => (
              <button key={item.key} type="button" aria-pressed={level === item.key} onClick={() => setLevel(item.key)}>
                {tabLabelByLevel[item.key]}
              </button>
            ))}
          </div>
        </div>

        <div className="directory-count">
          <span role="status" className="fine">
            {filteredGuides.length} guide{filteredGuides.length === 1 ? "" : "s"}
          </span>
          <span className="fine">Already Underway? Keep Learning Here.</span>
        </div>

        {filteredGuides.length > 0 ? (
          <ul className="guide-grid">
            {filteredGuides.map((guide) => (
              <li key={guide.slug}>
                <Link href={`/learn/${guide.slug}`} className="guide-link">
                  <p className="eyebrow">{guide.level === "advanced" ? "Advanced" : "Foundations"}</p>
                  <span className="guide-kicker fine">{guide.kicker}</span>
                  <h3>{guide.title}</h3>
                  <p>{guide.description}</p>
                  <div className="guide-meta">
                    <span>{guide.minutes} min read</span>
                    <span aria-hidden="true" className="arrow">
                      →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="learn-empty">
            No guides match this search.{" "}
            <button type="button" onClick={resetFilters}>
              Clear filters
            </button>
          </p>
        )}
      </div>
    </section>
  );
}
