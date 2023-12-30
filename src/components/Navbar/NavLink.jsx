"use client";
import Link from "next/link";

const NavLink = ({ nav, pathname }) => {
  return (
    <nav className="md:hidden flex flex-col items-center gap-3 container mx-auto py-4 md:px-0 px-4" ref={nav} id="nav">
      <Link
        href="/"
        className={`font-medium hover:text-color-green hover:bg-color-hover-bg-nav ${pathname?.home ? "text-color-green bg-color-hover-bg-nav": "text-color-grey"}`}
      >
        Home
      </Link>
      <Link
        href="/projects"
        className={`font-medium hover:text-color-green hover:bg-color-hover-bg-nav ${pathname?.projects ? "text-color-green bg-color-hover-bg-nav": "text-color-grey"}`}
      >
        Projects
      </Link>
      <Link
        href="/contact"
        className={`font-medium hover:text-color-green hover:bg-color-hover-bg-nav ${pathname?.contact ? "text-color-green bg-color-hover-bg-nav": "text-color-grey"}`}
      >
        Contact
      </Link>
    </nav>
  );
};

export default NavLink