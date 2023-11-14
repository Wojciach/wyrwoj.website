import {useState, useEffect, memo} from "react";
import description from './description';
import "./skill.scss";

function Skill(props) {
//console.log("Skill");

  const [cl, setCl] = useState("");
  const [move, setMove] = useState(0);
  const [wwidth, setWWidth] = useState(0);
  
 
  useEffect( () => {
    function moveThat() {
      const sliderWidth = document.getElementsByClassName("skill_slider")[0].clientWidth;
        const amount = sliderWidth * (description[props.sName].prog / 100);
        setMove(amount);
        setWWidth(sliderWidth);
    }

    moveThat();

    if(props.sName === "JavaScript") {setCl("clicked")};
    let timeoutID;
    function handleResize() {
      clearTimeout(timeoutID);
      timeoutID = setTimeout(moveThat, 200);
      }

    document.getElementById("skillSet").addEventListener("mouseenter", () => {
      document.getElementById(props.sName + "-tail").classList.add(props.sName + "-tail");
    })
        window.addEventListener('resize', handleResize);
      }, [props.sName]);

  function clickk(event) {
    document.querySelectorAll('.fake-border').forEach(element => {
      element.classList.remove("clicked");
    });
    event.currentTarget.classList.add("clicked");
  }

   return (
    <> 
      <style>
      {`
        @keyframes ${props.sName}-tail {
            0% {transform: translateX(-100%);}
            100% {transform: translateX(${move - wwidth - 12.5}px);}
        }
            .${props.sName}-tail {
            animation: ${props.sName}-tail 1s ease-out 0s 1 normal forwards;
          }
      `}
      </style>
        <div id="skill" className={"fake-border " + cl} onClick={clickk} style={{order: description[props.sName].prog}}>
            <div className="skill_slider " >
                <div id={props.sName}  className={"skill "}> </div>
                <div className="skill_name">{description[props.sName].name}</div>
                <div id={props.sName + "-tail"} className="progressBar">
                  <div className="ball"></div>
                </div>
            </div>
        </div>
    </>
   )
}
  
export default memo(Skill);
  