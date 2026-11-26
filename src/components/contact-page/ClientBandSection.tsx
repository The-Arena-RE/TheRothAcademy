import { existingCustomer } from "@/data/contact-content";

export function ClientBandSection() {
  return (
    <section className="contact-band client-band" id="existing-customer">
      <div className="contact-wrap">
        <div className="contact-intro">
          <p className="eyebrow">{existingCustomer.eyebrow}</p>
          <h2>
            {existingCustomer.heading[0]} {existingCustomer.heading[1]}
          </h2>
          <p className="contact-lead">{existingCustomer.description}</p>
        </div>
        <div className="client-resources">
          {existingCustomer.pathways.map((item) => (
            <article key={item.title} className="client-resource">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.linkHref} className="text-link">
                {item.linkLabel}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
