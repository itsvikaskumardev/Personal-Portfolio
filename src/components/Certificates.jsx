import './Certificates.css'

const CERTIFICATES = [
  {
    title: 'Web Development',
    issuer: 'Udemy',
    date: '2024',
    credentialUrl: 'https://www.udemy.com/certificate/UC-a4bd64c9-2a3a-413c-97cf-632943340c98/',
    desc: 'Gained hands-on experience in HTML, CSS, JavaScript, and responsive design. Built dynamic websites and integrated backend APIs for full-stack development.',
  },
  {
    title: 'Data Structures and Algorithms',
    issuer: 'Physics Wallah',
    date: '2024',
    credentialUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7261266531521560576/',
    desc: 'Learned advanced data structures, algorithm design, and problem-solving techniques.',
  },
  {
    title: 'Introduction to SQL',
    issuer: 'Simplilearn',
    date: 'Mar 2023',
    desc: 'Learned SQL fundamentals, including database design, queries, joins, and data manipulation techniques.',
    credentialUrl: 'https://www.linkedin.com/posts/vikas-kumar-2004-engineering-student_sql-certification-learningjourney-activity-7321864170033860608-249E?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEb8q8ABc5D_zVjDMZxX8GtRnLVuEobIfcs',
  },
  {
    title: 'Go: The Complete Developer’s Guide',
    issuer: 'Udemy',
    date: 'Nov 2022',
    desc: 'Learned the Go programming language, including concurrency with goroutines and channels, REST API development, database integration, and building scalable backend applications.',
    credentialUrl: '#',
  },
]

function Certificates() {
  return (
    <section id="certificates" className="section certificates">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Certificates</p>
          <h2 className="section-title">
            Licenses & <span className="accent">Certifications</span>
          </h2>
          <p className="section-sub">Courses and credentials that back up what I know.</p>
        </div>

        <div className="certificates__grid">
          {CERTIFICATES.map((cert) => (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noreferrer"
              className="certificates__card"
              key={cert.title}
            >
              <div className="certificates__icon">🏅</div>
              <div className="certificates__body">
                <h3>{cert.title}</h3>
                <p className="certificates__issuer">{cert.issuer}</p>
                {cert.desc && <p className="certificates__desc">{cert.desc}</p>}
                <span className="certificates__date">{cert.date}</span>
              </div>
              <span className="certificates__arrow">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates
