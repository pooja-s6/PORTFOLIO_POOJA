import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { experience } from '../data/portfolio';
import type { Experience as ExperienceItem } from '../data/portfolio';
import { iconFor } from '../data/icons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const VISIBLE = 3;

const TimelineItem = ({ item }: { item: ExperienceItem }) => (
  <li className="relative md:pl-10">
    <span
      className="absolute left-0 top-8 hidden h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg shadow-[0_0_14px_var(--glow)] md:block"
      aria-hidden="true"
    />
    <Reveal className="surface-card p-6 sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="font-display text-xl font-semibold text-fg sm:text-2xl">{item.role}</h3>
          <p className="mt-1 text-sm text-muted">
            <span className="font-medium text-accent-text">{item.company}</span> · {item.location}
          </p>
        </div>
        <p className="flex shrink-0 items-center gap-2 text-sm text-muted">
          {item.period}
          {item.current ? (
            <span className="badge-success inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--success-dot)]" aria-hidden="true" />
              Current
            </span>
          ) : null}
        </p>
      </div>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
        {item.tags.map((tag) => {
          const Icon = iconFor(tag);
          return (
            <li key={tag} className="chip px-3 py-1 text-xs">
              {Icon ? <Icon className="text-accent-text" aria-hidden="true" /> : null}
              {tag}
            </li>
          );
        })}
      </ul>
      <ul className="mt-5 space-y-3">
        {item.points.map((point) => (
          <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            {point}
          </li>
        ))}
      </ul>
    </Reveal>
  </li>
);

const Experience = () => {
  const [showAll, setShowAll] = useState(false);
  const items = showAll ? experience : experience.slice(0, VISIBLE);

  return (
    <section id="experience" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Experience" title="Where I have worked" description="Five internships, newest first." />

        <div className="relative">
          <div
            className="absolute bottom-4 left-[6px] top-4 hidden w-0.5 rounded-full bg-gradient-to-b from-accent via-accent/50 to-transparent shadow-[0_0_18px_var(--glow)] md:block"
            aria-hidden="true"
          />
          <ol id="experience-list" className="space-y-5">
            {items.map((item) => (
              <TimelineItem key={item.company} item={item} />
            ))}
          </ol>
        </div>

        {experience.length > VISIBLE ? (
          <div className="mt-8 md:pl-10">
            <button
              type="button"
              onClick={() => setShowAll((value) => !value)}
              aria-expanded={showAll}
              aria-controls="experience-list"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-sm font-medium text-fg transition hover:border-accent hover:text-accent-text"
            >
              {showAll ? 'Show less' : 'Show earlier experience'}
              <FaChevronDown className={`transition-transform ${showAll ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Experience;
