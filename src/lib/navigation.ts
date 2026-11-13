import { useEffect } from 'react';

const NAV_OFFSET = 72;

export const openPalette = () => window.dispatchEvent(new Event('open-palette'));

export const scrollToId = (id: string) => {
  if (id === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const element = document.getElementById(id);
  if (!element) return;
  const top = element.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top, behavior: 'smooth' });
};

export const usePageTitle = (title?: string) => {
  useEffect(() => {
    document.title = title ? `${title} | Pooja S` : 'Pooja S | Backend & AI Developer';
  }, [title]);
};
