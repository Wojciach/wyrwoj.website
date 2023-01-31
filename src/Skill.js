import {useState, useEffect} from "react";
import description from './description';




function Skill(props) {

  const [tr, setTr] = useState(0);
  

  useEffect( () => {

    var sliderWidth = document.getElementsByClassName("skill_slider")[0].clientWidth;

    function handleResize() {
      
      sliderWidth = document.getElementsByClassName("skill_slider")[0].clientWidth;
      setTr((sliderWidth - 135) * (description[props.sName].prog / 100));
      
    }

    document.getElementById("skillSet").addEventListener("mouseenter", () => {
      setTr((sliderWidth - 135 ) * (description[props.sName].prog / 100));
      document.getElementById(props.sName).classList.add(props.sName);
      document.getElementById(props.sName + "-tail").classList.add(props.sName + "-tail");
    })
    
    window.addEventListener('resize', handleResize);
    

  }, [props.sName]);

  function clickk(event) {
    document.querySelectorAll('.skill_slider').forEach(element => {
      element.classList.remove("clicked");
    });
    event.currentTarget.classList.add("clicked");
  }

   return (
    <> 
      <style>
        {`
            @keyframes ${props.sName} {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(${tr}px);
              }
            }
            
            .${props.sName} {
              animation: ${props.sName} 1.5s ease-out 0s 1 normal forwards;
            }

            @keyframes ${props.sName}-tail {
              0% {
                transform: scaleX(0);
              }
              100% {
                transform: scaleX(${(description[props.sName].prog / 100)});
              }
            }
          
            .${props.sName}-tail {
              animation: ${props.sName}-tail 1.5s ease-out 0s 1 normal forwards;
              background-color: rgb(220, 220, 220);
              background-image: linear-gradient(to right, rgb(255, 255, 255), rgb(220, 220, 220));

            }

        `}
      </style>
      <div className='skill_slider' onClick={clickk}>
        <div id={props.sName}  className={"skill "}> {description[props.sName].name} </div>
        <div id={props.sName + "-tail"} className="progressBar"></div>
      </div>
    </>
   )
}
  
 

  export default Skill;
  