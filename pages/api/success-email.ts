import type { NextApiRequest, NextApiResponse } from "next";

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ error: "Method not allowed, only POST is allowed." });
  }
  const msg = {
    to: "info@returnpal.ca", // Change to your recipient
    from: "geoffrey31415@gmail.com", // Change to your verified sender
    subject: "Payment Success Overview",
    text: `and easy to do anywhere, even with Node.js `,
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  sgMail.send(msg).then(() => {
    console.log("Email sent");
  });

  res.status(200).json({ name: "John Doe" });
}
