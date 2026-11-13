import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { profile, sections } from '../data/portfolio';
import { openPalette, scrollToId } from '../lib/navigation';
import ThemeToggle from './ThemeToggle';

const navIds = ['work', 'projects', 'skills', 'contact'];

const Header = () => {
  const { pathname } = useLocation();
  const onHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!onHome) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-40% 0px -55% 0px' },
    );
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [onHome]);

  const items = sections.filter((section) => navIds.includes(section.id));

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? 'border-line bg-bg/85 backdrop-blur-md' : 'border-transparent bg-bg'
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-2xl items-center justify-between gap-4 px-5">
        <Link
          to="/"
          onClick={(event) => {
            if (onHome) {
              event.preventDefault();
              scrollToId('top');
            }
          }}
          className="font-serif text-xl font-medium text-fg"
        >
          {profile.name}
          <span className="text-accent-text">.</span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-1 sm:flex">
            {items.map((item) => {
              const isActive = onHome && active === item.id;
              return (
                <li key={item.id}>
                  <Link
                    to={`/#${item.id}`}
                    aria-current={isActive ? 'location' : undefined}
                    onClick={(event) => {
                      if (onHome) {
                        event.preventDefault();
                        scrollToId(item.id);
                      }
                    }}
                    className={`rounded-md px-2.5 py-1.5 text-sm transition-colors hover:text-fg ${
                      isActive ? 'text-fg' : 'text-muted'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <a
            href={profile.resume.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md px-2.5 py-1.5 text-sm text-muted transition-colors hover:text-fg"
          >
            Resume
          </a>
          <button
            type="button"
            onClick={openPalette}
            aria-label="Open command palette (Ctrl+K)"
            className="hidden rounded-md border border-line px-1.5 py-0.5 font-mono text-[11px] text-muted hover:text-fg md:inline-block"
          >
            Ctrl K
          </button>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
