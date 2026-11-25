import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { clsx } from "clsx";

export function ModuleCard({
  collection,
  slug,
  title,
  description,
}: {
  collection: "401k" | "ira";
  slug: string;
  title: string;
  description: string;
}) {
  const basePath = collection === "401k" ? "self-directed-401k" : "self-directed-ira";
  return (
    <Link
      href={`/learn/${basePath}/${slug}`}
      className="group flex h-full flex-col rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/40 p-6 transition-colors hover:border-r-gold hover:bg-r-panel"
    >
      <span
        className={clsx(
          "self-start rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em]",
          collection === "401k" ? "border-r-gold/40 text-r-gold" : "border-r-line text-r-muted",
        )}
      >
        Self-Directed {collection === "401k" ? "401(k)" : "IRA"}
      </span>
      <h3 className="mt-4 text-xl leading-tight text-r-white">{title}</h3>
      <p className="mt-2 flex-1 text-sm text-r-muted font-body normal-case">{description}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-r-gold">
        Open The Lesson
        <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
      </span>
    </Link>
  );
}
