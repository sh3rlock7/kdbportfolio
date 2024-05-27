import './index.css'
import {Navbar} from './components/Navbar'
import { Intro } from './components/Intro';
import { Skills } from './components/Skills';
import {About} from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
