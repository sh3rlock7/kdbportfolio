import React from 'react'


export const Skills = () => {
  return (
    <div  className='flex flex-col  bg-slate-600 bg-skills bg-center bg-cover bg-no-repeat text-light'>
        <div id='skills' className='flex flex-col flex-1 lg:scroll-mt-[65px] bg-black bg-opacity-60'>
            <h1 className='text-green-700 text-5xl text-center font-bold mt-12'> Tech Stack </h1>
        </div>

        <div className='flex flex-row lg:flex-1 flex-wrap justify-between p-10 text-lg  font-bold bg-black bg-opacity-60'>
            <div className='text-center md:flex-20 lg:flex-none'>
                <p>HTML 5</p>
                <img className='h-24 p-3 m-auto' src="./public/HTML5.png" alt="" />
            </div>
            <div className='text-center md:flex-20 lg:flex-none'>
                <p>CSS3</p>
                <img className='h-24 P-4 m-auto'  src="./public/CSS3_LOGO.png" alt="" />
            </div>
            <div className='text-center md:flex-20 lg:flex-none'>
                <p className='lg:text-center'>Javascript</p>
                <img className='h-24 rounded-[20%] p-3 m-auto' src="./public/JavaScript-logo.png" alt="" />
            </div>
            <div className='text-center md:flex-20 lg:flex-none'>
                <p >TypeScript</p>
                <img  className='h-24 p-3 m-auto' src="./public/TYPESCRIPT_LOGO.png" alt="" />
            </div>
            <div className='text-center md:flex-20 lg:flex-none'>
                <p>Tailwind</p>
                <img className='max-sm:h-18 max-sm:mt-5 lg:h-[4.5rem]  w-32 max-sm:w-24 md:p-3 md:ml-5 lg:p-0 lg:ml-0 lg:mt-4' src="assets/Tailwind_Logo.png" alt="" />
            </div>
            <div className='text-center md:flex-20 lg:flex-none'>
                <p className='text-center'>ReactJs</p>
                <img  className='h-[6.5rem] p-3' src="./public/ReactLogo.png" alt="" />
            </div>
            <div className='text-center md:flex-20 lg:flex-none'>
                <p className=''>Git</p>
                <img className='h-24 p-3' src="../public/GITLOGO.png" alt="" />
            </div>
            <div className='text-center md:flex-20 lg:flex-none'>
                <p className='lg:text-center'>Github</p>
                <img  className='h-24 mt-1' src="../public/GITHUB_LOGO.png" alt="" />
            </div>
        </div>
    </div>
  )
}
