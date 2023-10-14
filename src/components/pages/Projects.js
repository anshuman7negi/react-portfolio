import { useDispatch, useSelector } from 'react-redux'
import '../styles/Project.css'
import { selectProject } from '../redux/projectSlice';

const Projects = () => {

    const dispatch = useDispatch();
    const projectData = useSelector((state) => state.projects.projectData);


    return (<div className="projectContainer" id="Projects">
        <h3 className='projectsHeading'>My Recent Works</h3>
        <div className="projects">
            {
                projectData.map((item) => {
                    return (<div className="card" key={item.id}>
                        <img src={item.projectImage} alt="" />
                        <div className="cardDetails">
                            <p>{item.projectTitle}</p>
                            <ul>
                                <li>{item.languageUsed[0]}</li>
                                <li>{item.languageUsed[1]}</li>
                                <li>{item.languageUsed[2]}</li>
                            </ul>
                            <button className="seeProjectBtn" onClick={() => dispatch(selectProject(item)) } >See Project</button>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    </div>
    );
}

export default Projects;