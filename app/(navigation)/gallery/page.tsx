import { gallery } from '@/data'
import React from 'react'

const Gallery = () => {
  return (
    <div>
      <div className="header flex justify-center mb-6">
          <h2 className="text-[#317670] scroll-m-20 border-b pb-2 text-center text-3xl w-32 font-semibold tracking-tight first:mt-0  ">Gallery</h2>
      </div>
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 px-14 pb-6">
        {
          gallery.map((data, i)=> (
                  <div key={i}>
                    <img className="object-cover object-center w-full h-64 max-w-full rounded-lg"
                      src={data}
                      alt="gallery-photo" />
                </div>
          ))
        }
        
      </div>
    </div>
  )
}

export default Gallery
