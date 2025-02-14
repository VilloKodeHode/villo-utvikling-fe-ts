import Image from "next/image";
import { ThemedP } from "../../../atoms/ResponsiveText";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import SKILLS_LIST from "@/data/skills_list";

export const SkillIcons = () => {
  const { theme } = useContext(UserContext);
  return (
    <>
      <div className={`relative flex justify-center mt-10`}>
        <div
          className={`flex gap-8 flex-wrap justify-center transition-colors duration-1000`}
        >
          {SKILLS_LIST.map((skill) => (
            <div key={skill.alt}>
              <figure
                className={`relative z-20 hover:scale-95 transition-all flex justify-center p-6 h-full rounded-sm shadow-lg ${
                  theme === "light"
                    ? "bg-Villo-light-cloud hover:bg-Villo-light-mist"
                    : "bg-Villo-dark-slate hover:bg-Villo-dark-shadow"
                } group`}
              >
                <Image
                  src={`/images/skills/${skill.logo}-logo.png`}
                  className={`relative z-10 w-[${
                    skill.options.width
                  }px] transition aspect-auto m-auto ${
                    skill.options.colored
                      ? "saturate-[70%] group-hover:saturate-100"
                      : "contrast-[85%] hover:contrast-100"
                  }  group-hover:scale-125`}
                  alt="html logo"
                  height={skill.options.width * 1.5}
                  width={skill.options.width * 1.5}
                />
                <div className="absolute translate-x-1/2 translate-y-1/2 rounded-full -z-50 group-hover:scale-125 bottom-1/2 right-1/2" />
                <span className="absolute top-0 font-bold text-center transition-all translate-x-1/2 opacity-0 select-none -z-10 w-max group-hover:opacity-100 group-hover:-top-6 right-1/2">
                  <ThemedP>{skill.name}</ThemedP>
                </span>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
