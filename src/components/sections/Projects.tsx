import { useId, useState } from 'react';
import { FaArrowRight, FaChevronDown, FaGithub } from 'react-icons/fa';
import { projects } from '../../data/portfolio';
import type { Project } from '../../data/portfolio';
import Rich from '../Rich';
import Section from '../Section';

const linkClass =
  'group inline-flex items-center gap-1.5 text-sm font-medium text-fg underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent-text hover:decoration-accent';

const ProjectRow = ({ project }: { project: Project }) => {
  const [open, setOpen] = useState(false);
  const detailsId = useId();

  return (
    <li className="py-7">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-lg font-semibold text-fg">{project.title}</h3>
        {project.year ? <p className="text-sm tabular-nums text-muted">{project.year}</p> : null}
      </div>
      <p className="mt-2 text-[0.9375rem] leading-7 text-muted">{project.summary}</p>
      <p className="mt-3 font-mono text-xs leading-6 text-muted">{project.stack.join(' · ')}</p>

      {open ? (
        <ul id={detailsId} className="mt-4 space-y-2.5">
          {project.details.map((detail) => (
            <li key={detail} className="relative pl-5 text-[0.9375rem] leading-7 text-muted">
              <span className="absolute left-0 top-[0.8rem] h-px w-2.5 bg-line-strong" aria-hidden="true" />
              <Rich text={detail} />
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-4 flex flex-wrap items-center gap-5">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls={detailsId}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-fg"
        >
          {open ? 'Hide details' : 'How I built it'}
          <FaChevronDown size={10} className={`transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
        </button>
        {project.live ? (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className={linkClass}>
            Visit site
            <FaArrowRight
              size={10}
              className="-rotate-45 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
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
    </li>
  );
};

const Projects = () => (
  <Section id="projects">
    <ul className="divide-y divide-line border-y border-line">
      {projects.map((project) => (
        <ProjectRow key={project.title} project={project} />
      ))}
    </ul>
  </Section>
);

export default Projects;
