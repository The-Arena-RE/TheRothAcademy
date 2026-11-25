export function FormCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-[var(--radius-brand-card)] border border-r-gold/30 bg-gradient-to-b from-r-panel to-r-panel/70 p-6 shadow-2xl shadow-black/50 md:p-10">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-r-gold-dark via-r-gold to-r-gold-light"
      />
      {children}
    </div>
  );
}
