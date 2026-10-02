export function Badge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-[var(--radius-control)] border border-line bg-surface px-2.5 py-1 font-mono text-xs text-ink-muted">
      {children}
    </span>
  );
}