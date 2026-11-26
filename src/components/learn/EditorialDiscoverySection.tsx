"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { curriculum401k, curriculumIra, discoveryCategories } from "@/data/learn-curriculum";

const moduleIndex = new Map<string, { title: string; description: string }>();
for (const lesson of curriculum401k) moduleIndex.set(`401k:${lesson.slug}`, lesson);
for (const lesson of curriculumIra) moduleIndex.set(`ira:${lesson.slug}`, lesson);

const planLabels: Record<"401k" | "ira", string> = { "401k": "Self-Directed 401(k)", ira: "Self-Directed IRA" };
const planBasePath: Record<"401k" | "ira", string> = { "401k": "self-directed-401k", ira: "self-directed-ira" };

type PlanFilter = "all" | "401k" | "ira";

export function EditorialDiscoverySection() {
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
    <section className="learn-band learn-discovery" id="discover-lessons">
      <div className="learn-wrap">
        <div className="learn-intro">
          <p className="eyebrow">There&apos;s an Investment Story</p>
          <h2>With Your Name on It.</h2>
          <p>
            You don&apos;t need to speak Wall Street&apos;s language to explore investments. Start with what interests you,
            what you already understand, or what you hope to accomplish.
          </p>
        </div>

        <div className="discovery-layout">
          <div role="group" aria-label="Choose an investment interest" className="interest-list">
            {discoveryCategories.map((category) => (
              <button
                key={category.key}
                type="button"
                aria-pressed={activeKey === category.key}
                onClick={() => setActiveKey(category.key)}
              >
                {category.title}
              </button>
            ))}
          </div>

          <div>
            <div className="discovery-toolbar">
              <p>{active.description}</p>
              <div role="group" aria-label="Filter lessons by plan" className="learn-filters">
                {(["all", "401k", "ira"] as const).map((key) => (
                  <button key={key} type="button" aria-pressed={planFilter === key} onClick={() => setPlanFilter(key)}>
                    {key === "all" ? "Both Plans" : key === "401k" ? "401(k)" : "IRA"}
                  </button>
                ))}
              </div>
              <span role="status" className="fine">
                {resolvedModules.length} lesson{resolvedModules.length === 1 ? "" : "s"}
              </span>
            </div>

            {resolvedModules.length > 0 ? (
              <ul className="lesson-grid">
                {resolvedModules.map((module) => (
                  <li key={`${module.collection}-${module.slug}`}>
                    <Link href={`/learn/${planBasePath[module.collection]}/${module.slug}`} className="lesson-link">
                      <p className="eyebrow">{planLabels[module.collection]}</p>
                      <h3>{module.title}</h3>
                      <p>{module.description}</p>
                      <span className="text-link">Open The Lesson</span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="learn-empty">No lessons match both selections. Try another plan or interest.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
