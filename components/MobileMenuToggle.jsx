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
    <div className="md:hidden relative">
      <button className="text-white" onClick={toggleMenu}>
        <FaBars size={24} />
      </button>
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={toggleMenu}
          ></div>
          <div className="absolute top-16 left-0 right-0 bg-teal-800 flex flex-col items-start p-4 z-50">
            <MainNav />
          </div>
        </>
      )}
    </div>
  );
};

export default MobileMenuToggle;
