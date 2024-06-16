import { createTransport } from "nodemailer";
import "dotenv/config";
import { Dispatch, SetStateAction } from "react";

const transporter = createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "ahmed1768476@gmail.com",
    pass: process.env.GOOGLE_PASS,
  },
});

const sendMail = async (
  messageSent: boolean,
  subject: string,
  message: string
) => {
  try {
    const mailOptions = {
      from: "ahmed1768476@gmail.com",
      to: "ahmedibrahim28199@gmail.com",
      subject: subject,
      text: message,
    };
    transporter.sendMail(mailOptions, (error: any, info: any) => {
      if (error) {
        console.log(error);
        messageSent = false;
      } else {
        console.log("Message sent: %s", info.messageId);
        messageSent = true;
      }
    });
  } catch (err) {
    console.log(err);
  }
};
export default sendMail;
