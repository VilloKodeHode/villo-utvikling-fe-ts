"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import LIGHTMODE from "./assets/lightmode.svg";
import DARKMODE from "./assets/darkmode.svg";
import { getCookie, setCookie } from "cookies-next";

export const ThemeSwitch: React.FC =  () => {
  const { setTheme, theme } = useTheme();
  const [runAnimation, setRunAnimation] = useState<boolean>(false);
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  useEffect(() => {
    setHasMounted(true);
  }, [])


  const toggleTheme = () => {
    setRunAnimation(true);
    if (theme === "light") {
      setTheme("dark");
      if (getCookie("acceptedCookies")) {
        setCookie("theme", "dark", {
          maxAge: 365 * 24 * 60 * 60, // Cookie expiration in seconds (1 year)expiration in seconds (30 days)
        });
      }
    } else {
      setTheme("light");
      if (getCookie("acceptedCookies")) {
        setCookie("theme", "light", {
          maxAge: 365 * 24 * 60 * 60, // Cookie expiration in seconds (1 year) expiration in seconds (30 days)
        });
      }
    }
  };

if (!hasMounted) {
  return null;
}


  return (
    // <ThemeSwitchButton onClick={toggleTheme} />
    <button
      className="relative grid hover:scale-105 transition active:scale-90 w-[24px] h-[24px] grid-flow-col"
      onClick={toggleTheme}
    >
      <Image
        src={LIGHTMODE}
        width={30}
        height={30}
        alt="themeswitch to darkmode"
        className={` 
          ${
            runAnimation === false
              ? theme === "light"
                ? "animate-ThemeSwitchSlideIn"
                : "hidden"
              : ""
          }
           ${
             runAnimation
               ? theme === "light"
                 ? "animate-ThemeSwitchSlideIn"
                 : "animate-ThemeSwitchSlideOut"
               : ""
           }
          pointer-events-none max-w-8 h-8 absolute translate-x-1/2 origin-top-right -translate-y-1/2 top-1/2 right-1/2`}
      />

      <Image
        src={DARKMODE}
        width={30}
        height={30}
        alt="themeswitch to lightmode"
        className={` 
          ${
            runAnimation === false
              ? theme === "dark"
                ? "animate-ThemeSwitchSlideIn"
                : "hidden"
              : ""
          } ${
          runAnimation
            ? theme === "dark"
              ? "animate-ThemeSwitchSlideIn"
              : "animate-ThemeSwitchSlideOut"
            : ""
        } pointer-events-none max-w-8 h-8 absolute translate-x-1/2 origin-top-right -translate-y-1/2 top-1/2 right-1/2`}
      />
    </button>
  );
};

