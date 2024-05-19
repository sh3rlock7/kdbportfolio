import React from 'react'


export const Skills = () => {
  return (
    <div className='flex flex-wrap bg-slate-600'>
        <div className='flex flex-col flex-1'>
            <h1 className='text-5xl text-center mt-12'>Programming skills</h1>
            <p className='text-lg ml-12 pt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas commodi amet accusamus. Suscipit, pariatur accusantium ex numquam est veritatis ab nam eaque excepturi odit eos assumenda maxime dolores corrupti? Eveniet officiis praesentium aut soluta quasi fugit quam quisquam officia! Non fugiat accusantium aliquid rerum totam sed sapiente repellendus sequi saepe!</p>
        </div>

        <div className='flex flex-1 flex-wrap justify-between text-center p-10'>
            <div>
                <p>HTML 5</p>
                <img className='h-32 p-4' src="assets\HTML5.png" alt="" />
            </div>
            <div>
                <p>CSS3</p>
                <img className='h-32 p-4'  src="assets/HTML5.png" alt="" />
            </div>
            <div>
                <p>Javascript</p>
                <img className='h-32 rounded-[20%] p-4' src="assets/JavaScript-logo.png" alt="" />
            </div>
            <div>
                <p>TypeScript</p>
                <img  className='h-32 p-4' src="assets/TYPESCRIPT_LOGO.png" alt="" />
            </div>
            <div>
                <p>Tailwind</p>
                <img className='h-20 mt-6' src="assets/Tailwind_Logo.png" alt="" />
            </div>
            <div>
                <p>ReactJs</p>
                <img  className='h-32 p-3' src="assets/ReactLogo.png" alt="" />
            </div>
            <div>
                <p>Git</p>
                <img className='h-32 p-3' src="assets/GITLOGO.png" alt="" />
            </div>
            <div>
                <p>Github</p>
                <img  className='h-32 p-3' src="assets/GITHUB_LOGO.png" alt="" />
            </div>
        </div>
    </div>
  )
}
