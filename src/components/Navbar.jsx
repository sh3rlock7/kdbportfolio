import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"


export const Navbar = ()  => {
  const [color, setcolor] = useState(false)

  //Navbar change color on scrolling
  const navbarColor = () => {
    if(window.scrollY > 30){
      setcolor(true)
    }else{
      setcolor(false)
    }
  }
  window.addEventListener('scroll', navbarColor)

  const [isOpen, SetIsOpen] = useState(false)

  const handleMenu = () => {
    SetIsOpen(!isOpen)
  }

  return (
      <div className={`fixed h-[4.3rem] w-[100%] z-10 top-0 lg:flex lg:justify-end lg:content-around lg:bg-inherit right-0  `}>
         <button 
            className={
                `w-full h-16 p-5 text-end fa-2xl  max-sm:block md:hidden transition-all ease-out duration-[.3s]
                ${isOpen ? ' delay-200 bg-main' : ''}
                ${ color ? 'bg-main' : '' }
              `}
            onClick={handleMenu}
         >
          {
            isOpen 
                ? <FontAwesomeIcon icon={faXmark} />
                : <FontAwesomeIcon icon={faBars} />
          }

          </button>
        <div className={`max-sm:absolute max-sm:flex pt-2 max-sm:bg-main max-sm:text-left flex-col md:flex-row navBar p-5 w-full md:justify-end md:text-right lg:pt-2  lg:pr-10  ${isOpen ? 'top-[3.9rem]' : 'top-[-490px]'} ${ color ? 'bg-main' : '' } `}>
         
          <button 
            className="p-3 md:text-xl max-sm:text-2xl font-semibold max-sm:text-left transition ease-in-out delay-75 duration-1 hover:text-blue-600"
            onClick={() => document.getElementById('about')?.scrollIntoView({behavior: "smooth"}) }
          >
            About
          </button>
          
          <button 
            className="p-3 md:text-xl max-sm:text-2xl max-sm:text-left font-semibold transition ease-in-out delay-75 duration-1 hover:text-blue-600"
            onClick={() => document.getElementById('skills')?.scrollIntoView({behavior: "smooth",})}
          >
            Skills
          </button>
          
          <button 
            className="p-3 md:text-xl max-sm:text-2xl max-sm:text-left font-semibold transition ease-in-out delay-75 duration-1 hover:text-blue-600"
            onClick={() => document.getElementById('proyects')?.scrollIntoView({behavior: "smooth"})}
          >
            Proyects
          </button>
          
          <button 
            className="p-3 md:text-xl max-sm:text-2xl max-sm:text-left transition font-semibold ease-in-out delay-75 duration-1 hover:text-blue-600"
            onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: "smooth"})}
          >
            Contact
          </button>
        </div>
      </div>
  
  )
}
