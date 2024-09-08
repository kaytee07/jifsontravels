import TourDetails from '@/components/TourDetails';
import TourHero from '@/components/TourHero'
import { packageDetails } from '@/data'
import React from 'react';

interface Itinerary {
  day1: string;
  day2: string;
  day3: string;
  day4: string;
  day5: string
}[]

interface TourPackage {
  name: string;
  imgUrl: string;
  details: string;
  itinerary: Itinerary[],
  gallery: string[]
}

interface packageDetails {
  [key : string]: TourPackage
}

const PackageType = ({params}: {params: {packagetypes: string}}) => {
  let tourType = packageDetails[params.packagetypes as keyof typeof packageDetails]
  
  return (
    <main>
      <TourHero name={tourType.name} url={tourType.imgUrl}/>
      <TourDetails iti={tourType.itinerary} gallery={tourType.gallery} details={tourType.details}/>
    </main>
  )
}

export default PackageType