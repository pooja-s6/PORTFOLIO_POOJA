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
              onFocusCapture={() => setOpenId(item.id)}
            >
              <span aria-hidden="true" className="absolute -left-[29px] top-8 h-2.5 w-2.5 rounded-full border border-accent bg-paper sm:-left-[37px]" />
              <button
                type="button"
                className="w-full text-left"
                aria-expanded={open}
                onClick={() => coarse && setOpenId((current) => (current === item.id ? null : item.id))}
              >
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                  <div>
                    <h3 className="inline-flex flex-wrap items-center gap-3 text-lg font-semibold text-fg">
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
                  <p className="label tabular-nums">{item.period}</p>
                </div>
              </button>
              {open ? (
                <ul className="mt-4 space-y-2.5">
                  {item.points.map((point) => (
                    <li key={point} className="relative pl-5 text-[0.9375rem] leading-7 text-muted">
                      <span className="absolute left-0 top-[0.8rem] h-px w-2.5 bg-line-strong" aria-hidden="true" />
                      <Rich text={point} />
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-sm text-muted">{coarse ? 'Tap to view details' : 'Hover to view details'}</p>
              )}
            </li>
          );
        })}
      </ol>
    </Section>
  );
};

export default Work;
