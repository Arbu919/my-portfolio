export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="text-xs font-medium tracking-[0.14em] text-ink-muted">{eyebrow}</p>
      )}
      <h2 className={`font-display text-3xl leading-tight text-ink md:text-4xl ${eyebrow ? "mt-3" : ""}`}>
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">{description}</p>
      )}
    </div>
  );
}