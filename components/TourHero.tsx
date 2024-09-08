import { packageDetails } from '@/data'
import React from 'react'

interface PackageProps {
    name: string,
    url: string
}

const TourHero: React.FC<PackageProps> = ({name, url}) => {
  return (
    <div
    style={{ backgroundImage: `url(${url})` }} 
      className="bg-cover bg-center h-[30rem] w-full flex items-center justify-center"
    >
        <div className="text-white bg-black opacity-30 flex items-center justify-center h-40 w-96">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{name}</h1>
        </div>
    </div>
  )
}

export default TourHero