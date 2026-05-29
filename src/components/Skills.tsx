import { motion, useInView } from 'framer-motion';
import { useLayoutEffect, useRef } from 'react';
import {
  FaJava,
  FaPython,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaDatabase,
  FaCode,
  FaBrain,
  FaMicrophone,
  FaNetworkWired,
  FaSitemap,
  FaRobot,
  FaLayerGroup,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
} from 'react-icons/fa';
import {
  SiSpringboot,
  SiMongodb,
  SiPostman,
  SiJavascript,
  SiFirebase,
  SiPostgresql,
  SiNodedotjs,
  SiExpress,
  SiIntellijidea,
  SiAmazonwebservices,
} from 'react-icons/si';
import { gsap } from '../lib/gsap';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skill-card',
        { opacity: 0, y: 30, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 75%',
          },
        },
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      title: 'Programming',
      skills: [
        { name: 'Python', icon: FaPython, color: 'text-blue-500' },
        { name: 'Java', icon: FaJava, color: 'text-orange-600' },
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
        { name: 'SQL', icon: FaDatabase, color: 'text-blue-600' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Spring Boot', icon: SiSpringboot, color: 'text-green-600' },
        { name: 'FastAPI', icon: FaPython, color: 'text-blue-500' },
        { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
        { name: 'Express.js', icon: SiExpress, color: 'text-gray-700' },
        { name: 'REST APIs', icon: FaCode, color: 'text-indigo-600' },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: FaReact, color: 'text-cyan-500' },
        { name: 'React Native', icon: FaReact, color: 'text-cyan-400' },
        { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
        { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
      ],
    },
    {
      title: 'AI / ML',
      skills: [
        { name: 'LLM Integration', icon: FaRobot, color: 'text-purple-600' },
        { name: 'RAG', icon: FaLayerGroup, color: 'text-purple-500' },
        { name: 'Generative AI', icon: FaRobot, color: 'text-pink-500' },
        { name: 'NNDL', icon: FaBrain, color: 'text-blue-500' },
        { name: 'Text and Speech Analysis', icon: FaMicrophone, color: 'text-indigo-500' },
        { name: 'Model Evaluation', icon: FaCode, color: 'text-green-600' },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-600' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
        { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
        { name: 'GitHub', icon: FaGithub, color: 'text-gray-800' },
        { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
        { name: 'VS Code', icon: FaCode, color: 'text-blue-600' },
        { name: 'IntelliJ IDEA', icon: SiIntellijidea, color: 'text-indigo-600' },
        { name: 'Docker', icon: FaDocker, color: 'text-blue-600' },
        { name: 'AWS', icon: SiAmazonwebservices, color: 'text-orange-500' },
      ],
    },
    {
      title: 'Core Concepts',
      skills: [
        { name: 'Data Structures & Algorithms', icon: FaCode, color: 'text-blue-600' },
        { name: 'OOPs', icon: FaLayerGroup, color: 'text-orange-600' },
        { name: 'DBMS', icon: FaDatabase, color: 'text-green-600' },
        { name: 'Computer Networks', icon: FaNetworkWired, color: 'text-indigo-500' },
        { name: 'System Design', icon: FaSitemap, color: 'text-gray-700' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pastel-blueLight to-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="skill-card text-4xl md:text-5xl font-display font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="skill-card w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="skill-card bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-display font-semibold mb-6 text-purple-600">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      className="skill-card flex flex-col items-center justify-center p-4 bg-gradient-to-br from-pastel-lavenderLight to-white rounded-xl hover:shadow-md hover:scale-105 transition-all duration-200 group"
                    >
                      <Icon className={`text-4xl mb-2 ${skill.color} group-hover:scale-110 transition-transform duration-200`} />
                      <span className="text-sm font-medium text-gray-700 text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-pastel-pink to-pastel-peach rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-display font-semibold mb-6 text-purple-600 text-center">
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/80 rounded-xl p-4 hover:shadow-md transition-shadow duration-200">
              <h4 className="font-semibold text-gray-800 mb-2">Certifications</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>Infosys Springboard — Java Foundation (2025)</li>
                <li>AI Fundamentals — IBM SkillsBuild (2025)</li>
                <li>AWS Solutions Architecture Simulation — Forage (2025)</li>
                <li>AI/ML Internship — IBM SkillsBuild (2025)</li>
              </ul>
            </div>
            <div className="bg-white/80 rounded-xl p-4 hover:shadow-md transition-shadow duration-200">
              <h4 className="font-semibold text-gray-800 mb-2">Achievements</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>🥈 6th Place — Debug Relay (Team Event), REC College — 2026</li>
                <li>💡 Cognizant Hackathon Participant — 2026</li>
                <li>🇮🇳 Smart India Hackathon (SIH) — Internal Round, VEC — 2025</li>
                <li>🎯 Active participant in Technical Symposiums across colleges — 2024–2026</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
