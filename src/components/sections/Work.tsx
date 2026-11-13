import { experience } from '../../data/portfolio';
import Rich from '../Rich';
import Section from '../Section';

const Work = () => (
  <Section id="work">
    <ol className="space-y-12">
      {experience.map((item) => (
        <li key={item.id} id={item.id} className="scroll-mt-24">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-lg font-semibold text-fg">
              {item.company}
              {item.current ? (
                <span className="ml-2 rounded-full border border-line px-2 py-0.5 align-middle text-xs font-medium text-success">
                  now
                </span>
              ) : null}
            </h3>
            <p className="text-sm tabular-nums text-muted">{item.period}</p>
          </div>
          <p className="mt-0.5 text-[0.9375rem] text-muted">
            {item.role} · {item.location}
          </p>
          <ul className="mt-4 space-y-2.5">
            {item.points.map((point) => (
              <li key={point} className="relative pl-5 text-[0.9375rem] leading-7 text-muted">
                <span className="absolute left-0 top-[0.8rem] h-px w-2.5 bg-line-strong" aria-hidden="true" />
                <Rich text={point} />
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  </Section>
);

export default Work;
