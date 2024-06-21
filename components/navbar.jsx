import { UserButton } from "@clerk/nextjs";
import MainNav from "./main-navbar";
import Image from "next/image";
import Link from "next/link";
import AdminPanel from "./AdminPanel";
import MobileMenuToggle from "./MobileMenuToggle"; 

const Navbar = async () => {

  return (
    <nav
      className="border-b border-gray-300"
      style={{ backgroundColor: "#1f7270" }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
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
            <div className="hidden md:block">
              <MainNav />
            </div>
          </div>
          <div className="flex items-center">
            <MobileMenuToggle /> 
            <div className="ml-4 flex items-center md:ml-6 gap-5">
              <AdminPanel  />
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
