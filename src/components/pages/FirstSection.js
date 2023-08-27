import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import twitter from '../../assets/twitter.svg';
import youtube from '../../assets/youtube.svg'
import anshuman from '../../assets/anshuman.jpg'
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
            <ul className="iconsList">
                <li>
                    <a href="https://github.com/anshuman7negi"><img src={github} alt="" /></a>
                </li>
                <li>
                    <a href="https://twitter.com/AnshumanNegi108"
                    ><img src={twitter} alt=""
                        /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/anshuman-singh-negi-33779a224/"
                    ><img src={linkedin} alt=""
                        /></a>
                </li>
                <li>
                    <a href="https://www.youtube.com/@Anshuman_Negi"
                    ><img src={youtube} alt=""
                        /></a>
                </li>
            </ul>
        </div>
        <div className="profile">
            <img src={anshuman} alt="" />
        </div>
    </div>
)


export default FirstSection;