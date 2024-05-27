import CVDoc from '../../assets/Kevin De Bonis CV.pdf'


export const Footer = () => {
  return (
    <div className="h-24 bg-main text-light text-center"> 
        <h1>Download CV</h1>
        
          <a 
            className='cursor-pointer inline-block button outline-white bg-gradient-to-r from-green-600 to-blue-600 hover:from-[#700979] hover:to-[#792b81] rounded-lg mt-2 p-3 ' 
            href={CVDoc}
            download="Kevin De Bonis CV"
          >
            Click me to download
          </a> 

    </div>
  )
}
