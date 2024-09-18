"use client"

import React from 'react' 
import { SheetDemo } from './Sidebar'
import { navigation } from '@/data'
import Image from 'next/image'
import { ClerkLoaded, UserButton} from '@clerk/nextjs'
import { useUser } from "@clerk/nextjs";

const Navbar = () => {
    const { isSignedIn, user } = useUser();
  return (
    <header className='flex flex-row justify-between items-center py-4 px-10'>
        <div className="logo">
            <a href="/">
                <Image src="/logos/Logo.png" width={100} height={20} alt="logo"/>
            </a>
        </div>
        <nav 
        className="flex justify-between h-[2rem] text-sm font-md md:w-[40rem] max-md:gap-5">
            <ul 
            className='flex flex-row justify-between items-center max-md:hidden' 
            style={{"width": "40rem"}}>
                {navigation.map((data, i) => (
                    <a key={i} className="w-[6rem]" href={data.url}>
                        <li className="navitems flex items-center justify-center hover:border-b-2 hover:border-[#e8bd3b] text-[#317670]" >{data.name}</li>
                    </a>
                )
                )}
                {
                    isSignedIn && (
                            <>
                            <a className="w-[6rem]" href='/mytours'>
                             <li className="navitems flex items-center justify-center hover:border-b-2 hover:border-[#e8bd3b] text-[#317670]" >My tours</li>
                            </a>
                            <a className="w-[6rem]" href='history'>
                                    <li className="navitems flex items-center justify-center hover:border-b-2 hover:border-[#e8bd3b] text-[#317670]" >History</li>
                            </a>
                            </>
                        )
                }
              
            </ul>
                <UserButton/>
            <div className="md:hidden flex items-center">
                <SheetDemo/>
            </div>
        </nav>
      
        
         
    </header>
    
  )
}

export default Navbar