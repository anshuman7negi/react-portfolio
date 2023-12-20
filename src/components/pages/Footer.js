import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import twitter from '../../assets/twitter.png';
import youtube from '../../assets/youtube.svg'
import '../styles/Footer.css'

const Footer = () => (
    <footer>
       <ul className="footerList">
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
                    ><img src={youtube} alt="Youtube"
                        /></a>
                </li>
            </ul>
    </footer>
)

export default Footer;