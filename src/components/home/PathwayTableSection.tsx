import Link from "next/link";
import { ArrowUpRight, Briefcase, User, HelpCircle, BookOpen, Clock, type LucideIcon } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { pathwayTableContent as content } from "@/data/home-content";

const rowIcons: LucideIcon[] = [Briefcase, User, HelpCircle, BookOpen, Clock];

export function PathwayTableSection() {
  return (
    <section className="border-b border-r-line bg-r-bg py-20 md:py-28">
      <div className="container-brand">
        <div className="max-w-2xl">
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-6xl">
            {content.heading.map((line, index) => (
              <span key={line} className={index === content.heading.length - 1 ? "block text-r-gold" : "block"}>
                {line}
              </span>
            ))}
          </h2>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.rows.map((row, index) => {
            const Icon = rowIcons[index % rowIcons.length];
            return (
              <li key={row.destination}>
                <Link
                  href={row.href}
                  className="group flex h-full flex-col rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel/40 p-6 transition-colors hover:border-r-gold/60 hover:bg-r-panel"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-r-gold/40 text-r-gold">
                    <Icon size={18} aria-hidden />
                  </span>
                  <p className="mt-5 flex-1 text-lg leading-snug text-r-white">{row.visitor}</p>
                  <span className="mt-5 inline-flex items-center gap-2 border-t border-r-line/60 pt-4 text-sm font-semibold uppercase tracking-wide text-r-gold">
                    {row.destination}
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      aria-hidden
                    />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
