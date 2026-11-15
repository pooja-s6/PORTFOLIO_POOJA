import { useEffect, useId, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { profile, sections } from '../data/portfolio';
import { scrollToId } from '../lib/navigation';
import ThemeToggle from './ThemeToggle';

const navIds = ['work', 'featured', 'skills', 'contact'];

const Header = () => {
  const { pathname } = useLocation();
  const onHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

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

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  const items = sections.filter((section) => navIds.includes(section.id));

  const goTo = (id: string) => {
    setMenuOpen(false);
    if (onHome) {
      scrollToId(id);
      return;
    }
    window.location.assign(`/#${id}`);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-colors ${
          scrolled || menuOpen ? 'border-line bg-bg' : 'border-transparent bg-bg'
        }`}
      >
        <nav aria-label="Primary" className="page-shell flex h-16 items-center justify-between gap-4">
          <Link
            to="/"
            data-logo
            onClick={(event) => {
              setMenuOpen(false);
              if (onHome) {
                event.preventDefault();
                scrollToId('top');
              }
            }}
            className="shrink-0 whitespace-nowrap font-serif text-xl font-medium text-fg"
          >
            {profile.name}
            <span className="text-accent-text">.</span>
          </Link>

          <div className="flex shrink-0 items-center gap-1">
            <ul className="mr-1 hidden items-center gap-0.5 lg:flex">
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
              className="hidden rounded-md px-2.5 py-1.5 text-sm text-muted transition-colors hover:text-fg sm:inline-block"
              data-cursor="open"
            >
              Resume
            </a>
            <ThemeToggle />
            <button
              type="button"
              className="grid h-9 w-9 place-items-center rounded-md border border-line text-fg lg:hidden"
              aria-expanded={menuOpen}
              aria-controls={menuId}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <FaTimes size={14} aria-hidden="true" /> : <FaBars size={14} aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </header>

      {menuOpen ? (
        <div className="fixed inset-0 z-40 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-bg/55 backdrop-blur-md"
            onClick={() => setMenuOpen(false)}
          />
          <div
            id={menuId}
            className="absolute inset-x-0 top-16 border-b border-line bg-bg shadow-lg"
          >
            <div className="page-shell py-4">
              <ul className="flex flex-col gap-1">
                {items.map((item) => {
                  const isActive = onHome && active === item.id;
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => goTo(item.id)}
                        className={`w-full rounded-md px-3 py-3 text-left text-base ${
                          isActive ? 'bg-surface font-medium text-fg' : 'text-muted'
                        }`}
                      >
                        {item.name}
                      </button>
                    </li>
                  );
                })}
                <li>
                  <a
                    href={profile.resume.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-md px-3 py-3 text-base text-muted sm:hidden"
                    data-cursor="open"
                    onClick={() => setMenuOpen(false)}
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Header;
