import { FaArrowRight, FaFileAlt } from 'react-icons/fa';
import { intro, profile } from '../../data/portfolio';
import { scrollToId } from '../../lib/navigation';
import Reveal from '../Reveal';
import Rich from '../Rich';
import SocialLinks from '../SocialLinks';

const Intro = () => (
  <section id="top" aria-labelledby="intro-title" className="scroll-mt-24 pb-14 pt-14 sm:pt-20">
    <Reveal>
      <div className="flex items-center gap-4">
        <picture>
          <source srcSet={profile.photo.webp} type="image/webp" />
          <img
            src={profile.photo.jpg}
            alt={profile.photo.alt}
            width={72}
            height={72}
            fetchPriority="high"
            className="h-[72px] w-[72px] rounded-2xl object-cover ring-1 ring-line-strong"
          />
        </picture>
        <div>
          <p className="inline-flex items-center gap-2 text-sm text-success">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--success-dot)] opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--success-dot)]" />
            </span>
            Open to backend &amp; AI roles
          </p>
          <p className="mt-1 font-serif text-sm italic text-muted">writing code from {profile.location}</p>
        </div>
      </div>

      <h1 id="intro-title" className="mt-10 font-serif text-5xl font-medium tracking-tight text-fg sm:text-6xl">
        Hi, I'm Pooja<span className="text-accent-text">.</span>
      </h1>
      <p className="mt-3 text-lg text-fg sm:text-xl">{profile.positioning}</p>

      <div className="mt-8 space-y-4 text-[1.0625rem] leading-8 text-muted">
        {intro.map((paragraph) => (
          <p key={paragraph}>
            <Rich text={paragraph} />
          </p>
        ))}
      </div>

      <div className="mt-9 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => scrollToId('contact')}
          className="group inline-flex items-center gap-2 rounded-lg bg-fg px-5 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
        >
          Say hi
          <FaArrowRight size={11} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </button>
        <a
          href={profile.resume.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-line-strong px-5 py-2.5 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent-text"
        >
          <FaFileAlt size={12} aria-hidden="true" />
          Resume
        </a>
      </div>

      <SocialLinks size="sm" className="mt-8" />
    </Reveal>
  </section>
);

export default Intro;
