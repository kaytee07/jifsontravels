import { connectToDB } from "@/lib/database/database";
import crypto from 'crypto';
import Tours from "@/models/tours";
import { sendMail } from "@/lib/mail";

export async function POST(req: Request) {
    const body = await req.text();

    const secret: string | undefined = process.env.PAYSTACK_SECRET_KEY;

    try{
        await connectToDB()
        let hash;
        if (secret){
            hash = crypto
            .createHmac('sha512', secret)
            .update(body, 'utf-8')
            .digest('hex');
        }
        
        
        if (hash === req.headers.get('x-paystack-signature')){
            const jsonData = JSON.parse(body);
            console.log(jsonData.data.metadata)
            const event = jsonData.event;
            if (event === 'charge.success'){
                const Tour = new Tours({
                    userId: jsonData.data.metadata.userId,
                    totalamt: jsonData.data.metadata.totalAmt,
                    duration: jsonData.data.metadata.duration,
                    date: jsonData.data.metadata.date,
                    email: jsonData.data.metadata.email,
                    numofpersons: jsonData.data.metadata.numofpersons,
                    packagetype: jsonData.data.metadata.packageType
                });
                console.log()

                await sendMail({
                                to: jsonData.data.metadata.email || undefined,
                                name: jsonData.data.metadata.name ?? "sir/madam",
                                subject: "PAYMENT SUCCESSFUL*",
                                body: `
                                <p>Dear ${jsonData.data.metadata.name},<p>
                                <p>Thank you for touring with us, your payment of  GHS${jsonData.data.metadata.totalAmt} for ${jsonData.data.metadata.packageType} is successful. Your tour starts on ${jsonData.data.metadata.date} and it's a ${jsonData.data.metadata.duration}</br> further details will be contacted to you via email<p>
                                `
                            })
                            await sendMail({
                                to: "jifsonjoytravels@gmail.com",
                                name: "CEO",
                                subject: "PAYMENT SUCCESSFUL",
                                body: `
                                <p>Dear CEO ,<p>
                                <p>${jsonData.data.metadata.name} has paid GHS${jsonData.data.metadata.totalAmt} for ${jsonData.data.metadata.packageType}. his/her email is ${jsonData.data.metadata.email} <p> tour starts on ${jsonData.data.metadata.date}
                                `
                            })
                

                await Tour.save();
                console.log("success")
                return new Response('Success', { status: 200 });
            } else {
                console.log('Received Paystack event:', event);
                return new Response('Event not handled', { status: 200 });
            }
        } else {
                console.log('Invalid Paystack signature');
                return new Response('Invalid signature', { status: 400 });
    }
    } catch (error){
        console.error('Error processing Paystack webhook:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}