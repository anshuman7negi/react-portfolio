import zeromusic from '../../assets/projectImages/ziroMusic/zirodesktop.png'
import '../styles/Project.css'

const Projects = () => (
    <div className="projectContainer" id="Projects">
        <h3>My Recent Works</h3>
        <div className="projects">
            <div className="card">
                <img src={zeromusic} alt="" />
                <div className="cardDetails">
                    <p>To Do List</p>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                    </ul>
                    <button className="seeProjectBtn">See Project</button>
                </div>
            </div>
            <div className="card">
                <img src={zeromusic} alt="" />
                <div className="cardDetails">
                    <p>To Do List</p>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                    </ul>
                    <button className="seeProjectBtn">See Project</button>
                </div>
            </div>
            <div className="card">
                <img src={zeromusic} alt="" />
                <div className="cardDetails">
                    <p>To Do List</p>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                    </ul>
                    <button className="seeProjectBtn">See Project</button>
                </div>
            </div>
            <div className="card">
                <img src={zeromusic} alt="" />
                <div className="cardDetails">
                    <p>To Do List</p>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                    </ul>
                    <button className="seeProjectBtn">See Project</button>
                </div>
            </div>
        </div>
    </div>
)

export default Projects;