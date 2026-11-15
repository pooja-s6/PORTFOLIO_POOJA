import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { experience } from '../../data/portfolio';
import { useSkillFilter } from '../../lib/skillFilter';
import Rich from '../Rich';
import Section from '../Section';

const Work = () => {
  const { matches, isFiltering } = useSkillFilter();
  const [openId, setOpenId] = useState<string | null>(experience.find((item) => item.current)?.id ?? experience[0]?.id ?? null);
  const [coarse, setCoarse] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(pointer: coarse)');
    const sync = () => setCoarse(media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  return (
    <Section id="work">
      <p className="mb-8 max-w-2xl text-base leading-7 text-muted">
        {coarse
          ? 'Tap a company to expand the details. Tap again to collapse.'
          : 'Hover a company to expand the details of that internship.'}
      </p>
      <ol className="relative space-y-1 border-l border-dashed border-line-strong pl-6 sm:pl-8">
        {experience.map((item) => {
          const open = openId === item.id;
          const visible = matches(item.company);
          return (
            <li
              key={item.id}
              id={item.id}
              className={`relative scroll-mt-24 border-b border-line py-6 transition-opacity duration-300 last:border-b-0 ${
                isFiltering && !visible ? 'opacity-35' : 'opacity-100'
              }`}
              onMouseEnter={() => !coarse && setOpenId(item.id)}
            >
              <span aria-hidden="true" className="absolute -left-[29px] top-8 h-2.5 w-2.5 rounded-full border border-accent bg-paper sm:-left-[37px]" />
              <button
                type="button"
                className="w-full text-left"
                aria-expanded={open}
                onClick={() => {
                  if (coarse) {
                    setOpenId((current) => (current === item.id ? null : item.id));
                    return;
                  }
                  setOpenId(item.id);
                }}
              >
                <div className="grid grid-cols-1 items-start gap-2 sm:grid-cols-[minmax(0,1fr)_11.5rem]">
                  <div className="min-w-0">
                    <h3 className="subhead inline-flex flex-wrap items-center gap-3">
                      {item.company}
                      {item.current ? (
                        <span className="stamp" aria-label="Current role">
                          Now
                        </span>
                      ) : null}
                    </h3>
                    <p className="mt-1 text-[0.9375rem] text-muted">
                      {item.role} · {item.location}
                    </p>
                  </div>
                  <p className="label whitespace-nowrap tabular-nums sm:justify-self-end sm:pt-1 sm:text-right">
                    {item.period}
                  </p>
                </div>
              </button>
              <AnimatePresence initial={false}>
                {open ? (
                  <motion.div
                    key="details"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <ul className="mt-4 space-y-2.5">
                      {item.points.map((point) => (
                        <li key={point} className="relative pl-5 body-copy">
                          <span className="absolute left-0 top-[0.8rem] h-px w-2.5 bg-line-strong" aria-hidden="true" />
                          <Rich text={point} />
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </li>
          );
        })}
      </ol>
    </Section>
  );
};

export default Work;
