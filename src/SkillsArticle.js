import { useState, useEffect } from "react";

import "./skillsArticle.scss";

import description from "./description";
import Skill from "./Skill";


function SkillList() { 
    return (
    Object.keys(description).map((item)=>(< Skill key={item} sName={item} />))
    ) 
}

  
function SkillsArticle() {

    function Description() {
        return (
          description[targ].desc.map((item)=>(<p key={item}>{item}</p>))
        )
      }


      const [targ, setTarg ] = useState("JavaScript");



    useEffect( () => {

        function deal(event) {
            
            setTarg(event.currentTarget.firstChild.id);
        }

        const sliders = document.querySelectorAll(".skill_slider");

        sliders.forEach(element => {
            element.addEventListener("click", deal);
        });
        
    }, []);

    return(
        <article id='skillsArticle'>
        
        <h2 className='fake-margin'>MY MAD SKILLS</h2>
        <div className="graphic"></div>
        <div className='fake-background'>
          <div id='skills' className='fake-margin'>
              
                  <div id='skillSet'>   
                      <SkillList />
                  </div>
              
                   <div id="skillDesc">

                      <h3>{description[targ].name}</h3>
                      <Description />
                  
                  </div>
          </div>
        </div>
      </article>
    )
}

export default SkillsArticle;