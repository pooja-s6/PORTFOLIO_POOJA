import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const interactive = 'a, button, input, textarea, select, label, [tabindex="0"]';

const canFollow = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const CursorFollower = () => {
  const [enabled] = useState(canFollow);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [label, setLabel] = useState('');

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.6 });

  useEffect(() => {
    if (!enabled) return;

    const onMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
    };
    const onOver = (event: PointerEvent) => {
      const target = (event.target as Element | null)?.closest?.(interactive) as HTMLElement | null;
      setHovering(Boolean(target));
      setLabel(target?.dataset.cursor || (target ? 'open' : ''));
    };
    const onLeave = () => setVisible(false);
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerover', onOver, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerover', onOver);
      document.documentElement.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const size = hovering ? 52 : 26;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] grid place-items-center rounded-full border border-accent"
      style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      animate={{ width: size, height: size, opacity: visible ? 1 : 0, scale: pressed ? 0.8 : 1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
    >
      <motion.span
        className="absolute inset-0 rounded-full bg-accent"
        animate={{ opacity: hovering ? 0.12 : 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="relative font-mono text-[9px] uppercase tracking-wide text-accent-text"
        animate={{ opacity: hovering && label ? 1 : 0 }}
      >
        {label}
      </motion.span>
    </motion.div>
  );
};

export default CursorFollower;
