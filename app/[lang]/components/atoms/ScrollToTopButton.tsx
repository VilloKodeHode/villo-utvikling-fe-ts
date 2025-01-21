"use client"

import { useEffect, useState } from "react";
import { FiArrowUpCircle } from "react-icons/fi";

export function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      function handleScroll() {
        setIsVisible(window.scrollY > 0);
      }
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  
    return (
      <button
        onClick={scrollToTop}
        className={`text-Villo-light-white20 hover:text-Villo-light-primary
            dark:text-Villo-dark-black50 dark:hover:text-Villo-dark-primary
        z-50 p-1 fixed sm:bottom-4 bottom-1 sm:right-4 right-1 transition-all duration-200 rounded-full hover:scale-125  ${
          isVisible ? "opacity-100 " : "opacity-0 cursor-default"
        }`}
      >
        <FiArrowUpCircle
          className={`w-12 h-12 rounded-full
              fill-Villo-light-white hover:fill-Villo-light-white20
              dark:fill-Villo-dark-black85 dark:hover:fill-Villo-dark-black
          `}
          strokeWidth={1.5}
        />
      </button>
    );
  }