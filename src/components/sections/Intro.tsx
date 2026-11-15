import { FaArrowRight, FaFileAlt } from 'react-icons/fa';
import { exploring, intro, profile } from '../../data/portfolio';
import { scrollToId } from '../../lib/navigation';
import Reveal from '../Reveal';
import Rich from '../Rich';
import SocialLinks from '../SocialLinks';

const Intro = () => (
  <section id="top" aria-labelledby="intro-title" className="scroll-mt-24 pb-14 pt-14 sm:pt-20">
    <Reveal>
      <div className="flex flex-wrap items-end gap-6">
        <figure className="relative">
          <span aria-hidden="true" className="tape" />
          <div className="polaroid">
            <picture>
              <source srcSet={profile.photo.webp} type="image/webp" />
              <img
                src={profile.photo.jpg}
                alt={profile.photo.alt}
                width={120}
                height={120}
                fetchPriority="high"
                className="h-[120px] w-[120px] object-cover"
              />
            </picture>
            <figcaption className="hand absolute bottom-1 left-0 right-0 text-center text-lg text-[#4a433c]">
              {profile.photoCaption}
            </figcaption>
          </div>
          <p aria-hidden="true" className="hand absolute -right-2 top-2 text-xl text-accent-text sm:-right-10">
            hi!
            <svg className="ml-1 inline -rotate-12" width="28" height="18" viewBox="0 0 28 18" fill="none" aria-hidden="true">
              <path d="M2 14 C10 2, 18 2, 26 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M21 5 L26 8 L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </p>
        </figure>

        <div className="min-w-0 flex-1">
          <p className="inline-flex items-center gap-3 text-sm text-success">
            <span className="stamp" aria-hidden="true">
              Open to roles
            </span>
            <span className="label normal-case tracking-normal text-success">{profile.status}</span>
          </p>
          <p className="mt-2 text-sm text-muted">{profile.location}</p>
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
          className="group inline-flex items-center gap-2 rounded-sm bg-fg px-5 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
          data-cursor="open"
        >
          Say hi
          <FaArrowRight size={11} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </button>
        <a
          href={profile.resume.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-sm border border-line-strong px-5 py-2.5 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent-text"
          data-cursor="open"
        >
          <FaFileAlt size={12} aria-hidden="true" />
          Resume
        </a>
      </div>

      <SocialLinks size="sm" className="mt-8" />
      <p className="mt-6 text-sm text-muted">
        <span className="hand text-lg text-fg">currently exploring:</span> {exploring.join(' · ')}
      </p>
    </Reveal>
  </section>
);

export default Intro;
