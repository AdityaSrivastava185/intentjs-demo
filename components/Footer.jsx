import { Github, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div>
      <footer className="rounded-lg shadow m-4 bg-zinc-900">
        <div className="w-full text-center mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <div className="flex gap-6 items-center justify-center mb-4 md:mb-0 mt-5">
            <div className="bg-white inline-flex rounded-full p-1 hover:bg-[#98D422] hover:text-white">
              <Github className="text-black hover:text-white" />
            </div>
            <div className="bg-white inline-flex rounded-full p-1 hover:bg-[#98D422] hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 30 30"
              >
                <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
              </svg>
            </div>
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
          </div>
          <ul className="flex flex-wrap items-center justify-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link href="#" className="hover:text-[#98D422] mx-4 md:mx-6">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#98D422] mx-4 md:mx-6">
                Docs
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#98D422] mx-4 md:mx-6">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#98D422] mx-4 md:mx-6">
                Support
              </Link>
            </li>
          </ul>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 block mt-4 md:mt-0">
            2024 ©{" "}
            <Link href="https://tryintent.com/" className="hover:underline">
              Intent
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;