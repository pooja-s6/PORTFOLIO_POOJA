export const openPalette = () => window.dispatchEvent(new Event('open-palette'));

export const scrollToId = (href: string) => {
  if (href === '#home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const element = document.querySelector(href);
  if (!element) return;
  const top = element.getBoundingClientRect().top + window.scrollY - 76;
  window.scrollTo({ top, behavior: 'smooth' });
};
