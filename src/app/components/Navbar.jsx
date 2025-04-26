"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("/");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navbarItems = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/services",
      name: "Services",
    },
    {
      href: "/terms",
      name: "Terms",
    },
    {
      href: "/blog",
      name: "Blog",
    },
    {
      href: "/contact",
      name: "Contact",
    },
    {
      href: "/signup",
      name: "Signup",
    },
    {
      href: "/login",
      name: "Login",
    },

  ];

  return (
    <div className="bg-[#143561] h-[70px] flex justify-center items-center w-full shadow-md z-50">
      <div className="flex justify-between items-center w-full max-w-[1170px] mx-auto py-3 px-4 xl:px-0">
        <Link href="/" className="flex-shrink-0">
          <h1 className="text-white font-semibold text-[25px]">SMM Panel</h1>
        </Link>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white font-semibold focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden lg:flex space-x-6 items-center">
          {navbarItems.map((item) => (
            <Link
              href={item.href}
              key={item.name}
              className={`text-white text-[16px] px-[20px] font-semibold transition duration-300 ease-in-out hover:text-textcolor  ${activePage === item.href ? "" : ""}`}
              onClick={() => setActivePage(item.href)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Navbar */}
      {isOpen && (
        <div className="lg:hidden bg-background px-4 py-4 rounded-lg shadow-lg absolute top-[60px] left-0 right-0 z-[100000] bg-[#051a85]">
          <nav className="space-y-4">
            {navbarItems.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                className="block text-white text-[16px] font-semibold transition duration-300 ease-in-out hover:text-textcolor"
                onClick={() => {
                  setActivePage(item.href);
                  closeMenu();
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
