"use client";
import { Footer, Navbar } from "@components";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Body({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(true);

  function toggleMode() {
    setDarkMode((prev) => !prev);
  }

  useEffect(() => {
    Aos.init({
      duration: 200,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <body
      className={`relative w-full bg-body-light transition duration-100 dark:bg-body-dark text-blue-text dark:text-white ${
        darkMode && "dark"
      }`}
    >
      <Navbar toggleMode={toggleMode} darkMode={darkMode} />
      {children}
      <Footer />
    </body>
  );
}
export default Body;
