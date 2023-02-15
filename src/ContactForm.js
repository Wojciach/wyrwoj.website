import "./contactForm.scss";
import { memo } from "react";


function ContactForm() {

    return(
        <section id="contactForm">
            <div className="graphic"></div>
            <div className="fake-margin" >
                
                <h2>INTERESTED?</h2>
                
                

                <form>
                    <input type="text" placeholder="Name & Surname..."/>
                    <input type="text" placeholder="Telephone..."/>
                    <input type="text" placeholder="Email..."/>

                    <textarea rows="130" placeholder="Tell me more..."></textarea>

                    <button>send<span className="material-symbols-rounded">trending_flat</span></button> 
                </form>

            </div>
        </section>
    )
}

export default memo(ContactForm);