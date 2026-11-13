import { FaArrowRight, FaGithub } from 'react-icons/fa';
import { projects } from '../../data/portfolio';
import Section from '../Section';

const featured = projects.filter((project) => project.featured);

const Featured = () => (
  <Section id="featured">
    <ul className="grid gap-10">
      {featured.map((project) => (
        <li key={project.title}>
          {project.image ? (
            <a
              href={project.live || project.github}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={-1}
              aria-hidden="true"
              className="group block overflow-hidden rounded-xl border border-line bg-surface"
            >
              <img
                src={project.image}
                alt=""
                width={960}
                height={540}
                loading="lazy"
                decoding="async"
                className="aspect-video w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none"
              />
            </a>
          ) : null}
          <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-lg font-semibold text-fg">{project.title}</h3>
            {project.year ? <p className="text-sm tabular-nums text-muted">{project.year}</p> : null}
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
                className="inline-flex items-center gap-2 rounded-lg border border-line-strong px-4 py-2 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent-text"
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

export default Featured;
