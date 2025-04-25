import {
  ThemedH1,
  ThemedH2,
  ThemedH3,
  ThemedP,
  ThemedPLarge,
} from "@components/atoms/ThemedText";
import { ComponentProps } from "app/interfaces/PageProps";
import Image from "next/image";

export const TextAndImageSection = ({ content }: ComponentProps) => {
  //TODO Make wider
  return (
    <section
      data-scroll-target
      className="flex flex-col max-w-7xl gap-10 justify-center text-center items-center min-h-screen">
      <ThemedH2 className="font-bold">{content?.title}</ThemedH2>
      <div className="animate-PageAppearRight">
        <div
          className={`sm:rounded-lg grid grid-cols-1 lg:grid-rows-1 grid-rows-2 h-[70dvh] lg:grid-cols-2 transition-colors duration-1000 glass-morphism-section`}>
          <div
            className={`col-span-1 py-12 h-full flex flex-col justify-center items-center`}>
            <ThemedH3 className="py-5 text-bold">{content?.subtitle}</ThemedH3>
            <ThemedP className="max-w-md px-8 pb-5">
              {content?.paragraph}
            </ThemedP>
          </div>
          <div className="col-span-1 h-full w-full">
            <Image
              src={content?.src}
              width={1200}
              height={1200}
              alt={content?.alt}
              className="object-cover w-full h-full rounded-b-lg lg:rounded-r-lg lg:rounded-b-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const IntroSection = ({ content }: ComponentProps) => {
  return (
    <section className="grid items-center max-w-6xl justify-center w-full min-h-[calc(100dvh-160px)]">
      <div className="animate-page-appear-right">
        <div
          className={`sm:rounded-lg grid transition-colors duration-1000
          `}>
          <div className={`h-full flex flex-col gap-2 md:gap-4`}>
            <ThemedH1 className="">{content?.title}</ThemedH1>
            <ThemedPLarge className="">{content?.description}</ThemedPLarge>
          </div>
        </div>
      </div>
    </section>
  );
};

export const AltIntroSection = ({ content }: ComponentProps) => {
  return (
    <section className="grid items-center max-w-6xl justify-center w-full min-h-[calc(100dvh-160px)]">
      <div className="animate-page-appear-right">
        <div
          className={`sm:rounded-lg grid transition-colors duration-1000
          `}>
          <div className={`h-full flex flex-col gap-2 md:gap-4`}>
            {/* <SimpleLogoComponent /> */}

            <ThemedH1 className="">{content?.title}</ThemedH1>
            <ThemedPLarge className="">{content?.paragraphOne}</ThemedPLarge>
            <ThemedPLarge className="">{content?.paragraphTwo}</ThemedPLarge>
          </div>
        </div>
      </div>
    </section>
  );
};
