// "use client"

// import Image from 'next/image'
// import Link from 'next/link'
// import React, { useState } from 'react'
// import { z } from "zod"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { Button } from "@/components/ui/button"
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import CustomComponent from './CustomInput'
// import { authFormSchema } from '@/lib/utils'
// import CustomInput from './CustomInput'
// import { Loader2 } from 'lucide-react'
// import { useRouter } from 'next/navigation'
// import { signIn, signUp } from '@/lib/actions/user.actions'


// const AuthForm = ({type}: {type: string}) => {
//     const router = useRouter();
//     const [user, setUser] = useState(null);
//     const [isLoading, setisLoading] = useState(false)
//     const formSchema = authFormSchema(type);

//       // 1. Define your form.
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       email: "",
//       password:"",
//       firstname: "",
//       lastname: "",
//       phonenumber:"",
//     },
//   })

  
 
//   // 2. Define a submit handler.
//   async function onSubmit(values: z.infer<typeof formSchema>) {
//     setisLoading(true)
//     try {
//         console.log(values)
//         if (type === "sign-in"){
//             // const response = await signIn({
//             //     email:values.email,
//             //     password: values.password
//             // })

//             // if (response) router.push("/mytours")
//         }

//         if (type === "sign-up"){
//             // const newUser = await SignUp(data);
//             // setUser(newUser)
//             // const userData ={
//             //     firstName: values.firstname,
//             //     lastName: values.lastname,
//             //     phoneNumber: values.phonenumber,
//             //     email: values.email,
//             //     password: values.password
//             // }
//         }
        
//     } catch (error) {
//         console.log(error)
//     } finally {
//         setisLoading(false)
//     }
    
//   } 
//   return (
//     <div className="auth-form my-5">
//         <header className="flex flex-col gap-5 md:gap-8">
//             <Link href="/" className="flex justify-center">
//                 <Image src="/logos/Logo.png" width={100} height={20} alt="logo"/>
//             </Link>
//             <div className="flex flex-col gap-1 md:gap-3">
//                 <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
//                     {user
//                     ? 'Link Account'
//                 : type === 'sign-in'
//                 ? 'Sign In'
//                 : 'Sign Up'}
//                 </h1>
//             </div>
//         </header>
//         {
//             user ? (
//                 <div className="flex">
//                     /link/
//                 </div>
//             ): (
//                 <>
//                 <Form {...form}>
//                 <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//                     {
//                         type === "sign-up" && (
//                             <>
//                                 <CustomInput control={form.control} name="firstname" label="First name" placeholder="Enter your first name"/>
//                                 <CustomInput control={form.control} name="lastname" label="Last name" placeholder="Enter your first name"/>
//                                 <CustomInput control={form.control} name="phonenumber" label="Phone number" placeholder="Example: +44209019827"/>
//                             </>
//                         )
//                     }
//                     <CustomInput control={form.control} name="email" label="Email" placeholder="Enter your email"/>
//                     <CustomInput control={form.control} name="password" label="Password" placeholder="Enter your password"/>
//                     <div className="flex flex-col gap-4">
//                     <Button type="submit" disabled={isLoading} className="bg-[#317670]">
//                         {
//                             isLoading ? (
//                                 <>
//                                 <Loader2 size={20}
//                                 className="animate-spin"
//                                 /> &nbsp;loading... </>
//                             ) : (
//                                 type === "sign-in"
//                                 ? "Sign In" : "Sign Up"
//                             )
//                         }
//                     </Button>
//                     </div>
//                 </form>
//                 </Form>

//                 <footer className="flex justify-center gap-1 mt-2">
//                     <p className="text-14 font-normal text-gray-600">
//                         {
//                             type === "sign-in"
//                             ? "Don't have an account?"
//                             :"Already have an account"
//                         }
//                     </p>
//                     <Link href={ type === 'sign-in' ? '/sign-up': '/sign-in'} className='text-blue-700'>
//                         {
//                             type === "sign-in" ? "Sign Up": "Sign In" 
//                         }?
//                     </Link>
//                 </footer>
//                 </>
//             )
//         }
//     </div>
//   )
// }

// export default AuthForm
