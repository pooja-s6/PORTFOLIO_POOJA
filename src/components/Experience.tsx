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
      color: 'from-green-400 to-green-500',
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
      color: 'from-purple-600 to-pink-600',
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
      color: 'from-blue-600 to-cyan-600',
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
      color: 'from-yellow-500 to-orange-500',
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
