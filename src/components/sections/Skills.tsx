import { foundationsLine, languageSkills, skillLayers } from '../../data/portfolio';
import type { SkillItem } from '../../data/portfolio';
import { jumpToPlace } from '../../lib/jumpToPlace';
import { useSkillFilter } from '../../lib/skillFilter';
import Rich from '../Rich';
import Section from '../Section';

const SkillChip = ({ skill }: { skill: SkillItem }) => {
  const { selected, select } = useSkillFilter();
  const pressed = selected === skill.name;
  const canOpen = skill.usedIn.length > 0;

  return (
    <button
      type="button"
      aria-pressed={pressed}
      disabled={!canOpen && !pressed}
      onClick={() => canOpen && select(skill.name)}
      className={`${skill.kind === 'primary' ? 'chip-primary' : 'chip-also'} ${!canOpen ? 'opacity-70' : ''}`}
      data-cursor="view"
    >
      {skill.name}
    </button>
  );
};

const Skills = () => {
  const { selected, clear, isFiltering, places } = useSkillFilter();

  return (
    <Section id="skills">
      <p className="label -mt-4 mb-8">Backend and AI · primary stack</p>

      {isFiltering ? (
        <div className="mb-6 rounded-sm border border-dashed border-line-strong bg-paper px-4 py-3">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-sm text-muted">
                Showing where <span className="font-medium text-fg">{selected}</span> shows up
              </p>
              <p className="label mt-3">Used in</p>
              <ul className="mt-2 space-y-1.5">
                {places.slice(0, 5).map((place) => (
                  <li key={place.label}>
                    <button
                      type="button"
                      onClick={() => jumpToPlace(place)}
                      className="text-left text-sm text-fg underline decoration-line-strong underline-offset-3 hover:text-accent-text"
                      data-cursor="open"
                    >
                      {place.label}
                      <span className="ml-1 font-mono text-xs text-muted">{place.year}</span>
                    </button>
                  </li>
                ))}
              </ul>
              {places.length > 5 ? <p className="mt-2 text-xs text-muted">+{places.length - 5} more</p> : null}
            </div>
            <button type="button" onClick={clear} className="hand shrink-0 text-lg text-accent-text" aria-label="Clear skill filter">
              ✕
            </button>
          </div>
        </div>
      ) : null}

      <div className="grid gap-8 sm:grid-cols-2 sm:gap-5">
        {skillLayers.map((layer, index) => (
          <article key={layer.id} className="index-card relative p-5" style={{ ['--tilt' as string]: `${index % 2 === 0 ? -1.2 : 1.1}deg` }}>
            <span aria-hidden="true" className="paperclip" />
            <div className="flex items-baseline justify-between gap-3">
              <p className="label">{layer.title}</p>
              <p className="label">{layer.number}</p>
            </div>
            <hr className="divider-dashed my-3" />
            <ul className="flex flex-wrap gap-2">
              {layer.skills.map((skill) => (
                <li key={skill.name}>
                  <SkillChip skill={skill} />
                </li>
              ))}
            </ul>
            {index < skillLayers.length - 1 ? (
              <p
                aria-hidden="true"
                className="hand pointer-events-none absolute -bottom-5 left-1/2 z-10 -translate-x-1/2 text-lg leading-none text-muted sm:hidden"
              >
                ↓
              </p>
            ) : null}
          </article>
        ))}
      </div>

      <div className="mt-10 border-t border-dashed border-line-strong pt-6">
        <p className="label mb-3">Languages</p>
        <p className="font-mono text-sm leading-7 text-fg">
          <span className="font-semibold">Primary:</span>{' '}
          {languageSkills.primary.map((skill, index) => (
            <span key={skill.name}>
              {index > 0 ? ', ' : ''}
              <SkillChip skill={{ ...skill, kind: 'primary' }} />
            </span>
          ))}
          <span className="text-muted">. Also comfortable with: </span>
          {languageSkills.also.map((skill, index) => (
            <span key={skill.name}>
              {index > 0 ? ', ' : ''}
              <SkillChip skill={{ ...skill, kind: 'also' }} />
            </span>
          ))}
          .
        </p>
        <div className="mt-8 rounded-sm border border-accent/40 bg-accent-fill/10 px-4 py-4 sm:px-5">
          <p className="label text-accent-text">Core CS</p>
          <p className="mt-2 text-base font-medium leading-7 text-fg sm:text-lg">
            <Rich text={foundationsLine} />
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
