import { NextApiRequest, NextApiResponse } from "next";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // console.log("TREAHCUEJNDKMWANJFKWAMLFW");

    if (req.method !== "POST") {
      return res
        .status(405)
        .json({ error: "Method not allowed, only POST is allowed." });
    }
    // extract body data
    const data = req.body;
    const formData = data.formData;
    const date = data.date;
    const selectedPlan = data.selectedPlan;
    console.log("dat is", data);
    console.log("Form data is", formData);
    console.log("date is", date);
    console.log("Selected Plan is", selectedPlan);
    const {
      name,
      phoneNumber,
      address,
      apt,
      city,
      zip,
      additionalInfo,
      labelType,
      pickupType,
      returnLabelFile,
      description,
      fileURI,
    } = formData;

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: "price_1Nh0PfJEBiWaJrRUhpVX6hZW",
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `http://localhost:3000/success?name=${name}&phoneNumber=${phoneNumber}&address=${address}&apt=${apt}&city=${city}&zip=${zip}&additionalInfo=${additionalInfo}&labelType=${labelType}&pickupType=${pickupType}&returnLabelFile=${returnLabelFile}&description=${description}&labelType=${labelType}&date=${date}&selectedPlan=${selectedPlan}&fileURI=${fileURI}`,
      cancel_url: `http://return-pal.vercel.app/`,
    });
    res.status(200).json({ UrlToRedirect: session.url });
    // res.redirect(303, session.url);
    // return res.re
  } catch (err: any) {
    console.log(err);
    res.status(err.statusCode || 500).json(err.message);
  }
}
// catch (e: any) {
//     return res.status(500).json({ error: JSON.stringify(e.message) });
//     }

//   if (req.method === 'POST') {
//     try {
//       // Create Checkout Sessions from body params.
//       const session = await stripe.checkout.sessions.create({
//         line_items: [
//           {
//             // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//             price: '{{PRICE_ID}}',
//             quantity: 1,
//           },
//         ],
//         mode: 'payment',
//         success_url: `${req.headers.origin}/?success=true`,
//         cancel_url: `${req.headers.origin}/?canceled=true`,
//       });
//       res.redirect(303, session.url);
//     } catch (err) {
//       res.status(err.statusCode || 500).json(err.message);
//     }
//   } else {
//     res.setHeader('Allow', 'POST');
//     res.status(405).end('Method Not Allowed');
//   }
// }
