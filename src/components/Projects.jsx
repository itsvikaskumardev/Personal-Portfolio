import ProjectCard from './ProjectCard.jsx'
import './Projects.css'
import hmsImage from '../assests/HMS-Image.png'
import hmsAdminDashboard from '../assests/HMS-adminDashboard.png'
import hmsDoctorDashboard from '../assests/HMS-doctorDashboard.png'
import hmsServices from '../assests/HMS-Services.png'
import codesyncImage from '../assests/CodeSync.jpg'
import EkartImage from '../assests/Ekart.png'
import EkartAdminDashboard from '../assests/Ekart-AdminDashBoard.png'
import EkartProductDetails from '../assests/Ekart-ProductDetaisl.png'
import EkartUsers from '../assests/Ekart-Userspng.png'
import RMSPropertyImage from '../assests/RMS-Property.png'
import RMSAdminDashboardImage from '../assests/RMS-AdminDashboard.png'
import RMSBuyerDashboardImage from '../assests/RMS-BuyerDashboard.png'
import RMSSellerDashboardImage from '../assests/RMS-SellerDashboard.png'
const PROJECTS = [

  {
    title: 'Real Estate Management Platform',
    desc: 'A full-stack platform for real estate management, featuring property listing, client management, and secure authentication.',
    tags: ['ASP.NET Core', 'Entity Framework Core ', 'PostgreSQL', 'React', 'Tailwind CSS'],
    gradient: 'linear-gradient(135deg, #6d28d9, #db2777)',
    demoUrl: 'https://real-estate-management-system-three-psi.vercel.app/',
    codeUrl: 'https://github.com/itsvikaskumardev/Real-Estate-Management-System-',
    imageUrl: [RMSPropertyImage, RMSBuyerDashboardImage, RMSSellerDashboardImage, RMSAdminDashboardImage],
  },

  {
    title: 'Hospital Management System',
    desc: 'A full-stack hospital management application for managing patients, doctors, appointments, and medical records with secure authentication and an intuitive user interface.',
    tags: ['ASP.NET Core', 'Entity Framework Core ', 'PostgreSQL', 'React', 'Tailwind CSS'],
    gradient: 'linear-gradient(135deg, #7c3aed, #4f46e5)',


    demoUrl: [
      { name: 'Admin Dashboard', url: 'https://medicare-care-admin.netlify.app/' },
      { name: 'Patient and Doctor Dashboard ', url: 'https://medicare-care.netlify.app/' }
    ],
    codeUrl: 'https://github.com/itsvikaskumardev/MediCare',
    imageUrl: [hmsImage, hmsAdminDashboard, hmsDoctorDashboard, hmsServices],
  },
  {
    title: 'E-Commerce Platform',
    desc: 'A full-stack e-commerce platform featuring product management, user authentication, shopping cart functionality, order processing, and secure payment integration.',
    tags: ['React.js', 'Go', 'Gin', 'Redux', 'PostgreSQL'],
    gradient: 'linear-gradient(135deg, #6d28d9, #db2777)',
    demoUrl: 'https://ekart-ecommerce-go.netlify.app/',
    codeUrl: 'https://github.com/itsvikaskumardev/Ekart-Ecommerce',
    imageUrl: [EkartImage, EkartAdminDashboard, EkartProductDetails, EkartUsers],
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
