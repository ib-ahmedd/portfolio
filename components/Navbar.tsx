"use client";
import NavLink from "./NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import ScreenCover from "./ScreenCover";
import { useEffect, useRef, useState } from "react";

function Navbar({ toggleMode, darkMode }: NavBarProps) {
  const [navOpen, setNavOpen] = useState(false);
  const [popUpNav, setPopUpNav] = useState(false);
  const scrollPosition = useRef(0);

  function closeMenu() {
    setNavOpen(false);
  }

  function handleScroll() {
    if (scrollPosition.current > window.scrollY && window.scrollY > 120) {
      setPopUpNav(true);
      scrollPosition.current = window.scrollY;
    } else if (
      scrollPosition.current > window.scrollY &&
      window.scrollY < 120
    ) {
      setPopUpNav(false);
      scrollPosition.current = window.scrollY;
    } else if (scrollPosition.current < window.scrollY) {
      setPopUpNav(false);
      scrollPosition.current = window.scrollY;
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`sticky z-10 -top-20 ${
          popUpNav ? "translate-y-[200%]" : "translate-y-0"
        } transition duration-300 bg-navbar-light dark:bg-navbar-dark flex justify-between items-center w-[95%] sm:w-4/5 xl:w-3/5 py-2 px-8 border border-navbar-light-b dark:border-border-grey mx-auto mt-8 rounded-full shadow-xl`}
      >
        <a href="#home" className="font-bold text-xl">
          Ibrahim Ahmed
        </a>
        <div className=" hidden md:flex gap-8">
          <NavLink path="#home" title="Home" />
          <NavLink path="#skills" title="Skills" />
          <NavLink path="#projects" title="Projects" />
          <NavLink path="#services" title="Services" />
        </div>
        <div className="flex gap-4 items-center">
          <a
            href="#contact"
            className="hidden md:block font-semibold border  border-navbar-light-b dark:border-border-grey hover:bg-white dark:hover:bg-border-grey p-2 box-border rounded-full"
          >
            Let's chat
          </a>
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
      </nav>

      <div
        className={`bg-navbar-light dark:bg-body-dark fixed p-8 rounded-s-[3em] block md:hidden top-0 w-11/12 sm:w-96 right-0 h-screen z-20 transition duration-200 shadow-2xl ${
          navOpen ? " translate-x-0" : "translate-x-[105%]"
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
          <NavLink path="#skills" title="Skills" />
          <NavLink path="#projects" title="Projects" />
          <NavLink path="#services" title="Services" />

          <a
            href="#contact"
            className="w-full text-center border border-navbar-light-b dark:border-border-grey py-2 rounded-full font-semibold"
          >
            Let's chat
          </a>
        </div>
      </div>
      <ScreenCover closeMenu={closeMenu} navOpen={navOpen} />
    </>
  );
}

interface NavBarProps {
  toggleMode(): void;
  darkMode: boolean;
}

export default Navbar;
