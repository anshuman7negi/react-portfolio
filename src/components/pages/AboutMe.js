import '../styles/AboutMe.css'
import Skills from './Skills';

const AboutMe = () => (
    <div className="AboutContainer" id="AboutMe">
        <div className="aboutMe">
            <div className="about">
                <h3>About Me</h3>
                <p>
                    Hey there! I'm Full Stack Developer with a strong focus on JavaScript, React, and Ruby.
                    With a proven knack for successfully deploying numerous projects, I bring both expertise and results to the table.

                    My passion lies in creating user-centered web solutions that not only look
                    great but also offer seamless functionality. I'm a firm believer in the power of remote work and
                    have honed my skills to excel in distributed team environments.
                </p>
            </div>
            <div className="offer">
                <h3>What I Offer <span>?</span> </h3>
                <div className="offer-details">
                    <p> <span>Tech Mastery:</span> I command JavaScript, React, and Ruby to craft comprehensive web solutions that meet user needs.</p>
                    <p> <span>Project Delivery:</span> I've brought to life a variety of projects, each emphasizing user satisfaction and engagement.</p>
                    <p><span>Remote Collaboration:</span> With remote work experience, I thrive on clear communication and efficient teamwork, no matter the distance.</p>
                </div>
            </div>
            <div className="collaborate">
                <h3>Why Collaborate With Me <span>?</span> </h3>
                <p>I'm enthusiastic about joining dynamic teams to contribute my expertise.
                    My approach involves not only technical excellence but also a creative mindset to enhance user experiences.</p>
            </div>
        </div>
        <div className='divideLine'></div>
        <div className='AllSkills'>
            <h3>Skills</h3>
            <Skills />
        </div>
    </div>
)

export default AboutMe;