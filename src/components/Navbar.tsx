import { useEffect, useState } from 'react';
import type { MouseEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { homeSections } from '../data/portfolio';
import { openPalette, scrollToId } from '../lib/navigation';
import ThemeToggle from './ThemeToggle';

const navItems = [
  ...homeSections.map((section) => ({ name: section.name, to: `/#${section.id}`, section: section.id })),
  { name: 'Resume', to: '/resume', section: '' },
  { name: 'Contact', to: '/contact', section: '' },
];

const useActiveSection = (enabled: boolean) => {
  const [active, setActive] = useState('');

  useEffect(() => {
    if (!enabled) return;
    const sections = homeSections
      .map((section) => document.getElementById(section.id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      setActive('');
    };
  }, [enabled]);

  return active;
};

const Navbar = () => {
  const { pathname } = useLocation();
  const onHome = pathname === '/';
  const active = useActiveSection(onHome);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const isActive = (item: (typeof navItems)[number]) => (item.section ? onHome && active === item.section : pathname === item.to);

  const linkProps = (item: (typeof navItems)[number]) => ({
    to: item.to,
    'aria-current': isActive(item) ? ('location' as const) : undefined,
    onClick: (event: MouseEvent) => {
      setIsOpen(false);
      if (item.section && onHome) {
        event.preventDefault();
        scrollToId(item.section);
      }
    },
  });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${
        scrolled || isOpen ? 'border-line bg-bg/85 backdrop-blur-md' : 'border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Primary">
        <Link
          to="/"
          onClick={(event) => {
            if (onHome) {
              event.preventDefault();
              scrollToId('top');
            }
          }}
          className="font-serif text-2xl font-medium text-fg"
          aria-label="Pooja S, home"
        >
          PS<span className="text-accent-text">.</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  {...linkProps(item)}
                  className={`text-sm transition-colors hover:text-fg ${isActive(item) ? 'text-fg' : 'text-muted'}`}
                >
                  {isActive(item) ? <span className="mr-1 text-accent-text" aria-hidden="true">•</span> : null}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={openPalette}
            aria-label="Open command palette (Ctrl+K)"
            className="has-tooltip relative rounded-md border border-line px-2 py-1 font-mono text-xs text-muted hover:border-accent hover:text-fg"
          >
            Ctrl K
            <span className="tooltip" role="tooltip">
              Press Ctrl+K to jump to any section
            </span>
          </button>
          <ThemeToggle />
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
        <div id="mobile-menu" className="border-t border-line bg-bg px-5 pb-6 pt-2 lg:hidden">
          <ul className="mx-auto max-w-6xl">
            {navItems.map((item) => (
              <li key={item.name} className="border-b border-line">
                <Link
                  {...linkProps(item)}
                  className={`block py-4 font-serif text-2xl ${isActive(item) ? 'text-accent-text' : 'text-fg'}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
