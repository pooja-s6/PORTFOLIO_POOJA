import { motion, useInView } from 'framer-motion';
import { useLayoutEffect, useRef } from 'react';
import { FaBriefcase, FaCalendar } from 'react-icons/fa';
import { gsap } from '../lib/gsap';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.experience-card',
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 75%',
          },
        },
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  const experiences = [
    {
      title: 'Backend Intern (FastAPI)',
      company: 'Hexaware Technologies',
      location: 'Remote',
      period: 'Feb 2026 – Present',
      current: true,
      responsibilities: [
        'Working on a mobile-based AI education platform using FastAPI for backend services and React Native for the mobile frontend',
        'Collaborating in a team-based agile environment across the full product development lifecycle',
        'Gained hands-on experience in real-time mobile app architecture and AI-integrated backend workflows',
      ],
      color: 'from-green-400 to-green-500',
    },
    {
      title: 'Full Stack Intern',
      company: 'FlyHigh Educational Institute',
      location: 'Remote',
      period: 'Oct 2025 – Jan 2026',
      current: false,
      responsibilities: [
        'Collaborated in a 3-member team under an IIT professor-led startup to build QuizFlow, a real-time quiz platform used by 100+ students',
        'Gained practical experience in deployment pipelines, real-time debugging, and production-level problem solving',
        'Worked with React and Firebase; successfully deployed the platform live on Vercel',
      ],
      color: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Java Developer Intern',
      company: 'Infosys Springboard',
      location: 'Virtual',
      period: 'Nov 2025 – Jan 2026',
      current: false,
      responsibilities: [
        'Developed the Legal Aid Matching Platform as part of a 5-member team, connecting NGOs, lawyers, and citizens',
        'Built backend systems and database architecture across 3+ core modules using Spring Boot and PostgreSQL',
      ],
      color: 'from-blue-600 to-cyan-600',
    },
    {
      title: 'Full Stack Intern',
      company: 'AVPS Technologies, USA',
      location: 'Virtual',
      period: 'Dec 2024 – Sep 2025',
      current: false,
      responsibilities: [
        'Underwent structured training in Java, Spring Boot, dependency injection, and plugin architecture',
        'Independently developed VocalMart — a voice search-enabled e-commerce platform using Spring Boot, React, and MongoDB',
        'Gained foundational understanding of backend architecture, API design, and end-to-end application delivery',
      ],
      color: 'from-indigo-500 to-purple-600',
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="experience-card text-4xl md:text-5xl font-display font-bold mb-4">
            Work <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="experience-card w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="experience-card relative"
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold text-gray-800 mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <FaBriefcase className="text-purple-600" />
                      <span className="font-semibold">{exp.company}</span>
                      <span className="text-gray-400">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-600 mt-2 md:mt-0">
                    <FaCalendar className="text-pink-600" />
                    <span className="font-medium">{exp.period}</span>
                    {exp.current && (
                      <span className="ml-2 px-3 py-1 bg-gradient-to-r from-green-400 to-green-500 text-white text-xs font-semibold rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                </div>

                {/* Gradient Line */}
                <div className={`h-1 w-full bg-gradient-to-r ${exp.color} rounded-full mb-4`}></div>

                {/* Responsibilities */}
                <ul className="space-y-3">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + idx * 0.1 }}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <span className="text-purple-600 mt-1 flex-shrink-0">▹</span>
                      <span>{responsibility}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
