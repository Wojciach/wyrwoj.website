import "./portfolio.scss";
import linkDesc from "./linksAndDescriptions.js";
import {useState, useEffect, memo} from "react";
import pic1 from "./img/VerbMe_mockup03.jpg";
import pic2 from "./img/VerbMe_mockup04.jpg";
import pic3 from "./img/VerbMe_mockup07.jpg";

function Portfolio() {
//console.log("Portfolio");

    const pics = [pic1, pic2, pic3];
    const [which, setWhich] = useState(0);

    function followAlink() {
        window.open(linkDesc[which].link);
    }

    function next() {
    if(which < (linkDesc.length -1)) {
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

    useEffect(
        () => {
            if(which < (linkDesc.length -1)) 
            document.getElementById('bRight').classList.add("clickable");
            else
            document.getElementById('bRight').classList.remove("clickable");

            if(which > 0) 
            document.getElementById('bLeft').classList.add("clickable");
            else {
            document.getElementById('bLeft').classList.remove("clickable");
                }
            if(linkDesc[which]["link"] === "") {
                document.getElementById('followLink').classList.remove("clickable");
            } else {
                document.getElementById('followLink').classList.add("clickable");
            }
            }, [which]
    )

    return (
        <section  className="fake-margin" id="portfolio">
            <h2>MY PORTFOLIO</h2>
            <div id="portfolio-graphic">
                <button id="bLeft" onClick={previous}>
                    <span className="material-symbols-rounded">chevron_left</span>
                </button>
                <div id="picture">
                    <img alt="" src={pics[which]} />
                </div>
                <button id="bRight" onClick={next}>
                    <span className="material-symbols-rounded">chevron_right</span>
                </button>
            </div>
            <div className="separator"> </div>
            <button id="followLink" onClick={followAlink}>view website
                <span className="material-symbols-rounded">trending_flat</span>
            </button>
            <div id="portfolio-description">
                <div>
                    <h6>Technology used:</h6>
                    <div>{linkDesc[which].techUsed}</div>
                </div>
                <div>
                    <h6>What I learned:</h6>
                    <div>{linkDesc[which].desc}</div>
                </div>
            </div>
        </section>
    )
}

export default memo(Portfolio);
