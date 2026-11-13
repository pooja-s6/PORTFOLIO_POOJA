type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

const SectionHeading = ({ eyebrow, title, description }: SectionHeadingProps) => (
  <div className="mb-12 max-w-2xl">
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent-text">{eyebrow}</p>
    <h2 className="font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">{title}</h2>
    {description ? <p className="mt-4 text-base leading-relaxed text-muted">{description}</p> : null}
  </div>
);

export default SectionHeading;
