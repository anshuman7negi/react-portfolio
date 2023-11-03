import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import twitter from '../../assets/twitter.png';
import youtube from '../../assets/youtube.svg'
import '../styles/Footer.css'

const Footer = () => (
    <footer>
       <ul className="footerList">
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
    </footer>
)

export default Footer;