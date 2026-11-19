import { Eyebrow } from "@/components/ui/Eyebrow";

type Story = {
  label: string;
  headline: string;
  scenario: string;
  realization: string;
  risk?: string;
};

export function DeepDiveStoryList({
  eyebrow,
  heading,
  stories,
}: {
  eyebrow: string;
  heading: string[];
  stories: Story[];
}) {
  return (
    <section className="bg-r-bg py-20 md:py-28">
      <div className="container-brand">
        <div className="max-w-2xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-6xl">
            {heading.map((line, index) => (
              <span key={line} className={index === heading.length - 1 ? "block text-r-gold" : "block"}>
                {line}
              </span>
            ))}
          </h2>
        </div>

        <div className="mt-12 space-y-6">
          {stories.map((story) => (
            <article
              key={story.headline}
              className="grid gap-6 rounded-[var(--radius-brand-card)] border border-r-line bg-r-panel p-7 md:grid-cols-[auto_1fr] md:gap-10 md:p-10"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-r-gold md:[writing-mode:vertical-rl]">
                {story.label}
              </span>
              <div className="min-w-0">
                <p className="text-2xl text-r-white md:text-3xl">{story.headline}</p>
                <p className="mt-4 text-sm leading-relaxed text-r-muted font-body normal-case">
                  {story.scenario}
                </p>
                <p className="mt-5 border-l-2 border-r-gold pl-4 text-base text-r-white">
                  {story.realization}
                </p>
                {story.risk && (
                  <p className="mt-5 text-xs leading-relaxed text-r-muted/70 font-body normal-case">
                    {story.risk}
                  </p>
                )}
                <p className="mt-5 text-[11px] uppercase tracking-[0.1em] text-r-muted/50 font-body">
                  Illustrative hypothetical example — not an actual client result, recommendation, or guarantee.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
