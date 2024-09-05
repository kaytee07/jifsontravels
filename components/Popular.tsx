import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { packages } from '@/data'

const Popular = () => {
  return (
     <div className="w-full flex flex-col  items-center my-12 pt-8 ">
        <h4 className="text-xl font-bold tracking-tight text-center mx-9 text-[#142d52]">
            Tour Packages
        </h4>
        <div className="w-[95%]  flex max-md:flex-col max-md:items-center justify-center gap-10">
             {packages.map((data, i) => (
                <div key={i}>
                 <div className="relative flex max-w-[24rem] md:max-w-[17rem] flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                    ` <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                        <img
                        src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
                        alt="card-image" className="object-cover w-full h-full" />
                    </div>
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                            {data.name}
                        </p>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                            ${data.price}
                        </p>
                        </div>
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                        {data.desc}
                        </p>
                    </div>
                    <div className="p-6 pt-0">
                        <button
                        className="align-middle select-none bg-[#e9eaeb] font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                        type="button">
                        Book Now
                        </button>`
                 </div>
                </div>
                
            </div>       
            ))}
            
        </div>
        <Button className="my-10 w-32">View More</Button>
    </div>
  )
}

export default Popular
