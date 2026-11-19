import { clsx } from "clsx";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function DeepDiveSection({
  eyebrow,
  heading,
  goldLine,
  paragraphs,
  featured,
  note,
  tone = "dark",
}: {
  eyebrow: string;
  heading: string[];
  goldLine?: number;
  paragraphs: string[];
  featured?: string;
  note?: string;
  tone?: "dark" | "panel";
}) {
  return (
    <section className={clsx("py-20 md:py-28", tone === "dark" ? "bg-r-bg" : "bg-r-stripe-2")}>
      <div className="container-brand max-w-3xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 text-4xl md:text-6xl">
          {heading.map((line, index) => (
            <span key={line} className={clsx("block", index === goldLine && "text-r-gold")}>
              {line}
            </span>
          ))}
        </h2>

        <div className="mt-6 space-y-4">
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-r-muted font-body normal-case">
              {paragraph}
            </p>
          ))}
        </div>

        {featured && (
          <p className="mt-8 border-l-2 border-r-gold pl-5 text-xl text-r-white md:text-2xl">{featured}</p>
        )}

        {note && (
          <p className="mt-8 text-xs leading-relaxed text-r-muted/70 font-body normal-case">{note}</p>
        )}
      </div>
    </section>
  );
}
