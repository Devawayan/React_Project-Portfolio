import './App.css';
import { NavBar } from './Component/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './Component/Banner';
import { Skills } from './Component/Skills';
import { Projects } from './Component/Projects';
import {Footer} from './Component/Footer';
import { Newsletter } from './Component/newsLetter';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
