import { useEffect, useRef } from 'react';

const Spotlight = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reduceMotion) {
      glow.style.display = 'none';
      return;
    }

    const onMove = (event: MouseEvent) => {
      glow.style.transform = `translate(${event.clientX - 220}px, ${event.clientY - 220}px)`;
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-30 h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,var(--glow-soft),transparent_68%)]"
    />
  );
};

export default Spotlight;
