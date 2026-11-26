import type { ReactNode } from "react";

export function SecondaryReading({
  id,
  tinted,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  tinted?: boolean;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className={tinted ? "service-section tinted secondary-reading" : "service-section secondary-reading"} id={id}>
      <div className="wrap">
        <details>
          <summary>
            <h2 className="disclosure-title">
              <span className="eyebrow">{eyebrow}</span>
              <span>{title}</span>
            </h2>
          </summary>
          <div className="disclosure-content">{children}</div>
        </details>
      </div>
    </section>
  );
}
