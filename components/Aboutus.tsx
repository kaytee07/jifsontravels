import { aboutus } from '@/data'
import React from 'react'

const Aboutus = () => {
  return (
<div className="flex flex-col justify-center items-center h-auto">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0  ">About us</h2>
        <div className="details gap-4 backdrop: flex-col items-center w-[80%] justify-center mb-10 flex flex-wrap">
    {
     aboutus.slice(0, 3).map((data, i) => (
         <div className="flex gap-3 " key={i}>
                <div>
                    <h4 className="className font-bold text-xl mt-1">{data.title}</h4>
                    <p className="leading-7 text-lg text-black justify-center text-justify className [&:not(:first-child)]:mt-0">
                        {data.desc}
                    </p>
                </div>
            </div>
     ))
    }
    <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0  ">Core Values</h2>
    {
         aboutus.slice(4).map((data, i) => (
         <div className="flex gap-3 " key={i}>
                <div>
                    <h4 className="className font-bold text-xl mt-1">{data.title}</h4>
                    <p className="leading-7 text-lg text-black justify-center text-justify className [&:not(:first-child)]:mt-0">
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

export default Aboutus
