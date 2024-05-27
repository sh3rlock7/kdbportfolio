import React from 'react'


export const Skills = () => {
  return (
    <div className='flex flex-col  bg-slate-600 bg-skills bg-center bg-cover bg-no-repeat text-light'>
        <div className='flex flex-col flex-1'>
            <h1 className='text-5xl text-center font-semibold mt-12'> Tech Stack </h1>
        </div>

        <div className='flex flex-row flex-1 flex-wrap justify-between p-10'>
            <div className='text-center'>
                <p>HTML 5</p>
                <img className='h-24 p-3 ' src="assets\HTML5.png" alt="" />
            </div>
            <div className=' text-center'>
                <p>CSS3</p>
                <img className='h-24 P-4'  src="assets/CSS3_LOGO.png" alt="" />
            </div>
            <div className='text-center'>
                <p className='lg:text-center'>Javascript</p>
                <img className='h-24 rounded-[20%] p-3' src="assets/JavaScript-logo.png" alt="" />
            </div>
            <div className='text-center'>
                <p >TypeScript</p>
                <img  className='h-24 p-3' src="assets/TYPESCRIPT_LOGO.png" alt="" />
            </div>
            <div className='text-center'>
                <p>Tailwind</p>
                <img className='h-[4.5rem] mt-4 w-32' src="assets/Tailwind_Logo.png" alt="" />
            </div>
            <div className='text-center'>
                <p className='text-center'>ReactJs</p>
                <img  className='h-[6.5rem] p-3' src="assets/ReactLogo.png" alt="" />
            </div>
            <div className='text-center'>
                <p className=''>Git</p>
                <img className='h-24 p-3' src="assets/GITLOGO.png" alt="" />
            </div>
            <div className='text-center'>
                <p className='lg:text-center'>Github</p>
                <img  className='h-24 mt-1' src="assets/GITHUB_LOGO.png" alt="" />
            </div>
        </div>
    </div>
  )
}
