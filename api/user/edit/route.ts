import { NextRequest,NextResponse } from "next/server";

export async function POST (req: NextRequest) {
    try{
        const { id } = await req.json();
        
        // const user = await updateSuperCoins(id);
        
        // return NextResponse.json({ message: "Success", payload: user });
    }
    catch(error){
        return NextResponse.json({ message: "Error" });
    }
}