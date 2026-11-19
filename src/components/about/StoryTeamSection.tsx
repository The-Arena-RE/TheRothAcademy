import Image from "next/image";
import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function StoryTeamSection({
  kicker,
  heading,
  paragraphs,
  roles,
  sourceLink,
}: {
  kicker: string;
  heading: string[];
  paragraphs: string[];
  roles: { tag: string; name: string; description: string }[];
  sourceLink?: { label: string; href: string };
}) {
  return (
    <section className="border-b border-r-line bg-r-stripe-2 py-16 md:py-24">
      <div className="container-brand">
        <div className="grid gap-10 md:grid-cols-[1fr_1.15fr] md:items-center md:gap-16 lg:gap-24">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-brand-card)] border border-r-line shadow-xl shadow-black/40 md:order-2">
            <Image
              src="/about/next-chapter.webp"
              alt="Tim and Kevin Berry in conversation"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="min-w-0 md:order-1">
            <Eyebrow>{kicker}</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-6xl">
              {heading.map((line, index) => (
                <span key={line} className={clsx("block", index === heading.length - 1 && "text-r-gold")}>
                  {line}
                </span>
              ))}
            </h2>

            <div className="mt-8 space-y-4">
              {paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-sm text-r-muted font-body normal-case">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        <ul className="mt-12 grid gap-8 border-t border-r-line pt-10 sm:grid-cols-3 sm:gap-6">
          {roles.map((role) => (
            <li key={role.name}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-r-gold">{role.tag}</span>
              <h3 className="mt-2 text-2xl">{role.name}</h3>
              <p className="mt-2 text-sm text-r-muted font-body normal-case">{role.description}</p>
            </li>
          ))}
        </ul>

        {sourceLink && (
          <a
            href={sourceLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-1 text-xs uppercase tracking-[0.1em] text-r-muted/70 transition-colors hover:text-r-gold"
          >
            {sourceLink.label}
          </a>
        )}
      </div>
    </section>
  );
}
