"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const TourDetails = ({ iti, gallery, details }: { iti: string[], gallery: string[], details: string }) => {
    const [showDetails, setShowDetails] = useState(true);
    const [showItinerary, setShowItinerary] = useState(false);
    const [showGallery, setShowGallery] = useState(false);

    const handleTabChange = (tab: 'details' | 'itinerary' | 'gallery') => {
        setShowDetails(tab === 'details');
        setShowItinerary(tab === 'itinerary');
        setShowGallery(tab === 'gallery');
    };

    return (
        <div>
            <div className="border-b border-gray-200 dark:border-neutral-700 px-10">
                <nav className="flex gap-x-1" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
                    <button 
                        onClick={() => handleTabChange('details')} 
                        type="button" 
                        className={`hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 ${showDetails ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'} hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500`} 
                        id="tabs-with-underline-item-1" 
                        aria-selected={showDetails}
                        role="tab">
                        Details
                    </button>
                    <button 
                        onClick={() => handleTabChange('itinerary')} 
                        type="button" 
                        className={`hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 ${showItinerary ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'} hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500`} 
                        id="tabs-with-underline-item-2" 
                        aria-selected={showItinerary}
                        role="tab">
                        Itinerary
                    </button>
                </nav>
            </div>

            <div className="my-3">
                <div id="tabs-with-underline-1" role="tabpanel" aria-labelledby="tabs-with-underline-item-1" className={`${showDetails ? '' : 'hidden'} px-10 text-justify`}>
                    <h1>Tour Overview</h1>
                    <p className="text-gray-500 dark:text-neutral-400 pb-5">
                        {details}
                    </p>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline">Edit Profile</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                            <DialogTitle>Edit profile</DialogTitle>
                            <DialogDescription>
                                Make changes to your profile here. Click save when you're done.
                            </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                Name
                                </Label>
                                <Input
                                id="name"
                                defaultValue="Pedro Duarte"
                                className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                Username
                                </Label>
                                <Input
                                id="username"
                                defaultValue="@peduarte"
                                className="col-span-3"
                                />
                            </div>
                            </div>
                            <DialogFooter>
                            <Button type="submit">Save changes</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
                <div id="tabs-with-underline-2" role="tabpanel" aria-labelledby="tabs-with-underline-item-2" className={`${showItinerary ? '' : 'hidden'}`}>
                    {iti.map((dayObject, i) => {
                        const dayKey = `Day ${i}`;
                        const dayValue = dayObject;
                        return (
                            <div key={i}>
                                <h2>{dayKey}</h2>
                                <p>{dayValue}</p>
                            </div>
                        );
                    })}
                </div>
                <div id="tabs-with-underline-3" role="tabpanel" aria-labelledby="tabs-with-underline-item-3" className={`${showGallery ? '' : 'hidden'}`}>
                    {gallery.map((photo, i) => (
                        <div key={i}>
                            <Image
                                src={photo}
                                width={200}
                                height={200}
                                alt={`photo ${i}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TourDetails;

