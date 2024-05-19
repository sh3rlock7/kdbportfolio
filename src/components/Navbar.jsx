import { useState } from "react"


export const Navbar = ()  => {
  const [color, setcolor] = useState(false)

  //Navbar change color on scrolling
  const navbarColor = () => {
    if(window.scrollY ){
      setcolor(true)
    }else{
      setcolor(false)
    }
  }
  window.addEventListener('scroll', navbarColor)

  return (
      <div className="fixed h-[4.3rem] w-[100%] z-10 top-0 lg:flex lg:justify-end lg:content-around lg:bg-inherit right-0 ">
        <div className={`navBar w-full justify-end text-right pt-2  pr-10 ${ color ? 'navbarBg' : '' } `}>
          <button className="p-3 text-xl transition ease-in-out delay-75 duration-1">Contact</button>
          <button className="p-3 text-xl transition ease-in-out delay-75 duration-1">About</button>
          <button className="p-3 text-xl transition ease-in-out delay-75 duration-1">Skills</button>
          <button className="p-3 text-xl transition ease-in-out delay-75 duration-1">Proyects</button>
        </div>
      </div>
  
  )
}
