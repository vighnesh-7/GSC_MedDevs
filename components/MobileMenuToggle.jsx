"use client";

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import MainNav from "./main-navbar";

const MobileMenuToggle = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="md:hidden relative ms-5">
      <button className="text-white z-50 " onClick={toggleMenu}>
        <FaBars size={24} />
      </button>
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-40  "
            onClick={toggleMenu}
          ></div>
          <div className="absolute top-16 -right-28 flex flex-col items-start p-2 z-50  ">
            <MainNav />
          </div>
        </>
      )}
    </div>
  );
};

export default MobileMenuToggle;
