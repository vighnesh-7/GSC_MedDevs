import { NextRequest,NextResponse } from "next/server";
import { getAllUserSchedules } from "../../../actions/user";

export const POST = async (req: NextRequest) => {

    try{        
        const { userId } = await req.json();


        const appointments = await getAllUserSchedules(userId);

        

        return NextResponse.json({ message: "Success", payload: appointments });
    }
    catch(error){
        return NextResponse.json({ message: "Error" });
    }
}