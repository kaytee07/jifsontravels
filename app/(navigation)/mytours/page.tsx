import React from 'react'

const MyTours = () => {
  return (
    <div>
        <div className="header flex justify-center mb-6">
          <h2 className="text-[#317670] scroll-m-20 border-b pb-2 text-center text-3xl w-40 font-semibold tracking-tight first:mt-0  ">My Tours</h2>
      </div>
      <div className="px-14">
       <div className="flex flex-col rounded-lg bg-white shadow-sm max-w-72 p-8 my-6 border border-slate-200">
        {/* <div className="pb-8 m-0 mb-8 text-center text-slate-800 border-b border-slate-200">
            <p className="text-sm uppercase font-semibold text-slate-500">
            standard
            </p>
            <h1 className="flex justify-center gap-1 mt-4 font-bold text-slate-800 text-6xl">
            <span className="text-3xl">$</span>29
            <span className="self-end text-3xl">/mo</span>
            </h1>
        </div> */}
        <div className="p-0">
            <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4"> 
                <p className="text-slate-500">
                Number of persons: <span>5</span>
                </p>
            </li>
            <li className="flex items-center gap-4"> 
                <p className="text-slate-500">
                Total amount: <span></span>
                </p>
            </li>
            <li className="flex items-center gap-4"> 
                <p className="text-slate-500">
                Package type: <span></span>
                </p>
            </li>
            <li className="flex items-center gap-4"> 
                <p className="text-slate-500">
                Duration: <span></span>
                </p>
            </li>
            
            </ul>
        </div>
        <div className="p-0 mt-12">
            <button className="min-w-32 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            Print receipt
            </button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default MyTours