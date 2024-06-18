import { NextRequest,NextResponse } from "next/server";
import { getUser } from "../../../actions/user";

export async function POST (req: NextRequest) {
    
    try{
        
        const {username} = await req.json();
        
        const user = await getUser(username);
        
        
        return NextResponse.json({ message: "Success", payload: user });
    }
    catch(error){
        return NextResponse.json({ message: "Error" });
    }
}