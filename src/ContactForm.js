import "./contactForm.scss";


function ContactForm() {
    return(
        <>
        <div className="fake-margin" id="contactForm">
            <h2>INTERESTED?</h2>

            <form>
                <input type="text" placeholder="Name & Surname..."/>
                <input type="text" placeholder="Telephone..."/>
                <input type="text" placeholder="Email..."/>
                <textarea rows="130" placeholder="Tell me more...">
                   
                </textarea>
            </form>

        </div>
        </>
    )
}

export default ContactForm;