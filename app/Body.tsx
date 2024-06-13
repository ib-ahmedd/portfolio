"use client";
import { Navbar } from "@components";
import { useState } from "react";

function Body({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(true);

  function toggleMode() {
    setDarkMode((prev) => !prev);
  }

  return (
    <body
      className={`relative w-full bg-body-light transition duration-100 dark:bg-body-dark text-blue-text dark:text-white ${
        darkMode && "dark"
      }`}
    >
      <Navbar toggleMode={toggleMode} darkMode={darkMode} />
      {children}
    </body>
  );
}
export default Body;
