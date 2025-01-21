"use client";

import { SiFacebook, SiGithub, SiLinkedin } from "react-icons/si";
import LanguageSwitcher from "./languageswitcher/LanguageSwitcher";
import { ThemeSwitch } from "./themeswitcher/ThemeSwitcher";
import { useEffect, useState } from "react";

export const Header = () => {
  const [notTop, setNotTop] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setNotTop(window.scrollY > 0);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setNotTop]);

  return (
    <>
      <header className="bg-opacity-[0.93] transition ease-linear duration-200 backdrop-blur-[10px] z-40 h-10 flex items-center justify-between px-4 sm:px-6 lg:px-12 py-6 bg-Villo-light-white15 dark:bg-Villo-dark-black text-Villo-light-black dark:text-Villo-dark-white10">
        <div
          className={`grid transition-all z-40 grid-flow-col gap-12
 
          ${notTop ? "animate-SlideInFromBottom" : "animate-SlideInFromTop"}`}
        >
          <LanguageSwitcher />
          <ThemeSwitch />
        </div>
        <div className="flex gap-4">
          <a
            href="https://github.com/VilloKodeHode"
            target="_blank"
            className={`transition-all z-40
 
          ${notTop ? "animate-SlideInFromBottom" : "animate-SlideInFromTop"}`}
          >
            <SiLinkedin
              className={`w-8 h-8 mx-auto duration-200 hover:scale-105 flex transition-all`}
            />
          </a>
          <a
            href="https://github.com/VilloKodeHode"
            target="_blank"
            className={`transition-all z-40
 
          ${notTop ? "animate-SlideInFromBottom" : "animate-SlideInFromTop"}`}
          >
            <SiGithub
              className={`w-8 h-8 mx-auto duration-200 hover:scale-105 flex transition-all`}
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61565977223570"
            target="_blank"
            className={`transition-all z-40
 
          ${notTop ? "animate-SlideInFromBottom" : "animate-SlideInFromTop"}`}
          >
            <SiFacebook
              className={`w-8 h-8 mx-auto duration-200 hover:scale-105 flex transition-all`}
            />
          </a>
        </div>
      </header>
    </>
  );
};
