import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import {
  SiFastapi,
  SiFirebase,
  SiMongodb,
  SiOpenai,
  SiPostgresql,
  SiReact,
  SiSpringboot,
  SiVercel,
} from 'react-icons/si';
import type { IconType } from 'react-icons';
import SectionHeading from './SectionHeading';

type Tech = {
  name: string;
  icon: IconType;
};

const projects: {
  title: string;
  description: string;
  features: string[];
  technologies: Tech[];
  github: string;
  live: string;
}[] = [
  {
    title: 'TutorX',
    description:
      'AI-Based Personalized Learning Platform that assists students with academic guidance using OpenAI LLMs, with a robust FastAPI backend and React Native mobile frontend.',
    features: [
      "Built an AI-powered tutoring chatbot that assists students with personalized academic guidance using OpenAI's LLM.",
      'Designed and integrated FastAPI backend with real-time processing and full-cycle API response environment.',
      'Developed the mobile frontend using React Native; collaborated in a team for end-to-end platform delivery.',
    ],
    technologies: [
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'React Native', icon: SiReact },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'OpenAI', icon: SiOpenai },
    ],
    github: 'https://github.com/pooja-s6/pod3',
    live: '',
  },
  {
    title: 'Legal Aid Matching Platform',
    description: 'Platform connecting NGOs, Lawyers, and Citizens for role-based legal assistance and case resolution.',
    features: [
      'Built a role-based legal assistance platform enabling citizens to connect with NGOs and lawyers for case resolution.',
      'Developed backend case-matching logic, role-based access workflows, and relational database schema using PostgreSQL across 3 user roles.',
      'Designed an analytics dashboard for case monitoring and progress tracking.',
    ],
    technologies: [
      { name: 'React', icon: SiReact },
      { name: 'Spring Boot', icon: SiSpringboot },
      { name: 'PostgreSQL', icon: SiPostgresql },
    ],
    github: 'https://github.com/pooja-s6/legal-aid-matching-platform',
    live: '',
  },
  {
    title: 'QuizFlow',
    description: 'Real-Time Quiz Platform for Students and Teachers with live leaderboard updates and Firebase backend.',
    features: [
      'Engineered real-time quiz rooms with live leaderboard updates, actively used by 100+ students.',
      'Designed a scalable Firebase schema for low-latency synchronization across concurrent users.',
      'Implemented session control, performance tracking, and modular UI components; successfully deployed on Vercel.',
    ],
    technologies: [
      { name: 'React', icon: SiReact },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'Vercel', icon: SiVercel },
    ],
    github: 'https://github.com/FlyHighSkills/eduflex_final',
    live: 'https://eduflex-zeta.vercel.app/',
  },
  {
    title: 'VocalMart',
    description: 'Voice Search-Enabled E-Commerce Platform with voice-driven product search using the Web Speech API.',
    features: [
      'Developed a full stack e-commerce platform with voice-driven product search using the Web Speech API.',
      'Designed RESTful APIs with Spring Boot for product listing, cart, and order management workflows.',
      'Integrated MongoDB for flexible product catalog storage and retrieval.',
    ],
    technologies: [
      { name: 'Spring Boot', icon: SiSpringboot },
      { name: 'React', icon: SiReact },
      { name: 'MongoDB', icon: SiMongodb },
    ],
    github: 'https://github.com/pooja-s6/vocalmart',
    live: '',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Projects" title="Featured Projects" />

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: (index % 2) * 0.05 }}
              className="surface-card flex h-full flex-col p-6 sm:p-7"
            >
              <h3 className="font-display text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 leading-relaxed text-zinc-400">{project.description}</p>

              <ul className="mt-5 space-y-2.5">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <span
                      key={tech.name}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-sm text-zinc-300"
                    >
                      <Icon className="text-lavender" aria-hidden="true" />
                      {tech.name}
                    </span>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-accent hover:text-lavender"
                >
                  <FaGithub aria-hidden="true" />
                  View Code
                </a>
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:bg-zinc-100"
                  >
                    <FaExternalLinkAlt size={12} aria-hidden="true" />
                    Live
                  </a>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
