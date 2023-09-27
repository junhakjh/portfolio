import { EmailData } from '@/model/contact';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});

export async function sendEmail({ from, title, message }: EmailData) {
  const mailData = {
    to: process.env.AUTH_USER,
    subject: `[PORTFOLIO] ${title}`,
    from,
    html: `
        <h1>${title}</h1>
        <div>${message.replace(/\n/g, '<br />')}</div>
        <br/>
        <p>보낸사람: ${from}</p>
        `,
  };

  return transporter.sendMail(mailData);
}
