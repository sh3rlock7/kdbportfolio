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

  return (
      <div className="fixed h-[4.3rem] w-[100%] z-10 top-0 lg:flex lg:justify-end lg:content-around lg:bg-inherit right-0 ">
        <div className={`max-sm:hidden navBar w-full justify-end text-right lg:pt-2  lg:pr-10 ${ color ? 'bg-main' : '' } `}>
          <button 
            className="p-3 text-xl transition ease-in-out delay-75 duration-1 hover:text-blue-600"
            onClick={() => document.getElementById('about')?.scrollIntoView({behavior: "smooth"})}
          >
            About
          </button>
          
          <button 
            className="p-3 text-xl transition ease-in-out delay-75 duration-1 hover:text-blue-600"
            onClick={() => document.getElementById('skills')?.scrollIntoView({behavior: "smooth",})}
          >
            Skills
          </button>
          
          <button 
            className="p-3 text-xl transition ease-in-out delay-75 duration-1 hover:text-blue-600"
            onClick={() => document.getElementById('proyects')?.scrollIntoView({behavior: "smooth"})}
          >
            Proyects
          </button>
          
          <button 
            className="p-3 text-xl transition ease-in-out delay-75 duration-1 hover:text-blue-600"
            onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: "smooth"})}
          >
            Contact
          </button>
        </div>
      </div>
  
  )
}
