"use client";

import { useRef, useState } from "react";
import { faqIraContent } from "@/data/service-ira-content";

export function FaqIraSection() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const topics = faqIraContent.topics;

  function selectTopic(index: number, moveFocus = false) {
    setActive(index);
    if (moveFocus) tabRefs.current[index]?.focus();
  }

  function onTabKeyDown(event: React.KeyboardEvent, index: number) {
    const last = topics.length - 1;
    const map: Record<string, number> = {
      ArrowLeft: (index + last) % topics.length,
      ArrowRight: (index + 1) % topics.length,
      Home: 0,
      End: last,
    };
    const next = map[event.key];
    if (next === undefined) return;
    event.preventDefault();
    selectTopic(next, true);
  }

  return (
    <section className="service-section service-faq faq-guide faq-focus" id="faq">
      <div className="wrap">
        <div className="service-intro">
          <p className="eyebrow">{faqIraContent.eyebrow}</p>
          <h2>{faqIraContent.heading}</h2>
        </div>

        <div role="tablist" aria-label="IRA FAQ topics" className="faq-topic-selector">
          {topics.map((topic, index) => (
            <button
              key={topic.tabLabel}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              type="button"
              role="tab"
              id={`faq-topic-tab-${index + 1}`}
              aria-controls={`faq-topic-${index + 1}`}
              aria-selected={active === index}
              tabIndex={active === index ? 0 : -1}
              onClick={() => selectTopic(index)}
              onKeyDown={(event) => onTabKeyDown(event, index)}
            >
              {topic.tabLabel}
            </button>
          ))}
        </div>

        <div className="faq-topics with-tab-controls">
          {topics.map((topic, index) => (
            <div
              className="faq-topic"
              id={`faq-topic-${index + 1}`}
              role="tabpanel"
              aria-labelledby={`faq-topic-tab-${index + 1}`}
              hidden={active !== index}
              key={topic.heading}
            >
              <div className="faq-list">
                {topic.items.map((item) => (
                  <details name={`service-faq-${index}`} key={item.question}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        <a href={faqIraContent.irsLinkHref} className="text-link" target="_blank" rel="noopener noreferrer">
          {faqIraContent.irsLinkLabel}
        </a>
      </div>
    </section>
  );
}
