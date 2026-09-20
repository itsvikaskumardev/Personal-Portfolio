import { useState } from 'react'
import './ProjectCard.css'

function ProjectCard({ project }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { title, desc, tags, gradient, demoUrl, codeUrl, imageUrl } = project

  return (
    <>
      <article className="project-card">
      <div className="project-card__cover" style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : gradient }}>
        {!imageUrl && <span className="project-card__cover-glyph">{title.charAt(0)}</span>}
      </div>

      <div className="project-card__body">
        <h3>{title}</h3>
        <p>{desc}</p>

        <div className="project-card__tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="project-card__actions">
          {Array.isArray(demoUrl) && demoUrl.length > 1 ? (
            <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
              View Demo
            </button>
          ) : (
            <a href={Array.isArray(demoUrl) ? demoUrl[0]?.url : demoUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
              View Demo
            </a>
          )}
          <a href={codeUrl} className="btn btn-outline" target="_blank" rel="noreferrer">
            Code
          </a>
        </div>
      </div>
    </article>
      {isModalOpen && (
        <div className="demo-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="demo-modal" onClick={e => e.stopPropagation()}>
            <h4>Select a Demo</h4>
            <div className="demo-modal-links">
              {demoUrl.map((link, idx) => (
                <a key={idx} href={link.url} target="_blank" rel="noreferrer" className="btn btn-outline" onClick={() => setIsModalOpen(false)}>
                  {link.name}
                </a>
              ))}
            </div>
            <button className="btn btn-outline close-btn" onClick={() => setIsModalOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectCard
