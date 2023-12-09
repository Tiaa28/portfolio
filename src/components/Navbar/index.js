"use client"
import logo from "@/app/icon.png";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const Navbar = ({ font }) => {
  const hamburger = useRef(null)
  const navLink = useRef(null)

  const handleClick = () => {
    hamburger.current.classList.toggle('active')
    navLink.current.classList.toggle('active')
  }

  return (
    <header className={`${font.className} absolute top-0 w-full`}>
      <div className="container mx-auto py-4  md:px-0 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10">
            <Image src={logo} alt="logo" className="w-full h-full" />
          </div>
          <h1 className="text-color-white font-bold text-xl capitalize">
            tia <span className="text-color-green">niandari</span>
          </h1>
        </div>
        <nav className="flex items-center gap-3 md:mx-0 mx-auto md:px-0 px-4 py-4 md:py-0" ref={navLink}>
          <Link href="#" className="text-color-grey font-medium ease-linear transition-colors duration-[.3s] hover:text-color-green">Home</Link>
          <Link href="#" className="text-color-grey font-medium ease-linear transition-colors duration-[.3s] hover:text-color-green">About</Link>
          <Link href="#" className="text-color-grey font-medium ease-linear transition-colors duration-[.3s] hover:text-color-green">Projects</Link>
          <Link href="#" className="text-color-grey font-medium ease-linear transition-colors duration-[.3s] hover:text-color-green">Contact</Link>
        </nav>
        <button className="md:hidden block w-10 h-5 relative" ref={hamburger} onClick={handleClick}>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;