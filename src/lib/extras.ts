import { useSyncExternalStore } from 'react';

const soundListeners = new Set<() => void>();
const sepiaListeners = new Set<() => void>();

const readSound = () => {
  try {
    return localStorage.getItem('sound') === 'on';
  } catch {
    return false;
  }
};

let soundOn = typeof document !== 'undefined' ? readSound() : false;
let sepiaOn = false;
let audioCtx: AudioContext | null = null;

const emit = (listeners: Set<() => void>) => listeners.forEach((listener) => listener());

export const setSound = (on: boolean) => {
  soundOn = on;
  try {
    localStorage.setItem('sound', on ? 'on' : 'off');
  } catch {
    // private mode
  }
  emit(soundListeners);
};

export const toggleSound = () => setSound(!soundOn);

export const useSound = () =>
  useSyncExternalStore(
    (listener) => {
      soundListeners.add(listener);
      return () => soundListeners.delete(listener);
    },
    () => soundOn,
    () => false,
  );

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

export const playClick = () => {
  if (!soundOn || typeof window === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  try {
    audioCtx ??= new AudioContext();
    if (audioCtx.state === 'suspended') {
      void audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'square';
    osc.frequency.value = 780;
    gain.gain.value = 0.035;
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.06);
    osc.stop(audioCtx.currentTime + 0.065);
  } catch {
    // Audio can fail without user gesture or in unsupported browsers.
  }
};
