import { UserButton } from "@clerk/nextjs";
import MainNav from "./main-navbar";
import Image from "next/image";
import Link from "next/link";
import RazorpayComponent from "./Transaction";
import { getUser } from "../app/actions/user";
import { MdAdminPanelSettings } from "react-icons/md";

const Navbar = async () => {
  const dbuser = await getUser("vighnesh");

  return (
    <nav
      className=" border-b border-gray-300"
      style={{ backgroundColor: "#1f7270" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/assets/icons/logo.jpeg"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-xl"
              />
            </Link>
            <MainNav />
          </div>
          <div className="">
            <div className="ml-4 flex items-center md:ml-6 gap-5">
              {dbuser?.role === "ADMIN" && (
                <a
                  href="http://localhost:5555/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-medium mr-4 flex-center me-4 hover:bg-gray-900"
                >
                  Admin
                  <MdAdminPanelSettings className=" w-5 h-5 ms-2" />
                </a>
              )}
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
