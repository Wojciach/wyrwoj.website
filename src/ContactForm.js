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

                <textarea rows="130" placeholder="Tell me more..."></textarea>

                <button>Send<span className="material-symbols-rounded">trending_flat</span></button> 
            </form>

        </div>
        </>
    )
}

export default ContactForm;