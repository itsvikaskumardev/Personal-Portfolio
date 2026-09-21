import { useEffect, useState } from 'react'
import './Hero.css'
import resumePdf from '../assests/Vikas_Kumar_Resume.pdf'

const ROLES = ['Backend Developer', 'Web Developer',]

function useTypewriter(words, speed = 90, pause = 1400) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => i + 1)
    } else {
      timeout = setTimeout(() => {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        )
      }, deleting ? speed / 2 : speed)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, speed, pause])

  return text
}

function Hero() {
  const roleText = useTypewriter(ROLES)

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero section">
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />

      <div className="container hero__grid">
        <div className="hero__content">


          <h1 className="hero__title">
            Hi, I'm <span className="accent">Vikas Kumar</span>
          </h1>

          <p className="hero__role">
            {roleText}
            <span className="hero__cursor" />
          </p>

          <p className="hero__desc">
            I create seamless backend systems and intuitive user experiences using cutting-edge technologies. Let’s build something that truly makes a difference.
          </p>

          <div className="hero__actions">
            <a href={resumePdf} download="Vikas_Kumar_Resume.pdf" className="btn btn-primary">
              Download Resume
            </a>
            <button className="btn btn-outline" onClick={() => scrollTo('#contact')}>
              Contact Me
            </button>
          </div>


        </div>

        <div className="hero__portrait">
          <div className="hero__code-card">
            <div className="hero__code-header">
              <span className="hero__code-dot hero__code-dot--red"></span>
              <span className="hero__code-dot hero__code-dot--yellow"></span>
              <span className="hero__code-dot hero__code-dot--green"></span>
            </div>
            <pre className="hero__code-body">
              <code>
                <span className="code-keyword">const</span> <span className="code-variable">developer</span> = {'{'}
                <br />  <span className="code-property">name</span>: <span className="code-string">"Vikas Kumar"</span>,
                <br />  <span className="code-property">skills</span>: [<span className="code-string">"ASP.NET Core"</span>, <span className="code-string">"PostgreSQL"</span>, <span className="code-string">"Redis"</span>],
                <br />  <span className="code-property">passion</span>: <span className="code-string">"Building scalable APIs"</span>
                <br />{'}'};
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
