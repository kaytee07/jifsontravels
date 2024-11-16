"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { date, z } from "zod"
import { useUser } from '@clerk/nextjs'
import { getStack, paidTour } from '@/lib/actions/user.actions'
import { Loader2 } from 'lucide-react'
import { Alert } from './ui/alert'
import { packages } from '@/data'
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



interface detailsPrototype{
    duration: string;
    packageType:string; 
    gallery: string[];
    details: string; 
    price:number;
    packs: string[]
}


const TourDetails = ({ gallery, details, price, packageType, duration, packs }: detailsPrototype) => {
    const { user } = useUser();
    const [isLoading, setisLoading] = useState(false)
    const [showDetails, setShowDetails] = useState(true);
    const [showItinerary, setShowItinerary] = useState(false);
    const [showGallery, setShowGallery] = useState(false);
    const [numOfPersons, setNumOfPersons] = useState<number>(0);
    const [totalAmt, setTotalAmt] = useState<number>(0);

    const handleTabChange = (tab: 'details' | 'itinerary' | 'gallery') => {
        setShowDetails(tab === 'details');
        setShowItinerary(tab === 'itinerary');
        setShowGallery(tab === 'gallery');
    };

 
const formSchema = z.object({
  date:z.date({
    required_error: "A date of birth is required.",
  }),
  numofpersons: z.string(),
  totalAmt: z.number()
});

      // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: new Date(),
      numofpersons: "",
      totalAmt: 0,
    },
  })

  const numofpersons: string = form.watch("numofpersons")

  useEffect(()=>{
    let totalAmt:number = Number(numofpersons) * price;
    form.setValue("totalAmt", totalAmt)
  }, [numofpersons, form.setValue])



   async function onSubmit(values: z.infer<typeof formSchema>) {
    setisLoading(true);
    try {
        if (!user) window.location.href = "/sign-in"
        alert(values.date)
        const data = {
            numofpersons: values.numofpersons,
            totalAmt: values.totalAmt,
            duration,
            packageType,
            userId: user?.id,
            email: user?.emailAddresses[0].emailAddress,
            name: user?.firstName
        }
        
        sessionStorage.setItem("numofpersons", values.numofpersons);
        sessionStorage.setItem("totalAmt", String(values.totalAmt));
        sessionStorage.setItem("duration", String(duration));
        sessionStorage.setItem("packageType", packageType);
        sessionStorage.setItem("userId", String(user?.id));
        sessionStorage.setItem("email",     String(user?.emailAddresses[0].emailAddress));
        sessionStorage.setItem("name", String(user?.firstName));
        sessionStorage.setItem("date", String(values.date));

        let pays = await getStack();
        sessionStorage.setItem("paystack", String(pays));
        
        
        await paidTour(data)
    
    
     
    } catch (error) {
        
    } finally {
        setisLoading(false)
    }
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
                    {/* <button 
                        onClick={() => handleTabChange('itinerary')} 
                        type="button" 
                        className={`hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 ${showItinerary ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'} hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500`} 
                        id="tabs-with-underline-item-2" 
                        aria-selected={showItinerary}
                        role="tab">
                        Itinerary
                    </button> */}
                </nav>
            </div>

            <div className="my-3 px-10 ">
                <div id="tabs-with-underline-1" role="tabpanel" aria-labelledby="tabs-with-underline-item-1" className={`${showDetails ? '' : 'hidden'} text-justify`}>
                    <h1>Tour Overview</h1>
                    <p className="text-gray-500 dark:text-neutral-400 pb-5">
                        {details}
                    </p>
                    <h1>Package Includes</h1>
                    <ul className="list-disc pl-5">
                        {
                            packs.map((items, index) => (
                                <li key={index} className="text-gray-500 dark:text-neutral-400 pb-5">
                                    {items}
                                </li>
                            ))
                        }
                    </ul>
                    
                    
                </div>
                {/* <div id="tabs-with-underline-2" role="tabpanel" aria-labelledby="tabs-with-underline-item-2" className={`${showItinerary ? '' : 'hidden'} pb-5 max-md:w-[90%]`}>
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
                </div> */}
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
                        
                        <DialogContent className="sm:max-w-[400px]">
                            <DialogHeader>
                            <DialogTitle>Book Tour</DialogTitle>
                            <DialogDescription>
                               Note: During checkout Amount will be converted to it Ghana cedi equivalent
                            </DialogDescription>
                            </DialogHeader>
                            <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <div className="grid gap-4 py-4">
                            <FormField
                                control={form.control}
                                name="date"
                                render={({ field }) => (
                                <div className="form-item">
                                    <FormLabel className="form-label mb-1">Pick a Date</FormLabel>
                                    <div className="flex flex-col w-full">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                        <FormControl>
                                            <Button
                                            variant="outline"
                                            className={`w-[240px] pl-3 text-left font-normal ${
                                                !field.value ? "text-muted-foreground" : ""
                                            }`}
                                            >
                                            {field.value ? (
                                                format(field.value, "PPP") // Format the Date to a readable string
                                            ) : (
                                                <span>Pick a date</span> // Placeholder text
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value} // Use field.value directly for selected date
                                            onSelect={field.onChange} // Update the field value on date selection
                                            disabled={(date) => date < new Date()}
                                            initialFocus
                                        />
                                        </DropdownMenuContent>
                                        </DropdownMenu>
                                            <FormMessage
                                                className="form-message mt-2"/>
                                        </div>
                                </div>
                                )}
                                />
                            <FormField
                                control={form.control}
                                name="numofpersons"
                                render={({ field }) => (
                                <div className="form-item">
                                        <FormLabel className="form-label mb-1">
                                            Number of persons
                                        </FormLabel>
                                        <div className="flex flex-col w-full">
                                            <FormControl>
                                                <Input
                                                min={1}
                                                    type="number"
                                                    placeholder="number of persons"
                                                    className="input-class"
                                                    {...field}
                                                    
                                                />
                                            </FormControl>
                                            <FormMessage
                                                className="form-message mt-2"/>
                                        </div>
                                </div>
                                )}
                                />
<FormField
                                control={form.control}
                                name="totalAmt"
                                render={({ field }) => (
                                <div className="form-item">
                                        <FormLabel className="form-label mb-1">
                                            Total Amount (6)
                                        </FormLabel>
                                        <div className="flex flex-col w-full">
                                            <FormControl>
                                                <Input
                                                    type="number"
                                                    placeholder="number of persons"
                                                    className="input-class"
                                                    {...field}
                                                    disabled
                                                />
                                            </FormControl>
                                            <FormMessage
                                                className="form-message mt-2"/>
                                        </div>
                                </div>
                                )}
                                />
                            </div>
                            <Button type="submit" className="bg-[#317670]">
                                 {
                                 isLoading ? (
                                   <>
                                     <Loader2 size={20}
                                     className="animate-spin"
                                     /> &nbsp;loading...
                                    </>
                                 ) : "Proceed to checkout"
                                } 
                               </Button>
                             </form>
                             </Form>
                        </DialogContent>
                    </Dialog>
            </div>
            
        </div>
    );
}

export default TourDetails;

