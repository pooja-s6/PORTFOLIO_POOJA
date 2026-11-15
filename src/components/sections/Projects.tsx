import { useId, useState } from 'react';
import { FaArrowRight, FaGithub, FaTimes } from 'react-icons/fa';
import { projects } from '../../data/portfolio';
import type { Project } from '../../data/portfolio';
import { useSkillFilter } from '../../lib/skillFilter';
import Rich from '../Rich';
import Section from '../Section';

const ProjectRow = ({ project }: { project: Project }) => {
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState({ x: 0, y: 0, show: false });
  const detailsId = useId();
  const { matches, isFiltering } = useSkillFilter();
  const visible = matches(project.title);

  return (
    <li
      id={project.id}
      className={`relative scroll-mt-24 border-b border-line py-7 transition-opacity duration-300 last:border-b-0 ${
        isFiltering && !visible ? 'opacity-35' : 'opacity-100'
      }`}
      onMouseMove={(event) => {
        if (!project.image || window.matchMedia('(pointer: coarse)').matches) return;
        const rect = event.currentTarget.getBoundingClientRect();
        setPreview({ x: event.clientX - rect.left + 18, y: event.clientY - rect.top - 40, show: true });
      }}
      onMouseLeave={() => setPreview((current) => ({ ...current, show: false }))}
    >
      {project.image && preview.show ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute z-20 hidden w-44 overflow-hidden rounded-sm border border-line-strong bg-white p-1.5 pb-5 shadow-xl md:block"
          style={{ left: preview.x, top: preview.y, transform: 'rotate(2deg)' }}
        >
          <img
            src={project.image}
            alt={project.imageAlt ?? `${project.title} preview`}
            className="aspect-video w-full object-cover object-top"
          />
        </div>
      ) : null}

      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="subhead">{project.title}</h3>
        {project.year ? <p className="label tabular-nums">{project.year}</p> : null}
      </div>
      <p className="mt-2 body-copy">{project.summary}</p>
      <p className="mt-3 font-mono text-xs leading-6 text-muted">{project.stack.join(' · ')}</p>

      {open ? (
        <div id={detailsId} className="retro-window mt-5">
          <div className="retro-titlebar flex items-center gap-2">
            <span className="retro-dot" aria-hidden="true" />
            <span className="retro-dot" aria-hidden="true" />
            <span className="retro-dot" aria-hidden="true" />
            <span className="ml-2 min-w-0 flex-1 truncate text-muted">{project.title}</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={`Close case study for ${project.title}`}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-md text-fg transition-colors hover:bg-black/10"
            >
              <FaTimes size={14} aria-hidden="true" />
            </button>
          </div>
          <div className="grid gap-4 p-4 sm:grid-cols-2 sm:p-5">
            <div>
              <p className="label">Problem</p>
              <p className="mt-1 text-base leading-7 text-muted">{project.problem}</p>
            </div>
            <div>
              <p className="label">What I built</p>
              <ul className="mt-1 space-y-2">
                {project.details.map((detail) => (
                  <li key={detail} className="text-base leading-7 text-muted">
                    <Rich text={detail} />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label">Stack</p>
              <p className="mt-1 font-mono text-xs leading-6 text-muted">{project.stack.join(' · ')}</p>
            </div>
            <div>
              <p className="label">Links</p>
              <div className="mt-2 flex flex-wrap gap-4">
                {project.live ? (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-accent-text underline underline-offset-4" data-cursor="open">
                    Live demo
                  </a>
                ) : null}
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-text underline underline-offset-4" data-cursor="open">
                    <FaGithub size={12} aria-hidden="true" />
                    GitHub
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls={detailsId}
          className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-accent bg-accent-fill/10 px-4 py-2.5 text-sm font-semibold text-accent-text transition-colors hover:bg-accent-fill/20"
          data-cursor="view"
        >
          {open ? 'Close case study' : 'Open case study'}
        </button>
        {project.live ? (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-11 items-center gap-1.5 px-1 text-sm font-medium text-fg underline decoration-line-strong underline-offset-4 hover:text-accent-text" data-cursor="open">
            Live demo
            <FaArrowRight size={10} className="-rotate-45" aria-hidden="true" />
          </a>
        ) : null}
        {project.github ? (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 px-1 text-sm font-medium text-fg underline decoration-line-strong underline-offset-4 hover:text-accent-text" data-cursor="open">
            <FaGithub size={13} aria-hidden="true" />
            GitHub
          </a>
        ) : null}
      </div>
    </li>
  );
};

const Projects = () => {
  const rest = projects.filter((project) => !project.featured);

  return (
    <Section id="projects">
      <ul>
        {rest.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </ul>
    </Section>
  );
};

export default Projects;
