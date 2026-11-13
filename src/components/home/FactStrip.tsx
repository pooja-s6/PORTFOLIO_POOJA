import { facts } from '../../data/portfolio';
import Reveal from '../Reveal';

const FactStrip = () => (
  <section id="facts" aria-label="Quick facts" className="scroll-mt-20 px-5 sm:px-8">
    <dl className="mx-auto grid max-w-6xl border-y border-line md:grid-cols-3">
      {facts.map((fact, index) => (
        <Reveal
          key={fact.label}
          delay={index * 0.06}
          className={`py-6 md:px-6 ${index > 0 ? 'border-t border-line md:border-l md:border-t-0' : 'md:pl-0'}`}
        >
          <dt className="label">
            <span className="text-accent-text">0{index + 1}</span> {fact.label}
          </dt>
          <dd className="mt-2 text-sm leading-relaxed text-fg">{fact.value}</dd>
        </Reveal>
      ))}
    </dl>
  </section>
);

export default FactStrip;
