import React from 'react'
import { Button } from './ui/button'
import { Montserrat, Lobster } from 'next/font/google';
import img from "../public/img/1.jpg"

const montserrat = Montserrat({
  weight: ['400', '700'], 
  subsets: ['latin'],
});

const lobster = Lobster({
  weight: ['400'], 
  subsets: ['latin'],
});

const Hero = () => {
  return (
    <div className={`w-full flex justify-center`}>
    <div
    className="
    bg-[url('../public/img/3.jpg')] 
     bg-cover bg-center flex flex-col items-center justify-center gap-3"
    style={{
        width: "100%",
        height: "30rem"
    }} 
    >
      <div className=" h-32 flex flex-col justify-center gap-3" >
         <h1 className={`text-center scroll-m-20 text-5xl ${lobster.className} animate-slideIn text-white font-extrabold tracking-tight`}>
          A Trip To Ghana
        </h1>
        <div className="buttons flex  justify-center gap-2">
          <Button className="border-white border-2 bg-[transparent] text-white">Sign in</Button>
          <Button className="border-white bg-[#317670] ">Sign up</Button>
        </div>
      </div>
        
    </div>
    </div>
  )
}

export default Hero
