import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { toggleSepia } from '../lib/extras';

const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

const EasterEggs = () => {
  const [note, setNote] = useState(false);
  const sequence = useRef<string[]>([]);
  const clicks = useRef(0);
  const clickTimer = useRef(0);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      sequence.current = [...sequence.current, event.key].slice(-KONAMI.length);
      if (sequence.current.join(',') === KONAMI.join(',')) {
        toggleSepia();
        sequence.current = [];
      }
    };

    const onLogo = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (!target?.closest?.('[data-logo]')) return;
      clicks.current += 1;
      window.clearTimeout(clickTimer.current);
      clickTimer.current = window.setTimeout(() => {
        clicks.current = 0;
      }, 700);
      if (clicks.current >= 3) {
        clicks.current = 0;
        setNote(true);
        window.setTimeout(() => setNote(false), 2200);
      }
    };

    window.addEventListener('keydown', onKey);
    window.addEventListener('click', onLogo);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('click', onLogo);
      window.clearTimeout(clickTimer.current);
    };
  }, []);

  return (
    <AnimatePresence>
      {note ? (
        <motion.p
          aria-live="polite"
          className="hand pointer-events-none fixed bottom-8 left-1/2 z-[90] -translate-x-1/2 rounded-sm border border-line-strong bg-paper px-4 py-2 text-2xl text-fg shadow-lg"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
        >
          hi again :)
        </motion.p>
      ) : null}
    </AnimatePresence>
  );
};

export default EasterEggs;
