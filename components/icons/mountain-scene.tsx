export function MountainScene() {
  return (
    <svg
      viewBox="0 0 200 140"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of mountains, representing Swat, Pakistan"
      className="h-full w-full"
    >
      <rect width="200" height="140" fill="var(--color-surface)" />
      <path d="M0 100 L45 40 L75 75 L100 30 L140 90 L165 55 L200 100 L200 140 L0 140 Z" fill="var(--color-line)" opacity="0.7" />
      <path d="M0 120 L55 65 L90 100 L120 60 L160 110 L200 90 L200 140 L0 140 Z" fill="var(--color-ink-muted)" opacity="0.35" />
      <circle cx="165" cy="30" r="10" fill="var(--color-accent)" opacity="0.5" />
    </svg>
  );
}