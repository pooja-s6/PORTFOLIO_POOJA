import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { markBootDone, useBootDone } from '../lib/boot';

const BootSplash = () => {
  const alreadyDone = useBootDone();
  const [show, setShow] = useState(!alreadyDone);
  const [text, setText] = useState('');
  const full = 'Loading Pooja S. ...';

  useEffect(() => {
    if (!show) {
      markBootDone();
      return;
    }
    let index = 0;
    const type = window.setInterval(() => {
      index += 1;
      setText(full.slice(0, index));
      if (index >= full.length) {
        window.clearInterval(type);
        window.setTimeout(() => {
          setShow(false);
          markBootDone();
        }, 280);
      }
    }, 28);
    return () => window.clearInterval(type);
  }, [show]);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[120] grid place-items-center bg-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          aria-hidden="true"
        >
          <p className="font-mono text-sm text-fg sm:text-base">
            {text}
            <span className="cursor-blink">▌</span>
          </p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default BootSplash;
