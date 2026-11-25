"use client";

import { useMemo, useState } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FilterPill } from "@/components/ui/FilterPill";
import { ModuleCard } from "@/components/learn/ModuleCard";
import { curriculum401k, curriculumIra, discoveryCategories } from "@/data/learn-curriculum";

const moduleIndex = new Map<string, { title: string; description: string }>();
for (const lesson of curriculum401k) moduleIndex.set(`401k:${lesson.slug}`, lesson);
for (const lesson of curriculumIra) moduleIndex.set(`ira:${lesson.slug}`, lesson);

type PlanFilter = "all" | "401k" | "ira";

export function DiscoverySection() {
  const [activeKey, setActiveKey] = useState(discoveryCategories[0].key);
  const [planFilter, setPlanFilter] = useState<PlanFilter>("all");

  const active = discoveryCategories.find((category) => category.key === activeKey) ?? discoveryCategories[0];

  const resolvedModules = useMemo(() => {
    const results: { collection: "401k" | "ira"; slug: string; title: string; description: string }[] = [];
    for (const ref of active.modules) {
      if (planFilter !== "all" && ref.collection !== planFilter) continue;
      const lesson = moduleIndex.get(`${ref.collection}:${ref.slug}`);
      if (lesson) results.push({ ...ref, ...lesson });
    }
    return results;
  }, [active, planFilter]);

  return (
    <section className="border-b border-r-line bg-r-stripe-2 py-16 md:py-24">
      <div className="container-brand">
        <Eyebrow>There&apos;s an Investment Story</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-4xl md:text-6xl">
          <span className="block">With Your</span>
          <span className="block text-r-gold">Name on It.</span>
        </h2>
        <p className="mt-4 max-w-xl text-sm text-r-muted font-body normal-case">
          You don&apos;t need to speak Wall Street&apos;s language to explore investments. Start with what interests you, what
          you already understand, or what you hope to accomplish.
        </p>

        <div
          role="tablist"
          aria-label="Discovery categories"
          className="mt-10 flex snap-x gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {discoveryCategories.map((category) => (
            <FilterPill key={category.key} active={activeKey === category.key} onClick={() => setActiveKey(category.key)}>
              {category.title}
            </FilterPill>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-xl text-sm text-r-muted font-body normal-case">{active.description}</p>
          <div role="tablist" aria-label="Filter by plan type" className="flex shrink-0 gap-2">
            {(["all", "401k", "ira"] as const).map((key) => (
              <FilterPill key={key} active={planFilter === key} onClick={() => setPlanFilter(key)}>
                {key === "all" ? "Both Plans" : key === "401k" ? "401(k)" : "IRA"}
              </FilterPill>
            ))}
          </div>
        </div>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resolvedModules.map((module) => (
            <li key={`${module.collection}-${module.slug}`}>
              <ModuleCard
                collection={module.collection}
                slug={module.slug}
                title={module.title}
                description={module.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
