import { contactFaqItems } from "@/data/contact-content";

export function ContactFaqSection() {
  return (
    <section className="contact-band contact-faq" id="contact-faq">
      <div className="contact-wrap">
        <div className="contact-intro">
          <p className="eyebrow">Frequently Asked Questions</p>
          <h2>Good Questions. Clear Answers.</h2>
        </div>
        <div className="contact-faq-list">
          {contactFaqItems.map((item) => (
            <details name="contact-faq" key={item.question}>
              <summary>
                {item.question}
                <span aria-hidden="true" className="expand-mark">
                  +
                </span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
