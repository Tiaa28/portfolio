"use client";
import Link from "next/link";

const NavLink = ({ nav }) => {
  return (
    <nav className="md:hidden flex flex-col items-center gap-3 container mx-auto py-4 md:px-0 px-4" ref={nav} id="nav">
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
  );
};

export default NavLink