import type { PlaceRef } from '../data/portfolio';
import { scrollToId } from './navigation';

export const jumpToPlace = (place: PlaceRef) => {
  scrollToId(place.targetId);
  window.setTimeout(() => {
    const element = document.getElementById(place.targetId);
    element?.classList.add('skill-flash');
    window.setTimeout(() => element?.classList.remove('skill-flash'), 1600);
  }, 350);
};
