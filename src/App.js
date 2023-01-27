import {useEffect, useState} from "react";

import './app-sass.scss';

import Name from './Name';
import Skill from './Skill';

function App() {
/*
const [color, setColor] = useState("");

useEffect( () => {

 function slideSkills() {
    var skills = document.getElementsByClassName("skill");

    for (const x of skills) {
      var sN = x.getAttribute("data");
      console.log(sN);
      x.classList.add(sN);
    }
    console.log(color);
    setColor("x");
   
  }

  document.getElementById("skillSet").addEventListener("mouseenter", slideSkills)

},[])

*/
  return (
    <>

      <Name />


      <div id='skillSet'>

        < Skill sName="JavaScript" />
        < Skill sName="ReactJs" />
        < Skill sName="HTML" />

      </div>
    </>

  );

}



export default App;
