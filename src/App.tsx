import './index.css'
import {Navbar} from './components/Navbar'
import { Intro } from './components/Intro';
import { Skills } from './components/Skills';
import {About} from './components/About';


function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Skills />
    </>
  )
}

export default App
