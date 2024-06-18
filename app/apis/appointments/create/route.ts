import { NextRequest, NextResponse } from "next/server";
import { createAppointment } from "../../../actions/appointment";

export async function POST(req: NextRequest) {
  try {
    const {
      userId,
      username,
      category,
      diagnosis,
      date,
      priority,
      notes,
      status,
    } = await req.json();

    const appointment = await createAppointment({
      userId,
      diagnosis,
      category,
      date,
      priority,
      notes,
      status,
    });

    return NextResponse.json({ message: "Success", payload: appointment });
  } catch (error) {
    return NextResponse.json({ message: "Error" });
  }
}
