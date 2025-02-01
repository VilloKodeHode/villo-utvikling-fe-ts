"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ThemedH2, ThemedP } from "@components/atoms/ThemedText";

export const ShowcaseSection = ({ dictionary }) => {
  const content = dictionary.showCaseList;
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const changeToNextImage = () => {
    return activeImageIndex === content.length - 1
      ? setActiveImageIndex(0)
      : setActiveImageIndex(activeImageIndex + 1);
  };

  // const changeToPrevImage = () =>
  //   activeImageIndex === 0
  //     ? setActiveImageIndex(content.length - 1)
  //     : setActiveImageIndex(activeImageIndex - 1);

  useEffect(() => {
    const timer = setTimeout(() => {
      changeToNextImage();
    }, 5000);
    return () => clearTimeout(timer);
  }, [activeImageIndex]);

  return (
    <>
      <section
        className="relative animate-on-scroll opacity-0 z-10 flex items-center justify-center w-full group/imageEffect"
        id="showcase-section"
      >
        {/* <div className="grid sm:grid-cols-2 h-[100vh] items-center gap-8 w-full max-w-6xl grid-cols-1 sm:grid-rows-1 grid-rows-3"></div> */}
          <div className="flex sm:flex-row h-[100vh] items-center gap-8 w-full max-w-6xl flex-col">
            <div className="w-full relative z-10 select-none sm:self-center self-end flex sm:block justify-center gap-x-3 md:gap-x-0">
              {content.map((showCase, index) => (
                <Showcase
                  key={showCase.alt + index}
                  index={index}
                  activeImage={activeImageIndex}
                  setActiveImage={setActiveImageIndex}
                  content={content}
                />
              ))}
  
              <ThemedP className="mb-8 hidden h-[72px] sm:block">
                {content[activeImageIndex].paragraph}
              </ThemedP>
            </div>

            <div
              className={`justify-self-end z-10 grid items-center justify-center w-full transition-all relative md:w-full h-full sm:h-[450px] outline-offset-4 rounded-2xl overflow-hidden outline-2 outline-light-primary dark:outline-dark-primary
                  `}
            >
              {content.map((image, index) => (
                <Image
                  key={image.alt}
                  src={image.src}
                  alt={image.alt}
                  width={700}
                  height={700}
                  className={`${
                    image.fileType === "svg"
                      ? "object-contain bg-dark-white20 p-8"
                      : "object-cover object-left-top"
                  } absolute duration-500  transition-all rounded-[4px] w-full h-full ${
                    index === activeImageIndex ? "opacity-100" : "opacity-0"
                  } `}
                />
              ))}
            </div>
            <ThemedP className="max-h-[48px] mb-8 block self-start sm:hidden">
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
      <ThemedH2 className="">
        <span
          onMouseEnter={() => setActiveImage(index)}
          className={`cursor-pointer group sm:block flex sm:flex-row flex-col items-center align-middle
            text-light-primary
            dark:text-dark-primary`}
        >
          <span
            className={`
              group-hover:text-light-primary dark:group-hover:text-dark-primary group-hover:opacity-100 transition-all duration-500 opacity-60 h-fit h1hidden ${
                activeImage === index
                  ? "text-dark-primary"
                  : "text-light-white20 dark:text-dark-black50"
              }`}
          >
            <br />
            Web
          </span>
          {content[index].type}
        </span>
      </ThemedH2>
    );
  }
};
