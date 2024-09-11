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
        style={{"width": "38rem", }}>
            <ul 
            className='flex flex-row justify-between items-center' 
            style={{"width": "40rem"}}>
                {navigation.map((data, i) => (
                    <a key={i} className="w-[6rem]" href={data.url}>
                        <li className="navitems flex items-center justify-center hover:border-b-2 hover:border-[#e8bd3b] text-[#317670]" >{data.name}</li>
                    </a>
                )
                )}
                <a className="w-[6rem]" href='/mytours'>
                        <li className="navitems flex items-center justify-center hover:border-b-2 hover:border-[#e8bd3b] text-[#317670]" >My tours</li>
                </a>
                <a className="w-[6rem]" href='history'>
                        <li className="navitems flex items-center justify-center hover:border-b-2 hover:border-[#e8bd3b] text-[#317670]" >History</li>
                </a>
            </ul>
            
        </nav>
         <div className="md:hidden">
            <SheetDemo/>
        </div>
         
    </header>
    
  )
}

export default Navbar