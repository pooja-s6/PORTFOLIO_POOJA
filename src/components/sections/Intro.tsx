import { motion, useReducedMotion } from 'framer-motion';
import { FaArrowRight, FaFileAlt } from 'react-icons/fa';
import { exploring, intro, profile } from '../../data/portfolio';
import { useBootDone } from '../../lib/boot';
import { scrollToId } from '../../lib/navigation';
import CopyEmail from '../CopyEmail';
import SocialLinks from '../SocialLinks';

const Intro = () => {
  const bootDone = useBootDone();
  const reduceMotion = useReducedMotion();
  const animateIn = bootDone && !reduceMotion;

  return (
    <section id="top" aria-labelledby="intro-title" className="scroll-mt-24 pb-10 pt-10 sm:pb-14 sm:pt-20">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 22 }}
        animate={animateIn ? { opacity: 1, y: 0 } : reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex flex-wrap items-end gap-6 sm:gap-8">
          <figure className="relative">
            <div className="polaroid">
              <picture>
                <source srcSet={profile.photo.webp} type="image/webp" />
                <img
                  src={profile.photo.jpg}
                  alt={profile.photo.alt}
                  width={176}
                  height={176}
                  fetchPriority="high"
                  className="h-[148px] w-[148px] object-cover sm:h-[176px] sm:w-[176px]"
                />
              </picture>
              <figcaption className="hand absolute bottom-1 left-0 right-0 text-center text-xl text-[#4a433c]">
                {profile.photoCaption}
              </figcaption>
            </div>
          </figure>

          <div className="min-w-0 flex-1 pb-1">
            <p className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
              <span className="stamp shrink-0" aria-hidden="true">
                Open to roles
              </span>
              <span className="font-mono text-sm leading-none tracking-wide text-fg">{profile.status}</span>
            </p>
          </div>
        </div>

        <h1
          id="intro-title"
          className="mt-8 max-w-4xl font-serif text-[2.35rem] font-medium leading-[1.08] tracking-tight text-fg sm:mt-12 sm:text-6xl lg:text-7xl"
        >
          {profile.headline}
        </h1>

        <div className="mt-8 max-w-2xl space-y-4 body-copy">
          {intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8 max-w-xl rounded-sm border border-line-strong bg-paper px-4 py-4 sm:px-5">
          <p className="label">Email</p>
          <div className="mt-2">
            <CopyEmail />
          </div>
          <p className="mt-2 text-sm text-muted">The easiest way to reach me — feel free to drop me a message.</p>
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => scrollToId('contact')}
            className="group inline-flex items-center gap-2 rounded-sm bg-fg px-5 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
            data-cursor="open"
          >
            Contact
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
          <span className="font-medium text-fg">Currently learning:</span> {exploring.join(' · ')}
        </p>
      </motion.div>
    </section>
  );
};

export default Intro;
