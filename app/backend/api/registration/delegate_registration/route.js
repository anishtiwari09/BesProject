import { connect } from "@/app/backend/dbConfig/dbConfig";
import DelegateUser from "@/app/backend/models/delegate_registration.model";
import { NextRequest, NextResponse } from "next/server";
connect();
export async function POST(req) {
  try {
    let json = await req.json();
    const {
      name,
      organisation,
      city,
      mobile,
      email,
      query,
      category,
      payment_type,
      bank_name,
      transaction_no,
      amount,
      other_details,
    } = json;
    let user = await DelegateUser.findOne({
      $or: [{ email: email, mobile: mobile }],
    });
    if (user) {
      return NextResponse.json(
        {
          message: "Email or mobile is already register with us",
          status: false,
        },
        { status: 409 }
      );
      console.log(user);
    } else {
      console.log({ name });
      let newUser = new DelegateUser({
        name,
        organisation,
        city,
        mobile,
        email,
        query,
        category,
        payment_type,
        bank_name,
        transaction_no,
        amount,
        other_details,
      });
      await newUser.save();
      return NextResponse.json(
        { message: "User is created", status: true },
        { status: 201 }
      );
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "something went wrong", status: false },
      { status: 500 }
    );
  }
}
