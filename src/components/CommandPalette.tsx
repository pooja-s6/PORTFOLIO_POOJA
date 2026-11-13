import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { homeSections, links, pages } from '../data/portfolio';
import { scrollToId } from '../lib/navigation';
import { toggleTheme } from '../lib/theme';

type Command = { name: string; hint: string; run: () => void };

const CommandPalette = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const commands = useMemo<Command[]>(() => {
    const goToSection = (id: string) => (pathname === '/' ? scrollToId(id) : navigate(`/#${id}`));
    return [
      { name: 'Home', hint: 'Back to the top', run: () => goToSection('top') },
      ...homeSections.map((section) => ({ name: section.name, hint: 'Section', run: () => goToSection(section.id) })),
      ...pages.map((page) => ({ name: page.name, hint: 'Page', run: () => navigate(page.path) })),
      { name: 'Email Pooja', hint: links.email, run: () => (window.location.href = `mailto:${links.email}`) },
      { name: 'Toggle theme', hint: 'Light / dark', run: toggleTheme },
    ];
  }, [navigate, pathname]);

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const listId = useId();

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return commands;
    return commands.filter((item) => `${item.name} ${item.hint}`.toLowerCase().includes(needle));
  }, [commands, query]);

  const openRef = useRef(false);
  useEffect(() => {
    openRef.current = open;
  }, [open]);

  useEffect(() => {
    const show = () => {
      returnFocus.current = document.activeElement as HTMLElement | null;
      setQuery('');
      setActive(0);
      setOpen(true);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        if (openRef.current) setOpen(false);
        else show();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('open-palette', show);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('open-palette', show);
    };
  }, []);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
      return;
    }
    returnFocus.current?.focus?.();
  }, [open]);

  const run = (command: Command) => {
    setOpen(false);
    command.run();
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-start justify-center bg-black/50 px-4 pt-[15vh] backdrop-blur-sm"
      role="presentation"
      onClick={() => setOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        className="w-full max-w-lg rounded-xl border border-line-strong bg-bg p-3 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <input
          ref={inputRef}
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setActive(0);
          }}
          onKeyDown={(event) => {
            if (event.key === 'Escape') setOpen(false);
            if (event.key === 'Tab') event.preventDefault();
            if (event.key === 'ArrowDown') {
              event.preventDefault();
              setActive((index) => (results.length ? (index + 1) % results.length : 0));
            }
            if (event.key === 'ArrowUp') {
              event.preventDefault();
              setActive((index) => (results.length ? (index - 1 + results.length) % results.length : 0));
            }
            if (event.key === 'Enter' && results[active]) run(results[active]);
          }}
          placeholder="Jump to a section or run a command"
          aria-label="Search commands"
          role="combobox"
          aria-expanded="true"
          aria-controls={listId}
          aria-activedescendant={results[active] ? `${listId}-${active}` : undefined}
          className="w-full rounded-lg border border-line bg-surface px-3 py-3 text-sm text-fg outline-none placeholder:text-muted focus:border-accent"
        />
        <ul id={listId} role="listbox" className="mt-2 max-h-72 overflow-auto">
          {results.length === 0 ? (
            <li className="px-3 py-4 text-sm text-muted">No matching command.</li>
          ) : (
            results.map((item, index) => (
              <li
                key={item.name}
                id={`${listId}-${index}`}
                role="option"
                aria-selected={index === active}
                onMouseEnter={() => setActive(index)}
                onClick={() => run(item)}
                className={`flex cursor-pointer items-center justify-between gap-4 rounded-lg px-3 py-3 text-sm ${
                  index === active ? 'bg-surface text-fg' : 'text-muted'
                }`}
              >
                <span className="font-medium">{item.name}</span>
                <span className="truncate font-mono text-xs text-muted">{item.hint}</span>
              </li>
            ))
          )}
        </ul>
        <p className="mt-2 px-3 text-xs text-muted">↑ ↓ to move · Enter to select · Esc to close</p>
      </div>
    </div>
  );
};

export default CommandPalette;
