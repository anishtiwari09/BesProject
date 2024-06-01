import VisitorRegistration from "@/app/backend/models/visitor_registration.model";
import { NextResponse } from "next/server";

const { connect } = require("@/app/backend/dbConfig/dbConfig");

connect();
export async function POST(req) {
  try {
    let json = await req.json();
    const { name, organisation, city, mobile, email, area_of_work } = json;
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
    let newUser = new VisitorRegistration({
      name,
      organisation,
      city,
      mobile,
      email,
      area_of_work,
    });
    await newUser.save();
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
