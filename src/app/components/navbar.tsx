"use client";

import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-[#F3F4F6] text-gray-600 shadow-md  z-50">
      {/* Navbar container */}
      <div className="container mx-auto flex items-center justify-between p-5">
        {/* Logo */}
        <Link href="/" className="flex items-center text-gray-900">
          <h2 className="text-3xl font-bold text-blue-500">Ali Haider</h2>
        </Link>

        {/* Menu button for mobile screens */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-black"
          aria-label="Toggle menu"
        >
          <FaBars size={24} />
        </button>

        {/* Desktop menu */}
        <nav className="hidden md:flex md:flex-grow justify-end gap-6 text-xl font-semibold">
          <Link href="/" className="hover:bg-blue-500 hover:scale-105 hover:rounded-lg hover:text-white px-4 py-2 transition-all duration-300">
            Home
          </Link>
          <Link href="/about" className="hover:bg-blue-500 hover:scale-105 hover:rounded-lg hover:text-white px-4 py-2 transition-all duration-300">
            About
          </Link>
          <Link href="/projects" className="hover:bg-blue-500 hover:scale-105 hover:rounded-lg hover:text-white px-4 py-2 transition-all duration-300">
            Projects
          </Link>
          <Link href="/contact" className="hover:bg-blue-500 hover:scale-105 hover:rounded-lg hover:text-white px-4 py-2 transition-all duration-300">
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="flex flex-col items-center align-center gap-4 font-semibold text-lg md:hidden bg-[#F3F4F6] w-full py-4 shadow-md">
          <Link href="/" className="block w-full py-2 text-gray-700 hover:bg-blue-600 hover:text-white rounded-md transition duration-300" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/about" className="block w-full py-2 text-gray-700 hover:bg-blue-600 hover:text-white rounded-md transition duration-300" onClick={toggleMenu}>
            About
          </Link>
          <Link href="/projects" className="block w-full py-2 text-gray-700 hover:bg-blue-600 hover:text-white rounded-md transition duration-300" onClick={toggleMenu}>
            Projects
          </Link>
          <Link href="/contact" className="block w-full py-2 text-gray-700 hover:bg-blue-600 hover:text-white rounded-md transition duration-300" onClick={toggleMenu}>
            Contact
          </Link>
      </nav>
      )}
    </header>
  );
}
