import { contactFinalActions } from "@/data/contact-content";
import { planDestinations } from "@/data/site-config";

export function FinalBandSection() {
  return (
    <section className="contact-band final-contact dark">
      <div className="contact-wrap">
        <p className="eyebrow">{contactFinalActions.eyebrow}</p>
        <h2>
          {contactFinalActions.heading[0]} {contactFinalActions.heading[1]}
        </h2>
        <p className="contact-lead">{contactFinalActions.description}</p>
        <div className="actions">
          <a href={planDestinations.open401k} className="button">
            Start My Self-Directed 401(k)
          </a>
          <a href={planDestinations.openIra} className="button">
            Start My Self-Directed IRA
          </a>
          <a href="#ask-question" className="button secondary">
            Ask Roth Academy a Question
          </a>
          <a href="#specialist" className="button secondary">
            Invite a Specialist
          </a>
          <a href="#partnership" className="button secondary">
            Explore a Partnership
          </a>
        </div>
        <p className="fine closing-tagline">{contactFinalActions.signature}</p>
      </div>
    </section>
  );
}
