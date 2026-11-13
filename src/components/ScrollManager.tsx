import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToId } from '../lib/navigation';

const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }
    const id = decodeURIComponent(hash.slice(1));
    let attempts = 0;
    let frame = 0;
    const tryScroll = () => {
      if (document.getElementById(id)) {
        scrollToId(id);
        return;
      }
      if (attempts++ < 30) frame = window.requestAnimationFrame(tryScroll);
    };
    tryScroll();
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
};

export default ScrollManager;
