
import './app-sass.scss';
import {useState, useEffect} from "react";
import Header from './Header';
import Skill from './Skill';
import description from './description';
import Introduction from './Introduction';

function App() {

  let componenets = "";
  for (const iterator in description) {
    componenets += "< Skill sName='" + iterator + "'/>";
  }

  const [targ, setTarg ] = useState("JavaScript");

  useEffect( () => {

    function deal(event) {
      setTarg(event.target.children[0].id);
    }

    const sliders = document.querySelectorAll(".skill_slider");

    sliders.forEach(element => {
      element.addEventListener("mouseenter", deal);
    });
      
  }, [])

  const style = {
    padding: "0 40px"
  }

  return (
    <>

      <Header />
      <Introduction />

      <article style={style}>
        <h2>SKILLS:</h2>
        <div>
          <div id='skillSet'>
            
            < Skill sName="JavaScript" />
            < Skill sName="ReactJs" />
            < Skill sName="HTML" />

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
