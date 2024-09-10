import { aboutus } from '@/data'
import React from 'react'

const Aboutus = () => {
  return (
       <div className="flex flex-col justify-center items-center h-auto">
        <h4 className="className mt-7 text-lg text-center font-bold  ">About us</h4>
        <div className="details gap-4 backdrop: flex-col items-center w-[80%] justify-center mb-10 flex flex-wrap">
    {
     aboutus.map((data, i) => (
         <div className="flex gap-3 " key={i}>
                <div>
                    <h4 className="className font-bold text-xl mt-1">{data.title}</h4>
                    <p className="leading-7 text-lg text-black justify-center className [&:not(:first-child)]:mt-0">
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
