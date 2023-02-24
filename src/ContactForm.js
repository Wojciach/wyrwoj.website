import "./contactForm.scss";
import {useEffect, memo } from "react";



function ContactForm() {

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


    function sendForm() {

        console.log()
    
        var rName = document.getElementById("rName").value;
        var rPhone = document.getElementById("rPhone").value;
        var rEmail = document.getElementById("rEmail").value;
        var rMsg = document.getElementById("rMsg").value;

        openAlert();
        return;
        console.log(" x ");
  
        fetch(`http://localhost/test/sendForm.php?rName=${rName}&rPhone=${rPhone}&rEmail=${rEmail}&rMsg=${rMsg}` , {
                mode: 'cors'
            })
            .then(response => response.json())
            .then(data => {
                // Process the data returned by the PHP script
               console.log(data);
              })
              .catch(error => {
                // Handle any errors that occur during the fetch request
                console.error(error);
              });
   
/*
              fetch(`http://localhost/test/sendEmail.php`)
              .then(response => response.text())
              .then(data => {
                  // Process the data returned by the PHP script
                 console.log(data);
                })
                .catch(error => {
                  // Handle any errors that occur during the fetch request
                  console.error(error);
                });

            */
        



    }

    console.log("ContactForm");
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
                    <input id="rName" type="text" placeholder="Name & Surname..."/>
                    <input id="rPhone" type="tel" placeholder="Telephone..."/>
                    <input id="rEmail" type="email" placeholder="Email..."/>

                    <textarea id="rMsg" rows="130" placeholder="Tell me more..."></textarea>

                    <button onClick={sendForm}>send<span className="material-symbols-rounded">trending_flat</span></button> 
                </form>


            </div>

        </section>
    )
}

export default memo(ContactForm);