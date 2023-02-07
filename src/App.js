
import './app-sass.scss';
import {useState, useEffect} from "react";
import Header from './Header';
import Skill from './Skill';
import description from './description';
import Introduction from './Introduction';
import Portfolio from './Portfolio';


function SkillList() { 
  return (
  Object.keys(description).map((item)=>(< Skill key={item} sName={item} />))
  ) 
}


function App() {


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
      
  }, [])


  return (
    <>

      <Header />
      <Introduction />

      <article>
        <h2 className='fake-margin'> SKILLS</h2>
        <div className='fake-margin'>
          <div id='skillSet'>
        
            <SkillList />

          </div>

          <div id="skillDesc">
            <h3>{description[targ].name}</h3>
            <Description />
          </div>
        </div>
      </article>
      
      <Portfolio />
    </>

  );

}

// <Description sName={targ} />

export default App;
