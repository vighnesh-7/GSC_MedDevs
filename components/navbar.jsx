import { UserButton } from "@clerk/nextjs";
import MainNav from "./main-navbar";
import Image from 'next/image';
import Link from 'next/link';
import RazorpayComponent from "./Transaction";


const Navbar = () => {
    
    return ( 
    <div className="border-b border-gray-300 " style={{backgroundColor:'#2e6b69'}} >
        <div className="flex items-center h-[68px] px-4">
            <div  className="flex items-center ">
                <Link href={"/"} >
                    <Image src={"/assets/icons/logo.jpeg"} width={"40"} height={"40"} className=' rounded-xl' />
                </Link>
            </div>
            <MainNav />
            <div>
                {/* <RazorpayComponent/> */}
            </div>
            <div className="flex items-center space-x-5 ml-auto ">
                <UserButton afterSignOutUrl="/"/>
            </div>
        </div>
    </div>
        
    );
}

export default Navbar;