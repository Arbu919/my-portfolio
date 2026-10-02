export function SystemComposition() {
  return (
    <svg
      viewBox="0 0 520 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Abstract illustration of connected business system fragments — a ledger, an order tracker, a product catalog, an automation node, an AI chat panel, and an analytics panel, linked together."
      className="h-auto w-full"
    >
      {/* Connective lines — drawn first, sit behind the panels */}
      <g stroke="var(--color-accent)" strokeWidth="1" opacity="0.45">
        <path d="M160 65 L245 75" strokeDasharray="3 4" />
        <path d="M245 75 L360 55" strokeDasharray="3 4" />
        <path d="M245 75 L245 150" strokeDasharray="3 4" />
        <path d="M120 210 L245 150" strokeDasharray="3 4" />
        <path d="M245 150 L370 195" strokeDasharray="3 4" />
        <path d="M145 330 L120 270" strokeDasharray="3 4" />
      </g>
      <circle cx="245" cy="75" r="5" fill="var(--color-accent)" />
      <circle cx="245" cy="150" r="3" fill="var(--color-ink-muted)" />

      {/* Ledger fragment — top left */}
      <g transform="translate(10,10)">
        <rect width="150" height="110" rx="2" fill="var(--color-surface)" stroke="var(--color-line)" />
        <text x="12" y="22" fontFamily="var(--font-mono)" fontSize="9" fill="var(--color-ink-muted)">Ledger</text>
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(12, ${36 + i * 22})`}>
            <rect width="80" height="7" rx="1" fill="var(--color-line)" />
            <rect x="96" width="26" height="12" y="-2.5" rx="1" fill={i === 1 ? "var(--color-accent)" : "transparent"} stroke={i === 1 ? "none" : "var(--color-line)"} />
          </g>
        ))}
      </g>

      {/* AI chat fragment — top right */}
      <g transform="translate(340,8)">
        <rect width="150" height="90" rx="10" fill="var(--color-surface)" stroke="var(--color-line)" />
        <path d="M18 90 L18 100 L32 90 Z" fill="var(--color-surface)" stroke="var(--color-line)" />
        <text x="14" y="24" fontFamily="var(--font-mono)" fontSize="9" fill="var(--color-ink-muted)">Assistant</text>
        <rect x="14" y="36" width="90" height="7" rx="3.5" fill="var(--color-line)" />
        <rect x="14" y="50" width="60" height="7" rx="3.5" fill="var(--color-line)" />
        <g transform="translate(14,68)">
          <circle cx="0" cy="0" r="2.5" fill="var(--color-accent)" />
          <circle cx="10" cy="0" r="2.5" fill="var(--color-accent)" opacity="0.6" />
          <circle cx="20" cy="0" r="2.5" fill="var(--color-accent)" opacity="0.3" />
        </g>
      </g>

      {/* Orders / tracking fragment — mid left */}
      <g transform="translate(30,150)">
        <rect width="170" height="120" rx="2" fill="var(--color-paper)" stroke="var(--color-line)" />
        <text x="12" y="22" fontFamily="var(--font-mono)" fontSize="9" fill="var(--color-ink-muted)">Orders</text>
        {Array.from({ length: 3 }).map((_, row) =>
          Array.from({ length: 5 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={16 + col * 34}
              cy={44 + row * 24}
              r="2.5"
              fill={row === 1 && col === 3 ? "var(--color-accent)" : "var(--color-line)"}
            />
          ))
        )}
        <path d="M16 44 L118 68 L152 92" stroke="var(--color-accent)" strokeWidth="1.3" fill="none" opacity="0.6" />
      </g>

      {/* Automation node — small standalone element, center */}
      <g transform="translate(215,110)">
        <rect width="60" height="60" rx="30" fill="var(--color-surface)" stroke="var(--color-line)" />
        <path d="M30 16 L30 44 M16 30 L44 30" stroke="var(--color-accent)" strokeWidth="1.5" />
        <circle cx="30" cy="30" r="4" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" />
      </g>

      {/* Analytics / SEO fragment — bottom right */}
      <g transform="translate(300,180)">
        <rect width="190" height="130" rx="2" fill="var(--color-surface)" stroke="var(--color-line)" />
        <text x="12" y="22" fontFamily="var(--font-mono)" fontSize="9" fill="var(--color-ink-muted)">Analytics</text>
        {[26, 44, 34, 58, 40].map((h, i) => (
          <rect key={i} x={14 + i * 22} y={104 - h} width="12" height={h} rx="1" fill={i === 3 ? "var(--color-accent)" : "var(--color-line)"} />
        ))}
        <path d="M14 60 L36 48 L58 66 L80 40 L102 52" stroke="var(--color-accent)" strokeWidth="1.3" fill="none" opacity="0.55" />
      </g>

      {/* Catalog fragment — bottom left */}
      <g transform="translate(70,320)">
        <rect width="180" height="120" rx="2" fill="var(--color-paper)" stroke="var(--color-line)" />
        <text x="12" y="22" fontFamily="var(--font-mono)" fontSize="9" fill="var(--color-ink-muted)">Catalog</text>
        {Array.from({ length: 4 }).map((_, i) => (
          <g key={i} transform={`translate(${12 + i * 42}, 34)`}>
            <rect width="32" height="32" rx="2" fill="var(--color-surface)" stroke="var(--color-line)" />
            <rect y="38" width="32" height="5" rx="1" fill={i === 1 ? "var(--color-accent)" : "var(--color-line)"} />
          </g>
        ))}
      </g>
    </svg>
  );
}