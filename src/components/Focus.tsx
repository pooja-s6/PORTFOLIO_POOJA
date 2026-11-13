import { highlights } from '../data/portfolio';
import Reveal from './Reveal';

const Focus = () => (
  <section aria-label="What I work on" className="px-5 pb-8 sm:px-8">
    <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
      {highlights.map((item, index) => (
        <Reveal key={item.title} delay={index * 0.05} className="surface-card p-6">
          <p className="font-display text-sm font-semibold text-accent-text">0{index + 1}</p>
          <h2 className="mt-3 font-display text-xl font-semibold text-fg">{item.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Focus;
