import "./contactForm.scss";
import { memo } from "react";


function ContactForm() {
    var woda = () => {console.log("woda"); return "x";}
    console.log(woda());
    return(
        <section id="contactForm">
            
            <div className="fake-margin" >
            <div className="graphic"></div>
                <h2>INTERESTED?</h2>
                
                

                <form>
                    <input type="text" placeholder="Name & Surname..."/>
                    <input type="text" placeholder="Telephone..."/>
                    <input type="text" placeholder="Email..."/>

                    <textarea rows="130" placeholder="Tell me more..."></textarea>

                    <button>Send<span className="material-symbols-rounded">trending_flat</span></button> 
                </form>

            </div>
        </section>
    )
}

export default memo(ContactForm);