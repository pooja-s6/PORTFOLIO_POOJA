import { recommendations } from '../../data/portfolio';
import Reveal from '../Reveal';

const Recommendations = () => {
  if (recommendations.length === 0) return null;

  return (
    <div className="mt-16">
      <h3 className="label">Recommendations</h3>
      <div className="mt-4 grid gap-8 border-t border-line pt-8 md:grid-cols-2">
        {recommendations.map((item, index) => (
          <Reveal key={item.name} delay={index * 0.06}>
            <figure>
              <blockquote className="font-serif text-xl leading-relaxed text-fg">“{item.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-muted">
                <a href={item.linkedin} target="_blank" rel="noopener noreferrer" className="font-medium text-fg hover:text-accent-text">
                  {item.name}
                </a>
                , {item.role}, {item.company}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
