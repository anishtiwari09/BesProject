import emailVerification from "@/app/backend/models/email_verification.model";
import { NextResponse } from "next/server";

const { connect } = require("@/app/backend/dbConfig/dbConfig");

connect();
export async function POST(req) {
  try {
    let json = await req.json();
    const { email } = json;
    const options = {
      new: true, // Return the updated document
      upsert: true, // Create the document if it doesn't exist
      setDefaultsOnInsert: true, // Apply schema defaults on insert
    };
    let data = await emailVerification.findOneAndUpdate(
      { email },
      { email, otpCode: 1234, timeStamp: Date.now(), isVerified: false },
      options
    );
    return NextResponse.json(
      {
        message: "Otp is generated successfully",
        status: true,
        otp: 1234,
      },
      { status: 201 }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "It's not you it's we , something went wrong", status: false },
      { status: 500 }
    );
  }
}
