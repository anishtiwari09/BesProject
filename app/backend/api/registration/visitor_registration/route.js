import { visitorUserDetailsTemplate } from "@/app/backend/helper/mailHelper/template/visitorTemplate";
import emailVerification from "@/app/backend/models/email_verification.model";
import VisitorRegistration from "@/app/backend/models/visitor_registration.model";
import { NextResponse } from "next/server";
import { sendMail } from "../../sendMail/mail";
import { ADMIN_RECEIVER_MAIL } from "@/app/backend/constant";

const { connect } = require("@/app/backend/dbConfig/dbConfig");

connect();
export async function POST(req) {
  try {
    let json = await req.json();
    const { name, organisation, city, mobile, email, area_of_work, otp } = json;
    let user = await VisitorRegistration.findOne({
      $or: [{ email: email }, { mobile: mobile }],
    });
    if (user) {
      return NextResponse.json(
        {
          message: "Email or mobile is already register with us",
          status: false,
        },
        { status: 409 }
      );
    }
    let emailResult = await emailVerification.findOne({ email, otpCode: otp });
    if (
      !emailResult ||
      !emailResult?.isVerified ||
      emailResult?.hasOtpExpired
    ) {
      return NextResponse.json(
        {
          message: "Otp has been expired please try again after sometime",
          status: false,
        },
        { status: 401 }
      );
    }
    await emailVerification.findOneAndUpdate(
      { email },
      { hasOtpExpired: true }
    );
    let newUser = new VisitorRegistration({
      name,
      organisation,
      city,
      mobile,
      email,
      area_of_work,
    });
    await newUser.save();
    let visitorTemplate = visitorUserDetailsTemplate({
      Name: name,
      organisation: organisation,
      City: city,
      Mobile: mobile,
      Email: email,
      "Area Of Work": area_of_work,
    });
    await sendMail({
      email: ADMIN_RECEIVER_MAIL,
      subject: `New User (Visitor) Registered`,
      html: visitorTemplate,
    });
    return NextResponse.json(
      { message: "User is created", status: true },
      { status: 201 }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "something went wrong", status: false },
      { status: 500 }
    );
  }
}
