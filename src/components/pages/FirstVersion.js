import Navbar from './Navbar'
import '../styles/FirstVersion.css'
import FirstSection from './FirstSection';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Footer from './Footer'

const FirstVersion = () => (
    <>
        <div className="backgroundContainer">
            <Navbar />
            <FirstSection/>
            <Projects/>
            <AboutMe/>
            <Contact/>
            <Footer/>
        </div>
    </>
)

export default FirstVersion;