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
      <header className="transition ease-linear duration-200 backdrop-blur-[10px] z-40 h-10 flex items-center justify-between px-4 sm:px-6 lg:px-12 py-6 bg-light-white15/93 dark:bg-dark-black/93 text-light-black dark:text-dark-white10">
        <div
          className={`grid transition-all z-40 grid-flow-col gap-12
 
          ${notTop ? "animate-Slide-in-from-bottom" : "animate-Slide-in-from-top"}`}
        >
          <LanguageSwitcher />
          <ThemeSwitch />
        </div>
        {/* TODO: Create a common animation for the whole div below instead of one for each icon */}
        <div className="flex gap-4">
          <a
            href="https://github.com/VilloKodeHode"
            target="_blank"
            className={`transition-all z-40
 
          ${notTop ? "animate-Slide-in-from-bottom" : "animate-Slide-in-from-top"}`}
          >
            <SiLinkedin
              className={`w-8 h-8 mx-auto duration-200 hover:scale-105 flex transition-all`}
            />
          </a>
          <a
            href="https://github.com/VilloKodeHode"
            target="_blank"
            className={`transition-all z-40
 
          ${notTop ? "animate-Slide-in-from-bottom" : "animate-Slide-in-from-top"}`}
          >
            <SiGithub
              className={`w-8 h-8 mx-auto duration-200 hover:scale-105 flex transition-all`}
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61565977223570"
            target="_blank"
            className={`transition-all z-40
 
          ${notTop ? "animate-Slide-in-from-bottom" : "animate-Slide-in-from-top"}`}
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
