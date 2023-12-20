import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import twitter from '../../assets/twitter.png';
import youtube from '../../assets/youtube.svg'
import anshuman from '../../assets/anshuman.avif'
import { Tilt } from 'react-tilt';
import '../styles/FirstSection.css'

const FirstSection = () => (
    <div className="FirstSectionContainer" id="FirstSection">
        <div className="FirstSectionDetails">
            <h1>
                Hey there. I’m Anshuman.
                <br />
                <span >I’m a software developer</span>
            </h1>
            <p>
                I can help you build a product , feature or website Look through some
                of my work and experience! If you like what you see and have a project
                you need coded, don’t hesitate to contact me.
            </p>
            <div className="ResumeContainer">
                <ul className="iconsList">
                    <li>
                        <a href="https://github.com/anshuman7negi" target="_blank" rel="noreferrer"><img src={github} alt="GitHub" /></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/AnshumanNegi108" target="_blank" rel="noreferrer"
                        ><img src={twitter} alt="Twitter"
                            /></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/anshuman-singh-negi-33779a224/" target="_blank" rel="noreferrer"
                        ><img src={linkedin} alt="LinkedIn"
                            /></a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/@Anshuman_Negi" target="_blank" rel="noreferrer"
                        ><img src={youtube} alt="YouTube"
                            /></a>
                    </li>
                </ul>
                <button className="resume">
                    <a href="https://drive.google.com/file/d/1gCBg4SQKnuTMZ-OvUfuhK0Ki0N9v_tH7/view?usp=sharing" target="_blank" rel="noreferrer">
                        GET MY CV
                    </a>
                </button>
            </div>
        </div>
        <Tilt className="Tilt" options={{ max: 55 }}>
        <div className="profile">
              <img src={anshuman} alt="profile" loading="eager" />
        </div>
        </Tilt>
    </div>
)


export default FirstSection;