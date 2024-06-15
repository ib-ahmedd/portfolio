"use client";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ScrollTopBtnProps } from "@types";
import { useEffect, useState } from "react";

function ScrollTopBtn({ inView }: ScrollTopBtnProps) {
  const [onScreen, setOnScreen] = useState(false);

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }
  useEffect(() => {
    setOnScreen(!inView);
  }, [inView]);
  return (
    <button
      onClick={handleScrollTop}
      className={`fixed bottom-6 right-6 ${
        onScreen ? "translate-y-0" : "translate-y-[200%]"
      } w-10 h-10 hover:scale-110 transition duration-300 shadow-xl text-lg text-white bg-site-orange hover:bg-site-orange-hover rounded-full`}
    >
      <FontAwesomeIcon icon={faAnglesUp} />
    </button>
  );
}

export default ScrollTopBtn;
