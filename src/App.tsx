import './index.css'
import {Navbar} from './components/Navbar'
import { Intro } from './components/Intro';
import { Skills } from './components/Skills';
import {About} from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Proyects } from './components/Proyects';


function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Proyects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
