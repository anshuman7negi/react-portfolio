import React, { useEffect, useState } from "react";
import '../styles/Navbar.css'
import { Link } from "react-scroll";
import { useSelector } from "react-redux";

const Navbar = () => {

    const [shouldBlur, setShouldBlur] = useState(false);
    const [isHamburgerClose, setIsHamburgerClose] = useState(false);
    const singleProject = useSelector((state) => state.projects.selectProject);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setShouldBlur(true);
            } else {
                setShouldBlur(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleHamburger = () => {
        const ulElement = document.querySelector('.ulElements');
        ulElement.classList.toggle('hamburger-active');
        ulElement.classList.toggle('navList');
        setIsHamburgerClose(!isHamburgerClose);
    };


    return (
        <nav
            className={`NavbarContainer ${shouldBlur && !singleProject && 'blur'}`}
            style={{ position: isHamburgerClose && !shouldBlur ? 'relative' : 'sticky' }}
        >
            <h3>Anshuman</h3>
            <ul className="ulElements navList">
                <li>
                    <Link to="FirstSection" href="#FirstSection" smooth={true}>Home</Link>
                </li>
                <li>
                    <Link to="Projects" href="#Projects" smooth={true}>Projects</Link>
                </li>
                <li>
                    <Link to="AboutMe" href="#AboutMe" smooth={true}>About</Link>
                </li>
                <li>
                    <Link to="Contact" href="#Contact" smooth={true}>Contact</Link>
                </li>
            </ul>
            <div className={isHamburgerClose ? "hideHamburger" : "Hamburger"}
                onClick={toggleHamburger}>
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
            </div>
            <h2 className={isHamburgerClose ? "hamburger-close" : "close-hide"}
                onClick={toggleHamburger}>X</h2>
        </nav>
    )
}

export default Navbar;