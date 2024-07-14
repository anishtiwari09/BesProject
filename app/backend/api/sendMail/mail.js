import nodemailer from "nodemailer";
import {
  EMAIL_SERVICE,
  SENDER_EMAIL,
  SENDER_EMAIL_PASSWORD,
  SMTP_HOST,
  SMTP_PORT,
} from "../../constant";
const transporter = nodemailer.createTransport({
  service: EMAIL_SERVICE,
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: true,
  auth: {
    user: SENDER_EMAIL,
    pass: SENDER_EMAIL_PASSWORD,
  },
});
export function sendMail({ email, subject, text = "", html = "" }) {
  console.log({ SENDER_EMAIL, SENDER_EMAIL_PASSWORD });
  return transporter.sendMail({
    from: `"besadmin 👻"<${SENDER_EMAIL}>`, // sender address
    to: email, // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
    html: html, // html body
  });
}
