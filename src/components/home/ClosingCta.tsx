import { Link } from 'react-router-dom';
import { links } from '../../data/portfolio';
import CopyEmail from '../CopyEmail';
import Magnetic from '../Magnetic';
import Reveal from '../Reveal';

const profiles = [
  { label: 'GitHub', handle: links.github.handle, href: links.github.url },
  { label: 'LinkedIn', handle: links.linkedin.handle, href: links.linkedin.url },
  { label: 'LeetCode', handle: links.leetcode.handle, href: links.leetcode.url },
  { label: 'SkillRack', handle: links.skillrack.handle, href: links.skillrack.url },
];

const ClosingCta = () => (
  <section id="contact" className="scroll-mt-20 px-5 py-28 sm:px-8">
    <Reveal className="mx-auto max-w-6xl border-t border-line pt-16">
      <p className="label">
        <span className="text-accent-text">05 / </span>Contact
      </p>
      <h2 className="mt-5 max-w-3xl font-serif text-5xl font-medium leading-[1.05] tracking-tight text-fg sm:text-7xl">
        Have something worth building?
      </h2>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
        I'm looking for backend, AI and full-stack roles. I reply to everyone.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-3">
        <Magnetic>
          <Link
            to="/contact"
            className="inline-flex rounded-full bg-accent-fill px-6 py-3 text-sm font-semibold text-accent-contrast transition-colors hover:bg-accent-fill-hover"
          >
            Start a conversation
          </Link>
        </Magnetic>
        <Link
          to="/resume"
          className="inline-flex rounded-full border border-line-strong px-6 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent-text"
        >
          Resume
        </Link>
      </div>
      <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="label mb-2">Email · click to copy</p>
          <CopyEmail />
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {profiles.map((item) => (
            <li key={item.label}>
              <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-fg">
                {item.label} <span className="font-mono text-xs">/{item.handle}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  </section>
);

export default ClosingCta;
