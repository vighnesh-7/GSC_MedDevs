import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from ".././components/navbar";
import Footer from ".././components/footer";
import { ToasterProvider } from ".././components/toast-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MedDevs",
  description: "Health Portal",
  icons: {
      icon: "/assets/icons/logo.jpeg",
  },

};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider> 
      <html lang="en">
        <body className={inter.className}>
          <Navbar/>
          <ToasterProvider/>
          {children}
          <Footer/>
        </body>
      </html>
    </ClerkProvider>
  );
}
