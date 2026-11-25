import Image from "next/image";
import { Handshake, Compass } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { qualificationContent } from "@/data/home-content";

const delegatorTraits = [
  "Enjoys meeting with a financial adviser",
  "Prefers someone else selecting and monitoring investments",
  "Values professional guidance over hands-on research",
];

const selfDirectedTraits = [
  "The entrepreneur who understands real estate",
  "The business owner who knows how to evaluate private opportunities",
  "The investor who has spent years developing expertise in a market",
  "The person who refuses to let a standard menu define their strategy",
];

export function QualificationShowcase() {
  const content = qualificationContent;

  return (
    <section className="relative overflow-hidden border-b border-r-line bg-r-stripe-2 py-20 md:py-28">
      <Image
        aria-hidden
        src="/about/next-chapter.webp"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover opacity-25"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(21,22,24,0.75) 0%, rgba(21,22,24,0.92) 30%, rgba(21,22,24,0.97) 60%, rgba(21,22,24,1) 100%)",
        }}
      />

      <div className="container-brand relative max-w-3xl">
        <Eyebrow>{content.eyebrow}</Eyebrow>
        <h2 className="mt-4 text-4xl md:text-6xl">
          {content.heading.map((line, index) => (
            <span key={line} className={index === content.goldLine ? "block text-r-gold" : "block"}>
              {line}
            </span>
          ))}
        </h2>
        <p className="mt-6 text-base leading-relaxed text-r-muted font-body normal-case">{content.paragraphs[0]}</p>
      </div>

      <div className="container-brand relative mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="flex flex-col rounded-[var(--radius-brand-card)] border border-r-line bg-r-bg/70 p-7 backdrop-blur-sm md:p-8">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-r-line text-r-muted">
            <Handshake size={18} aria-hidden />
          </span>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-r-muted">The Delegator</p>
          <ul className="mt-4 flex-1 space-y-3">
            {delegatorTraits.map((trait) => (
              <li key={trait} className="text-sm leading-relaxed text-r-muted font-body normal-case">
                {trait}
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-r-line pt-4 text-xs text-r-muted/70 font-body normal-case">
            There is nothing wrong with that. We respect this choice.
          </p>
        </div>

        <div className="flex flex-col rounded-[var(--radius-brand-card)] border border-r-gold/40 bg-gradient-to-b from-r-panel to-r-panel/70 p-7 md:p-8">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-r-gold/50 text-r-gold">
            <Compass size={18} aria-hidden />
          </span>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-r-gold">The Self-Directed Investor</p>
          <ul className="mt-4 flex-1 space-y-3">
            {selfDirectedTraits.map((trait) => (
              <li key={trait} className="text-sm leading-relaxed text-r-white font-body normal-case">
                {trait}
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-r-gold/20 pt-4 text-xs font-semibold text-r-gold/90 font-body normal-case">
            For this investor, self-direction may change the conversation entirely.
          </p>
        </div>
      </div>

      <div className="container-brand relative mt-12 max-w-3xl">
        <p className="border-l-2 border-r-gold pl-5 text-xl text-r-white md:text-2xl">{content.featured}</p>
        {content.note && (
          <p className="mt-8 text-xs leading-relaxed text-r-muted/70 font-body normal-case">{content.note}</p>
        )}
      </div>
    </section>
  );
}
