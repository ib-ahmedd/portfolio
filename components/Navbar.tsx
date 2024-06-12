"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import ScreenCover from "./ScreenCover";
import { useState } from "react";

function Navbar({ toggleMode, darkMode }: NavBarProps) {
  const [navOpen, setNavOpen] = useState(false);

  function closeMenu() {
    setNavOpen(false);
  }
  return (
    <nav className="bg-navbar-light dark:bg-navbar-dark flex justify-between items-center w-[95%] sm:w-4/5 xl:w-2/4 py-2 px-8 border border-navbar-light-b dark:border-border-grey mx-auto mt-8 rounded-full shadow-xl">
      <a href="" className="font-bold text-xl">
        Ibrahim Ahmed
      </a>
      <div className=" hidden md:flex gap-8">
        <NavLink path="/" title="Home" />
        <NavLink path="#projects" title="Projects" />
        <NavLink path="#services" title="Services" />
      </div>
      <div className="flex gap-4 items-center">
        <Link
          href="#contact"
          className="hidden md:block font-semibold border  border-navbar-light-b dark:border-border-grey hover:bg-white dark:hover:bg-border-grey p-2 box-border rounded-full"
        >
          Let's chat
        </Link>
        <div className="flex flex-1 items-center gap-3 text-sm relative">
          <button
            className="w-10 flex items-center bg-gray-400 rounded-full"
            onClick={toggleMode}
          >
            <span
              className={`bg-site-orange w-1/2 transition duration-200 rounded-full ${
                darkMode ? "translate-x-full" : "translate-x-0"
              }`}
            >
              <FontAwesomeIcon icon={darkMode === true ? faMoon : faSun} />
            </span>
          </button>
          <button
            className="block md:hidden"
            onClick={() => {
              setNavOpen(true);
            }}
          >
            <FontAwesomeIcon icon={faBars} className="text-lg" />
          </button>
        </div>
      </div>

      <div
        className={`bg-navbar-light dark:bg-body-dark fixed p-8 rounded-s-[3em] top-0 w-11/12 sm:w-96 right-0 h-screen z-20 transition duration-200 shadow-2xl ${
          navOpen ? "translate-x-0" : "translate-x-[105%]"
        }`}
      >
        <button
          className="text-2xl text-site-text-gray mb-8"
          onClick={() => {
            setNavOpen(false);
          }}
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
        <div className="flex flex-col gap-4">
          <NavLink path="#home" title="Home" />
          <NavLink path="#projects" title="Projects" />
          <NavLink path="#services" title="Services" />

          <Link
            href="#contact"
            className="w-full text-center border border-navbar-light-b dark:border-border-grey py-2 rounded-full font-semibold"
          >
            Let's chat
          </Link>
        </div>
      </div>
      <ScreenCover closeMenu={closeMenu} navOpen={navOpen} />
    </nav>
  );
}

interface NavBarProps {
  toggleMode(): void;
  darkMode: boolean;
}

export default Navbar;
