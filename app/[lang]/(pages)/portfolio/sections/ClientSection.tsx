import { CTOThemedP, ThemedH2 } from "@components/atoms/ThemedText";
import Image from "next/image";

export const ClientsSection = ({ content }) => {
  return (
    <section
      data-scroll-target
      className="relative z-10 flex flex-col gap-10 justify-center p-16 mx-auto max-w-7xl min-h-[30vh]">
      <div
        className={`absolute w-screen h-full translate-x-1/2 -z-10 right-1/2 glass-morphism-section`}
      />

      <ThemedH2 className="px-12 text-center">{content.title} </ThemedH2>

      <div className={`z-10 flex flex-wrap justify-center gap-12`}>
        {/* <KvsLogo/> */}
        {content.projects.map((clientProject) => (
          <a
            key={clientProject.name}
            href={clientProject.href}
            target={clientProject.href ? "_blank" : undefined}
            className={`overflow-hidden relative rounded-sm shadow-lg hover:scale-105 transition`}>
            <CTOThemedP className="absolute z-10 transition-all top-0 right-0 p-1 rounded-bl-sm bg-light-violet">
              {clientProject.projectInfo}
            </CTOThemedP>

            <div
              className={`z-20 group grid justify-center transition-all glass-morphism-card`}>
              <div className="w-60 h-60  p-8">
                <Image
                  placeholder="blur"
                  blurDataURL="/images/logo/logo-lightmode.svg"
                  className={`object-contain w-full h-full dark:invert`}
                  src={clientProject.imageUrl}
                  alt={clientProject.name}
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
