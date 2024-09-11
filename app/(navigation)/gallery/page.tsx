import { gallery } from '@/data'
import React from 'react'

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 px-14 pb-6">
      {
        gallery.map((data, i)=> (
                <div key={i}>
                  <img className="object-cover object-center w-full h-40 max-w-full rounded-lg"
                    src={data}
                    alt="gallery-photo" />
              </div>
        ))
      }
      
    </div>
  )
}

export default Gallery
