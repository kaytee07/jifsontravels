import React from 'react'
import { Button } from './ui/button'
import { packages } from '@/data'
import Link from 'next/link'

const Popular = () => {
  return (
     <div className="w-full flex flex-col  items-center my-12 pt-8 ">
        <h4 className="text-xl font-bold tracking-tight text-center mx-9 text-[#142d52]">
            Tour Packages
        </h4>
        <div className="w-[95%]  flex max-md:flex-col max-md:items-center justify-center gap-10">
             {packages.slice(0, 3).map((data, i) => (
                <div key={i}>
                 <div className="relative flex max-w-[28rem] max-md:max-w-[24rem] flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                    ` <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                        <img
                        src={data.img}
                        alt="card-image" className="object-cover w-full h-full" />
                    </div>
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                            {data.name}
                        </p>
                        <div>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                            ${data.price}
                        </p>
                        </div>
                        </div>
                        <div className="flex justify-between">
                            <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    color="#ff8041"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2" // Changed from stroke-width
                                    strokeLinecap="round" // Changed from stroke-linecap
                                    strokeLinejoin="round" // Changed from stroke-linejoin
                                    className="lucide lucide-calendar" // Changed class to className
                                    >
                                    <path d="M8 2v4"/>
                                    <path d="M16 2v4"/>
                                    <rect width="18" height="18" x="3" y="4" rx="2"/>
                                    <path d="M3 10h18"/>
                            </svg>
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-[#ff8041] opacity-75">
                                {data.duration}
                            </p>
                        </div>
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                        {data.desc}
                        </p>
                    </div>
                    <div className="p-6 pt-0">
                        <Link href={`/packages/${data.name.replace(/\s+/g, '').toLowerCase()}`}>
                        <button
                        className="align-middle select-none bg-[#ff8041] font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                        type="button">
                                Book Now
                        </button>`
                        </Link>
                 </div>
                </div>
                
            </div>       
            ))}
            
        </div>
        <Link href="/packages">
        <Button className="my-10 w-32">View More</Button>
        </Link>
    </div>
  )
}

export default Popular
