import { FaGithub } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'Legal Aid Matching Platform',
      tech: 'Java • Spring Boot • MySQL • REST APIs',
      description: [
        'Built REST APIs for lawyer-client matching with role-based access control',
        'Implemented secure authentication and MySQL database with normalized schema',
        'Reduced query response time by 40% through indexing and optimization'
      ],
      github: '#',
      impact: 'Scalable backend for legal consultation matching'
    },
    {
      title: 'VocalMart - E-Commerce Platform',
      tech: 'Spring Boot • MongoDB • React • Voice API',
      description: [
        'Developed microservice architecture for product, billing, and inventory modules',
        'Integrated voice-based product search using REST APIs',
        'Optimized MongoDB queries reducing latency by 35%'
      ],
      github: '#',
      impact: 'Full-stack retail management system'
    },
    {
      title: 'EduFlex Quiz Application',
      tech: 'React • Firebase • Real-time Database',
      description: [
        'Built real-time quiz platform with Firebase for concurrent user sessions',
        'Implemented low-latency data sync for live quiz functionality',
        'Deployed on Vercel with responsive UI for seamless user experience'
      ],
      github: '#',
      impact: 'Real-time collaborative learning platform'
    }
  ]

  return (
    <section id="projects" className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Featured Projects
        </h2>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
                  <p className="text-sm text-blue-600 font-medium">{project.tech}</p>
                </div>
                <a
                  href={project.github}
                  className="mt-2 md:mt-0 text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-1 text-sm"
                >
                  <FaGithub size={16} /> View Code
                </a>
              </div>
              
              <ul className="space-y-2 mb-3">
                {project.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-3 pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-600 font-medium">Impact: {project.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
