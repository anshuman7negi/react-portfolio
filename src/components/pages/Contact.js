import '../styles/Contact.css'

const Contact = () => (
    <div className="contactContainer" id="Contact">
            <p>
                <span> In search of a Full Stack Developer who can elevate your project? </span>
                Let's have a chat and explore the exciting possibilities.
                Reach out to discuss potential freelance collaborations!
            </p>
        <form action="">
            <input type="text" placeholder="Enter your name..." maxLength={30} required />
            <input type="email" placeholder="Enter your email..." required/>
            <textarea name="message" placeholder="Write your message here...." cols="30" rows="10" required></textarea>
            <button className="SubmitButton">Get in touch</button>
        </form>
    </div>
)

export default Contact;