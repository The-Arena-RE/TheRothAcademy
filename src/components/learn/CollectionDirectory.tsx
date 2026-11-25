"use client";

import { useMemo, useState } from "react";
import { FilterPill } from "@/components/ui/FilterPill";
import { ModuleCard } from "@/components/learn/ModuleCard";
import { curriculumCategories, type CurriculumModule } from "@/data/learn-curriculum";

export function CollectionDirectory({ collection, modules }: { collection: "401k" | "ira"; modules: CurriculumModule[] }) {
  const [activeCategory, setActiveCategory] = useState<"all" | CurriculumModule["category"]>("all");

  const filtered = useMemo(
    () => (activeCategory === "all" ? modules : modules.filter((m) => m.category === activeCategory)),
    [activeCategory, modules],
  );

  return (
    <section className="border-b border-r-line bg-r-bg py-16 md:py-24">
      <div className="container-brand">
        <div
          role="tablist"
          aria-label="Filter lessons by category"
          className="flex snap-x gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <FilterPill active={activeCategory === "all"} onClick={() => setActiveCategory("all")}>
            All Lessons
          </FilterPill>
          {curriculumCategories.map((category) => (
            <FilterPill
              key={category.key}
              active={activeCategory === category.key}
              onClick={() => setActiveCategory(category.key)}
            >
              {category.label}
            </FilterPill>
          ))}
        </div>

        <p className="mt-4 text-xs uppercase tracking-[0.15em] text-r-muted">
          {filtered.length} lesson{filtered.length === 1 ? "" : "s"}
        </p>

        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((module) => (
            <li key={module.slug}>
              <ModuleCard collection={collection} slug={module.slug} title={module.title} description={module.description} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
