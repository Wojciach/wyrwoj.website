import "./contactForm.scss";
import {useEffect, memo } from "react";


function ContactForm() {
//console.log('ContactForm')
    useEffect(
        ()=> {

            document.querySelector("#contactForm form").addEventListener("submit", function(event){ event.preventDefault();})

        }, []
    );

    function closeAlert() {
        document.getElementById("customAlert").style.display = "none";
    }

    function openAlert() {
        document.getElementById("customAlert").style.display = "flex";
    }

    function setAlert(h5 = "", h6 = "", p = "") {
        
        document.querySelector("#customAlert div h5").innerHTML = h5;
        document.querySelector("#customAlert div h6").innerHTML = h6;
        document.querySelector("#customAlert div p").innerHTML = p;
        
    }


    function sendForm() {

        function validateEmail(email) {
            const re = /\S+@\S+\.\S+/;
            return re.test(email);
        }

        function validateInternationalPhoneNumber(phoneNumber) {
            var regex = /^\+?(?:[0-9] ?){6,14}[0-9]$/;
            return regex.test(phoneNumber);
        }
    
        var rName = document.getElementById("rName").value;
        var rPhone = document.getElementById("rPhone").value;
        var rEmail = document.getElementById("rEmail").value;
        var rMsg = document.getElementById("rMsg").value; 

        if(rName === "" )  return;
        if(rPhone === "" )  return;
        if(rEmail === "" )  return;
        if(rMsg === "" )  return;
        if(!validateEmail(rEmail)) return;
        if(!validateInternationalPhoneNumber(rPhone)) return;

      //  setAlert("", "", "");
      //  openAlert();

        const formData = new FormData();
        formData.append('rName', rName);
        formData.append('rPhone', rPhone);
        formData.append('rEmail', rEmail);
        formData.append('rMsg', rMsg);
        
        document.body.style.cursor = 'wait';

        fetch('./php/sendForm.php', {
            method: 'POST',
            body: formData
          })
   
            .then(response => response.json())
            .then(data => {
                // Process the data returned by the PHP script
               
               setAlert("", "", data.msgPHP);
               openAlert();
               document.body.style.cursor = '';
              })
              
              .catch(error => {
                // Handle any errors that occur during the fetch request
                setAlert("Sorry ;(", "There is a problem with this request", "Please contact me via alternative email: <br> <b>wyrwoj@gmail.com</b>");
                setAlert(error);
                openAlert();
                document.body.style.cursor = '';
              });



    }

    
    return(
        <section id="contactForm">

            <div id="customAlert">
                <div>
                    <h5>WHOPS!</h5>
                    <h6>SOMETHING WENT WRONG</h6>
                    <p>Pelase use the correct format for the phone number.</p>
                    <button onClick={closeAlert}>take me back</button>
                </div>
            </div>

            <div className="graphic"></div>
            <div className="fake-margin" >
                
                <h2>INTERESTED?</h2>
                
                
                <form>
                    <input id="rName" type="text" placeholder="Name & Surname..." required maxLength="50"/>
                    <input id="rPhone" type="tel" placeholder="Telephone..." required maxLength="20" pattern="^\+?(?:[0-9] ?){6,14}[0-9]$"/>
                    <input id="rEmail" type="email" placeholder="Email..." required maxLength="100"/>

                    <textarea id="rMsg" rows="130" placeholder="Tell me more..." required maxLength="1000"></textarea>

                    <button onClick={sendForm}>send<span className="material-symbols-rounded">trending_flat</span></button> 
                </form>


            </div>

        </section>
    )
}

export default memo(ContactForm);