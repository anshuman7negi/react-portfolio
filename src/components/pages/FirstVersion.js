import Navbar from './Navbar'
import '../styles/FirstVersion.css'
import FirstSection from './FirstSection';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Footer from './Footer'
import SeeProjects from './SeeProject';
import { useSelector } from 'react-redux';

const FirstVersion = () => {
    const singleProject = useSelector((state) => state.projects.selectProject);


    return (
        <>
            <div className={`backgroundContainer ${singleProject && 'backgroundBlur'}`}>
                <Navbar />
                <FirstSection />
                <Projects />
                <AboutMe />
                <Contact />
                <Footer />
            </div>
            {singleProject && <SeeProjects />}
        </>
    )
}

export default FirstVersion;