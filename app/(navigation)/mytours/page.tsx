"use client"
import { getTours, saveData } from '@/lib/actions/user.actions'
import { useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation';
import { NextResponse } from 'next/server';
import { Loader2 } from 'lucide-react';
import { useRef } from 'react';


type Tour = {
  numofpersons: string;
  totalamt: number;
  packagetype: string;
  duration: string;
  date: string;
};

const MyTours = () => {
  const { user } = useUser();
  const [myTours, setMyTours] = useState<Tour[]>([]);
  const searchParams = useSearchParams();
  const references = searchParams.get('reference');
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;
    const reference = searchParams.get('reference');

    const verify = async (ref: string) => {
        console.log(sessionStorage.getItem("paystack"))
      try {
        const response = await fetch(`https://api.paystack.co/transaction/verify/${ref}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("paystack")}`,
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        if (response.ok) {
          const storedAmount = sessionStorage.getItem("totalAmt");
          const storedDuration = sessionStorage.getItem("duration");
          const storedPackageType = sessionStorage.getItem("packageType");
          const storedNumOfPersons = sessionStorage.getItem("numofpersons");
          const storedId = sessionStorage.getItem("userId");
          const storedEmail = sessionStorage.getItem("email");
          const storedName = sessionStorage.getItem("name");
          const storedDate = sessionStorage.getItem("date");
          console.log(storedDate)
          saveData(storedAmount, storedDuration, storedPackageType, storedNumOfPersons, storedId, storedEmail, storedName, storedDate);
          // Handle successful verification (e.g., update the UI or state)
        } else {
          console.error('Verification failed:', data.message);
        }
      } catch (error) {
        console.error('Error verifying transaction:', error);
      } 
    }

    const fetchTours = async () => {
      if (user?.id) {
        const toursData: Tour[] = await getTours(user.id);
        setMyTours(toursData || []);
      }
    };

    if (reference) verify(reference);
    fetchTours();

  }, [user?.id]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh]">
      {references ? (
        <>
          <Loader2 size={20} className="animate-spin" />
          &nbsp;loading...
        </>
      ) : (
        <>
          <div className="header flex justify-center mb-6">
            <h2 className="text-[#317670] scroll-m-20 border-b pb-2 text-center text-3xl w-40 font-semibold tracking-tight first:mt-0">
              My Tours
            </h2>
          </div>
          <div className="px-14 w-[fit-content] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
            {myTours.length && myTours.map((data, i) => (
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
                    <li className="flex items-center gap-4">
                      <p className="text-slate-500">
                        Day: {data.date ? data.date : 0}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyTours;
