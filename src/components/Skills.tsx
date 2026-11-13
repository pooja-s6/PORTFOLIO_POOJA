import { skillGroups } from '../data/portfolio';
import { iconFor } from '../data/icons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const Skills = () => (
  <section id="skills" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
    <div className="mx-auto max-w-6xl">
      <SectionHeading eyebrow="Skills" title="Technical skills" description="Grouped by where I use them." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal
            key={group.title}
            delay={(index % 3) * 0.05}
            className={`surface-card p-6 ${group.items.length > 10 ? 'sm:col-span-2' : ''}`}
          >
            <h3 className="font-display text-lg font-semibold text-fg">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => {
                const Icon = iconFor(skill);
                return (
                  <li
                    key={skill}
                    className="chip px-3 py-1.5 text-sm transition-transform duration-200 hover:-translate-y-0.5 hover:border-accent"
                  >
                    {Icon ? <Icon className="text-accent-text" aria-hidden="true" /> : null}
                    {skill}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
