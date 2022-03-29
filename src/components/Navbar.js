import {
  faBars,
  faCircleInfo,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import ScrollSpy from "react-scrollspy-navigation";
import "./ExperienceTab.css";
import "./NavBar.css";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [background, setBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.pageYOffset);
      if (window.pageYOffset > 500) {
        setBackground(true);
      } else {
        setBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => {
        console.log("Removing");
      });
    };
  }, []);

  const navItems = [
    { href: "#home", name: "Home" },
    { href: "#about", name: "About" },
    { href: "#services", name: "Service" },
    { href: "#portfolio", name: "Portfolio" },
    { href: "#blog", name: "Blog" },
    { href: "#contact", name: "Contact" },
  ];

  return (
    <nav
      className={`md:px-16 sm:px-4 w-full fixed top-0 h-[90px] px-5 md:z-50 ${
        isNavOpen ? "z-50" : "z-10"
      } ${background ? "bg-black md:-mt-5 shadow-md " : "md:m-0"} duration-500`}
    >
      <div className="flex flex-wrap justify-between items-center mx-auto ">
        <a href="/" className="flex items-center ">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            <img className="p-3 pt-6" width={70} src="logo.png" alt="" />{" "}
            <FontAwesomeIcon
              className="text-yellow-400 mr-2"
              icon={faCircleInfo}
            />
            <span className="text-yellow-400 ">Site is under development</span>
          </span>
        </a>
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          data-collapse-toggle="mobile-menu"
          type="button"
          className="text-white text-2xl md:hidden -mt-5 z-50"
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
              ? "translate-x-20 md:translate-x-0 "
              : "md:translate-x-0 translate-x-[500px] "
          } w-full md:block md:w-auto md:bg-transparent opacity-90 bg-black -ml-5 nav-items transition-transform md:h-full h-screen md:m-0 -m-24 pt-10 md:pt-0 `}
          id="mobile-menu"
        >
          <div className="md:flex gap-6 text-white flex-wrap md:p-0 p-5 md:mt-10 mt-0 mb-10 ">
            <ScrollSpy>
              {navItems.map((item, index) => (
                <a
                  ref={React.createRef()}
                  href={item.href}
                  key={index}
                  className={` block pb-3 list-border cursor-pointer relative md:text-xl text-base md:my-0 my-3 font-bold `}
                >
                  {item.name}
                </a>
              ))}
            </ScrollSpy>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
