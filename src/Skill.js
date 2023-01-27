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
            
            .${props.sName} {
              animation: ${props.sName} 1.5s ease-out 0s 1 normal forwards;
            }
        `}
      </style>
      <div className='skill_slider'>
        <div id={props.sName}  className={"skill "} data={props.sName}> {description[props.sName].name} </div>
      </div>
    </>
   )
}
  
 

  export default Skill;
  