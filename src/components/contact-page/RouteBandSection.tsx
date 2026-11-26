import { contactPathways } from "@/data/contact-content";

export function RouteBandSection() {
  return (
    <section className="contact-band route-band" id="pathways">
      <div className="contact-wrap">
        <div className="route-intro">
          <p className="eyebrow">{contactPathways.eyebrow}</p>
          <h2>
            {contactPathways.heading[0]} {contactPathways.heading[1]}
          </h2>
          <p className="contact-lead">{contactPathways.intro}</p>
        </div>
        <ul className="route-list">
          {contactPathways.items.map((item) => (
            <li key={item.href}>
              <a href={item.href}>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
                <span aria-hidden="true" className="route-arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
