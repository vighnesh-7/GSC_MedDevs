import { NextRequest,NextResponse } from "next/server";
import { deleteAppointment } from "../../../actions/appointment";

export async function POST (req: NextRequest) {
    try{
        const { id ,userId} = await req.json();
        
        const appointments = await deleteAppointment(id,userId);

        
        
        return NextResponse.json({ message: "Success", payload: appointments });
    }
    catch(error){
        return NextResponse.json({ message: "Error" });
    }
}