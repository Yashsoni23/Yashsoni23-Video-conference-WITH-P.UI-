import React from 'react'

const LogIn = () => {
  return (
    <>
    
          <form action="" className="flex gap-3 w-1/2 h-1/2 justify-center items-center bg-slate-400 flex-col">
            <input type="email" className=" rounded-md focus:outline-none p-2 w-1/2 font-bold pl-2"  placeholder="Email"/>
            <input type="password" className=" rounded-md focus:outline-none p-2 w-1/2 font-bold pl-2"  placeholder="Password"/>
            <button type="submit" className="p-2 rounded-md hover:bg-white hover:text-black transition-all duration-300 hover:border-2 hover:border-black bg-black text-white font-bold w-1/2">Login</button>
          </form>
    
    
    </>
  )
}

export default LogIn