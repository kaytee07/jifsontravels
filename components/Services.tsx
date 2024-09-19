import { services } from '@/data'
import React from 'react'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  weight: ['400', '700'], // Adjust weights as needed
  subsets: ['latin'],     // Load Latin subset
});


const Services = () => {
  return (
    <div className={`flex flex-col justify-center items-center ${openSans.className}`}>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">OUR SERVIICES</h2>
        <div className="details gap-4 backdrop: flex-col w-[80%] justify-center mb-10 flex flex-wrap">
    {
     services.map((data, i) => (
         <div className="flex gap-3 " key={i}>
                <div>
                    <h4 className="className text-lg font-bold mt-1">{data.title}</h4>
                    <p className="leading-7 text-md text-black text-justify justify-center className [&:not(:first-child)]:mt-0">
                        {data.desc}
                    </p>
                </div>
            </div>
     ))
    }
    
        </div>
    </div>
  )
}

export default Services


