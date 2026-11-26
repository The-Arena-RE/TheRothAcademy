import type { ReactNode } from "react";

export function Reveal({ summary, children, className }: { summary: string; children: ReactNode; className?: string }) {
  return (
    <details className={className ? `reveal ${className}` : "reveal"}>
      <summary>{summary}</summary>
      <div className="reveal-body">{children}</div>
    </details>
  );
}
