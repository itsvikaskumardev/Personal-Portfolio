import { useState } from 'react'
import './Contact.css'

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com', icon: 'gh' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'in' },
]

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">
            Get In <span className="accent">Touch</span>
          </h2>
          <p className="section-sub">Have a project in mind or want to collaborate? Let's talk!</p>
        </div>

        <div className="contact__grid">
          <form className="contact__form" onSubmit={handleSubmit}>
            <label>
              Your Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                required
              />
            </label>

            <label>
              Email Address
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="jane@example.com"
                required
              />
            </label>

            <label>
              Your Message
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
              />
            </label>

            <button type="submit" className="btn btn-primary contact__submit">
              {sent ? 'Message Sent ✓' : 'Send Message'}
            </button>
          </form>

          <div className="contact__info">
            <div className="contact__info-item">
              <span className="contact__info-icon">📍</span>
              <div>
                <h4>Location</h4>
                <p>Noida, India</p>
              </div>
            </div>

            <div className="contact__info-item">
              <span className="contact__info-icon">✉️</span>
              <div>
                <h4>Email</h4>
                <p>[vk541636@gmail.com]</p>
              </div>
            </div>

            <div className="contact__info-item">
              <span className="contact__info-icon">📞</span>
              <div>
                <h4>Phone</h4>
                <p>8587054687</p>
              </div>
            </div>

            <div className="contact__socials">
              <h4>Follow Me</h4>
              <div className="contact__social-links">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="contact__social-link"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Vikas Kumar. All rights reserved.</p>
        </div>
      </footer>
    </section>
  )
}

export default Contact
