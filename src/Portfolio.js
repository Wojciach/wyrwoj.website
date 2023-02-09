import "./portfolio.scss";
import linkDesc from "./linksAndDescriptions.js";
import {useState} from "react";

<script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>

function Portfolio() {


function next() {
   
   if(which < (howMany -1)) {

        setWhich(which + 1);

        document.getElementById("portfolio-graphic").classList.add("animationToRight");
        setTimeout(() => {
            document.getElementById("portfolio-graphic").classList.remove("animationToRight");
        }, 300);
    }
}

function previous() {
    if(which > 0) {

        setWhich(which - 1);

        document.getElementById("portfolio-graphic").classList.add("animationToLeft");
        setTimeout(() => {
        document.getElementById("portfolio-graphic").classList.remove("animationToLeft");
        }, 300);
    }
}

const howMany = linkDesc.length;
 const [which, setWhich] = useState(0);


    return (
        <>
            <section  className="fake-margin" id="portfolio">

                <h2>PORTFOLIO</h2>

                <div id="portfolio-graphic">
                    <button id="bLeft" onClick={previous}>
                        <span className="material-symbols-rounded">chevron_left</span>
                    </button>
                    <div id="picture">
                        
                    </div>
                    <button id="bRight" onClick={next}>
                        <span className="material-symbols-rounded">chevron_right</span>
                    </button>
                </div>

                <button>view website <span className="material-symbols-rounded">trending_flat</span></button>

                <div id="portfolio-description">
                    <div>
                        <h6>Technology used:</h6> <div>{linkDesc[which].techUsed}</div>
                    </div>
                    <div>
                        <h6>What I learned:</h6> <div>{linkDesc[which].desc}</div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Portfolio;