import ProjectCard from './ProjectCard.jsx'
import './Projects.css'
import hmsImage from '../assests/HMS-Image.png'
import codesyncImage from '../assests/CodeSync.jpg'
import EkartImage from '../assests/Ekart.png'



const PROJECTS = [
  {
    title: 'E-Commerce Platform',
    desc: 'A full-stack e-commerce platform featuring product management, user authentication, shopping cart functionality, order processing, and secure payment integration.',
    tags: ['React.js', 'Go', 'Gin', 'Redux', 'PostgreSQL'],
    gradient: 'linear-gradient(135deg, #6d28d9, #db2777)',
    demoUrl: 'https://ekart-ecommerce-go.netlify.app/',
    codeUrl: 'https://github.com/itsvikaskumardev/Ekart-Ecommerce',
    imageUrl: EkartImage,
  },
  {
    title: 'Hospital Management System',
    desc: 'A full-stack hospital management application for managing patients, doctors, appointments, and medical records with secure authentication and an intuitive user interface.',
    tags: ['React.js', 'Express.js', 'Node.js', 'MongoDB'],
    gradient: 'linear-gradient(135deg, #7c3aed, #4f46e5)',


    demoUrl: [
      { name: 'Admin Dashboard', url: 'https://medicare-care-admin.netlify.app/' },
      { name: 'Patient and Doctor Dashboard ', url: 'https://medicare-care.netlify.app/' }
    ],
    codeUrl: 'https://github.com/itsvikaskumardev/MediCare',
    imageUrl: hmsImage,
  },
  {
    title: 'Code-Sync',
    desc: 'A real-time collaborative code editor that enables multiple users to write, share, and edit code together with live synchronization and seamless communication.',
    tags: ['React.js', 'WebSocket', 'Express.js'],
    gradient: 'linear-gradient(135deg, #be185d, #7c3aed)',
    demoUrl: '#',
    codeUrl: 'https://github.com/Vikas-Kumar-2004/Code-Sync-Main',
    imageUrl: codesyncImage,
  },
]

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Projects</p>
          <h2 className="section-title">
            My <span className="accent">Projects</span>
          </h2>
          <p className="section-sub">A selection of my recent work.</p>
        </div>

        <div className="projects__grid">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
