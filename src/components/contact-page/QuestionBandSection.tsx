import { askQuestion } from "@/data/contact-content";
import { siteConfig } from "@/data/site-config";
import { EditorialContactForm } from "@/components/contact-page/EditorialContactForm";

export function QuestionBandSection() {
  return (
    <section className="contact-band question-band" id="ask-question">
      <div className="contact-wrap">
        <div className="question-copy">
          <p className="eyebrow">{askQuestion.eyebrow}</p>
          <h2>
            {askQuestion.heading[0]} {askQuestion.heading[1]}
          </h2>
          <p className="contact-lead">{askQuestion.description}</p>
          <aside className="direct-card">
            <h3>Prefer to Reach Us Directly?</h3>
            <p>Reach the team using the verified contact details below.</p>
            <a href={`mailto:${siteConfig.email}`} className="text-link">
              {siteConfig.email}
            </a>
            <a href={`tel:${siteConfig.phoneTel}`} className="text-link">
              {siteConfig.phone}
            </a>
          </aside>
        </div>
        <EditorialContactForm />
      </div>
    </section>
  );
}
