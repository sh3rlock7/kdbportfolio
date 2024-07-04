import emailjs from "@emailjs/browser"
import { useState } from "react"


export const Contact = () => {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
      
        //EmailJs params
        const serviceId = 'service_avlse3e';
        const templateId = 'template_je0vlse';
        const publicKey = 'pbbP4KDJ4KebfnEXM';
    
        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Kevin De Bonis',
            message: message
        }

        emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
            console.log('Email sended', response);
            setName(''),
            setEmail(''),
            setMessage('')       
        })
        
    }

    

  return (
    <div id="contact" className="lg:flex max-sm:flex-col justify-between font-Poppins">
        <div className="flex flex-col text-center">
            <h1 className="text-green-700 font-bold text-6xl p-6">Contact me</h1>
            <p className="text-lg text-center font-Poppins lg:p-6 lg:ml-8">Hey there, if you are interested on develop the future together, feel free to contact me. I will reply within 24 hours</p>
        </div>    
            <form 
                className="flex flex-col lg:mr-24 mt-2 p-5 font-Garamond"
                onSubmit={handleSubmit}
            >
                <div>
                    <input 
                        className="border rounded-lg p-2 max-sm:w-full lg:w-96 focus:outline-blue-500 shadow-lg" type="text" placeholder="name or company name"
                        name="name"
                        value={name}
                        autoComplete="off"
                        required
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <input 
                    className="border p-2 mt-4 focus:outline-blue-500 shadow-lg" type="text" 
                    placeholder="Email"
                    value={email}
                    name="email" 
                    autoComplete="off"
                    required 
                    onChange={e=> setEmail(e.target.value)}
                />
                <textarea 
                    className="border p-2 mt-4 mb-4 rounded-2xl max-sm:h-28 max-md:h-52 resize-none focus:outline-blue-500 shadow-lg" 
                    rows={8} 
                    placeholder="Type your message here"
                    name="message"
                    value={message}
                    autoComplete="off"
                    required
                    onChange={e => setMessage(e.target.value)}
                >
                </textarea>
                <button
                     
                    className="delay-100 button p-2 bg-gradient-to-r from-green-600 to-blue-600 hover:from-[#700979] hover:to-[#792b81]  mb-2 rounded-lg shadow-lg"
                    type="submit"
                    onClick={() => console.log('el formulario ha sido enviado')}
                >
                    Send
                </button>
            </form>
        
    </div>
  )
}
