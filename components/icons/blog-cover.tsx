export function BlogCover({ title }: { title: string }) {
  return (
    <svg
      viewBox="0 0 400 220"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`Cover illustration for ${title}`}
      className="h-full w-full"
    >
      <rect width="400" height="220" fill="var(--color-surface)" />
      <circle cx="140" cy="100" r="46" fill="none" stroke="var(--color-accent)" strokeWidth="3" />
      <line x1="172" y1="132" x2="210" y2="170" stroke="var(--color-accent)" strokeWidth="5" strokeLinecap="round" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={240 + i * 26}
          y={160 - [40, 65, 30, 80, 50][i]}
          width="16"
          height={[40, 65, 30, 80, 50][i]}
          rx="2"
          fill={i === 3 ? "var(--color-accent)" : "var(--color-line)"}
        />
      ))}
    </svg>
  );
}