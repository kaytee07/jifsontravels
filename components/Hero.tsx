import React from 'react'

const Hero = () => {
  return (
    <div className='w-full flex justify-center'>
    <div
    className="
    bg-[url('https://images.unsplash.com/photo-1472938714740-c788a1dbfa12?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] 
     bg-cover bg-center relative"
    style={{
        width: "100%",
        height: "30rem"
    }} 
    >
       <div className="absolute flex items-center justify-center inset-0 rounded-md bg-black opacity-30"
       style={{
        width: "100%",
        height: "30rem"
       }}>
         <h1 className="text-center scroll-m-20 text-4xl text-white font-bold tracking-tight lg:text-4xl">
        Find The Next Destination In Ghana  
        </h1>
       </div>
    </div>
    </div>
  )
}

export default Hero
