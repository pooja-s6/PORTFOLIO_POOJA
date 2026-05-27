const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend & Languages',
      skills: ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'SQL', 'MySQL', 'MongoDB']
    },
    {
      title: 'Frontend',
      skills: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Firebase']
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS (Learning)', 'Docker', 'Git', 'Maven', 'Postman']
    },
    {
      title: 'Core CS Fundamentals',
      skills: ['Data Structures', 'Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks', 'System Design']
    }
  ]

  return (
    <section id="skills" className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-lg p-6 border border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded text-sm font-medium border border-blue-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
