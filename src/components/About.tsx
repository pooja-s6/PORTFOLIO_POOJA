import { about } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const About = () => (
  <section id="about" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
    <div className="mx-auto max-w-6xl">
      <SectionHeading eyebrow="About" title={about.heading} />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <Reveal className="surface-card p-7 sm:p-8">
            <p className="leading-relaxed text-muted">{about.story}</p>
            <ul className="mt-6 space-y-3">
              {about.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-fg">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {bullet}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.05}>
            <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {about.stats.map((stat) => (
                <div key={stat.label} className="surface-card flex flex-col-reverse p-5">
                  <dt className="mt-1 text-xs leading-snug text-muted">{stat.label}</dt>
                  <dd className="font-display text-3xl font-semibold text-fg">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="flex flex-col gap-6">
          <Reveal delay={0.05} className="surface-card p-7 sm:p-8">
            <h3 className="font-display text-xl font-semibold text-fg">Education</h3>
            <div className="mt-6 space-y-6">
              {about.education.map((item, index) => (
                <div key={item.degree} className={`border-l-2 pl-4 ${index === 0 ? 'border-accent' : 'border-line-strong'}`}>
                  <h4 className="font-medium text-fg">{item.degree}</h4>
                  <p className="mt-1 text-sm text-accent-text">{item.school}</p>
                  <p className="mt-1 text-sm text-muted">
                    {item.period} · <span className="font-medium text-fg">{item.score}</span>
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="surface-card p-7 sm:p-8">
            <h3 className="font-display text-lg font-semibold text-fg">Interests</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {about.interests.map((interest) => (
                <li key={interest} className="chip px-3 py-1.5 text-sm">
                  {interest}
                </li>
              ))}
            </ul>
            <h3 className="mt-7 font-display text-lg font-semibold text-fg">Currently learning / exploring</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {about.learning.map((topic) => (
                <li key={topic} className="chip border-accent/40 px-3 py-1.5 text-sm text-accent-text">
                  {topic}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default About;
