import { FaArrowRight, FaGithub } from 'react-icons/fa';
import { projects } from '../../data/portfolio';
import Section from '../Section';

const linkClass =
  'group inline-flex items-center gap-1.5 text-sm font-medium text-fg underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent-text hover:decoration-accent';

const Projects = () => (
  <Section id="projects">
    <ul className="divide-y divide-line border-y border-line">
      {projects.map((project) => (
        <li key={project.title} className="py-7">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-lg font-semibold text-fg">{project.title}</h3>
            {project.year ? <p className="text-sm tabular-nums text-muted">{project.year}</p> : null}
          </div>
          <p className="mt-2 text-[0.9375rem] leading-7 text-muted">{project.summary}</p>
          <p className="mt-3 font-mono text-xs leading-6 text-muted">{project.stack.join(' · ')}</p>
          {project.live || project.github ? (
            <div className="mt-4 flex flex-wrap gap-5">
              {project.live ? (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Visit site
                  <FaArrowRight size={10} className="-rotate-45 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  <span className="sr-only">for {project.title} (opens in a new tab)</span>
                </a>
              ) : null}
              {project.github ? (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  <FaGithub size={13} aria-hidden="true" />
                  Source
                  <span className="sr-only">code for {project.title} (opens in a new tab)</span>
                </a>
              ) : null}
            </div>
          ) : null}
        </li>
      ))}
    </ul>
  </Section>
);

export default Projects;
