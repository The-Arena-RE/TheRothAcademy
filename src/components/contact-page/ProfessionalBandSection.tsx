"use client";

import { useEffect, useRef } from "react";
import { specialistPath, partnershipPath } from "@/data/contact-content";
import { EditorialSpecialistForm } from "@/components/contact-page/EditorialSpecialistForm";
import { EditorialPartnershipForm } from "@/components/contact-page/EditorialPartnershipForm";

export function ProfessionalBandSection() {
  const specialistRef = useRef<HTMLDetailsElement>(null);
  const partnershipRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    function revealFromHash() {
      const hash = window.location.hash;
      if (hash === "#specialist" && specialistRef.current) specialistRef.current.open = true;
      if (hash === "#partnership" && partnershipRef.current) partnershipRef.current.open = true;
    }
    revealFromHash();
    window.addEventListener("hashchange", revealFromHash);
    return () => window.removeEventListener("hashchange", revealFromHash);
  }, []);

  return (
    <section className="contact-band professional-band">
      <div className="contact-wrap">
        <h2>Events &amp; Partnerships</h2>
        <div className="professional-list">
          <details id="specialist" className="professional" ref={specialistRef}>
            <summary>
              <span>
                <span className="eyebrow">{specialistPath.eyebrow}</span>
                <span className="professional-title">Invite a Roth Academy specialist</span>
              </span>
              <span aria-hidden="true" className="expand-mark">
                +
              </span>
            </summary>
            <div className="professional-content">
              <div className="professional-copy">
                <h3>
                  {specialistPath.heading[0]} {specialistPath.heading[1]}
                </h3>
                {specialistPath.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p>{specialistPath.featured}</p>
                <a href={specialistPath.supportingHref} className="text-link">
                  {specialistPath.supportingLabel}
                </a>
              </div>
              <EditorialSpecialistForm />
            </div>
          </details>

          <details id="partnership" className="professional" ref={partnershipRef}>
            <summary>
              <span>
                <span className="eyebrow">{partnershipPath.eyebrow}</span>
                <span className="professional-title">Work with Roth Academy</span>
              </span>
              <span aria-hidden="true" className="expand-mark">
                +
              </span>
            </summary>
            <div className="professional-content">
              <div className="professional-copy">
                <h3>
                  {partnershipPath.heading[0]} {partnershipPath.heading[1]}
                </h3>
                {partnershipPath.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p>{partnershipPath.featured}</p>
                <a href={partnershipPath.supportingHref} className="text-link">
                  {partnershipPath.supportingLabel}
                </a>
              </div>
              <EditorialPartnershipForm />
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
