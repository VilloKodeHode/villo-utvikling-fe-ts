"use client"

import { FcSettings } from "react-icons/fc";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import LanguageSwitcher from "../languageswitcher/LanguageSwitcher";
import { ThemeSwitch } from "../themeswitcher/ThemeSwitcher";

export const FloatingUtilsBar = () => {
  const { theme } = useTheme();
  const [notTop, setNotTop] = useState(false);
  const [showToolBar, setShowToolBar] = useState(false);

  const toggleToolBar = () => {
    setShowToolBar(!showToolBar);
  };

  useEffect(() => {
    function handleScroll() {
      setNotTop(window.scrollY > 0);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setNotTop]);

  return (
    // <div className="relative">
      <div
        className={`fixed transition-all p-3 group top-2 duration-1000 z-[999] hover:bg-opacity-100 border-b-2 hover:border-opacity-100 bg-opacity-40 flex items-center rounded-r-[30px] pr-5 justify-between ${
          notTop ? "animate-Tools-slide-in" : "animate-Tools-slide-out"
        } ${
          theme === "light"
            ? "bg-light-cloud  text-light-ash border-light-violet"
            : "bg-dark-slate text-dark-frost border-dark-onyx"
        } 
          ${showToolBar ? "" : "translate-x-[-100%]"}
          `}
      >
        <div
          className={`flex 2xl:flex-row flex-col opacity-30 group-hover:opacity-100  right-0 transition-all top-0 gap-4`}
        >
          <LanguageSwitcher className={`2xl:flex-row flex-col`} />

          <ThemeSwitch />
          <button onClick={toggleToolBar} className="">
            <FcSettings
              className={`absolute h-[50px] w-fit top-0 2xl:left-[140px] left-[50px] transition-all duration-500 hover:animate-cogSpin 
          ${showToolBar ? "" : "2xl:left-[165px] left-[65px]"}`}
            ></FcSettings>
          </button>
        </div>
      </div>
    // </div>
  );
};
