import React from 'react'
import ExploreCard from './ExploreCard'
import { Button } from './ui/button'

const Explore = () => {
  return (
    <div className="w-full flex flex-col items-center my-12 pt-8 bg-[#f5f5f5]"
    >
        <h4 className="text-xl font-bold tracking-tight text-center mx-9"
        style={{
            color: "#142d52"
        }}>
            Popular Tour sites In Ghana
        </h4>

        <div className='mb-10'
        style={{
            width: "95%",
        }}>
            <ExploreCard/>

        </div>
    </div>
  )
}

export default Explore