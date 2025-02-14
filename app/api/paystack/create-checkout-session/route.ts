import axios from 'axios';


interface ItemObject  {
    key: string;
    img: string;
    id: number;
    name: string;
    price: number;
    originalPrice: number;
    color: string;
    size: string;
    quantity: number;
    country: CountryOption | null;
}

type CountryOption = {
    value: string;
    label: string;
};


export async function POST(req: Request) {
    const secret = process.env.PAYSTACK_SECRET_KEY

    const apiKey = process.env.CURRCONVERTER_API_KEY
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/GBP/GHS`
    try {
        const response = await fetch(url);
        var currency = await response.json();
    } catch (error) {
        console.error
    }

    try {
        const {
            numofpersons,
            totalAmt,
            duration,
            packageType,
            userId,
            email,
            date,
            name
        } = await req.json();
         let total = Math.floor(currency.conversion_rate * (totalAmt * 100))
         console.log(total)
         const formattedProducts = {
                numofpersons,
                totalAmt:(total/100),
                duration,
                packageType,
                userId,
                email,
                date,
                name
            }
           
            
            const response = await axios.post(
                'https://api.paystack.co/transaction/initialize',
                {
                     email: email,
                     callback_url: "https://www.jifsonjoytravelsgh.com/",
                     amount: total,
                     metadata: formattedProducts
                }, 
                {
                    headers: {
                        Authorization: `Bearer ${secret}`
                    }
                }
               
            )
        
       
            console.log("ther")
            const authorizationUrl = response.data.data.authorization_url;
            

            return new Response(JSON.stringify({ authorizationUrl }), { status: 200 });
            
    } catch (error){
    //   console.error('Error creating Paystack checkout session:', error);
    console.log(error)
        return new Response(
      JSON.stringify({ error: 'Internal Server Error' }),
      { status: 500 }
    );
    }
} 