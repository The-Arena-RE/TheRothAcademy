import Link from "next/link";
import { rulesGuideContent } from "@/data/homepage-v2-content";

export function RulesGuideSection() {
  return (
    <section className="section rules guide">
      <div className="wrap guide-layout">
        <article className="guide-article">
          <div className="section-intro">
            <p className="eyebrow">{rulesGuideContent.eyebrow}</p>
            <h2>{rulesGuideContent.heading}</h2>
          </div>
          <div className="rich-text">
            {rulesGuideContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="callout">{rulesGuideContent.callout}</p>
            <Link href={rulesGuideContent.ctaHref} className="text-link">
              {rulesGuideContent.ctaLabel}
            </Link>
          </div>
        </article>
        <aside className="resource-panel" aria-label="Further Reading">
          <h3>Further Reading</h3>
          <ul>
            {rulesGuideContent.resources.map((resource) => (
              <li key={resource.href}>
                <a href={resource.href} className="text-link" target="_blank" rel="noopener noreferrer">
                  {resource.label}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
