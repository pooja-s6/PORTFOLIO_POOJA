import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navSections } from '../data/portfolio';
import { openPalette, scrollToId } from '../lib/navigation';
import ThemeToggle from './ThemeToggle';

const useActiveSection = () => {
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const ids = ['home', ...navSections.map((section) => section.href.slice(1)), 'contact'];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const go = (href: string) => {
    setIsOpen(false);
    scrollToId(href);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b ${
        isOpen || scrolled ? 'border-line bg-bg/90 backdrop-blur-xl' : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Primary">
        <a
          href="#home"
          onClick={(event) => {
            event.preventDefault();
            go('#home');
          }}
          className="font-display text-xl font-semibold tracking-tight text-fg"
          aria-label="Pooja S, back to top"
        >
          PS<span className="text-accent-text">.</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navSections.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => {
                event.preventDefault();
                go(link.href);
              }}
              aria-current={active === link.href ? 'location' : undefined}
              className={`relative text-sm transition-colors hover:text-fg ${
                active === link.href
                  ? 'font-medium text-fg after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-accent'
                  : 'text-muted'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button
            type="button"
            onClick={openPalette}
            aria-label="Open command palette (Ctrl+K)"
            className="has-tooltip relative rounded-full border border-line px-3 py-1.5 font-mono text-xs text-muted transition hover:border-accent hover:text-fg"
          >
            Ctrl K
            <span className="tooltip" role="tooltip">
              Press Ctrl+K to jump to any section
            </span>
          </button>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => go('#contact')}
            className="rounded-full bg-accent-fill px-4 py-2 text-sm font-semibold text-accent-contrast transition hover:bg-accent-fill-hover"
          >
            Contact Me
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-fg"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <FaTimes size={16} aria-hidden="true" /> : <FaBars size={16} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div id="mobile-menu" className="border-t border-line bg-bg px-5 pb-6 pt-3 lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1">
            {navSections.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault();
                    go(link.href);
                  }}
                  aria-current={active === link.href ? 'location' : undefined}
                  className={`block rounded-xl px-3 py-3 text-sm hover:bg-surface-2 ${
                    active === link.href ? 'font-medium text-accent-text' : 'text-fg'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => go('#contact')}
                className="mt-2 w-full rounded-full bg-accent-fill px-4 py-3 text-sm font-semibold text-accent-contrast"
              >
                Contact Me
              </button>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
