import { useState } from 'react';
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projects } from '../data/portfolio';
import type { Project } from '../data/portfolio';
import Reveal from './Reveal';

const secondaryLink =
  'relative z-10 inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-accent-text';

const ProjectRow = ({ project, number, onHover }: { project: Project; number: number; onHover: (image: string) => void }) => {
  const primary = project.live || project.github;

  return (
    <li
      className="group relative -mx-3 grid gap-3 rounded-lg border-b border-line px-3 py-6 transition-colors hover:bg-surface sm:grid-cols-[3rem_4rem_minmax(0,1fr)_auto] sm:gap-6"
      onMouseEnter={() => onHover(project.image)}
      onMouseLeave={() => onHover('')}
    >
      <span className="label text-accent-text">{String(number).padStart(2, '0')}</span>
      <span className="label">{project.year || '—'}</span>
      <div>
        <h3 className="text-lg font-semibold text-fg">
          {primary ? (
            <a
              href={primary}
              target="_blank"
              rel="noopener noreferrer"
              className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none group-focus-within:underline"
            >
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>
        <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">{project.summary}</p>
        <p className="mt-2 font-mono text-xs text-muted">{project.stack.join(' · ')}</p>
        <div className="mt-3 flex gap-4">
          {project.live ? (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className={secondaryLink}>
              <FaExternalLinkAlt size={10} aria-hidden="true" />
              Live<span className="sr-only"> demo of {project.title}</span>
            </a>
          ) : null}
          {project.github ? (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className={secondaryLink}>
              <FaGithub size={12} aria-hidden="true" />
              GitHub<span className="sr-only"> repository for {project.title}</span>
            </a>
          ) : null}
        </div>
      </div>
      <FaArrowRight
        size={12}
        aria-hidden="true"
        className="hidden self-center text-accent-text opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100 sm:block"
      />
    </li>
  );
};

const ProjectArchive = ({ limit }: { limit?: number }) => {
  const [preview, setPreview] = useState('');
  const list = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="relative">
      <Reveal>
        <ol className="border-t border-line">
          {list.map((project, index) => (
            <ProjectRow key={project.title} project={project} number={index + 1} onHover={setPreview} />
          ))}
        </ol>
      </Reveal>
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute right-12 top-1/2 hidden w-72 -translate-y-1/2 overflow-hidden rounded-xl border border-line shadow-2xl transition-opacity duration-200 xl:block ${
          preview ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {preview ? <img src={preview} alt="" width={960} height={540} loading="lazy" className="aspect-video w-full object-cover" /> : null}
      </div>
    </div>
  );
};

export default ProjectArchive;
