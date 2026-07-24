import './About.css'

const HIGHLIGHTS = [
  {
    icon: '💡',
    title: 'Innovative',
    desc: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
  },
  {
    icon: '🎨',
    title: 'Design Oriented',
    desc: 'Beautiful design and user experience are at the heart of everything I build.',
  },
  {
    icon: '</>',
    title: 'Clean Code',
    desc: 'I write maintainable, efficient code following best practices and modern patterns.',
  },
]

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">About</p>
          <h2 className="section-title">
            Get to know <span className="accent">me</span>
          </h2>
          <p className="section-sub">A bit of background, how I work, and what drives me.</p>
        </div>

        <div className="about__grid">
          <div className="about__portrait">
            <div className="about__frame">
              <div className="about__avatar">VK</div>
            </div>
            <div className="about__frame-glow" />
          </div>

          <div className="about__content">
            <h3 className="about__heading">My Journey</h3>
            <p className="about__text">
              I'm a passionate Backend Developer focused on building scalable REST APIs,
              writing clean and maintainable code, and designing reliable software solutions.
              I enjoy solving complex problems, learning new technologies, and continuously
              improving my skills by following best practices and exploring better ways to
              build high-quality applications.
            </p>
            <p className="about__text">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing what I know through
              tech blogs and tutorials. I believe in continuous learning and pushing
              the boundaries of what's possible on the web.
            </p>

            <div className="about__highlights">
              {HIGHLIGHTS.map((item) => (
                <div className="about__card" key={item.title}>
                  <div className="about__card-icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
