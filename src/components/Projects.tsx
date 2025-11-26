import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub } from 'react-icons/fa';
import {
  SiPython,
  SiOpencv,
  SiSpringboot,
  SiReact,
  SiMysql,
} from 'react-icons/si';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'VocalMart – Retail Management System',
      description: 'A full-stack retail management system for product billing and display with real-time data rendering.',
      features: [
        'Designed backend REST APIs with Spring Boot',
        'Connected to MySQL database for data persistence',
        'Built responsive frontend using React',
        'Real-time product display and billing functionality',
      ],
      technologies: [
        { name: 'Spring Boot', icon: SiSpringboot, color: 'text-green-600' },
        { name: 'React', icon: SiReact, color: 'text-cyan-500' },
        { name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
      ],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-pastel-lavender to-pastel-pink',
    },
    {
      title: 'Yoga Pose Detection System',
      description: 'Real-time yoga pose detection system using computer vision and machine learning for accurate pose estimation.',
      features: [
        'Built using MediaPipe and OpenCV',
        'Implemented landmark-based pose estimation',
        'Webcam-based real-time feedback',
        'Accurate posture analysis and correction suggestions',
      ],
      technologies: [
        { name: 'Python', icon: SiPython, color: 'text-blue-500' },
        { name: 'OpenCV', icon: SiOpencv, color: 'text-red-600' },
      ],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-pastel-blue to-pastel-mint',
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
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
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
                    <a
                      href="https://github.com/pooja-s6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 text-sm font-semibold`}
                    >
                      <FaGithub />
                      <span>View Code</span>
                    </a>
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
