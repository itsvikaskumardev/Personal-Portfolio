import { useState } from 'react'
import './ProjectCard.css'

function ProjectCard({ project }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const { title, desc, tags, gradient, demoUrl, codeUrl, imageUrl } = project
  const images = Array.isArray(imageUrl) ? imageUrl : (imageUrl ? [imageUrl] : [])

  return (
    <>
      <article className="project-card">
      <div 
        className={`project-card__cover ${images.length > 0 ? 'clickable' : ''}`} 
        style={{ backgroundImage: images.length > 0 ? `url(${images[0]})` : gradient }}
        onClick={() => { if (images.length > 0) setIsImageModalOpen(true) }}
      >
        {!images.length && <span className="project-card__cover-glyph">{title.charAt(0)}</span>}
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
      {isImageModalOpen && images.length > 0 && (
        <div className="demo-modal-overlay image-modal-overlay" onClick={() => setIsImageModalOpen(false)}>
          <div className="image-slider-modal" onClick={e => e.stopPropagation()}>
            {images.length > 1 && (
              <button 
                className="slider-btn prev-btn" 
                onClick={(e) => {
                  e.stopPropagation()
                  setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
                }}
              >
                &#10094;
              </button>
            )}
            
            <img src={images[currentImageIndex]} alt={`${title} screenshot`} className="slider-image" />
            
            {images.length > 1 && (
              <button 
                className="slider-btn next-btn" 
                onClick={(e) => {
                  e.stopPropagation()
                  setCurrentImageIndex((prev) => (prev + 1) % images.length)
                }}
              >
                &#10095;
              </button>
            )}
            <button className="close-slider-btn" onClick={() => setIsImageModalOpen(false)}>&#10005;</button>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectCard
