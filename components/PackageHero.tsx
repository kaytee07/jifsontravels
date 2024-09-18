import React from 'react'

const PackageHero = () => {
  return (
    <div
    className="
    bg-[url('/img/1.jpg')] 
     bg-cover bg-center h-[30rem] w-full flex items-center justify-center"
    >
        <div className="text-white bg-black opacity-60 flex items-center justify-center h-40 w-96">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Tour Packages</h1>
        </div>
    </div>
  )
}

export default PackageHero