import type { ProjectCategory } from "@/types";

export function ProjectVisual({ category, name }: { category: ProjectCategory; name: string }) {
  return (
    <svg
      viewBox="0 0 400 260"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`Illustrative interface fragment for ${name}`}
      className="h-full w-full"
    >
      <rect width="400" height="260" fill="var(--color-pill)" />

      {category === "pwa" && (
        <g>
          {Array.from({ length: 6 }).map((_, i) => (
            <g key={i} transform={`translate(28, ${28 + i * 34})`}>
              <rect width="200" height="10" rx="3" fill="var(--color-surface)" />
              <rect
                x="230"
                width="60"
                height="18"
                y="-4"
                rx="9"
                fill={i % 3 === 0 ? "var(--color-accent)" : "var(--color-surface)"}
              />
            </g>
          ))}
        </g>
      )}

      {category === "saas" && (
        <g>
          <rect x="28" y="28" width="150" height="100" rx="6" fill="var(--color-surface)" />
          <rect x="196" y="28" width="176" height="46" rx="6" fill="var(--color-surface)" />
          <rect x="196" y="82" width="176" height="46" rx="6" fill="var(--color-surface)" />
          {Array.from({ length: 3 }).map((_, i) => (
            <rect
              key={i}
              x="28"
              y={150 + i * 24}
              width="344"
              height="10"
              rx="3"
              fill={i === 1 ? "var(--color-accent)" : "var(--color-surface)"}
            />
          ))}
        </g>
      )}

      {category === "ecommerce" && (
        <g>
          {Array.from({ length: 3 }).map((_, i) => (
            <g key={i} transform={`translate(${28 + i * 122}, 28)`}>
              <rect width="98" height="98" rx="6" fill="var(--color-surface)" />
              <rect y="110" width="98" height="8" rx="3" fill="var(--color-surface)" />
              <rect y="124" width="56" height="8" rx="3" fill={i === 1 ? "var(--color-accent)" : "var(--color-surface)"} />
            </g>
          ))}
          <rect x="28" y="188" width="120" height="10" rx="3" fill="var(--color-surface)" />
          <rect x="292" y="184" width="80" height="20" rx="10" fill="var(--color-accent)" />
        </g>
      )}
    </svg>
  );
}