import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const authFormSchema = (type: string) => z.object({
  email: "sign-in" ? z.string().optional() : z.string().min(3),
  password: "sign-in" ? z.string().optional() : z.string().min(3),
  numofpersons: z.number(),
  totalAmt: z.number(),
  firstname: type === "sign-in" ? z.string().optional() : z.string().min(3),
  lastname: type === "sign-in" ? z.string().optional() : z.string().min(3),
  phonenumber: type === "sign-in" ? z.string().optional() : z.string().min(10),
})
