import { skillRows, skillUsage } from '../../data/portfolio';
import Section from '../Section';

const Skills = () => (
  <Section id="skills">
    <dl className="space-y-6">
      {skillRows.map((row) => (
        <div key={row.label} className="grid gap-3 sm:grid-cols-[9.5rem_minmax(0,1fr)]">
          <dt className="pt-1 text-sm font-medium text-fg">{row.label}</dt>
          <dd>
            <ul className="flex flex-wrap gap-2">
              {row.items.map((skill) => {
                const usedIn = skillUsage(skill);
                return (
                  <li key={skill}>
                    {usedIn.length ? (
                      <span
                        tabIndex={0}
                        aria-label={`${skill}, used in ${usedIn.join(', ')}`}
                        className="tag has-tooltip relative cursor-default underline decoration-dotted decoration-line-strong underline-offset-4"
                      >
                        {skill}
                        <span className="tooltip w-max max-w-[15rem] whitespace-normal text-center leading-snug" role="tooltip">
                          used in {usedIn.join(', ')}
                        </span>
                      </span>
                    ) : (
                      <span className="tag">{skill}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  </Section>
);

export default Skills;
