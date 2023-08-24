import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import twitter from '../../assets/twitter.svg';
import youtube from '../../assets/youtube.svg'
import '../styles/Footer.css'

const Footer = () => (
    <footer>
       <ul className="footerList">
                <li>
                    <a href="/"><img src={github} alt="" /></a>
                </li>
                <li>
                    <a href="/"
                    ><img src={twitter} alt=""
                        /></a>
                </li>
                <li>
                    <a href="/"
                    ><img src={linkedin} alt=""
                        /></a>
                </li>
                <li>
                    <a href="/"
                    ><img src={youtube} alt=""
                        /></a>
                </li>
            </ul>
    </footer>
)

export default Footer;