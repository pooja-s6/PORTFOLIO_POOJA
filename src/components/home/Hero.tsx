import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import { profile } from '../../data/portfolio';
import { scrollToId } from '../../lib/navigation';
import { useTypewriter } from '../../lib/useTypewriter';
import Magnetic from '../Magnetic';
import SocialLinks from '../SocialLinks';

const Hero = () => {
  const role = useTypewriter(profile.roles);
  const reduceMotion = useReducedMotion();
  const rise = (delay: number) =>
    reduceMotion ? {} : { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay } };

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col items-center justify-center px-5 pb-24 pt-28 text-center sm:px-8">
      <motion.p {...rise(0)} className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs font-medium text-success">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--success-dot)]" aria-hidden="true" />
        Open to opportunities
      </motion.p>

      <motion.figure {...rise(0.08)} className="mt-10">
        <picture>
          <source srcSet={profile.photo.webp} type="image/webp" />
          <img
            src={profile.photo.jpg}
            alt={profile.photo.alt}
            width={560}
            height={560}
            fetchPriority="high"
            decoding="async"
            className="h-56 w-44 rounded-b-[1.75rem] rounded-t-full object-cover object-center ring-1 ring-accent ring-offset-[6px] ring-offset-bg sm:h-64 sm:w-52"
          />
        </picture>
        <figcaption className="label mt-4">{profile.location}</figcaption>
      </motion.figure>

      <motion.h1
        {...rise(0.16)}
        className="mt-8 font-serif text-6xl font-medium leading-none tracking-tight text-fg sm:text-8xl lg:text-9xl"
      >
        {profile.displayName}
      </motion.h1>

      <motion.p {...rise(0.22)} className="mt-6 min-h-8 font-mono text-base text-accent-text sm:text-lg">
        <span className="sr-only">{profile.roles.join(', ')}</span>
        <span aria-hidden="true">
          {role}
          <span className="ml-0.5 inline-block w-2 animate-pulse text-fg">_</span>
        </span>
      </motion.p>

      <motion.p {...rise(0.28)} className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
        {profile.tagline}
      </motion.p>

      <motion.div {...rise(0.34)} className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <Magnetic>
          <a
            href="#projects"
            onClick={(event) => {
              event.preventDefault();
              scrollToId('projects');
            }}
            className="inline-flex rounded-full bg-accent-fill px-6 py-3 text-sm font-semibold text-accent-contrast transition-colors hover:bg-accent-fill-hover"
          >
            View Projects
          </a>
        </Magnetic>
        <Link
          to="/resume"
          className="inline-flex rounded-full border border-line-strong px-6 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent-text"
        >
          Resume
        </Link>
      </motion.div>

      <motion.div {...rise(0.4)}>
        <SocialLinks className="mt-6 justify-center" />
      </motion.div>

      <button
        type="button"
        onClick={() => scrollToId('facts')}
        aria-label="Scroll to content"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted hover:text-fg sm:flex"
      >
        <span className="label">Scroll</span>
        <FaArrowDown size={12} className="scroll-cue" aria-hidden="true" />
      </button>
    </section>
  );
};

export default Hero;
