import { questionContent } from "@/data/homepage-v2-content";
import { Reveal } from "./Reveal";

export function QuestionSection() {
  return (
    <section className="section tinted question">
      <div className="wrap editorial">
        <div className="section-intro">
          <p className="eyebrow">{questionContent.eyebrow}</p>
          <h2>{questionContent.heading}</h2>
        </div>
        <div className="rich-text">
          <p className="callout">{questionContent.callout}</p>
          <Reveal summary={questionContent.reveal.summary}>
            {questionContent.reveal.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
          <p className="fine">{questionContent.source}</p>
        </div>
      </div>
    </section>
  );
}
