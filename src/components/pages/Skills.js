import { Tilt } from 'react-tilt';
import skills from '../../assets/Icon Langguage.svg';
import fontEnd from '../../assets/ux.png';
import backEnd from '../../assets/back-end.png';
import '../styles/Skills.css';

const Skills = () => (
    <div className="skillsContainer">
      <Tilt className="Tilt" options={{ max: 25, scale: 1.05 }}>
        <div className="techSkills">
            <img className="skillImage" src={fontEnd} alt="skill" width="100" height="100" />
            <p>Front-End</p>
            <ul className="Skills">
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Tailwind</li>
                <li>Sass</li>
            </ul>
        </div>
        </Tilt>
        <Tilt className="Tilt" options={{ max: 25, scale: 1.05 }}>
        <div className="techSkills">
            <img className="skillImage" src={backEnd} alt="skill" width="100" height="100" />
            <p>Back-End</p>
            <ul className="Skills">
                <li>Ruby</li>
                <li>Ruby on rails</li>
                <li>PostgreSQL</li>
                <li>Device</li>
                <li>Cancan</li>
                <li>JWT</li>
            </ul>
        </div>
        </Tilt>
        <Tilt className="Tilt" options={{ max: 25, scale: 1.05 }}>
        <div className="techSkills">
            <img className="softSkillImg" src={skills} alt="skill" width="50" height="50" />
            <p>Soft-Skills</p>
            <ul className="Skills">
                <li>Remote pair-programming</li>
                <li>Problem solving</li>
                <li>Communication</li>
                <li>Decision making</li>
            </ul>
        </div>
        </Tilt>
    </div>
)

export default Skills;