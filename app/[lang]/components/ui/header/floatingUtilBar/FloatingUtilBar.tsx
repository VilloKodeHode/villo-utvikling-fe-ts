"use client";

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
    <div
      className={`fixed duration-1000 top-2 z-[999] transition-all ${
        showToolBar ? "" : "-translate-x-40"
      }`}
    >
      <div
        className={`transition-all p-3 group border-b-2 flex items-center rounded-r-[30px] pr-5 justify-between ${
          notTop ? "animate-Tools-slide-in" : "animate-Tools-slide-out"
        } ${
          theme === "light"
            ? "bg-light-cloud  text-light-ash border-light-violet"
            : "bg-dark-onyx text-dark-frost border-dark-lavender"
        } 
          `}
      >
        <div
          className={`flex 2xl:flex-row flex-col right-0 transition-all top-0 gap-4`}
        >
          <LanguageSwitcher className={`2xl:flex-row flex-col`} />

          <ThemeSwitch />
          <button
            className={`absolute top-0 2xl:left-[140px] left-[50px] transition-all  duration-500 hover:animate-cog-spin
          ${
            showToolBar
              ? "not-hover:animate-out-cog-spin"
              : "2xl:left-[165px] left-[65px] not-hover:animate-return-cog-spin "
          }`}
            onClick={toggleToolBar}
          >
            <FcSettings
              className={` h-[48px] flex -translate-y-[1px] w-fit`}
            ></FcSettings>
          </button>
        </div>
      </div>
    </div>
  );
};
