import nodemailer from "nodemailer";

export async function sendMail({to, name, subject, body}:{
    to:string | undefined; 
    name: string; 
    subject:string; 
    body:string
})
{
    const { SMTP_EMAIL, SMTP_PASSWORD} = process.env;
    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: SMTP_EMAIL,
            pass: SMTP_PASSWORD
        }

    });
    try {
        const testResult = await transport.verify();
    } catch (error) {
        console.error(error);
    }
    
    try {
        const sendResult = await transport.sendMail({
            from: SMTP_EMAIL,
            to,
            subject,
            html:body
        })
    } catch (error) {
        console.error(error);
    }
}