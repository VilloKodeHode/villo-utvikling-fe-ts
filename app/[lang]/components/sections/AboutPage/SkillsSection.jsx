import {
  ResponsiveThemedH2,
  ThemedP,
} from "../../atoms/ResponsiveText";
import { UserContext } from "@/context/UserContext";
import { useContext } from "react";
import { SkillIcons } from "./organisms/SkillIcons";


export const SkillsSection = () => {
  const { theme, language } = useContext(UserContext);
  return (
    <section
      className={`w-screen py-20 ${
        theme === "light" ? "bg-Villo-light-white20" : " bg-Villo-dark-black85"
      }`}
    >
      <div className="px-4 m-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid justify-center text-center">
          <ResponsiveThemedH2 className="">
            {language === "Norwegian" ? "Kode kunnskap" : "Coding skills"}
          </ResponsiveThemedH2>
          <ThemedP className="max-w-2xl mt-2">
            {language === "Norwegian"
              ? "Jeg har erfaring å arbeide med følgende teknologier og design-verktøy:"
              : "I have experience working with the following technologies and design-tools:"}
          </ThemedP>
        </div>
      <SkillIcons/>
      </div>
    </section>
  );
};
