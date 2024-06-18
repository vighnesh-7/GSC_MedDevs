import { NextRequest, NextResponse } from "next/server";
import { createUser } from "../../../actions/user";

export async function POST(req: NextRequest) {
  try {
    const userReq = await req.json();

    const user = await createUser(userReq.myuser);

    return NextResponse.json({ message: "Success", payload: user });
  } catch (error) {
    return NextResponse.json({ message: "Error" });
  }
}
