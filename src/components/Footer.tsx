import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-white">Pooja S</p>
          <p className="mt-1 text-sm text-zinc-500">Full Stack Developer | Backend &amp; Cloud Enthusiast | AI Explorer</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/pooja-s6"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-zinc-300 transition hover:border-accent hover:text-lavender"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/pooja-s2006"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-zinc-300 transition hover:border-accent hover:text-lavender"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:poojasuku0606@gmail.com"
            aria-label="Email"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-zinc-300 transition hover:border-accent hover:text-lavender"
          >
            <FaEnvelope />
          </a>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-500">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl border-t border-white/10 pt-6 text-sm text-zinc-500">
        © {currentYear} Pooja S. Designed &amp; built with React and Tailwind CSS.
      </p>
    </footer>
  );
};

export default Footer;
