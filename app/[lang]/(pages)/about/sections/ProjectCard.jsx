//Component for displaying project layout

import Image from "next/image";
import { useContext } from "react";

import {
  ResponsiveThemedH5,
  ResponsiveThemedP,
} from "@components/atoms/ResponsiveText";
import { UserContext } from "@/context/UserContext";
import Link from "next/link";
import PROJECT_LIST from "@/data/projects_list";
import { ExternalCTA } from "@components/atoms/Buttons";

export default function ProjectCards() {
  const { language, theme } = useContext(UserContext);

  return (
    <>
      {PROJECT_LIST.map((project) => (
        <div
          key={project.engProjectName}
          className={`flex flex-col h-[460px] md:h-[550px] lg:h-[600px] justify-between overflow-hidden rounded-lg shadow ${
            theme === "light" ? "bg-Villo-light-mist" : "bg-Villo-dark-onyx"
          }  shadow-Villo-black75`}
        >
          <div
            className={`p-4 pb-0 border-b-4 ${
              theme === "light"
                ? "border-Villo-light-violet"
                : "border-Villo-dark-lavender"
            } `}
          >
            <Image
              className="object-cover object-center w-full h-48"
              src={
                project.src
                  ? project.src
                  : theme === "light"
                  ? "/logo/WindLogoNoTextLightMode.svg"
                  : "/logo/WindLogoNoTextDarkMode.svg"
              }
              alt={project.engProjectName}
              width={400}
              height={300}
            />
          </div>

          <div className="h-full p-6">
            <ResponsiveThemedH5 className="font-bold">
              {language === "Norwegian"
                ? project.norProjectName
                : project.engProjectName}
            </ResponsiveThemedH5>
            <ResponsiveThemedP
              className={`mt-2 ${
                theme === "light" ? "text-Villo-black" : "text-Villo-white15"
              } `}
            >
              {language === "Norwegian"
                ? project.norDescription
                : project.engDescription}
            </ResponsiveThemedP>
          </div>
          <div className="ml-3 max-w-fit">
            <Link className="w-fit h-fit" href={project.href} target="_blank">
              <ExternalCTA Theme={theme}>
                {language === "Norwegian" ? "Prøv ut" : "Try it out"}
              </ExternalCTA>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
