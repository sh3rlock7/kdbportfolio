import profilePhoto from '../../assets/fototemp.png'

export const About = () => {
  return (
    <div className='flex justify-around bg-light'>
        <div className='flex-1 '>
            <h1 className='text-6xl text-center mt-12'>Hola mundo</h1>
            <p className='text-lg ml-12 pt-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque quaerat eligendi tenetur veritatis. Impedit sed doloremque earum libero provident id iure dolor neque, quo quod, nobis delectus culpa cupiditate maiores dolorum aperiam, pariatur deleniti dolore animi ipsam! Optio odit minima nulla ipsum sapiente. Nihil temporibus reprehenderit laborum qui blanditiis maxime?</p>
        </div>
        <div className='flex-1 text-center'>
            <h3 className='text-4xl mt-[4.5rem]'>Hola mundo 2</h3>
            <p className='pt-10'>30 years old</p>
            <img className='h-64 w-auto m-auto' src={profilePhoto} alt="foto" /> 
        </div>
    </div>
  )
}
