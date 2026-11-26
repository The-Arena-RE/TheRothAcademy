import Image from "next/image";
import { contactHero } from "@/data/contact-content";

export function ContactHero() {
  return (
    <section className="contact-hero dark">
      <Image src="/contact/hero.webp" alt="" fill sizes="100vw" priority />
      <div className="contact-wrap">
        <p className="eyebrow">{contactHero.eyebrow}</p>
        <h1>
          {contactHero.title[0]} <span>{contactHero.title[1]}</span>
        </h1>
        <p className="contact-lead">{contactHero.description}</p>
        <div className="actions">
          <a href="#pathways" className="button">
            Find My Next Step
          </a>
          <a href="#ask-question" className="button secondary">
            Ask Roth Academy
          </a>
        </div>
      </div>
    </section>
  );
}
