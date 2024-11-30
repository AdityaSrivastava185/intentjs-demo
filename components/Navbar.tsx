"use client"

import { useState, useEffect } from "react";
import { Github } from "lucide-react"; // Importing GitHub icon
import Link from "next/link";
import axios from "axios";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [starCount, setStarCount] = useState<number | null>(null);
  useEffect(() => {
    const fetchGitHubStars = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/repos/intentjs/intent'
        );
        setStarCount(response.data.stargazers_count);
      } catch (error) {
        console.error("Error fetching GitHub stars:", error);
      }
    };

    fetchGitHubStars();
  }, []);

  return (
    <nav className="fixed w-full z-10 shadow-md bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-4xl text-bgcolor dark:text-darkfont text-white font-thin">Intent</span>
            </Link>
          </div>
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
          </div>
          
          <div className="flex space-x-4 items-center">
            <Link href="https://github.com/intentjs/intent" className="text-white hover:text-[#98D422] flex items-center space-x-2">
              <Github size={24} />
              {starCount !== null && (
                <span className="text-xl font-bold text-white">{starCount}</span>
              )}
            </Link>

            <Link href="https://discord.com" className="text-white hover:text-gray-300">
              <div className="bg-white inline-flex rounded-full p-1 hover:bg-[#98D422] hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 48 48"
                >
                  <path d="M40.288,10.202c-0.163-0.216-0.381-0.384-0.632-0.486L38.94,9.424c-2.728-1.113-4.698-1.917-7.042-2.356 c-1.409-0.264-2.929,0.539-3.707,1.953c-1.283-0.119-2.64-0.159-4.149-0.12c-1.567-0.037-2.936,0-4.221,0.12 c-0.766-1.391-2.281-2.174-3.692-1.912c-2.525,0.472-4.604,1.318-7.773,2.606c-0.251,0.102-0.469,0.27-0.632,0.486 C2.401,17.256,0.28,24.912,1.24,33.605c0.052,0.465,0.317,0.879,0.718,1.121c3.552,2.137,6.629,3.603,9.685,4.612 c1.474,0.487,3.111-0.068,3.987-1.347l1.366-1.999c2.246,0.567,4.587,0.876,7.011,0.922c2.363-0.045,4.694-0.356,6.942-0.926 l1.44,2.047c0.671,0.955,1.736,1.489,2.851,1.489c0.368,0,0.741-0.058,1.107-0.179c3.062-1.009,6.146-2.477,9.707-4.619 c0.4-0.241,0.666-0.656,0.718-1.121C47.731,24.911,45.61,17.255,40.288,10.202z M16.488,27.983c-1.926,0-3.511-2.029-3.511-4.495 c0-2.466,1.585-4.495,3.511-4.495c1.926,0,3.511,2.029,3.511,4.495C19.999,25.954,18.414,27.983,16.488,27.983z M30.488,28.01 c-1.908,0-3.478-2.041-3.478-4.522s1.57-4.522,3.478-4.522c1.908,0,3.478,2.041,3.478,4.522S32.396,28.01,30.488,28.01z"></path>
                </svg>
              </div>
            </Link>
          </div>
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
