import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import { experience } from '../data/portfolio';
import { usePageTitle } from '../lib/navigation';
import PageShell from './PageShell';

const ExperiencePage = () => {
  usePageTitle('Experience');

  return (
    <PageShell>
      <SectionHeader label="Experience" title="Full history" as="h1" />
      <ol>
        {experience.map((item, index) => (
          <li key={item.id} id={item.id} className="scroll-mt-24 border-b border-line py-10 first:pt-0">
            <Reveal delay={index * 0.04} className="grid gap-6 md:grid-cols-[16rem_minmax(0,1fr)] md:gap-12">
              <div>
                <p className="label">{item.period}</p>
                {item.current ? <p className="label mt-1 text-success">Current</p> : null}
                <p className="label mt-1">{item.location}</p>
              </div>
              <div>
                <h2 className="font-serif text-3xl font-medium text-fg">{item.company}</h2>
                <p className="mt-1 text-muted">{item.role}</p>
                <ul className="mt-5 space-y-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 leading-relaxed text-fg">
                      <span className="mt-2.5 h-1 w-3 shrink-0 bg-accent" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 font-mono text-xs text-muted">{item.tags.join(' · ')}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </PageShell>
  );
};

export default ExperiencePage;
