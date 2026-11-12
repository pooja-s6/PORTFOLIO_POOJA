import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

const experiences = [
  {
    title: 'Backend Developer Intern',
    company: 'Hexaware Technologies',
    location: 'Remote',
    period: 'Feb 2026 – Present',
    current: true,
    responsibilities: [
      'Developing scalable backend services for an AI-powered education platform using FastAPI, PostgreSQL, and RESTful APIs.',
      'Designing and implementing backend modules while collaborating with cross-functional teams following Agile software development practices.',
      'Integrating AI-powered workflows into backend services and gaining hands-on experience in backend architecture, API design, and production software development.',
    ],
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'FlyHigh Educational Institute',
    location: 'Remote',
    period: 'Oct 2025 – Jan 2026',
    current: false,
    responsibilities: [
      'Collaborated with a three-member team under an IIT professor-led startup to develop QuizFlow, a real-time quiz platform actively used by over 200+ students.',
      'Designed React-based frontend modules and Firebase database architecture supporting concurrent real-time quiz sessions.',
      'Deployed the application on Vercel and participated in debugging, feature enhancements, and production support.',
    ],
  },
  {
    title: 'Java Developer Intern',
    company: 'Infosys Springboard',
    location: 'Virtual',
    period: 'Nov 2025 – Jan 2026',
    current: false,
    responsibilities: [
      'Developed the Legal Aid Matching Platform in a five-member Agile team using Java, Spring Boot, and PostgreSQL.',
      'Collaborated using Git-based version control, resolving merge conflicts and maintaining feature branches throughout the software development lifecycle.',
      'Designed backend modules, REST APIs, and relational database schema supporting role-based legal case management.',
    ],
  },
  {
    title: 'AI/ML Intern',
    company: 'IBM SkillsBuild',
    location: 'Virtual',
    period: 'Jun 2025 – Jul 2025',
    current: false,
    responsibilities: [
      'Developed an employee salary prediction model using supervised machine learning algorithms.',
      'Trained and evaluated models including K-Nearest Neighbors (KNN) and Logistic Regression while comparing prediction performance.',
      'Gained practical experience in data preprocessing, feature engineering, model evaluation, and the complete machine learning workflow.',
    ],
  },
  {
    title: 'Software Engineering Intern',
    company: 'AVPS Technologies',
    location: 'Virtual',
    period: 'Dec 2024 – Sep 2025',
    current: false,
    responsibilities: [
      'Completed a ten-month internship focused on enterprise software development using Java, Spring Boot, React, MongoDB, Docker, and Flask.',
      'Developed RESTful backend APIs for a voice-enabled e-commerce platform integrating Whisper speech recognition with Flask and Spring Boot services.',
      'Worked with layered architecture, dependency injection, API development, and backend application design following enterprise software engineering practices.',
      'Gained exposure to Docker-based deployments, JBoss and WildFly application servers, and software deployment workflows.',
      'Performed Playwright automation testing and manual testing while learning software quality assurance, debugging, and production support practices.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Experience" title="Work Experience" />

        <div className="relative space-y-5">
          <div className="absolute bottom-4 left-[7px] top-4 hidden w-px bg-white/10 md:block" aria-hidden="true" />
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.16) }}
              className="relative md:pl-10"
            >
              <span
                className="absolute left-0 top-8 hidden h-3.5 w-3.5 rounded-full border border-accent bg-ink md:block"
                aria-hidden="true"
              />
              <div className="surface-card p-6 sm:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-white">{exp.title}</h3>
                    <p className="mt-2 flex flex-wrap items-center gap-2 text-sm text-zinc-400">
                      <FaBriefcase className="text-lavender" aria-hidden="true" />
                      <span className="font-medium text-zinc-200">{exp.company}</span>
                      <span className="text-zinc-600">•</span>
                      <span>{exp.location}</span>
                    </p>
                  </div>
                  <p className="flex items-center gap-2 text-sm text-zinc-400">
                    <FaCalendar className="text-lavender" aria-hidden="true" />
                    <span>{exp.period}</span>
                    {exp.current && (
                      <span className="ml-1 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Current
                      </span>
                    )}
                  </p>
                </div>
                <ul className="mt-5 space-y-3">
                  {exp.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
