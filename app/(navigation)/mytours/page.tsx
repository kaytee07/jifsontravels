"use client"
import { getTours } from '@/lib/actions/user.actions'
import { useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react'

type Tour = {
  numofpersons: string;
  totalamt: number;
  packagetype: string;
  duration: string;
};

const MyTours = () => {
    const { user } = useUser(); 
    const [myTours, setMyTours] = useState<Tour[]>([]);
    useEffect(() => {
    const fetchTours = async () => {
        if (user?.id) {
            const toursData: Tour[] =  await getTours(user.id);
            setMyTours(toursData || [])
        }
        
    };  
   fetchTours();
}, [user?.id]);
  return (
    <div className="flex flex-col items-center">
        <div className="header flex justify-center mb-6">
          <h2 className="text-[#317670] scroll-m-20 border-b pb-2 text-center text-3xl w-40 font-semibold tracking-tight first:mt-0  ">My Tours</h2>
      </div>
      <div className="px-14 w-[fit-content]  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
        {
            myTours.length && myTours.map((data, i)=> (
            <div key={i} className="flex flex-col rounded-lg bg-white shadow-sm max-w-72 p-8 my-6 border border-slate-200">
                <div className="p-0">
                    <ul className="flex flex-col gap-4">
                    <li className="flex items-center gap-4"> 
                        <p className="text-slate-500">
                        Number of persons: {data.numofpersons}
                        </p>
                    </li>
                    <li className="flex items-center gap-4"> 
                        <p className="text-slate-500">
                        Total amount: £{data.totalamt}
                        </p>
                    </li>
                    <li className="flex items-center gap-4"> 
                        <p className="text-slate-500">
                        Package type: {data.packagetype}
                        </p>
                    </li>
                    <li className="flex items-center gap-4"> 
                        <p className="text-slate-500">
                        Duration: {data.duration}
                        </p>
                    </li>
                    
                    </ul>
                </div>
                </div>
                    ))
                }

                </div>
            </div>
  )
}

export default MyTours