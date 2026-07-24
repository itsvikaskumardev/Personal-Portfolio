import './ProjectCard.css'

function ProjectCard({ project }) {
  const { title, desc, tags, gradient, demoUrl, codeUrl, imageUrl } = project

  return (
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
          <a href={demoUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
            View Demo
          </a>
          <a href={codeUrl} className="btn btn-outline" target="_blank" rel="noreferrer">
            Code
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
