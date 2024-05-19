import IntroImg from '../../assets/IntroPick.jpg'

export const Intro = () => {
  return (
    <div>
      <div className='z-10'>
        <h1 
          className='absolute lg:text-8xl  lg:ml-auto lg:mr-auto lg:top-44 lg:left-0 lg:right-0 text-white text-center'
        > 
          Kevin <br /> De Bonis
        </h1>
        <h2 
          className='absolute lg:text-6xl  lg:pl-40 lg:mt-32 lg:mb-72 lg:ml-56 lg:top-72 lg:left-[2rem] text-slate-500'
        >
          Front-end Developer
        </h2>
      </div>

      <img src={IntroImg} className='w-full h-[40rem] overflow-y-hidden' alt="intro Image" />

    </div>
  )
}
