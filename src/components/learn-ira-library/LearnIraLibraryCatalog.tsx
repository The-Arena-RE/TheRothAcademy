"use client";

import { useMemo, useRef, useState } from "react";
import { curriculumIra, curriculumCategories, type CurriculumCategoryKey } from "@/data/learn-curriculum";

const BATCH_SIZE = 9;

function normalize(text: string) {
  return text
    .toLowerCase()
    .replace(/401\s*\(k\)/g, "401k")
    .replace(/(\d),(?=\d{3}(?:\D|$))/g, "$1")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

const lessons = curriculumIra.map((module) => ({
  ...module,
  text: normalize(`${module.title} ${module.description}`),
}));

const categoryOptions: { key: "all" | CurriculumCategoryKey; label: string; count: number }[] = [
  { key: "all", label: "All Lessons", count: lessons.length },
  ...curriculumCategories.map((category) => ({
    key: category.key,
    label: category.label,
    count: lessons.filter((lesson) => lesson.category === category.key).length,
  })),
];

export function LearnIraLibraryCatalog() {
  const [category, setCategory] = useState<"all" | CurriculumCategoryKey>("all");
  const [search, setSearch] = useState("");
  const [visibleLimit, setVisibleLimit] = useState(BATCH_SIZE);
  const listRef = useRef<HTMLUListElement>(null);

  const matching = useMemo(() => {
    const terms = normalize(search).split(" ").filter(Boolean);
    return lessons.filter(
      (lesson) =>
        (category === "all" || category === lesson.category) && terms.every((term) => lesson.text.includes(term)),
    );
  }, [category, search]);

  const visible = matching.slice(0, visibleLimit);
  const remaining = matching.length - visible.length;
  const filtersActive = category !== "all" || search !== "";

  function resetAndSet<T>(setter: (value: T) => void, value: T) {
    setter(value);
    setVisibleLimit(BATCH_SIZE);
  }

  function handleShowMore() {
    const firstNewIndex = visibleLimit;
    setVisibleLimit((limit) => limit + BATCH_SIZE);
    requestAnimationFrame(() => {
      const links = listRef.current?.querySelectorAll<HTMLAnchorElement>(".library-lesson-link");
      links?.[firstNewIndex]?.focus();
    });
  }

  return (
    <section className="library-catalog" id="lessons">
      <div className="library-wrap">
        <h2>Explore the IRA lessons</h2>
        <div className="library-layout">
          <aside className="library-filters">
            <h3 id="category-label">Browse by category</h3>
            <div role="group" aria-labelledby="category-label" className="category-list">
              {categoryOptions.map((option) => (
                <button
                  key={option.key}
                  type="button"
                  aria-pressed={category === option.key}
                  className="category-control"
                  onClick={() => resetAndSet(setCategory, option.key)}
                >
                  <span>{option.label}</span>
                  <span aria-hidden="true" className="filter-count">
                    {option.count}
                  </span>
                </button>
              ))}
            </div>
          </aside>
          <div className="library-results">
            <div className="library-toolbar">
              <div className="library-search">
                <label htmlFor="lesson-search">Search this collection</label>
                <input
                  id="lesson-search"
                  type="search"
                  placeholder="Try “land” or “contractor”"
                  autoComplete="off"
                  value={search}
                  onChange={(event) => resetAndSet(setSearch, event.target.value)}
                />
              </div>
              {filtersActive && (
                <button
                  type="button"
                  className="clear-filters"
                  onClick={() => {
                    setSearch("");
                    setCategory("all");
                    setVisibleLimit(BATCH_SIZE);
                  }}
                >
                  Clear filters
                </button>
              )}
            </div>
            <p role="status" aria-live="polite" aria-atomic="true" className="library-count">
              {matching.length ? `Showing ${visible.length} of ${matching.length}` : "0 lessons"}
            </p>
            <ul id="lesson-list" className="library-lessons" ref={listRef}>
              {visible.map((lesson) => {
                const categoryLabel = curriculumCategories.find((c) => c.key === lesson.category)?.label ?? "";
                return (
                  <li key={lesson.slug} className="library-lesson">
                    <a href={`/learn/self-directed-ira/${lesson.slug}`} className="library-lesson-link">
                      <p className="lesson-category">{categoryLabel}</p>
                      <h3>{lesson.title}</h3>
                      <p className="lesson-description">{lesson.description}</p>
                      <span className="text-link">
                        Open The Lesson
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.3" />
                        </svg>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
            {matching.length === 0 && (
              <div className="library-empty">
                <h3>No lessons match your search.</h3>
                <p>Try another term or choose All Lessons.</p>
              </div>
            )}
            {remaining > 0 && (
              <div className="library-pagination">
                <button type="button" aria-controls="lesson-list" className="button" onClick={handleShowMore}>
                  Show {Math.min(BATCH_SIZE, remaining)} more
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
