import { FaArrowRight, FaGithub } from 'react-icons/fa';
import { projects } from '../../data/portfolio';
import { useSkillFilter } from '../../lib/skillFilter';
import Section from '../Section';

const Featured = () => {
  const featured = projects.filter((project) => project.featured);
  const { matches, isFiltering } = useSkillFilter();

  return (
  <Section id="featured">
    <ul className="grid gap-10">
      {featured.map((project) => (
        <li
          key={project.id}
          id={`featured-${project.id}`}
          className={`transition-opacity duration-300 ${isFiltering && !matches(project.title) ? 'opacity-35' : 'opacity-100'}`}
        >
          {project.image ? (
            <figure className="index-card overflow-hidden p-2" style={{ ['--tilt' as string]: '-0.8deg' }}>
              <a
                href={project.live || project.github}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
                aria-hidden="true"
                className="group block overflow-hidden"
                data-cursor="open"
              >
                <img
                  src={project.image}
                  alt=""
                  width={960}
                  height={540}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none"
                />
              </a>
              {project.imageCaption ? (
                <figcaption className="mt-2 px-1 text-xs text-muted">{project.imageCaption}</figcaption>
              ) : null}
            </figure>
          ) : null}
          <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-lg font-semibold text-fg">{project.title}</h3>
            {project.year ? <p className="label tabular-nums">{project.year}</p> : null}
          </div>
          <p className="mt-2 text-[0.9375rem] leading-7 text-muted">{project.summary}</p>
          <p className="mt-3 font-mono text-xs leading-6 text-muted">{project.stack.join(' · ')}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg bg-fg px-4 py-2 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
              >
                Live demo
                <FaArrowRight size={10} className="-rotate-45" aria-hidden="true" />
                <span className="sr-only">of {project.title} (opens in a new tab)</span>
              </a>
            ) : null}
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  project.live
                    ? 'inline-flex items-center gap-2 rounded-lg border border-line-strong px-4 py-2 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent-text'
                    : 'inline-flex items-center gap-2 rounded-lg bg-fg px-4 py-2 text-sm font-semibold text-bg transition-opacity hover:opacity-90'
                }
              >
                <FaGithub size={13} aria-hidden="true" />
                GitHub
                <span className="sr-only">repository for {project.title} (opens in a new tab)</span>
              </a>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  </Section>
  );
};

export default Featured;
