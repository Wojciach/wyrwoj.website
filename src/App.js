
import './app.scss';

import Header from './Header';
import Introduction from './Introduction';
import SkillsArticle from './SkillsArticle'
import Portfolio from './Portfolio';
import ContactForm from './ContactForm';
import Footer from './Footer';


function App() {
//console.log("App");

  return (

    <main>
      <Header />
      <Introduction />

      <SkillsArticle />
      
      <Portfolio />
      <ContactForm />
      <Footer />
    </main>

  );

}



export default App;
