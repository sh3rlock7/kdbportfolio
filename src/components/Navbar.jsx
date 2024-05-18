

export const Navbar = ()  => {
  return (
    
      <ul className="lg:flex lg:justify-end lg:content-around lg:mr-10 lg:bg-transparent absolute right-0">
        <div className="justify-end">
          <button className="p-3 hover:text-gray-600 text-xl transition ease-in-out delay-75 duration-1">Contact</button>
          <button className="p-3 hover:text-gray-600 text-xl transition ease-in-out delay-75 duration-1">About</button>
          <button className="p-3 hover:text-gray-600 text-xl transition ease-in-out delay-75 duration-1">Skills</button>
          <button className="p-3 hover:text-gray-600 text-xl transition ease-in-out delay-75 duration-1">Proyects</button>
        </div>
      </ul>
  
  )
}
