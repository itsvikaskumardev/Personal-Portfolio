import './Timeline.css'

const EXPERIENCE = [
  {
    role: 'Backend Developer',
    org: 'DeliverIt by Urban Harvest Solutions Pvt. Ltd.',
    period: '2026 — Present',
    desc: 'Developing and maintaining REST APIs and ERP integrations, with a focus on performance, scalability, reliability, and clean architecture.',
  },
  // Remove the entry below unless you actually worked there.
  // {
  //   role: 'Junior Developer',
  //   org: 'StartUp Ventures',
  //   period: '2019 — 2021',
  //   desc: 'Built web applications and gained experience working on increasingly complex projects while expanding my technical skills.',
  // },
];

function Work() {
  return (
    <section id="experience" className="section timeline-section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Experience</p>
          <h2 className="section-title">
            Work <span className="accent">Experience</span>
          </h2>
          <p className="section-sub">My professional journey so far.</p>
        </div>

        <div className="timeline">
          {EXPERIENCE.map((item) => (
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

export default Work
