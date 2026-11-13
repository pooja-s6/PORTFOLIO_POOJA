import type { MouseEvent, ReactNode } from 'react';
import { motion, useReducedMotion, useSpring } from 'framer-motion';

const spring = { stiffness: 220, damping: 16 };

const Magnetic = ({ children }: { children: ReactNode }) => {
  const reduceMotion = useReducedMotion();
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  const onMove = (event: MouseEvent<HTMLSpanElement>) => {
    if (reduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - bounds.left - bounds.width / 2) * 0.25);
    y.set((event.clientY - bounds.top - bounds.height / 2) * 0.35);
  };

  return (
    <motion.span
      className="inline-block"
      style={{ x, y }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.span>
  );
};

export default Magnetic;
