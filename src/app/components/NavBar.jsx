import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="container flex justify-between items-center mx-auto px-3 py-4">
      <Link href="/" className="text-white  fs-xl font-black">
        Logo
      </Link>
      <ul className="flex items-center gap-5">
        <li>
          <Link
            href="#"
            className="text-white  fs-base font-semibold hover:text-black transition-all duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-white  fs-base font-semibold hover:text-black transition-all duration-200"
          >
            About
          </Link>
        </li>
        <li>
          <a
            href="#"
            className="text-white  fs-base font-semibold hover:text-black transition-all duration-200"
          >
            Contact Us
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-white  fs-base font-semibold hover:text-black transition-all duration-200"
          >
            Roadmap
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
