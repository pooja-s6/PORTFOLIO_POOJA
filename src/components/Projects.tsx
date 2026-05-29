import { motion, useInView } from 'framer-motion';
import { useLayoutEffect, useRef } from 'react';
import { FaGithub } from 'react-icons/fa';
import {
  SiFastapi,
  SiSpringboot,
  SiReact,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiOpenai,
  SiVercel,
} from 'react-icons/si';
import { gsap } from '../lib/gsap';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.project-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.16,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 75%',
          },
        },
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: 'TutorX',
      description: 'AI-powered tutoring chatbot that assists students with personalized academic guidance using OpenAI LLMs. Built with FastAPI backend and React Native mobile frontend.',
      features: ['Real-time LLM responses', 'Personalized guidance', 'Mobile-first'],
      technologies: [
        { name: 'FastAPI', icon: SiFastapi, color: 'text-teal-500' },
        { name: 'React Native', icon: SiReact, color: 'text-cyan-500' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-600' },
        { name: 'OpenAI', icon: SiOpenai, color: 'text-purple-600' },
      ],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-pastel-lavender to-pastel-pink',
      github: 'https://github.com/pooja-s6/pod3',
      live: '',
    },
    {
      title: 'Legal Aid Matching Platform',
      description: 'Role-based legal assistance platform enabling citizens to connect with NGOs and lawyers for case resolution. Includes analytics dashboard for case monitoring.',
      features: ['3 user roles', 'Case matching logic', 'Analytics dashboard'],
      technologies: [
        { name: 'React', icon: SiReact, color: 'text-cyan-500' },
        { name: 'Spring Boot', icon: SiSpringboot, color: 'text-green-600' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-600' },
      ],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-pastel-blue to-pastel-mint',
      github: 'https://github.com/pooja-s6/legalaid-backend',
      live: '',
    },
    {
      title: 'QuizFlow (EduFlex)',
      description: 'Real-time quiz platform with live leaderboards actively used by 100+ students. Features concurrent user synchronization and scalable Firebase schema.',
      features: ['100+ students', 'Live leaderboards', 'Deployed on Vercel'],
      technologies: [
        { name: 'React', icon: SiReact, color: 'text-cyan-500' },
        { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' },
        { name: 'Vercel', icon: SiVercel, color: 'text-black' },
      ],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-pastel-lavender to-pastel-pink',
      github: 'https://github.com/FlyHighSkills/eduflex_final',
      live: 'https://eduflex-zeta.vercel.app/',
    },
    {
      title: 'VocalMart',
      description: 'Full stack e-commerce platform with voice-driven product search using the Web Speech API. Designed RESTful APIs for product listing, cart, and order management.',
      features: ['Voice search', 'REST APIs', 'Full stack delivery'],
      technologies: [
        { name: 'Spring Boot', icon: SiSpringboot, color: 'text-green-600' },
        { name: 'React', icon: SiReact, color: 'text-cyan-500' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
      ],
      gradient: 'from-indigo-500 to-purple-600',
      bgGradient: 'from-pastel-blue to-pastel-mint',
      github: 'https://github.com/pooja-s6/vocalmart',
      live: '',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-pastel-blueLight" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="project-card text-4xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="project-card w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="project-card group"
            >
              <div className={`bg-gradient-to-br ${project.bgGradient} rounded-2xl p-1 shadow-lg hover:shadow-2xl transition-all duration-300`}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 h-full">
                  {/* Project Header */}
                  <div className={`bg-gradient-to-r ${project.gradient} text-white rounded-xl p-4 mb-4`}>
                    <h3 className="text-xl md:text-2xl font-display font-bold">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-purple-600 mt-1">▹</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech) => {
                        const Icon = tech.icon;
                        return (
                          <div
                            key={tech.name}
                            className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                          >
                            <Icon className={`text-xl ${tech.color}`} />
                            <span className="text-sm font-medium text-gray-700">
                              {tech.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 text-sm font-semibold`}
                      >
                        <FaGithub />
                        <span>View Code</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg text-sm font-semibold hover:shadow-md transition-all duration-200"
                      >
                        <span>Live</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
