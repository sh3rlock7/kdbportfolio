
export const Contact = () => {

    
  return (
    <div className="flex justify-between font-Poppins">
        <div className="flex text-center">
            <h1 className="text-6xl">Contact me</h1>
        </div>

        
            <form  className="flex flex-col mr-24 mt-2 p-5">
                <div>
                    <input className="border rounded-lg p-2 w-96 focus:outline-blue-500 shadow-lg" type="text" placeholder="name or company name" required/>
                </div>
                <input className="border p-2 mt-4 focus:outline-blue-500 shadow-lg" type="text" placeholder="Email" required />
                <textarea className="border p-2 mt-4 mb-4 rounded-2xl h-52 resize-none focus:outline-blue-500 shadow-lg" rows={8} placeholder="Type your message here"></textarea>
                <button
                     
                    className="button p-2 bg-gradient-to-r from-green-600 to-blue-600 hover:from-[#700979] hover:to-[#792b81]  mb-2 rounded-lg"
                    type="submit"
                >
                    Send
                </button>
            </form>
        
    </div>
  )
}
