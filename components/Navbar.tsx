"use client"

import { useState } from "react";
import { Github,  } from "lucide-react"; // Importing GitHub and Discord icons
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed w-full z-10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-4xl text-bgcolor dark:text-darkfont text-white font-thin">Intent</span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link href="/docs" className="text-white hover:text-[#98D422] px-3 font-semibold cursor-pointer text-xl text-bgcolor dark:text-darkfont dark:hover:text-main">
              Docs
            </Link>
            <Link href="/blog" className="text-white hover:text-[#98D422] px-3 font-semibold cursor-pointer text-xl text-bgcolor dark:text-darkfont dark:hover:text-main">
              Blog
            </Link>
            <Link href="/support" className="text-white hover:text-[#98D422] px-3 font-semibold cursor-pointer text-xl text-bgcolor dark:text-darkfont dark:hover:text-main">
              Support
            </Link>
            {/* GitHub and Discord Icons */}
          </div>
            <div className="flex space-x-4 items-center">
              <Link href="https://github.com" className="text-white hover:text-[#98D422]">
                <Github size={24} />
              </Link>
              <Link href="https://discord.com" className="text-white hover:text-gray-300">
                {/* <Discord size={24} /> */}
              </Link>
            </div>

          {/* Hamburger Menu */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="space-y-1">
                <span
                  className={`block w-6 h-0.5 bg-white transform transition duration-300 ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-white transition duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-white transform transition duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden ">
          <div className="space-y-4 px-4 py-4">
            <Link href="/docs" className="text-white block hover:text-[#98D422] text-xl">
              Docs
            </Link>
            <Link href="/blog" className="text-white block hover:text-[#98D422] text-xl">
              Blog
            </Link>
            <Link href="/support" className="text-white block hover:text-[#98D422] text-xl">
              Support
            </Link>
            <div className="flex space-x-4 items-center mt-4">
              <Link href="https://github.com" className="text-white hover:text-gray-300">
                <Github size={24} />
              </Link>
              <Link href="https://discord.com" className="text-white hover:text-gray-300">
                {/* <Discord size={24} /> */}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
