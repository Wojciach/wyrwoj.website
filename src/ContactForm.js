import "./contactForm.scss";
import {useState, memo } from "react";
import CustomAlert from "./CustomAlert";

function ContactForm() {
//console.log('ContactForm')

    const [alert, setAlert] = useState(false);
    const [alertStatus, setAlertStatust] = useState('ok');

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        const developmentAddress = "http://localhost:80/my-react-app/public/php/sendForm.php";
        const productionAddress = "./php/sendForm.php";
        fetch(developmentAddress, {
            mode: 'cors',
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
            setAlertStatust(data);
            setAlert(true);
        })
        .catch((e) => {
            console.log("EEEERRRRRORRRR", e);
            setAlertStatust('error');
            setAlert(true);
        });
    }

    return(
        <section id="contactForm">
            <div className="graphic"></div>
            <div className="fake-margin" >
                <h2>INTERESTED?</h2>
                <form onSubmit={handleSubmit}>
                    <input id="rName" name="name" type="text" placeholder="Name & Surname..." required maxLength="50"/>
                    <input id="rPhone" name="phone" type="tel" placeholder="Telephone..." required maxLength="20" pattern="^\+?(?:[0-9] ?){6,14}[0-9]$"/>
                    <input id="rEmail" name="email" type="email" placeholder="Email..." required maxLength="100"/>
                    <textarea id="rMsg" name="message" rows="130" placeholder="Tell me more..." required maxLength="1000"></textarea>
                    <button type="submit">send<span className="material-symbols-rounded">trending_flat</span></button> 
                </form>
            </div>
            {alert && <CustomAlert setAlert={setAlert} alertStatus={alertStatus}/>}
        </section>
    )
}

export default memo(ContactForm);
