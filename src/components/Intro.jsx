import IntroImg from '../../assets/IntroPick.jpg'

export const Intro = () => {
  return (
    <div>
        <div>
          <h1 className='absolute text-8xl pl-40 mt-32 mb-72 ml-56 left-[12rem] text-white text-center'>Kevin <br /> De Bonis</h1>
          <h2 className='absolute text-6xl pl-40 mt-32 mb-72 ml-56 top-72 left-[6.5rem] text-white'>Front-end Developer</h2>
          <img src={IntroImg} className='w-full h-[40rem]' alt="intro Image" />
        </div>
    </div>
  )
}
