import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import Projects from '../components/Projects.jsx'
import Work from '../components/Work.jsx'
import Education from '../components/Education.jsx'
import Certificates from '../components/Certificates.jsx'
import Contact from '../components/Contact.jsx'

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Work />
        <Education />
        <Certificates />
        <Contact />
      </main>
    </>
  )
}

export default Home
