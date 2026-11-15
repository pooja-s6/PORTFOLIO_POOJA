import { useSyncExternalStore } from 'react';

const sepiaListeners = new Set<() => void>();

let sepiaOn = false;

const emit = (listeners: Set<() => void>) => listeners.forEach((listener) => listener());

export const setSepia = (on: boolean) => {
  sepiaOn = on;
  document.documentElement.dataset.sepia = on ? 'on' : 'off';
  emit(sepiaListeners);
};

export const toggleSepia = () => setSepia(!sepiaOn);

export const useSepia = () =>
  useSyncExternalStore(
    (listener) => {
      sepiaListeners.add(listener);
      return () => sepiaListeners.delete(listener);
    },
    () => sepiaOn,
    () => false,
  );
