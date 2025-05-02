"use client";

import { useEffect, useState } from "react";
import LanguageSwitcher from "../languageswitcher/LanguageSwitcher";
import { ThemeSwitch } from "../themeswitcher/ThemeSwitcher";
import { SettingIcon } from "@components/atoms/SvgIcons";

//TODO cogwheel going in outside of screen when not fullscreen

export const FloatingUtilsBar = () => {
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
      }`}>
      <div
        className={`glass-morphism-tool_bar transition-all group flex items-center justify-between ${
          notTop ? "animate-tools-slide-in" : "animate-tools-slide-out"
        }`}>
        <div className={`flex right-0 transition-all top-0 gap-4`}>
          <LanguageSwitcher className={""} />

          <ThemeSwitch />
          <button
            aria-label="Settings"
            title="Settings"
            className={`absolute top-0 left-[140px] transition-all  duration-500 hover:animate-cog-spin
          ${
            showToolBar
              ? "not-hover:animate-out-cog-spin animate-out-cog-spin"
              : "left-[165px] not-hover:animate-return-cog-spin animate-return-cog-spin"
          }`}
            onClick={toggleToolBar}>
            <SettingIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
