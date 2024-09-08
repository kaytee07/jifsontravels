import React from 'react'

const PackageHero = () => {
  return (
    <div
    className="
    bg-[url('https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] 
     bg-cover bg-center h-[30rem] w-full flex items-center justify-center"
    >
        <div className="text-white bg-black opacity-30 flex items-center justify-center h-40 w-96">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Tour Packages</h1>
        </div>
    </div>
  )
}

export default PackageHero