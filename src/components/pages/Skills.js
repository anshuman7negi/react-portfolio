import skills from '../../assets/Icon Langguage.svg';
import fontEnd from '../../assets/ux.png';
import backEnd from '../../assets/back-end.png';
import '../styles/Skills.css';

const Skills = () => (
    <div className="skillsContainer">
        <div className="techSkills">
            <img className="skillImage" src={fontEnd} alt="" />
            <p>Front-End</p>
            <ul className="Skills">
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Redux</li>
            </ul>
        </div>
        <div className="techSkills">
            <img className="skillImage" src={backEnd} alt="" />
            <p>Back-End</p>
            <ul className="Skills">
                <li>Ruby</li>
                <li>Ruby on rails</li>
                <li>PostgreSQL</li>
            </ul>
        </div>
        <div className="techSkills">
            <img className="softSkillImg" src={skills} alt="" />
            <p>Soft-Skills</p>
            <ul className="Skills">
                <li>Remote pair-programming</li>
                <li>Problem solving</li>
                <li>Communication</li>
                <li>Decision making</li>
            </ul>
        </div>
    </div>
)

export default Skills;