import { NextRequest, NextResponse } from "next/server";
import { createFaq } from "../../../actions/faqs";

export async function POST(req: NextRequest) {
  try {
    const { q, a, username, userId, userRole } = await req.json();

    const faq = await createFaq(userId, username, userRole, q, a);

    return NextResponse.json({ message: "Success", payload: faq });
  } catch (error) {
    return NextResponse.json({ message: "Error" });
  }
}
