"use client";

import { ThemeSwitch } from "./themeswitcher/ThemeSwitcher";
import { useEffect, useState } from "react";
import {
  FacebookLogoLink,
  GithubLogoLink,
  LinkedInLogoLink,
} from "@components/atoms/LogoLink";
import LanguageSwitcher from "./languageswitcher/LanguageSwitcher";
import { useParams } from "next/navigation";

export const Header = () => {
  const [notTop, setNotTop] = useState(false);
  const params = useParams();

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
      <header className="transition relative ease-linear duration-200 z-40 h-10 flex items-center justify-between px-4 sm:px-6 lg:px-12 py-6 glass-morphism-ui text-light-obsidian dark:text-dark-glacier">
        <div
          className={`grid transition-all z-40 grid-flow-col gap-12
          ${
            notTop
              ? "animate-slide-in-from-bottom"
              : "animate-slide-in-from-top"
          }`}>
          <LanguageSwitcher className="" />
          <ThemeSwitch />
        </div>

        <div
          className={`flex gap-4 ${
            notTop
              ? "animate-slide-in-from-bottom"
              : "animate-slide-in-from-top"
          }`}>
          <LinkedInLogoLink />
          <GithubLogoLink />
          <FacebookLogoLink />
        </div>
      </header>
    </>
  );
};
