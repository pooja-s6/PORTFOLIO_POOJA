import { useSyncExternalStore } from 'react';

const KEY = 'boot-seen';
const listeners = new Set<() => void>();

const readBootDone = () => {
  if (typeof window === 'undefined') return true;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true;
  try {
    return sessionStorage.getItem(KEY) === '1';
  } catch {
    return false;
  }
};

let bootDone = typeof document !== 'undefined' ? readBootDone() : true;

export const markBootDone = () => {
  if (bootDone) return;
  bootDone = true;
  try {
    sessionStorage.setItem(KEY, '1');
  } catch {
    // private mode
  }
  listeners.forEach((listener) => listener());
};

export const useBootDone = () =>
  useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    () => bootDone,
    () => true,
  );
