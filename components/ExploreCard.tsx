import React from 'react'
import { Button } from './ui/button'
import { Location } from '@/data'
import Image from 'next/image'

const ExploreCard = () => {
  return (
    <div className="flex justify-center items-center flex-col">
    <div className="flex gap-8 justify-center flex-wrap mt-8">
        {Location.map((data, i) => (
        <div key={i}
            className="relative flex max-w-[24rem] md:max-w-[17rem] max-h-[30rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                <Image
                src={`${data.url}`}
                width={500}
                height={100}
                alt="ui/ux review check" />
            </div>
            <div className="p-6">
                <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {data.name}
                </h4>
                <div>
                    <p className="block mt-3 font-sans text-md antialiased font-normal leading-relaxed text-gray-700">
                    {data.desc}
                    </p>
                    {/* <div className="flex justify-between mt-3 items-end">
                    <Button className="w-24 text-xs h-15">Book Now</Button>
                    </div> */}
                </div>    
            </div>
            </div> 
        ))}
       
    </div>
    </div>
  )
}

export default ExploreCard