import React from 'react' 
import { SheetDemo } from './Sidebar'
import { navigation } from '@/data'

const Navbar = () => {
  return (
    <header className='flex flex-row justify-between py-4 px-10'>
        <div className="logo">
            <a href='/'>
            <h2>JifsonJoyTravels</h2>
            </a>
        </div>
        <nav 
        className="flex justify-between text-sm font-md max-md:hidden" 
        style={{"width": "32rem", }}>
            <ul 
            className='flex flex-row justify-between items-center' 
            style={{"width": "20rem"}}>
                {navigation.map((data, i) => (<li className="navitems" key={i}>{data.name}</li>)
                )}
                
            </ul>
            <div className='flex justify-around w-40'>
                <button className="border border-1 border-black rounded-lg py-1.5 px-1.5">
                    Sign in
                </button>
                <button className="border bg-black border-black rounded-lg py-1.5 px-1.5 text-white">
                    Sign up
                </button>
            </div>    
        </nav>
         <div className="md:hidden">
            <SheetDemo/>
        </div>
         
    </header>
    
  )
}

export default Navbar