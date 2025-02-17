"use client";

import { useTheme } from "next-themes";

export const PaletteSection = () => {
  const { theme } = useTheme();

  return (
    <section className="border-2 border-light-obsidian dark:border-dark-ice">
      <div className="relative h-32">
        <div
          className={`w-full dark:opacity-0 opacity-100 transition-opacity duration-800 absolute h-32 color_palette_gradient`}
        />
        <div
          className={`w-full absolute opacity-0 transition-opacity duration-800 dark:opacity-100 h-32 color_palette_gradient_dark`}
        />
      </div>

      <div className="flex ">
        <Color className=" bg-light-snow dark:bg-dark-midnight text-light-obsidian dark:text-dark-ice">
          <p>{theme === "light" ? "snow" : "midnight"}</p>
          <p>{theme === "light" ? "#f3f5fc" : "#0b0a12"}</p>
        </Color>
        <Color className=" bg-light-mist dark:bg-dark-onyx text-light-obsidian dark:text-dark-ice">
          <p>{theme === "light" ? "mist" : "onyx"}</p>
          <p>{theme === "light" ? "#e1e3f6" : "#292732"}</p>
        </Color>
        <Color className=" bg-light-cloud dark:bg-dark-slate text-light-obsidian dark:text-dark-ice">
          <p>{theme === "light" ? "cloud" : "slate"}</p>
          <p>{theme === "light" ? "#ced2ef" : "#262336"}</p>
        </Color>
        <Color className=" bg-light-fog dark:bg-dark-shadow text-light-obsidian dark:text-dark-ice">
          <p>{theme === "light" ? "fog" : "shadow"}</p>
          <p>{theme === "light" ? "#bdc1e5" : "#3a3653"}</p>
        </Color>
        <Color className=" bg-light-dusk dark:bg-dark-storm text-light-snow">
          <p>{theme === "light" ? "dusk" : "storm"}</p>
          <p>{theme === "light" ? "#979bc4" : "#625e83"}</p>
        </Color>
        <Color className=" bg-light-charcoal dark:bg-dark-moonlight text-light-snow dark:text-dark-midnight">
          <p>{theme === "light" ? "charcoal" : "moonlight"}</p>
          <p>{theme === "light" ? "#37394a" : "#c3bfe3"}</p>
        </Color>
        <Color className=" bg-light-graphite dark:bg-dark-glacier text-light-snow dark:text-dark-midnight">
          <p>{theme === "light" ? "graphite" : "glacier"}</p>
          <p>{theme === "light" ? "#272833" : "#d3d0ed"}</p>
        </Color>
        <Color className=" bg-light-ash dark:bg-dark-frost text-light-snow dark:text-dark-midnight">
          <p>{theme === "light" ? "ash" : "frost"}</p>
          <p>{theme === "light" ? "#191a22" : "#e4e2f8"}</p>
        </Color>
        <Color className=" bg-light-obsidian dark:bg-dark-ice text-light-snow dark:text-dark-midnight">
          <p>{theme === "light" ? "obsidian" : "ice"}</p>
          <p>{theme === "light" ? "#0c0d14" : "#f4f3ff"}</p>
        </Color>
      </div>
    </section>
  );
};

export const Color = ({ children, className }) => {
  return (
    <div
      className={`${className} transition-colors duration-500 ease-linear h-36 w-36 flex justify-center flex-col items-center`}
    >
      {children}
    </div>
  );
};
