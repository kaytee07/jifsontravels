import { contactUs } from '@/data'
import React from 'react'

const Contactus = () => {
  return (
     <div className=" text-[#317670] mt-10">
    <div className="flex flex-col h-auto">
      <div className="title flex justify-center">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0  w-40">Contact us</h2>
      </div>
        <div className="details gap-4 backdrop: flex-col px-24 w-[80%] mb-10 flex flex-wrap">
        {
        contactUs.map((data, i) => (
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
    </div>
  )
}

export default Contactus
