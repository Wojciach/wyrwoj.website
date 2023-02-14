
import './app-sass.scss';
import './skills.scss';
import {useState, useEffect} from "react";
import Header from './Header';
import SkillsArticle from './SkillsArticle'
import Skill from './Skill';
import description from './description';
import Introduction from './Introduction';
import Portfolio from './Portfolio';
import ContactForm from './ContactForm';
import Footer from './Footer';




function App() {







  return (
    <>

      <Header />
      <Introduction />

      <SkillsArticle />
      
      <Portfolio />
      <ContactForm />
      <Footer />
    </>

  );

}



export default App;
