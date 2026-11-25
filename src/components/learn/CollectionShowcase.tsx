import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Collection = {
  eyebrow: string;
  heading: string;
  description: string;
  ctaLabel: string;
  href: string;
  moduleCount: number;
  image: string;
};

export function CollectionShowcase({ collections }: { collections: Collection[] }) {
  return (
    <section id="investments" className="scroll-mt-24 border-b border-r-line bg-r-bg py-16 md:py-24">
      <div className="container-brand">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {collections.map((collection) => (
            <Link
              key={collection.href}
              href={collection.href}
              className="group relative flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-[var(--radius-brand-card)] border border-r-line p-8 transition-colors hover:border-r-gold/50 md:p-10"
            >
              <Image
                aria-hidden
                src={collection.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="pointer-events-none object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-r-bg via-r-bg/80 to-r-bg/20"
              />

              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-r-gold">{collection.eyebrow}</p>
                <h3 className="mt-4 text-3xl text-r-white md:text-4xl">{collection.heading}</h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-r-muted font-body normal-case">
                  {collection.description}
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.15em] text-r-muted/70">
                  {collection.moduleCount} published lessons
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-r-gold">
                  {collection.ctaLabel}
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
