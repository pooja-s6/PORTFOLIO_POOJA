import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const KEY = 'intro-seen';

const shouldShow = () => {
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    return !sessionStorage.getItem(KEY);
  } catch {
    return false;
  }
};

const IntroLoader = () => {
  const [visible, setVisible] = useState(shouldShow);

  useEffect(() => {
    if (!visible) return;
    try {
      sessionStorage.setItem(KEY, '1');
    } catch {
      // Without sessionStorage the intro simply plays again next time.
    }
    const timer = window.setTimeout(() => setVisible(false), 1000);
    return () => window.clearTimeout(timer);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="intro"
          aria-hidden="true"
          className="fixed inset-0 z-[100] grid place-items-center bg-bg"
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
        >
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-serif text-5xl font-medium text-fg"
          >
            PS<span className="text-accent-text">.</span>
          </motion.span>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default IntroLoader;
