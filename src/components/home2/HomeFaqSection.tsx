import { faqContent } from "@/data/homepage-v2-content";

export function HomeFaqSection() {
  return (
    <section className="section faq-section faq-guide">
      <div className="wrap">
        <div className="section-intro">
          <p className="eyebrow">{faqContent.eyebrow}</p>
          <h2>{faqContent.heading}</h2>
        </div>
        <div className="faq-topics">
          {faqContent.topics.map((topic) => (
            <div className="faq-topic" key={topic.heading}>
              <h3>{topic.heading}</h3>
              <div className="faq-list">
                {topic.items.map((item) => (
                  <details name="homepage-faq" key={item.question}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
