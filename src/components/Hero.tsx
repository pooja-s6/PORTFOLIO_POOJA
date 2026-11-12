import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const PHOTO_SOURCES = [
  '/assets/profile.jpg',
  '/assets/profile.jpeg',
  '/assets/profile.png',
  '/assets/profile.webp',
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/pooja-s6', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/pooja-s2006', icon: FaLinkedin },
  { label: 'Email', href: 'mailto:poojasuku0606@gmail.com', icon: FaEnvelope },
];

const Portrait = () => {
  const [sourceIndex, setSourceIndex] = useState(0);
  const missing = sourceIndex >= PHOTO_SOURCES.length;

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[400px] lg:mx-0 lg:ml-auto lg:max-w-[420px]">
      <div
        className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-accent/30 blur-3xl"
        aria-hidden="true"
      />
      <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#111113] shadow-[0_30px_80px_-28px_rgba(168,85,247,0.65)]">
        {missing ? (
          <div className="flex aspect-[4/5] flex-col items-center justify-center gap-4 px-8 text-center">
            <span className="font-display text-6xl font-semibold tracking-tight text-lavender">PS</span>
            <p className="max-w-[16rem] text-sm leading-relaxed text-zinc-400">
              Add your photograph as
              <span className="mt-2 block font-medium text-zinc-100">public/assets/profile.jpg</span>
            </p>
          </div>
        ) : (
          <img
            src={PHOTO_SOURCES[sourceIndex]}
            alt="Pooja S"
            className="aspect-[4/5] w-full object-cover object-top"
            onError={() => setSourceIndex((index) => index + 1)}
          />
        )}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-28 sm:px-8">
      <div
        className="pointer-events-none absolute right-[-8%] top-[12%] -z-10 h-[520px] w-[520px] rounded-full bg-accent/20 blur-[120px]"
        aria-hidden="true"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.85fr)] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p className="inline-flex rounded-full border border-accent/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-lavender">
            Hey, I&apos;m
          </p>
          <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Pooja S.
          </h1>
          <p className="mt-4 text-xl font-medium text-lavender sm:text-2xl">
            Full-Stack Developer &amp; AI Enthusiast
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Computer Science Engineering student specializing in Data Science, passionate about building intelligent
            applications, scalable backend systems, and AI-powered solutions.
          </p>

          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="/assets/Pooja_S_Resume.pdf"
              download="Pooja_S_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-zinc-100"
            >
              <FaDownload size={14} aria-hidden="true" />
              Download Resume
            </a>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                const external = link.href.startsWith('http');
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    aria-label={link.label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-accent hover:text-lavender"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: 'easeOut' }}
        >
          <Portrait />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
