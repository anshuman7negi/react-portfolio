import { useDispatch, useSelector } from 'react-redux';
import '../styles/SeeProject.css';
import { closePopup } from '../redux/projectSlice';

const SeeProjects = () => {

    const dispatch = useDispatch();
    const singleProject = useSelector((state) => state.projects.selectProject);

    return (
        <div className="seeProjectContainer">
            <button className='closeBtn' onClick={() => dispatch(closePopup())}>X</button>
            <div className='projectDeatilContainer'>
                <div className="seeProject">
                    <img src={singleProject.projectImage} alt="" />
                    <div className='middleContainer'>
                        <h3>{singleProject.projectTitle}</h3>
                        <ul>
                            <li>{singleProject.languageUsed[0]}</li>
                            <li>{singleProject.languageUsed[1]}</li>
                            <li>{singleProject.languageUsed[1]}</li>
                        </ul>
                    </div>
                    <div className='bottomContainer'>
                    <div className='projectBtn'>
                            <button>See Live</button>
                            <button>See Source</button>
                        </div>
                        <p>{singleProject.cardDetail}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SeeProjects;