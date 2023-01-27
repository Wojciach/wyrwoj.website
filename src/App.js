import {useEffect, useState} from "react";

import './app-sass.scss';

import Name from './Name';
import Skill from './Skill';

function App() {

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
