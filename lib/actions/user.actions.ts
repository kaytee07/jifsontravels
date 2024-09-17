"use server"
var paystack = require('paystack')(process.env.PAYSTACK_SECRET_KEY);
import { connectToDB } from "../database/database";
import Tours from "@/models/tours";

interface PaidTourProps {
    totalAmt: number;
    numofpersons: string
    email: string | undefined
    duration: string;
    userId: string | undefined,
    packageType: string
}

export const paidTour = async (data: PaidTourProps) => {
    try {
        await connectToDB();
        const {userId, totalAmt, duration, email, numofpersons, packageType} = data;
        const transaction = await paystack.transaction.initialize({
            email: email,
            amount: totalAmt * 100, // Amount in kobo (e.g., 10 USD will be 1000 kobo)
         // Set the currency to USD
            callback_url: `http://localhost:3000/mytours`
        });
        
         const paystackPaymentAPI = transaction.data.authorization_url || "Can't get API";

    
        await Tours.create({
            userId: userId,
            totalamt: totalAmt,
            duration: duration,
            email: email,
            numofpersons: numofpersons,
            packagetype: packageType
        });

        return (paystackPaymentAPI);
    } catch (error) {
        console.error('Error', error);
        return "error"
    }
}