import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { allSkills, resolvePlace } from '../data/portfolio';
import type { PlaceRef } from '../data/portfolio';

type SkillFilterValue = {
  selected: string | null;
  places: PlaceRef[];
  select: (skill: string) => void;
  clear: () => void;
  matches: (label: string) => boolean;
  isFiltering: boolean;
};

const SkillFilterContext = createContext<SkillFilterValue | null>(null);

export const SkillFilterProvider = ({ children }: { children: ReactNode }) => {
  const [selected, setSelected] = useState<string | null>(null);

  const places = useMemo(() => {
    if (!selected) return [];
    const skill = allSkills.find((item) => item.name === selected);
    return (skill?.usedIn ?? []).map(resolvePlace).filter((place): place is PlaceRef => Boolean(place));
  }, [selected]);

  useEffect(() => {
    if (!selected) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected]);

  const value: SkillFilterValue = {
    selected,
    places,
    select: (skill) => setSelected((current) => (current === skill ? null : skill)),
    clear: () => setSelected(null),
    matches: (label) => !selected || places.some((place) => place.label === label),
    isFiltering: Boolean(selected),
  };

  return <SkillFilterContext.Provider value={value}>{children}</SkillFilterContext.Provider>;
};

// Hook lives beside the provider on purpose; the react-refresh rule prefers
// component-only modules, but this is the standard context pattern.
// eslint-disable-next-line react-refresh/only-export-components
export const useSkillFilter = () => {
  const value = useContext(SkillFilterContext);
  if (!value) throw new Error('useSkillFilter must be used inside SkillFilterProvider');
  return value;
};
