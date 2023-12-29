"use client";
import logo from "@/app/icon.png";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import NavLink from "./NavLink";

const Navbar = ({ font }) => {
  const hamburger = useRef(null);
  const navLink = useRef(null);
  const navbar = useRef(null);
  const wrapper = useRef(null);

  const handleClick = () => {
    hamburger.current.classList.toggle("active");
    navLink.current.classList.toggle("active");
  };

  const scrolling = () => {
    const scroll = window.scrollY;

    if (scroll > 0) {
      navbar.current.classList.add("active");
    } else {
      navbar.current.classList.remove("active");
    }
  };

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (
        !hamburger.current.contains(e.target)
      ) {
        hamburger.current.classList.remove("active");
        navLink.current.classList.remove("active");
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrolling);
  }, []);

  return (
    <>
      <header
        className={`${font.className} fixed top-0 w-full z-20`}
        ref={navbar}
      >
        <div className="container mx-auto py-4 md:px-0 px-4 flex justify-between items-center" ref={wrapper}>
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10">
              <Image src={logo} alt="logo" className="w-full h-full" />
            </div>
            <h1 className="text-color-white font-bold text-xl capitalize">
              tia <span className="text-color-green">niandari</span>
            </h1>
          </Link>
          <nav className="md:flex hidden items-center gap-3">
            <Link
              href="/"
              className="text-color-grey font-medium hover:text-color-green"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-color-grey font-medium hover:text-color-green"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-color-grey font-medium hover:text-color-green"
            >
              Contact
            </Link>
          </nav>
          <button
            className="md:hidden block w-10 h-5 relative"
            ref={hamburger}
            name="hamburger"
            onClick={handleClick}
          >
            <span className="hamburger"></span>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
          </button>
        </div>
      </header>
      <NavLink nav={navLink} />
    </>
  );
};

export default Navbar;
