

export const Intro = () => {
  return (
    <div 
    id="intro"
      className=
              "flex max-sm:h-96 md:h-screen lg:h-screen lg:w-auto bg-[length:100%_100%]   bg-center bg-no-repeat bg-[url(/compu3.jpg)] font-Poppins"
    >
      <div className='flex flex-col bg-black bg-opacity-50 w-full h-full'>
        <h1 
          className='text-slate-200 m-auto text-center  max-sm:text-6xl md:text-8xl'
        > 
          Kevin <br /> De Bonis <br />   
        
          <span className='text-slate-200 font-bold m-auto text-center  max-sm:text-3xl text-6xl mt-8'>
             Front-end Developer 
          </span>
        
        </h1>
        
      </div>
    </div>
  )
}
