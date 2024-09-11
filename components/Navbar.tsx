import React from 'react' 
import { SheetDemo } from './Sidebar'
import { navigation } from '@/data'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className='flex flex-row justify-between py-4 px-10'>
        <div className="logo">
            <a href="/">
                <Image src="/logos/Logo.png" width={70} height={40} alt="logo"/>
            </a>
        </div>
        <nav 
        className="flex justify-between h-[2rem] text-sm font-md max-md:hidden" 
        style={{"width": "32rem", }}>
            <ul 
            className='flex flex-row justify-between items-center' 
            style={{"width": "30rem"}}>
                {navigation.map((data, i) => (
                    <a key={i} className="w-[6rem]" href={data.url}>
                        <li className="navitems flex items-center justify-center hover:border-b-2 hover:border-[#e8bd3b] text-[#317670]" >{data.name}</li>
                    </a>
                )
                )}
                
            </ul>
            {/* <div className='flex justify-around w-40'>
                <button className="border border-1 border-black rounded-lg py-1.5 px-1.5">
                    Sign in
                </button>
                <button className="border bg-black border-black rounded-lg py-1.5 px-1.5 text-white">
                    Sign up
                </button>
            </div>     */}
        </nav>
         <div className="md:hidden">
            <SheetDemo/>
        </div>
         
    </header>
    
  )
}

export default Navbar