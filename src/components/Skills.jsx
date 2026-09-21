import './Skills.css'

const SKILL_GROUPS = [
  {
    icon: '💻',
    title: 'Programming Languages',
    desc: 'Core programming languages I use for problem-solving and software development.',
    tags: ['C', 'C++', 'C#'],
  },
  {
    icon: '⚛️',
    title: 'Frontend Development',
    desc: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    icon: '🛠️',
    title: 'Backend Development',
    desc: 'Creating robust server-side applications and RESTful / GraphQL APIs.',
    tags: ['Node.js', 'Go', 'Express', '.NET'],
  },
  {
    icon: '🗄️',
    title: 'Database Management',
    desc: 'Designing and optimizing databases for performance and scalability.',
    tags: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    desc: 'Deploying and managing applications in cloud environments.',
    tags: ['Azure', 'Docker', 'CI/CD', 'GitHub Actions'],
  },
  {
    icon: '🧰',
    title: 'Tools & Technologies',
    desc: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'GitLab', 'VS Code', 'Jira'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Skills</p>
          <h2 className="section-title">
            What I <span className="accent">work with</span>
          </h2>
          <p className="section-sub">Technologies I reach for to bring ideas to life.</p>
        </div>

        <div className="skills__grid">
          {SKILL_GROUPS.map((group) => (
            <div className="skills__card" key={group.title}>
              <div className="skills__icon">{group.icon}</div>
              <h3>{group.title}</h3>
              <p>{group.desc}</p>
              <div className="skills__tags">
                {group.tags.map((tag) => (
                  <span className="skills__tag" key={tag}>
                    {tag}
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
