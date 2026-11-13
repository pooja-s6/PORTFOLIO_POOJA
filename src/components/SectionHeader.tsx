import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

type SectionHeaderProps = {
  index?: string;
  label: string;
  title: string;
  link?: { to: string; text: string };
  as?: 'h1' | 'h2';
};

const SectionHeader = ({ index, label, title, link, as: Heading = 'h2' }: SectionHeaderProps) => (
  <div className="mb-10 flex flex-col gap-4 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
    <div>
      <p className="label">
        {index ? <span className="text-accent-text">{index} / </span> : null}
        {label}
      </p>
      <Heading className="mt-3 font-serif text-4xl font-medium tracking-tight text-fg sm:text-5xl">{title}</Heading>
    </div>
    {link ? (
      <Link
        to={link.to}
        className="group inline-flex items-center gap-2 self-start text-sm font-medium text-fg hover:text-accent-text sm:self-auto"
      >
        {link.text}
        <FaArrowRight size={11} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    ) : null}
  </div>
);

export default SectionHeader;
