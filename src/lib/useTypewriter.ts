import { useEffect, useState } from 'react';

export const useTypewriter = (words: string[]) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [reduceMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  useEffect(() => {
    if (reduceMotion) return;

    const full = words[index];
    if (!deleting && text === full) {
      const hold = window.setTimeout(() => setDeleting(true), 1500);
      return () => window.clearTimeout(hold);
    }
    if (deleting && text === '') {
      const next = window.setTimeout(() => {
        setDeleting(false);
        setIndex((current) => (current + 1) % words.length);
      }, 250);
      return () => window.clearTimeout(next);
    }

    const timer = window.setTimeout(
      () => setText(full.slice(0, text.length + (deleting ? -1 : 1))),
      deleting ? 36 : 75,
    );
    return () => window.clearTimeout(timer);
  }, [deleting, index, reduceMotion, text, words]);

  return reduceMotion ? words[0] : text;
};
