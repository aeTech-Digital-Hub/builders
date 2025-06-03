<<<<<<< HEAD
import React, { useState } from "react";
=======
import React from "react";

import assest from "../../assets/assests";
>>>>>>> 9442112 (updated pages to with figma statedd values)
import { Link } from "react-router-dom";
import assets from "../../assets/assests";

<<<<<<< HEAD
interface NavItem {
  name: string;
  href: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { name: "Find A Home", href: "#" },
    { name: "Communities", href: "#" },
    { name: "Plan & Design", href: "#" },
    { name: "Catalogue", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <header className="w-full bg-blue px-4 sm:px-28 py-4 relative">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={assets.home.logo} alt="Logo" className="sm:h-[117px] sm:w-[308px] h-10" />
        </Link>

        {/* Desktop Nav Links (hidden on mobile) */}
        <ul className="hidden sm:flex items-center gap-10 text-white text-xl">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className="flex items-center hover:text-blue-500 gap-3 transition-colors"
              >
                {item.name}
                <img
                  src={assets.home.arrowDown}
                  alt="arrow"
                  className="h-[6px] w-2.5 "
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger / Close Button (only on mobile) */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            // Close (X) Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu (slides down when isMenuOpen = true) */}
      {isMenuOpen && (
        <div className="sm:hidden bg-blue mt-2 py-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsMenuOpen(false)}
              className=" text-white text-lg flex items-center gap-2 px-4 py-2 hover:bg-blue-700 transition-colors"
            >
              {item.name}
              <img
                src={assets.home.rightArrow}
                alt="arrow"
                className="h-4 w-2.5"
              />
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

=======
const Header: React.FC = () => {
  return (
    <header className="px-28 bg-blue font-inter ">
      <div className="flex flex-row  items-center gap-[198px]">
        <div>
          {" "}
          <Link to="/">
            <img src={assest.home.logo} />
          </Link>
        </div>

        <ul className="flex gap-10 text-white items-center text-xl">
          <li>
            <Link
              to="#"
              className="flex items-center hover:text-blue-500 gap-1"
            >
              Find A Home
              <img src={assest.home.arrowDown} alt="arrow" />
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="flex items-center hover:text-blue-500 gap-1"
            >
              Communities
              <img src={assest.home.arrowDown} alt="arrow" />
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="flex items-center hover:text-blue-500 gap-1"
            >
              Plan & Design
              <img src={assest.home.arrowDown} alt="arrow" />
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="flex items-center hover:text-blue-500 gap-1"
            >
              Catalogue
              <img src={assest.home.arrowDown} alt="arrow" />
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="flex items-center hover:text-blue-500 gap-1"
            >
              Contact Us
              <img src={assest.home.arrowDown} alt="arrow" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
>>>>>>> 9442112 (updated pages to with figma statedd values)
export default Header;
