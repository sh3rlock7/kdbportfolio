import profilePhoto from '../../assets/fototemp.png'

export const About = () => {
  return (
    <div id='about' className='flex justify-around bg-light font-Poppins'>
      <div className='flex-1 '>
        <h1 className='text-6xl text-center mt-20 text-green-700 font-bold'>About me</h1>
        <p className='text-lg ml-12 pt-10'> 
          Hello there, my journey into the world of web development with a
          fascination for creating interactive and scalable web applications,
          Now i’m looking for a chance to join a team to continue improving my
          skill set, collaborate effectively, share innovative ideas, help the team
          achieve the proposed goals and maybe someday lead and mentoring
          new developers</p>
      </div>
      <div className='flex-1 text-center'>
        <h3 className='text-4xl mt-[4.5rem]'>Hola mundo 2</h3>
        <p className='pt-10'>30 years old</p>
        <img className='h-64 w-84 m-auto' src={profilePhoto} alt="foto" />
      </div>
    </div>
  )
}
