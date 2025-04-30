"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ShowCaseHeaderText, ThemedP } from "@components/atoms/ThemedText";
import { useTheme } from "next-themes";

export const ShowcaseSection = ({ content }) => {
  const { theme } = useTheme();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const changeToNextImage = () => {
    return activeImageIndex === content.length - 1
      ? setActiveImageIndex(0)
      : setActiveImageIndex(activeImageIndex + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      changeToNextImage();
    }, 5000);
    return () => clearTimeout(timer);
  }, [activeImageIndex]);

  return (
    <>
      <section
        data-scroll-target
        className="relative animate-appear flex items-center justify-center w-full group/imageEffect"
        id="showcase-section">
        <div className="absolute opacity-5 ease-in-out w-full h-full -z-10 ">
          <Image
            src={`${
              theme === "light"
                ? "/images/logo/logo-lightmode.svg"
                : "/images/logo/logo-darkmode.svg"
            }`}
            className="animate-rotate-left-logo md:w-screen"
            alt=""
            // width={2000}
            // height={2000}
            fill={true}
          />
        </div>
        <div className="flex animate-on-scroll justify-center opacity-0 md:flex-row h-[100vh] items-center gap-8 w-full max-w-6xl flex-col">
          <div className="w-full relative z-10 select-none md:self-center md:block flex self-end justify-center ml:mb-8 gap-x-3 md:gap-x-0">
            {content.map((showCase, index) => (
              <Showcase
                key={showCase.alt + index}
                index={index}
                activeImage={activeImageIndex}
                setActiveImage={setActiveImageIndex}
                content={content}
              />
            ))}

            <ThemedP className="mb-8 mt-24 hidden h-[72px] md:block">
              {content[activeImageIndex].paragraph}
            </ThemedP>
          </div>

          <div
            className={`justify-self-end z-10 grid items-center justify-center w-full transition-all 
                relative md:w-full sm:h-113 h-1/2 outline-offset-4 rounded-2xl overflow-hidden outline-2 
                outline-light-violet dark:outline-dark-lavender
                  `}>
            {content.map((image, index) => (
              <Image
                key={image.alt}
                src={image.src}
                alt={image.alt}
                width={700}
                height={700}
                className={`${
                  image.fileType === "svg"
                    ? "object-contain bg-dark-twilight p-8"
                    : "object-cover object-left-top"
                } absolute duration-500 transition-all rounded-[4px] w-full h-full ${
                  index === activeImageIndex ? "opacity-100" : "opacity-0"
                } `}
              />
            ))}
          </div>
          <ThemedP className="max-h-[48px] mb-8 block self-start md:hidden">
            {content[activeImageIndex].paragraph}
          </ThemedP>
        </div>
      </section>
    </>
  );
};

export const Showcase = ({ content, setActiveImage, activeImage, index }) => {
  if (content[index].type === "logo") {
    return null;
  } else {
    return (
      <div className="w-fit">
        <ShowCaseHeaderText>
          <span
            onMouseEnter={() => setActiveImage(index)}
            className={`cursor-pointer font-bold group md:block h-[60px] flex flex-col items-center align-middle
            text-light-violet
            dark:text-dark-lavender`}>
            <span
              className={`group-hover:text-light-violet dark:group-hover:text-dark-lavender 
                group-hover:opacity-100 transition-all duration-500 opacity-60 h1hidden ${
                  activeImage === index
                    ? "text-dark-lavender"
                    : "text-light-fog dark:text-dark-shadow"
                }`}>
              <br />
              Web
            </span>
            {content[index].type}
            {/* <div className={`${ activeImage === index ? "w-[106.5px]" : "w-0"}  h-0.5 transition-all bg-light-violet dark:bg-dark-lavender`} /> */}
          </span>
        </ShowCaseHeaderText>
      </div>
    );
  }
};
