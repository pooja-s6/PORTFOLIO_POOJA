import { useState } from 'react';
import type { MouseEvent } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projects } from '../data/portfolio';
import type { Project } from '../data/portfolio';
import { iconFor } from '../data/icons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const tilt = (event: MouseEvent<HTMLElement>) => {
  const card = event.currentTarget;
  const bounds = card.getBoundingClientRect();
  const x = (event.clientX - bounds.left) / bounds.width - 0.5;
  const y = (event.clientY - bounds.top) / bounds.height - 0.5;
  card.style.transform = `perspective(1200px) rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 4).toFixed(2)}deg)`;
};

const Screenshot = ({ project }: { project: Project }) =>
  project.image ? (
    <img
      src={project.image}
      alt={`Screenshot of ${project.title}`}
      width={960}
      height={540}
      loading="lazy"
      decoding="async"
      className="aspect-video w-full rounded-xl border border-line object-cover"
    />
  ) : (
    <div
      className="grid aspect-video w-full place-items-center rounded-xl border border-dashed border-line-strong bg-surface-2"
      aria-hidden="true"
    >
      <span className="font-display text-4xl font-semibold text-accent-text">
        {project.title
          .split(' ')
          .slice(0, 2)
          .map((word) => word[0])
          .join('')}
      </span>
    </div>
  );

const ProjectCard = ({ project, index, canTilt }: { project: Project; index: number; canTilt: boolean }) => (
  <article
    onMouseMove={canTilt ? tilt : undefined}
    onMouseLeave={(event) => {
      event.currentTarget.style.transform = '';
    }}
    className={`surface-card h-full p-5 transition-transform duration-200 sm:p-6 ${
      project.featured ? 'grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center lg:p-8' : 'flex flex-col gap-5'
    }`}
  >
    <Screenshot project={project} />
    <div className="flex flex-1 flex-col">
      <p className="font-display text-sm font-semibold text-accent-text">
        0{index + 1}
        {project.featured ? <span className="ml-2 text-muted">· Featured</span> : null}
      </p>
      <h3 className={`mt-1 font-display font-semibold text-fg ${project.featured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}>
        {project.title}
      </h3>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-accent-text">Problem</p>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{project.problem}</p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-accent-text">What I built</p>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{project.built}</p>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
        {project.stack.map((tech) => {
          const Icon = iconFor(tech);
          return (
            <li key={tech} className="chip px-3 py-1 text-xs">
              {Icon ? <Icon className="text-accent-text" aria-hidden="true" /> : null}
              {tech}
            </li>
          );
        })}
      </ul>

      {project.live || project.github ? (
        <div className="mt-6 flex flex-wrap gap-3">
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent-fill px-4 py-2 text-sm font-semibold text-accent-contrast transition hover:bg-accent-fill-hover"
            >
              <FaExternalLinkAlt size={11} aria-hidden="true" />
              Live Demo<span className="sr-only"> of {project.title}</span>
            </a>
          ) : null}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-sm font-semibold text-fg transition hover:border-accent hover:text-accent-text"
            >
              <FaGithub aria-hidden="true" />
              GitHub<span className="sr-only"> repository for {project.title}</span>
            </a>
          ) : null}
        </div>
      ) : null}
    </div>
  </article>
);

const Projects = () => {
  const [canTilt] = useState(
    () => window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  return (
    <section id="projects" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Case studies"
          description="The problem, what I built, and the stack, strongest work first."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={project.featured ? 0 : (index % 2) * 0.05}
              className={project.featured ? 'lg:col-span-2' : undefined}
            >
              <ProjectCard project={project} index={index} canTilt={canTilt} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
