export function ProductCollage() {
  return (
    <svg
      viewBox="0 0 480 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Abstract illustration of a ledger panel, a measurement grid, and a product grid — representing Mera Hisaab, the tailor shop platform, and the e-commerce store."
      className="h-auto w-full max-w-full select-none"
    >
      {/* Panel 1: Mera Hisaab (Ledger Panel) */}
      <g transform="translate(0,0)">
        <rect
          x="0"
          y="0"
          width="220"
          height="180"
          rx="4"
          fill="var(--color-surface, #f4f4f5)"
          stroke="var(--color-line, #e4e4e7)"
        />
        <text
          x="16"
          y="28"
          fontFamily="var(--font-mono, monospace)"
          fontSize="11"
          fontWeight="500"
          fill="var(--color-ink-muted, #71717a)"
        >
          Mera Hisaab
        </text>
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i} transform={`translate(16, ${46 + i * 24})`}>
            <rect
              width="130"
              height="8"
              rx="2"
              fill="var(--color-line, #e4e4e7)"
            />
            <rect
              x="150"
              width="38"
              height="14"
              y="-3"
              rx="2"
              fill={i % 2 === 0 ? "var(--color-accent, #2563eb)" : "transparent"}
              stroke={i % 2 === 0 ? "none" : "var(--color-line, #e4e4e7)"}
            />
          </g>
        ))}
      </g>

      {/* Panel 2: Tailor Shop (Measurement Grid) */}
      <g transform="translate(236,0)">
        <rect
          x="0"
          y="0"
          width="244"
          height="180"
          rx="4"
          fill="var(--color-paper, #ffffff)"
          stroke="var(--color-line, #e4e4e7)"
        />
        <text
          x="16"
          y="28"
          fontFamily="var(--font-mono, monospace)"
          fontSize="11"
          fontWeight="500"
          fill="var(--color-ink-muted, #71717a)"
        >
          Tailor Shop
        </text>
        {Array.from({ length: 4 }).map((_, row) =>
          Array.from({ length: 5 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={24 + col * 42}
              cy={56 + row * 28}
              r="3"
              fill={
                row === 1 && col === 3
                  ? "var(--color-accent, #2563eb)"
                  : "var(--color-line, #e4e4e7)"
              }
            />
          ))
        )}
        <path
          d="M24 56 L150 84 L192 140"
          stroke="var(--color-accent, #2563eb)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
      </g>

      {/* Panel 3: E-Commerce Store (The House of SAMzz) */}
      <g transform="translate(0,196)">
        <rect
          x="0"
          y="0"
          width="480"
          height="224"
          rx="4"
          fill="var(--color-surface, #f4f4f5)"
          stroke="var(--color-line, #e4e4e7)"
        />
        <text
          x="16"
          y="28"
          fontFamily="var(--font-mono, monospace)"
          fontSize="11"
          fontWeight="500"
          fill="var(--color-ink-muted, #71717a)"
        >
          THE HOUSE OF SAMzz
        </text>
        {Array.from({ length: 4 }).map((_, i) => (
          <g key={i} transform={`translate(${16 + i * 116}, 44)`}>
            <rect
              width="100"
              height="100"
              rx="3"
              fill="var(--color-paper, #ffffff)"
              stroke="var(--color-line, #e4e4e7)"
            />
            <rect
              x="10"
              y="112"
              width="80"
              height="7"
              rx="2"
              fill="var(--color-line, #e4e4e7)"
            />
            <rect
              x="10"
              y="126"
              width="46"
              height="7"
              rx="2"
              fill={
                i === 1
                  ? "var(--color-accent, #2563eb)"
                  : "var(--color-line, #e4e4e7)"
              }
            />
          </g>
        ))}
      </g>
    </svg>
  );
}