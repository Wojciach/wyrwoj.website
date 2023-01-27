import {useState, useEffect} from "react";
import description from './description';




function Skill(props) {

  const [tr, setTr] = useState(0);
  

  useEffect( () => {

    var sliderWidth = document.getElementsByClassName("skill_slider")[0].clientWidth;

    function handleResize() {
      
      sliderWidth = document.getElementsByClassName("skill_slider")[0].clientWidth;
      setTr((sliderWidth -126) * (description[props.sName].prog / 100)  );
      
    }

    document.getElementById("skillSet").addEventListener("mouseenter", () => {
      setTr((sliderWidth -126) * (description[props.sName].prog / 100)  );
      document.getElementById(props.sName).classList.add(props.sName);
      document.getElementById(props.sName + "-tail").classList.add(props.sName + "-tail");
    })
    
    window.addEventListener('resize', handleResize);
    

  }, [props.sName]);


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
            
            .${props.sName}-tail {
              animation: ${props.sName} 1.5s ease-out 0s 1 normal forwards;
            }

            @keyframes ${props.sName}-tail {
              0% {
                transform: scaleX(0);
              }
              100% {
                transform: scaleX(1);
              }
            }
            
            .${props.sName}-tail {
              animation: ${props.sName}-tail 1.5s ease-out 0s 1 normal forwards;
            }

        `}
      </style>
      <div className='skill_slider'>
        <div id={props.sName}  className={"skill "}> {description[props.sName].name} </div>
        <div id={props.sName + "-tail"} className="progressBar"></div>
      </div>
    </>
   )
}
  
 

  export default Skill;
  