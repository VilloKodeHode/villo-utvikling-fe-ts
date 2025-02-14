import { FcSettings } from "react-icons/fc";
import LanguageSwitch from "../../features/LanguageSwitch/LanguageSwitch";
import ThemeSwitch from "../../features/ThemeSwitch/ThemeSwitch";
import { NavigationContext } from "../../../context/NavigationContext";
import { useContext, useEffect } from "react";
import { UserContext } from "@/context/UserContext";

export const FloatingUtilsBar = () => {
  const { theme } = useContext(UserContext);
  const { notTop, showToolBar, setShowToolBar, setNotTop } = useContext(NavigationContext);
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
    <div className="relative">
      <div
        className={`fixed transition-all p-3 group top-2 duration-1000 z-[999] hover:bg-opacity-100 border-b-2 hover:border-opacity-100 bg-opacity-40  border-opacity-40 flex items-center rounded-r-[30px] pr-5 justify-between ${
          notTop ? "animate-ToolsSlideIn" : "animate-ToolsSlideOut"
        } ${
          theme === "light"
            ? "bg-Villo-light-white15  text-Villo-light-black border-Villo-light-primary"
            : "bg-Villo-dark-black75 text-Villo-dark-white10 border-Villo-dark-black85"
        } 
          ${showToolBar ? "" : "translate-x-[-100%]"}
          `}
      >
        <div
          className={`flex 2xl:flex-row flex-col opacity-30 group-hover:opacity-100  right-0 transition-all top-0 gap-4`}
        >
          <LanguageSwitch className={`2xl:flex-row flex-col`} />

          <ThemeSwitch />
          <button onClick={toggleToolBar} className="">
            <FcSettings
              className={`absolute h-[50px] w-fit top-0 2xl:left-[140px] left-[50px] transition-all duration-500 hover:animate-cogSpin 
          ${showToolBar ? "" : "2xl:left-[165px] left-[65px]"}`}
            ></FcSettings>
          </button>
        </div>
      </div>
    </div>
  );
};
