import { plansFaqItems } from "@/data/plans-content";

export function PlansFaqSection() {
  return (
    <section className="plans-band plans-faq" id="plans-faq">
      <div className="plans-wrap">
        <div className="plans-intro">
          <p className="eyebrow">Frequently Asked Questions</p>
          <h2>Good Questions. Clear Answers.</h2>
        </div>
        <div className="faq-list">
          {plansFaqItems.map((item) => (
            <details name="plans-faq" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
