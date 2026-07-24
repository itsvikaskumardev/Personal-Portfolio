import './Timeline.css'

const EDUCATION = [
  {
    role: 'B.Tech in Computer Science',
    org: 'ITS Engineering College',
    period: '2022 — 2026',
    desc: 'Focused on data structures, algorithms, software development, and web technologies.',
  },
  {
    role: 'Higher Secondary Education (PCM)',
    org: 'Shanti International School',
    period: '2020 — 2021',
    desc: 'Specialized in Physics, Chemistry, and Mathematics, building a strong analytical foundation for engineering studies.',
  },
  {
    role: 'Secondary Education (10th)',
    org: 'Jai Hind Public School',
    period: '2019 — 2020',
    desc: 'Built a strong foundation in mathematics, science, and computer fundamentals.',
  },

]

function Education() {
  return (
    <section id="education" className="section timeline-section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Education</p>
          <h2 className="section-title">
            My <span className="accent">Education</span>
          </h2>
          <p className="section-sub">The foundation that shaped how I think and build.</p>
        </div>

        <div className="timeline">
          {EDUCATION.map((item) => (
            <div className="timeline__item" key={item.role}>
              <span className="timeline__dot" />
              <div className="timeline__card">
                <div className="timeline__card-head">
                  <h3>{item.role}</h3>
                  <span className="timeline__period">{item.period}</span>
                </div>
                <p className="timeline__org">{item.org}</p>
                <p className="timeline__desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
