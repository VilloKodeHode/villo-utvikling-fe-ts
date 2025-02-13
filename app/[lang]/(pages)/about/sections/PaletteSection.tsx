"use client";

import { useTheme } from "next-themes";

export const PaletteSection = () => {
  const { theme } = useTheme();

  return (
    <section className="border-2 border-light-black dark:border-dark-white">
      <div
        className={`w-full transition-all duration-[20000ms] h-32 ${
          theme === "light"
            ? "color_palette_gradient"
            : "color_palette_gradient_dark"
        }  `}
      ></div>
      <div className="flex ">
        <Color className=" bg-light-white dark:bg-dark-black text-light-black dark:text-dark-white">
          {theme === "light" ? "light-white" : "dark-black"}
        </Color>
        <Color className=" bg-light-white10 dark:bg-dark-black85 text-light-black dark:text-dark-white">
          {theme === "light" ? "light-white10" : "dark-black85"}
        </Color>
        <Color className=" bg-light-white15 dark:bg-dark-black75 text-light-black dark:text-dark-white">
          {theme === "light" ? "light-white15" : "dark-black75"}
        </Color>
        <Color className=" bg-light-white20 dark:bg-dark-black50 text-light-black dark:text-dark-white">
          {theme === "light" ? "light-white20" : "dark-black50"}
        </Color>
        <Color className=" bg-light-grey dark:bg-dark-grey text-light-white">
          {theme === "light" ? "light-grey" : "dark-grey"}
        </Color>
        <Color className=" bg-light-black50 dark:bg-dark-white20 text-light-white dark:text-dark-black">
          {theme === "light" ? "light-black50" : "dark-white20"}
        </Color>
        <Color className=" bg-light-black75 dark:bg-dark-white15 text-light-white dark:text-dark-black">
          {theme === "light" ? "light-black75" : "dark-white15"}
        </Color>
        <Color className=" bg-light-black85 dark:bg-dark-white10 text-light-white dark:text-dark-black">
          {theme === "light" ? "light-black85" : "dark-white10"}
        </Color>
        <Color className=" bg-light-black dark:bg-dark-white text-light-white dark:text-dark-black">
          {theme === "light" ? "light-black" : "dark-white"}
        </Color>
      </div>
    </section>
  );
};

export const Color = ({ children, className }) => {
  return (
    <div
      className={`${className} transition-all ease-linear duration-[20000ms] h-36 w-36 flex justify-center items-center`}
    >
      {children}
    </div>
  );
};
