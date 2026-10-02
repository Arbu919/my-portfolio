export function BlobShape({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <path
        d="M45 20 C90 0 160 15 180 60 C200 105 175 155 130 175 C85 195 30 180 15 135 C0 90 5 40 45 20 Z"
        fill="var(--color-pill)"
      />
    </svg>
  );
}