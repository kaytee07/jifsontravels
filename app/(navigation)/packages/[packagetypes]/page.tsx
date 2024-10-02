import { AlertDemo } from '@/components/Alert';
import TourDetails from '@/components/TourDetails';
import TourHero from '@/components/TourHero'
import { packageDetails, packages } from '@/data'
import React from 'react';

type DayItinerary = {
  [key: `day${number}`]: string; // Allows keys like "day1", "day2", ..., "dayN"
};

type Itinerary = DayItinerary[];

type TourType = {
  itinerary: Itinerary[]; // This should be an array of objects with dynamic keys
  gallery: string[];    // This should be an array of strings representing image URLs
  details: string;      // This should be a string with the tour details
  packages: string[];
};





const PackageType = ({params}: {params: {packagetypes: string}}) => {
  let tourType = packageDetails[params.packagetypes as keyof typeof packageDetails]
  console.log(tourType)

    const flattenedItinerary = tourType.itinerary.flatMap(dayObj => 
    Object.values(dayObj) // Extract values from each day object
  );

  
  return (
    <main>
      <TourHero name={tourType.name} url={tourType.imgUrl}/>
      <TourDetails packs={tourType.packs} iti={flattenedItinerary} gallery={tourType.gallery} details={tourType.details} duration={tourType.duration} packageType={tourType.name} price={tourType.price}/>
    </main>
  )
}

export default PackageType