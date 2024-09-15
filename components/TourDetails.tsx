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
import CustomInput from './CustomInput'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from "zod"
import { authFormSchema } from '@/lib/utils'
import { Form } from './ui/form'


const TourDetails = ({ iti, gallery, details }: { iti: string[], gallery: string[], details: string }) => {
    const [showDetails, setShowDetails] = useState(true);
    const [showItinerary, setShowItinerary] = useState(false);
    const [showGallery, setShowGallery] = useState(false);

    const handleTabChange = (tab: 'details' | 'itinerary' | 'gallery') => {
        setShowDetails(tab === 'details');
        setShowItinerary(tab === 'itinerary');
        setShowGallery(tab === 'gallery');
    };

 const formSchema = authFormSchema("sign-in");

      // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      numofpersons: 0,
      totalAmt:0,
    },
  })

   async function onSubmit(values: z.infer<typeof formSchema>) {
    // setisLoading(true)
    // try {
    //     console.log(values)
    //     if (type === "sign-in"){
    //         // const response = await signIn({
    //         //     email:values.email,
    //         //     password: values.password
    //         // })

    //         // if (response) router.push("/mytours")
    //     }

    //     if (type === "sign-up"){
    //         // const newUser = await SignUp(data);
    //         // setUser(newUser)
    //         // const userData ={
    //         //     firstName: values.firstname,
    //         //     lastName: values.lastname,
    //         //     phoneNumber: values.phonenumber,
    //         //     email: values.email,
    //         //     password: values.password
    //         // }
    //     }
        
    // } catch (error) {
    //     console.log(error)
    // } finally {
    //     setisLoading(false)
    // }
    
  } 




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

            <div className="my-3 px-10 ">
                <div id="tabs-with-underline-1" role="tabpanel" aria-labelledby="tabs-with-underline-item-1" className={`${showDetails ? '' : 'hidden'} text-justify`}>
                    <h1>Tour Overview</h1>
                    <p className="text-gray-500 dark:text-neutral-400 pb-5">
                        {details}
                    </p>
                    
                </div>
                <div id="tabs-with-underline-2" role="tabpanel" aria-labelledby="tabs-with-underline-item-2" className={`${showItinerary ? '' : 'hidden'} pb-5 max-md:w-[90%]`}>
                    {iti.map((dayObject, i) => {
                        const dayKey = `Day ${i+1}`;
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
                <Dialog>
                        <DialogTrigger asChild>
                            <Button className="bg-[#317670] text-white" variant="outline">Book Now</Button>
                        </DialogTrigger>
                        <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <DialogContent className="sm:max-w-[400px]">
                            <DialogHeader>
                            <DialogTitle>Book Tour</DialogTitle>
                            <DialogDescription>
                               Enter the number of persons you want to book for
                            </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                            <CustomInput control={form.control} label="Number of persons" name="numofpersons" placeholder="select number of persons"/>
                            <CustomInput control={form.control} label="Total Amount" name="totalAmt" placeholder="total amount"/>
                            </div>
                            <DialogFooter>
                            <Button type="submit" className="bg-[#317670]">Proceed to checkout</Button>
                            </DialogFooter>
                        </DialogContent>
                        </form>
                        </Form>
                    </Dialog>
            </div>
            
        </div>
    );
}

export default TourDetails;

