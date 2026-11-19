import { Eyebrow } from "@/components/ui/Eyebrow";

type Stage = { title: string; copy: string };

export function DeepDiveStageFlow({
  eyebrow,
  heading,
  stages,
}: {
  eyebrow: string;
  heading: string[];
  stages: Stage[];
}) {
  return (
    <section className="border-y border-r-line bg-r-stripe-2 py-20 md:py-28">
      <div className="container-brand max-w-3xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 text-4xl md:text-6xl">
          {heading.map((line, index) => (
            <span key={line} className={index === heading.length - 1 ? "block text-r-gold" : "block"}>
              {line}
            </span>
          ))}
        </h2>

        <ol className="mt-12 space-y-0">
          {stages.map((stage, index) => (
            <li key={stage.title} className="relative flex gap-5 pb-10 last:pb-0">
              {index < stages.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-[15px] top-8 h-[calc(100%-1.5rem)] w-px bg-r-line"
                />
              )}
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-r-gold/50 text-xs font-semibold text-r-gold">
                {index + 1}
              </span>
              <div className="min-w-0 pt-0.5">
                <p className="text-lg text-r-white">{stage.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-r-muted font-body normal-case">
                  {stage.copy}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
