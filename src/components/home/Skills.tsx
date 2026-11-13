import { skillRows } from '../../data/portfolio';
import Reveal from '../Reveal';
import SectionHeader from '../SectionHeader';

const Skills = () => (
  <section id="skills" className="scroll-mt-20 px-5 py-24 sm:px-8">
    <div className="mx-auto max-w-6xl">
      <SectionHeader index="03" label="Skills" title="Tools I reach for" />
      <dl>
        {skillRows.map((row, index) => (
          <Reveal
            key={row.label}
            delay={index * 0.05}
            className="grid gap-4 border-b border-line py-6 first:pt-0 md:grid-cols-[14rem_minmax(0,1fr)]"
          >
            <dt className="label pt-1">{row.label}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {row.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </Reveal>
        ))}
      </dl>
    </div>
  </section>
);

export default Skills;
