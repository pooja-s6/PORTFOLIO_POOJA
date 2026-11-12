import { motion } from 'framer-motion';
import {
  FaBrain,
  FaCheckCircle,
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaLayerGroup,
  FaNetworkWired,
  FaPython,
  FaReact,
  FaRobot,
  FaSitemap,
} from 'react-icons/fa';
import {
  SiAmazonwebservices,
  SiApachemaven,
  SiC,
  SiCplusplus,
  SiExpress,
  SiFirebase,
  SiIntellijidea,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiSpringboot,
} from 'react-icons/si';
import type { IconType } from 'react-icons';
import SectionHeading from './SectionHeading';

type Skill = {
  name: string;
  icon: IconType;
};

const skillCategories: { title: string; skills: Skill[] }[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C++', icon: SiCplusplus },
      { name: 'Java', icon: FaJava },
      { name: 'C', icon: SiC },
      { name: 'Python', icon: FaPython },
    ],
  },
  {
    title: 'Core Computer Science',
    skills: [
      { name: 'Data Structures & Algorithms', icon: FaCode },
      { name: 'Object-Oriented Programming', icon: FaLayerGroup },
      { name: 'Operating Systems', icon: FaNetworkWired },
      { name: 'DBMS', icon: FaDatabase },
      { name: 'Computer Networks', icon: FaNetworkWired },
      { name: 'System Design', icon: FaSitemap },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Spring Boot', icon: SiSpringboot },
      { name: 'FastAPI', icon: FaPython },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'RESTful APIs', icon: FaCode },
    ],
  },
  {
    title: 'Frontend Technologies',
    skills: [
      { name: 'React.js', icon: FaReact },
      { name: 'React Native', icon: FaReact },
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'CSS3', icon: FaCss3Alt },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Firebase', icon: SiFirebase },
    ],
  },
  {
    title: 'AI / Machine Learning',
    skills: [
      { name: 'LLM Integration', icon: FaRobot },
      { name: 'Retrieval-Augmented Generation (RAG)', icon: FaLayerGroup },
      { name: 'Prompt Engineering', icon: FaRobot },
      { name: 'Generative AI', icon: FaRobot },
      { name: 'Neural Networks & Deep Learning', icon: FaBrain },
      { name: 'Time Series Analysis', icon: FaCode },
      { name: 'Model Evaluation', icon: FaCode },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'Docker', icon: FaDocker },
      { name: 'AWS', icon: SiAmazonwebservices },
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Postman', icon: SiPostman },
      { name: 'VS Code', icon: FaCode },
      { name: 'IntelliJ IDEA', icon: SiIntellijidea },
      { name: 'Playwright', icon: FaCheckCircle },
      { name: 'Maven', icon: SiApachemaven },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Skills" title="Technical Skills" />

        <div className="grid gap-5 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: (categoryIndex % 2) * 0.05 }}
              className="surface-card p-6"
            >
              <h3 className="font-display text-lg font-semibold text-white">{category.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-300 transition hover:border-accent/50 hover:text-white"
                    >
                      <Icon className="text-lavender" aria-hidden="true" />
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
          className="surface-card mt-5 p-6 sm:p-8"
        >
          <h3 className="font-display text-xl font-semibold text-white">Certifications &amp; Achievements</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="text-sm font-medium uppercase tracking-[0.16em] text-lavender">Certifications</h4>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-400">
                <li>Infosys Springboard — Java Foundation (2025)</li>
                <li>AI Fundamentals — IBM SkillsBuild (2025)</li>
                <li>AWS Solutions Architecture Simulation — Forage (2025)</li>
                <li>AI/ML Internship — IBM SkillsBuild (2025)</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium uppercase tracking-[0.16em] text-lavender">Achievements</h4>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-400">
                <li>🥈 6th Place — Debug Relay (Team Event), REC College — 2026</li>
                <li>💡 Cognizant Hackathon Participant — 2026</li>
                <li>🇮🇳 Smart India Hackathon (SIH) — Internal Round, VEC — 2025</li>
                <li>🎯 Active participant in Technical Symposiums across colleges — 2024–2026</li>
              </ul>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default Skills;
