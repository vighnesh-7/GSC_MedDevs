import { NextRequest, NextResponse } from "next/server";
import { updateAppointment } from "../../../actions/appointment";

export const POST = async (req: NextRequest) => {
  try {
    const { id, userId, category, diagnosis, date, priority, notes, status } =
      await req.json();

    const appointment = await updateAppointment({
      id,
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
};
