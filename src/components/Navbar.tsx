import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    window.setTimeout(() => {
      const element = document.querySelector(href);
      if (!element) return;
      const top = element.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top, behavior: 'smooth' });
    }, 80);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        isOpen
          ? 'border-white/10 bg-ink'
          : scrolled
            ? 'border-white/10 bg-ink/90 backdrop-blur-xl'
            : 'border-transparent bg-ink/50 backdrop-blur-md'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Primary">
        <a
          href="#home"
          onClick={(event) => {
            event.preventDefault();
            scrollToSection('#home');
          }}
          className="font-display text-xl font-semibold tracking-tight text-white"
          aria-label="Pooja S, back to top"
        >
          PS<span className="text-lavender">.</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(event) => {
                event.preventDefault();
                scrollToSection(link.href);
              }}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <button
            type="button"
            onClick={() => scrollToSection('#contact')}
            className="rounded-full bg-gradient-to-r from-accent to-[#7C3AED] px-4 py-2 text-sm font-medium text-white shadow-[0_10px_30px_-12px_rgba(168,85,247,0.9)] transition hover:brightness-110"
          >
            Contact Me
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white lg:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-ink px-5 pb-6 pt-4 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(link.href);
                }}
                className="rounded-xl px-3 py-3 text-sm text-zinc-200 hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
            <button
              type="button"
              onClick={() => scrollToSection('#contact')}
              className="mt-2 rounded-full bg-gradient-to-r from-accent to-[#7C3AED] px-4 py-3 text-sm font-medium text-white"
            >
              Contact Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
