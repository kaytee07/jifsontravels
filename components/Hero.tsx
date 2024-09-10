import React from 'react'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <div className={`w-full flex justify-center`}>
    <div
    className="
    bg-[url('https://images.unsplash.com/photo-1472938714740-c788a1dbfa12?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] 
     bg-cover bg-center flex flex-col justify-center gap-3"
    style={{
        width: "100%",
        height: "30rem"
    }} 
    >
       
         <h1 className="text-center italic scroll-m-20 text-4xl font-damion animate-fadeIn text-black font-bold tracking-tight ">
          A Trip To 
        </h1>
        <h1 className="text-center italic scroll-m-20 text-5xl font-damion animate-slideIn text-black font-bold tracking-tight">Ghana</h1>
        <div className="buttons flex  justify-center gap-2">
          <Button className="bg-[#ff8041]">Sign in</Button>
          <Button className="bg-[#ff8041]">Sign up</Button>
        </div>
    </div>
    </div>
  )
}

export default Hero
