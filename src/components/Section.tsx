import type { ReactNode } from 'react';
import { sections } from '../data/portfolio';
import Reveal from './Reveal';

type SectionProps = {
  id: (typeof sections)[number]['id'];
  children: ReactNode;
};

const Section = ({ id, children }: SectionProps) => {
  const meta = sections.find((section) => section.id === id);

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24 py-10 sm:py-14">
      <Reveal>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
          <h2
            id={`${id}-title`}
            className="font-serif text-4xl font-medium uppercase tracking-[0.04em] text-fg sm:text-[2.65rem]"
          >
            {meta?.heading}
          </h2>
          {meta?.note ? <p className="label pb-1">{meta.note}</p> : null}
        </div>
        {children}
      </Reveal>
    </section>
  );
};

export default Section;
