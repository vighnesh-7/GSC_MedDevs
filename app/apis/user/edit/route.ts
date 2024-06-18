import { NextRequest,NextResponse } from "next/server";
import { updateUser } from "../../../actions/user";

export async function POST (req: NextRequest) {
    try{
        const { user } = await req.json();
        
        const updatedUser = await updateUser(user);

        return NextResponse.json({ message: "Success", payload: updatedUser });
    }
    catch(error){
        return NextResponse.json({ message: "Error" });
    }
}