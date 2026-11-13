import { motion, useReducedMotion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import { profile } from '../data/portfolio';
import { iconFor } from '../data/icons';
import { useTypewriter } from '../lib/useTypewriter';
import { scrollToId } from '../lib/navigation';
import SocialLinks from './SocialLinks';

const chipSlots = [
  { className: 'right-[calc(100%+20px)] top-[4%]', delay: '0s', minWidth: 'sm' },
  { className: 'left-[calc(100%+20px)] top-[14%]', delay: '1.2s', minWidth: 'sm' },
  { className: 'right-[calc(100%+44px)] top-[42%]', delay: '2.1s', minWidth: 'sm' },
  { className: 'left-[calc(100%+44px)] top-[52%]', delay: '0.6s', minWidth: 'sm' },
  { className: 'right-[calc(100%+12px)] top-[80%]', delay: '1.7s', minWidth: 'md' },
  { className: 'left-[calc(100%+12px)] top-[88%]', delay: '2.6s', minWidth: 'md' },
];

const ProfilePhoto = () => (
  <div className="relative mx-auto w-fit">
    <div className="pointer-events-none absolute inset-[-30%] -z-10 rounded-full bg-[radial-gradient(circle,var(--glow),transparent_65%)]" aria-hidden="true" />
    <div className="photo-ring rounded-full p-[3px]">
      <picture>
        <source srcSet={profile.photo.webp} type="image/webp" />
        <img
          src={profile.photo.jpg}
          alt={profile.photo.alt}
          width={560}
          height={560}
          fetchPriority="high"
          decoding="async"
          className="h-40 w-40 rounded-full border-4 border-bg object-cover object-center sm:h-52 sm:w-52 lg:h-60 lg:w-60"
        />
      </picture>
    </div>
    {profile.heroChips.map((chip, index) => {
      const slot = chipSlots[index];
      if (!slot) return null;
      const Icon = iconFor(chip);
      return (
        <span
          key={chip}
          aria-hidden="true"
          style={{ animationDelay: slot.delay }}
          className={`chip drift absolute hidden whitespace-nowrap px-3 py-1.5 text-xs font-medium shadow-sm ${slot.className} ${
            slot.minWidth === 'sm' ? 'sm:inline-flex' : 'md:inline-flex'
          }`}
        >
          {Icon ? <Icon className="text-accent-text" /> : null}
          {chip}
        </span>
      );
    })}
  </div>
);

const Hero = () => {
  const role = useTypewriter(profile.roles);
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:pb-20 lg:pt-32">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <p className="badge-success inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--success-dot)]" aria-hidden="true" />
          Open to opportunities
        </p>

        <div className="mt-10">
          <ProfilePhoto />
        </div>

        <h1 className="mt-10 font-display text-6xl font-semibold leading-[0.95] tracking-tight text-fg sm:text-7xl lg:text-8xl">
          {profile.displayName}
        </h1>

        <p className="mt-5 min-h-8 text-xl font-medium text-accent-text sm:text-2xl">
          <span className="sr-only">{profile.roles.join(', ')}</span>
          <span aria-hidden="true">
            {role}
            <span className="ml-1 inline-block animate-pulse text-fg">|</span>
          </span>
        </p>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{profile.tagline}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            onClick={(event) => {
              event.preventDefault();
              scrollToId('#projects');
            }}
            className="inline-flex items-center rounded-full bg-accent-fill px-5 py-3 text-sm font-semibold text-accent-contrast shadow-[0_12px_30px_-14px_var(--glow)] transition hover:bg-accent-fill-hover"
          >
            View Projects
          </a>
          <a
            href={profile.resume.href}
            download={profile.resume.fileName}
            className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-sm font-semibold text-fg transition hover:border-accent hover:text-accent-text"
          >
            <FaDownload size={13} aria-hidden="true" />
            Download Resume
          </a>
        </div>

        <SocialLinks className="mt-5 justify-center" />

        <p className="mt-8 text-sm text-muted">{profile.currentLine}</p>
      </motion.div>
    </section>
  );
};

export default Hero;
