import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { pathwayTableContent as content } from "@/data/home-content";

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

        <ul className="mt-12 divide-y divide-r-line border-y border-r-line">
          {content.rows.map((row) => (
            <li key={row.destination}>
              <Link
                href={row.href}
                className="group flex flex-col gap-3 py-6 transition-colors hover:bg-r-panel-2 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
              >
                <p className="max-w-xl text-lg text-r-white md:text-xl">{row.visitor}</p>
                <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold">
                  {row.destination}
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
