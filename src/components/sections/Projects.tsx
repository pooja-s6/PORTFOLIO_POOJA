import { useId, useState } from 'react';
import { FaArrowRight, FaGithub } from 'react-icons/fa';
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
          <img src={project.image} alt="" className="aspect-video w-full object-cover object-top" />
        </div>
      ) : null}

      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-lg font-semibold text-fg">{project.title}</h3>
        {project.year ? <p className="label tabular-nums">{project.year}</p> : null}
      </div>
      <p className="mt-2 text-[0.9375rem] leading-7 text-muted">{project.summary}</p>
      <p className="mt-3 font-mono text-xs leading-6 text-muted">{project.stack.join(' · ')}</p>

      {open ? (
        <div id={detailsId} className="retro-window mt-5">
          <div className="retro-titlebar">
            <span className="retro-dot" aria-hidden="true" />
            <span className="retro-dot" aria-hidden="true" />
            <span className="retro-dot" aria-hidden="true" />
            <span className="ml-2 text-muted">{project.title}</span>
          </div>
          <div className="grid gap-4 p-4 sm:grid-cols-2">
            <div>
              <p className="label">Problem</p>
              <p className="mt-1 text-sm leading-6 text-muted">{project.problem}</p>
            </div>
            <div>
              <p className="label">What I built</p>
              <ul className="mt-1 space-y-2">
                {project.details.map((detail) => (
                  <li key={detail} className="text-sm leading-6 text-muted">
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

      <div className="mt-4 flex flex-wrap items-center gap-5">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls={detailsId}
          className="inline-flex items-center gap-1.5 font-mono text-sm text-muted transition-colors hover:text-fg"
          data-cursor="view"
        >
          {open ? 'Close case study' : 'Open case study'}
        </button>
        {project.live ? (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5 text-sm font-medium text-fg underline decoration-line-strong underline-offset-4 hover:text-accent-text" data-cursor="open">
            Live demo
            <FaArrowRight size={10} className="-rotate-45" aria-hidden="true" />
          </a>
        ) : null}
        {project.github ? (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-fg underline decoration-line-strong underline-offset-4 hover:text-accent-text" data-cursor="open">
            <FaGithub size={13} aria-hidden="true" />
            GitHub
          </a>
        ) : null}
      </div>
    </li>
  );
};

const Projects = () => (
  <Section id="projects">
    <ul>
      {projects.map((project) => (
        <ProjectRow key={project.id} project={project} />
      ))}
    </ul>
  </Section>
);

export default Projects;
