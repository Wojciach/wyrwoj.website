
import './app-sass.scss';
import {useState, useEffect} from "react";
import Header from './Header';
import Skill from './Skill';
import description from './description';
import Introduction from './Introduction';

function SkillList() { return (
  Object.keys(description).map((item)=>(< Skill key={item} sName={item} />))
) }

function App() {


  const [targ, setTarg ] = useState("JavaScript");

  useEffect( () => {

    function deal(event) {
      setTarg(event.currentTarget.children[0].id);
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

      <article className='fake-margin'>
        <h2>SKILLS:</h2>
        <div>
          <div id='skillSet'>
        
            <SkillList />

          </div>

          <div id="skillDesc">
            {description[targ].desc}
          </div>
        </div>
      </article>
    </>

  );

}

// <Description sName={targ} />

export default App;
