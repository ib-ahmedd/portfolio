import { createTransport } from "nodemailer";

const transporter = createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "ahmed1768476@gmail.com",
    pass: process.env.GOOGLE_PASS,
  },
});

export async function POST(request: Request, response: Response) {
  const { name, email, phone, subject, message } = await request.json();
  try {
    const mailOptions = {
      from: "ahmed1768476@gmail.com",
      to: "ahmedibrahim28199@gmail.com",
      subject: subject,
      html: `<h1>Sender name: ${name}</h1><h2>Sender email: ${email}</h2> <h3>Sender Phone: ${phone}</h3><p>Message: ${message}</p>`,
    };
    await transporter.sendMail(mailOptions);
    return new Response("Message sent", { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Message failed", { status: 500 });
  }
}
