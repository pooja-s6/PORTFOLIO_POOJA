import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { experience } from '../data/portfolio';
import Reveal from './Reveal';

const ExperienceRows = () => (
  <ol className="border-t border-line">
    {experience.map((item, index) => (
      <li key={item.id} className="border-b border-line">
        <Reveal delay={index * 0.05}>
          <Link
            to={`/experience#${item.id}`}
            className="group -mx-3 grid gap-2 rounded-lg px-3 py-6 transition-colors hover:bg-surface sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-8"
          >
            <div>
              <p className="flex flex-wrap items-baseline gap-x-3">
                <span className="text-lg font-semibold text-fg">{item.company}</span>
                <span className="text-sm text-muted">{item.role}</span>
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{item.impact}</p>
            </div>
            <div className="flex items-center gap-3 sm:justify-end">
              {item.current ? <span className="label text-success">Current</span> : null}
              <span className="label whitespace-nowrap">{item.period}</span>
              <FaArrowRight
                size={12}
                aria-hidden="true"
                className="text-accent-text opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100 group-focus-visible:opacity-100"
              />
            </div>
          </Link>
        </Reveal>
      </li>
    ))}
  </ol>
);

export default ExperienceRows;
