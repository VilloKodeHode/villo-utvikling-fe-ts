//Component for displaying project layout

import Image from "next/image";
import Link from "next/link";
import { ExternalCTA } from "@components/atoms/Buttons";
import { ThemedH5, ThemedP } from "@components/atoms/ThemedText";
import { ComponentProps } from "app/interfaces/PageProps";

export default function ProjectCards({ content }: ComponentProps) {
  return (
    <>
      {content?.projects.map((project, index) => (
        <div
          key={project.projectName + index}
          className={`flex flex-col h-[520px] md:h-[550px] lg:h-[600px] justify-between overflow-hidden rounded-lg shadow glass-morphism-card
          shadow-black75`}
        >
          <div
            className={`p-4 pb-0 border-b-4 border-light-violet dark:border-dark-lavender
            `}
          >
            <Image
              className="object-cover object-center w-full h-48"
              src={
                project.src ? project.src : "/logo/WindLogoNoTextDarkMode.svg"
              }
              alt={project.projectName}
              width={400}
              height={300}
            />
          </div>

          <div className="h-full p-6">
            <ThemedH5 className="font-bold">{project.projectName}</ThemedH5>
            <ThemedP>
              {project.description}
            </ThemedP>
          </div>
          <div className="max-w-fit p-4">
            <Link className="w-fit h-fit" href={project.href} target="_blank">
              <ExternalCTA>{content.cta}</ExternalCTA>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
