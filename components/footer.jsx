"use client";

import Image from "next/image";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoMailUnreadSharp } from "react-icons/io5";
import { HiMiniHandRaised } from "react-icons/hi2";
import { AiFillGithub } from "react-icons/ai";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="relative mb-3 bg-emerald-800 w-full bottom-0 left-0 before:absolute before:top-0 before:left-0">
      <div
        className="content "
        style={{
          margin: "auto",
          padding: "10px 40px 40px 40px",
        }}
      >
        <div className="top flex-between mb-[25px]">
          <div
            className="logo-details flex-between text-slate-50 "
            onClick={() => router.push("/")}
          >
            <Image
              alt="logo"
              src={"/assets/icons/logo.jpeg"}
              width="50"
              height={"50"}
              className="mr-2 rounded-full"
            />
            <span
              className="text-3xl font-semibold "
              style={{ fontWeight: "600" }}
            >
              MedDevs
            </span>
          </div>
          <div className="media-icons sm:flex items-center hidden">
            <a
              style={{
                width: "40px",
                height: "40px",
                fontSize: "25px",
                textDecoration: "none",
                transition: "all 0.4s ease",
              }}
              className="bg-blue-600 p-2 mr-5 rounded-3xl text-white text-center hover:bg-white  hover:text-blue-600"
              href="/"
            >
              <FaFacebookF />
            </a>
            <a
              style={{
                width: "40px",
                height: "40px",
                fontSize: "25px",
                textDecoration: "none",
                transition: "all 0.4s ease",
              }}
              className=" bg-pink-600 p-2 mr-5 rounded-3xl text-white text-center hover:bg-white hover:text-pink-600  "
              href="/"
            >
              <FaInstagram />
            </a>
            <a
              style={{
                width: "40px",
                height: "40px",
                fontSize: "25px",
                textDecoration: "none",
                transition: "all 0.4s ease",
              }}
              className=" bg-blue-500 p-2 mr-5 rounded-3xl text-white text-center hover:bg-white hover:text-blue-600"
              href="/"
            >
              <FaLinkedinIn />
            </a>
            <a
              style={{
                width: "40px",
                height: "40px",
                margin: "0 8px",
                fontSize: "25px",
                textDecoration: "none",
                transition: "all 0.4s ease",
              }}
              className=" bg-black p-2 mr-5 rounded-3xl text-white text-center hover:bg-white  hover:text-black "
              href="/"
            >
              <FaXTwitter />
            </a>
            <a
              style={{
                width: "40px",
                height: "40px",
                margin: "0 8px",
                fontSize: "25px",
                textDecoration: "none",
                transition: "all 0.4s ease",
              }}
              className=" bg-red-600 p-2 mr-5 rounded-3xl text-white text-center hover:bg-white hover:text-red-600 "
              href="/"
            >
              <FaYoutube />
            </a>
            <a
              style={{
                margin: "0 8px",
                fontSize: "25px",
                textDecoration: "none",
                transition: "all 0.4s ease",
              }}
              className="  mr-5  "
              target="_blank"
              href="https://github.com/vighnesh-7/FP-vnrvjiet"
            >
              <AiFillGithub className=" w-10 h-10 hover:bg-white bg-black rounded-full text-white text-center hover:text-black transition ease-in-out duration-300 delay-20" />
            </a>
          </div>
        </div>
        <hr className="w-full absolute left-0" />
        <div className="link-boxes pt-4  w-full flex justify-between ">
          <ul
            className="box "
            style={{
              width: " calc(100% / 5 - 10px)",
              transition: "background 10.4s ease-out",
            }}
          >
            <li className="mb-2 flex">
              <a
                className="text-base hover:underline hover:underline-offset-4 text-gray-300 font-medium"
                style={{ transition: "all 0.5s ease" }}
                href="/"
              >
                <div className="flex mb-3">
                  <FaLocationDot className="w-6 h-6" />
                  &nbsp;Location
                </div>
              </a>
            </li>
            <li className="mb-2">
              <a
                className="text-base hover:underline hover:underline-offset-4 text-gray-300 font-medium"
                style={{ transition: "all 0.5s ease" }}
                href="/"
              >
                <div className="flex mb-3">
                  <PiPhoneCallFill className="w-6 h-6" />
                  &nbsp;9561XXXXXXX
                </div>
              </a>
            </li>
            <li className="mb-2">
              <a
                className="text-base hover:underline hover:underline-offset-4 text-gray-300 font-medium"
                style={{ transition: "all 0.5s ease" }}
                href="/"
              >
                <div className="flex mb-3">
                  <IoMailUnreadSharp className="w-6 h-6" />
                  &nbsp;Mail@gmail.com
                </div>
              </a>
            </li>
            <li className="mb-2">
              <a
                className="text-base hover:underline hover:underline-offset-4 text-gray-300 font-medium"
                style={{ transition: "all 0.5s ease" }}
                href="/"
              >
                <div className="flex mb-3">
                  <HiMiniHandRaised className="w-6 h-6" />
                  &nbsp;Enquiry!
                </div>
              </a>
            </li>
          </ul>
          <ul className="box" style={{ width: " calc(100% / 5 - 10px)" }}>
            <div className="luminance">
              <li className="link_name relative text-slate-50 font-semibold mb-1  text-lg">
                Service
              </li>
            </div>
            <li>
              <a
                href="/"
                className="text-base hover:underline hover:underline-offset-4 text-gray-300 font-medium"
                style={{ transition: "all 0.5s ease" }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-base hover:underline hover:underline-offset-4 text-gray-300 font-medium"
                style={{ transition: "all 0.5s ease" }}
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="/aboutUs"
                className="text-base hover:underline hover:underline-offset-4 text-gray-300 font-medium"
                style={{ transition: "all 0.5s ease" }}
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-base hover:underline hover:underline-offset-4 text-gray-300 font-medium"
                style={{ transition: "all 0.5s ease" }}
              >
                Get started
              </a>
            </li>
          </ul>

          <ul
            className="box mr-8 input-box text-black"
            style={{ width: " calc(100% / 5 - 10px)" }}
          >
            <div className="luminance">
              <li className="link_name relative text-slate-50 font-semibold mb-1  text-lg sm:flex-col m">
                Reach out!
              </li>
            </div>
            <li>
              <input
                type="text "
                className="bg-stone-300 py-1 md:px-4 w-[139px] md:w-52 h-[38px]  px-2 rounded-md"
                placeholder="Enter your email..."
              />
            </li>
            <li>
              <input
                className="bg-gray-200 pb-1 text-blue-900 font-bold border-none text-xl cursor-pointer mx-0 my-3 opacity-50 hover: hover:opacity-100 rounded-lg py-1 md:px-4 w-[139px] md:w-52 h-[38px] "
                style={{ transition: "all 0.4s ease" }}
                type="button"
                value="Post"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-details w-full py-2 px-4 bg-zinc-600">
        <div className="bottom_text m-auto flex-between">
          <span className="copyright_text opacity-80 text-slate-50 hover:opacity-100 ">
            Copyright © 2024 by MedDevs
            <a
              className="opacity-90 text-slate-50  hover:underline px-4 hover:opacity-100"
              href="/"
            >
              MedDevs
            </a>
            All rights reserved
          </span>
          <span className=" opacity-80 text-slate-50 hover:opacity-100 ">
            <a
              className="opacity-80 text-slate-50  hover:underline px-4 hover:opacity-100"
              href="/"
            >
              Privacy policy
            </a>
            <a
              className="opacity-80 text-slate-50  hover:underline px-4 hover:opacity-100"
              href="/"
            >
              Terms & condition
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
