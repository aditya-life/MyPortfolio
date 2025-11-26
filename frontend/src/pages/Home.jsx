import Navbar from '../components/Navbar';
import About from "../components/About"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import TechStack from "../components/TechStack";
import Experience from '../components/Experience';
import HireMe from '../components/HireMe';


const Home = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto">
        <Hero />
        <TechStack />
        <About />
        <Experience />
        <Projects />
        <HireMe />
        <Contact />

      </main>
      <Footer />
    </>
  )
}

export default Home