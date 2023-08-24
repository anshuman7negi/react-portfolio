import React, { useEffect, useState } from "react";
import '../styles/Navbar.css'
import { Link } from "react-scroll";

const Navbar = () => {

    const [shouldBlur, setShouldBlur] = useState(false);

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

    return (
        <nav className={`NavbarContainer ${shouldBlur && 'blur'}`}>
            <h3>Anshuman</h3>
            <ul className="navList">
                <li><Link to="FirstSection" smooth={true}>Home</Link></li>
                <li><Link to="Projects" smooth={true}>Projects</Link></li>
                <li><Link to="AboutMe" smooth={true}>About</Link></li>
                <li><Link to="Contact" smooth={true}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;