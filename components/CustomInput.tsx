import React from 'react'
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
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { format } from 'path'
import { authFormSchema } from '@/lib/utils'

const formSchema = authFormSchema("sign-up");
interface CustomInput {
  control: Control<z.infer<typeof formSchema>>,
  name: FieldPath<z.infer<typeof formSchema>>,
  label: string,
  placeholder: string
}

const CustomInput = ({ control, label, placeholder, name}: CustomInput) => {
  return (
                    <FormField
                    control={control}
                    name={name}
                    render={({ field }) => (
                       <div className="form-item">
                            <FormLabel className="form-label mb-1">
                                {label}
                            </FormLabel>
                            <div className="flex flex-col w-full">
                                <FormControl>
                                    <Input
                                        type="number"
                                        placeholder={placeholder}
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
  )
}

export default CustomInput