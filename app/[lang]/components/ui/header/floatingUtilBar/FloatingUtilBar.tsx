"use client";

import { FcSettings } from "react-icons/fc";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import LanguageSwitcher from "../languageswitcher/LanguageSwitcher";
import { ThemeSwitch } from "../themeswitcher/ThemeSwitcher";

//TODO cogwheel going in outside of screen when not fullscreen


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
      className={`fixed duration-1000 top-2 z-150 transition-all ${
        showToolBar ? "" : "-translate-x-40"
      }`}
    >
      <div
        className={`glass-morphism-tool_bar transition-all group flex items-center justify-between ${
          notTop ? "animate-tools-slide-in" : "animate-tools-slide-out"
        }`}
      >
        <div
          className={`flex right-0 transition-all top-0 gap-4`}
        >
          <LanguageSwitcher className={""} />

          <ThemeSwitch />
          <button
            className={`absolute top-0 left-[140px] transition-all  duration-500 hover:animate-cog-spin
          ${
            showToolBar
              ? "not-hover:animate-out-cog-spin animate-out-cog-spin"
              : "left-[165px] not-hover:animate-return-cog-spin animate-return-cog-spin"
          }`}
            onClick={toggleToolBar}
          >
            <FcSettings
              className={`cursor-pointer h-[48px] flex -translate-y-[1px] w-fit`}
            ></FcSettings>
          </button>
        </div>
      </div>
    </div>
  );
};
