"use server"
var paystack = require('paystack')(process.env.PAYSTACK_SECRET_KEY);
import { connectToDB } from "../database/database";
import Tours from "@/models/tours";
import { sendMail } from "../mail";
import { redirect } from "next/navigation";



interface PaidTourProps {
    totalAmt: number;
    numofpersons: string
    email: string | undefined
    duration: string;
    userId: string | undefined,
    packageType: string,
    name: string | undefined| null
}

export const paidTour = async (data: PaidTourProps) => {   
    const apiKey = process.env.CURRCONVERTER_API_KEY
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/GBP/GHS`
    try {
        const response = await fetch(url);
        var currency = await response.json();
    } catch (error) {
        console.error
    }

    try {
        await connectToDB();
        
        const {totalAmt, email} = data;
        console.log(data)
        var transaction = await paystack.transaction.initialize({
            email: email,
            amount: (totalAmt * 100) * currency.conversion_rate,
            callback_url: `http://localhost:3000/mytours`
        });
        console.log(paystackPaymentAPI)
        
         var paystackPaymentAPI = transaction.data.authorization_url || "Can't get API";
         
        
    } catch (error) {
        console.error('Error', error);
        return "error"
    } finally {
        console.log(redirect(paystackPaymentAPI))

    }
}

export const saveData = async (totalAmt:string|null, duration:string|null, packageType:string|null, numofpersons:string|null, userId:string|undefined, email:string|undefined, name: string| null | undefined) => {
    if (totalAmt){

    
            const apiKey = process.env.CURRCONVERTER_API_KEY
            const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/GBP/GHS`
                try {
                    const response = await fetch(url);
                    var currency = await response.json();
                } catch (error) {
                    console.error
                }
            await sendMail({
                to: email || undefined,
                name: name ?? "sir/madam",
                subject: "PAYMENT SUCCESSFUL",
                body: `
                <p>Dear ${name},<p>
                <p>Thank you for touring with us, your payment of  £${totalAmt} which is GHS ${Number(totalAmt) * currency.conversion_rate} is successful.</br> further details will be contacted to you via email<p>
                `
            })
            await sendMail({
                to: "jifsonjoytravels@gmail.com",
                name: "CEO",
                subject: "PAYMENT SUCCESSFUL",
                body: `
                <p>Dear CEO ,<p>
                <p>${name} has paid £${totalAmt} for ${packageType}. his/her email is ${email} <p>
                `
            })
            console.log(userId, totalAmt, duration, email, numofpersons, packageType)
             await Tours.create({
                userId: userId,
                totalamt: totalAmt,
                duration: duration,
                email: email,
                numofpersons: numofpersons,
                packagetype: packageType
            }).then(() => {
                redirect("/mytours")
            });
        }

}

export const getTours = async (userId: string) => {
    await connectToDB();
    const tours = await Tours.find({ userId }).lean();
    const data = JSON.parse(JSON.stringify(tours))
    return data

}
