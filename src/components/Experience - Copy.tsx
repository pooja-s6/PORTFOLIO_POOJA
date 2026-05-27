const Experience = () => {
  const experiences = [
    {
      company: 'FlyHigh Institute',
      position: 'Full Stack Developer Intern',
      period: 'Oct 2025 - Present',
      description: [
        'Developed real-time quiz platform using React and Firebase with multi-user synchronization',
        'Optimized Firebase listeners for low-latency concurrent quiz sessions',
        'Deployed on Vercel ensuring 99% uptime and responsive UI across devices'
      ]
    },
    {
      company: 'Infosys Springboard - Batch 9',
      position: 'Java Tech Stack Intern',
      period: 'Dec 2024 - Present',
      description: [
        'Building enterprise modules using Java, Spring Boot with MVC and REST architecture',
        'Implementing standardized logging and exception handling for production-ready code',
        'Refactoring microservices for improved modularity and maintainability'
      ]
    },
    {
      company: 'AYPS Technologies',
      position: 'Backend Developer Intern',
      period: 'Dec 2024 - Sep 2025',
      description: [
        'Built scalable backend services using Java, Spring Boot, MySQL, and MongoDB',
        'Designed REST APIs for e-commerce platform handling inventory and billing workflows',
        'Optimized database queries improving response time by 35%'
      ]
    }
  ]

  return (
    <section id="experience" className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Work Experience
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-gray-200"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                  <p className="text-blue-600 font-semibold">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-600 font-medium mt-1 md:mt-0">{exp.period}</span>
              </div>

              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
