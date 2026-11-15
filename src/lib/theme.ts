import { useSyncExternalStore } from 'react';

export type Theme = 'dark' | 'light';

const listeners = new Set<() => void>();

const read = (): Theme => (document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');

export const setTheme = (theme: Theme) => {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#FAF8F5' : '#14100E');
  try {
    localStorage.setItem('theme', theme);
  } catch {
    // Storage can be unavailable in private mode; the choice still applies for this visit.
  }
  listeners.forEach((listener) => listener());
};

export const toggleTheme = () => setTheme(read() === 'dark' ? 'light' : 'dark');

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

export const useTheme = () => useSyncExternalStore(subscribe, read, () => 'dark' as Theme);
