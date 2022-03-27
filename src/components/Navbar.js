import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./ExperienceTab.css";
import "./NavBar.css";

const Navbar = ({ pathName, setPathname }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navItems = [
    { href: "#", name: "Home" },
    { href: "#about", name: "About" },
    { href: "#services", name: "Service" },
    { href: "#portfolio", name: "Portfolio" },
    { href: "#blog", name: "Blog" },
    { href: "#contact", name: "Contact" },
  ];

  return (
    <nav className="md:px-16 sm:px-4 w-full fixed top-0 h-[72px] md:m-0 mt-7 px-5">
      <div className="flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a>
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          data-collapse-toggle="mobile-menu"
          type="button"
          className="text-white text-2xl z-10 md:hidden "
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          {!isNavOpen ? (
            <FontAwesomeIcon icon={faBars} />
          ) : (
            <FontAwesomeIcon icon={faXmark} />
          )}
        </button>
        <div
          className={`${
            isNavOpen
              ? "translate-x-20 md:translate-x-0"
              : "md:translate-x-0 translate-x-[500px]"
          } w-full md:block md:w-auto md:bg-transparent opacity-90 bg-black -ml-5 nav-items transition-transform md:h-full h-screen z-0 md:m-0 -m-14`}
          id="mobile-menu"
        >
          <ul className="md:flex gap-6 text-white flex-wrap md:p-0 p-5 md:mt-10 mt-0 mb-10 ">
            {navItems.map((item, index) => (
              <li
                onClick={() => setPathname(item.href)}
                key={index}
                className={`${
                  pathName === item.href
                    ? "before:bg-rose-500 before:w-full text-rose-500"
                    : "before:w-0"
                }  pb-3 list-border cursor-pointer relative md:text-xl text-base md:my-0 my-3 font-bold`}
              >
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
