import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "ryanboya09@gmail.com",
    pass: "aifodsixgigahsgc",
  },
});
export async function GET() {
  try {
    const info = await transporter.sendMail({
      from: '"Maddison Foo Koch 👻"<info@begalileo.com>', // sender address
      to: "ryanboya09@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello new wrold?</b>", // html body
    });
    console.log({ info });
  } catch (e) {
    console.log(e);
  }
  console.log("what happend");
  return NextResponse.json({ status: true, message: "send" }, { status: 200 });
}
