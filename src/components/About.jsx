import profilePhoto from '../../assets/fototemp.png';

export const About = () => {
  return (
    <div id='about' className='lg:flex max-sm:flex-col justify-around bg-light font-Poppins max-sm:scroll-mt-96 md:scroll-mt-[65px]'>
      <div className='flex-1 md:p-8'>
        <h1 className='text-6xl text-center max-sm:mt-10 lg:mt-20 text-green-700 font-bold'>About me</h1>
        <p className='text-lg max-sm:text-left max-sm:m-2 lg:ml-12 max-sm:p-2 pt-10'> 
          Hello there, my journey into the world of web development with a
          fascination for creating interactive and scalable web applications,
          Now i’m looking for a chance to join a team to continue improving my
          skill set, collaborate effectively, share innovative ideas, help the team
          achieve the proposed goals and maybe someday lead and mentoring
          new developers</p>
      </div>
      <div className='flex-1 text-center'>
        <h3 className='text-4xl mt-[4.5rem] max-md:hidden'>Hola mundo 2</h3>
        <p className='pt-10 max-md:hidden'>30 years old</p>
        <img className='h-72 w-84 m-auto' src={profilePhoto} alt="foto" />
      </div>
    </div>
  )
}
