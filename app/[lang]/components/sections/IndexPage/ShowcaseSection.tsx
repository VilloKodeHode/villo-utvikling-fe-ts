"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ThemedH2, ThemedP } from "@components/atoms/ThemedText";

export const ShowcaseSection = ({ dictionary }) => {
  const content = dictionary.showCaseList;
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  // const [activeImageType, setActiveImageType] = useState(content[0].type);
  // const [isAnimating, setIsAnimating] = useState(false);

  const clickNext = () => {
    return activeImageIndex === content.length - 1
      ? setActiveImageIndex(0)
      : setActiveImageIndex(activeImageIndex + 1);
  };

  // const clickPrev = () =>
  //   activeImageIndex === 0
  //     ? setActiveImageIndex(content.length - 1)
  //     : setActiveImageIndex(activeImageIndex - 1);

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 3000);
    return () => clearTimeout(timer);
  }, [activeImageIndex]);

  return (
    <>
      <section
        className="relative animate-on-scroll opacity-0 z-10 flex items-center justify-center w-full h-[100vh] group/imageEffect"
        id="showcase-section"
      >
        <div className="grid place-content-center h-full m-0">
          <div className="grid grid-cols-2 gap-8 w-full max-w-6xl md:flex-row">
            <div className="w-full relative z-10 select-none justify-self-start">
              <ThemedH2 className="mb-8 ">
                {content.map((showCase, index) => (
                  <Showcase
                    key={showCase.alt + index}
                    index={index}
                    activeImage={activeImageIndex}
                    setActiveImage={setActiveImageIndex}
                    content={content}
                  />
                ))}
              </ThemedH2>
              <ThemedP className="max-h-[48px] mb-8 ">
                {content[activeImageIndex].paragraph}
              </ThemedP>
            </div>
            {/* <div
              className={``}
            > */}
              <div
                className={`justify-self-end z-10 grid items-center justify-center w-full transition-all relative md:w-[450px] md:h-[450px] outline-offset-4 rounded-2xl overflow-hidden outline-2 outline outline-Villo-light-primary dark:outline-Villo-dark-primary
                  `}
              >
                {content.map((image, index) => (
                  <Image
                    key={image.alt}
                    src={image.src}
                    alt={image.alt}
                    width={700}
                    height={700}
                    className={`${image.fileType === "svg" ? "object-contain bg-Villo-dark-white20 p-8" : "object-cover object-left-top"} absolute duration-500  transition-all rounded-[4px] xl:w-[550px] ease-linear lg:w-[500px] md:w-full md:h-full h-[300px] ${
                      index === activeImageIndex ? "opacity-100" : "opacity-0"
                    } `}
                  />
                ))}
              </div>
            {/* </div> */}
          </div>
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
      <span
        onMouseEnter={() => setActiveImage(index)}
        className={`cursor-pointer group
            text-Villo-light-primary
            dark:text-Villo-dark-primary`}
      >
        <span
          className={`
              group-hover:text-Villo-light-primary dark:group-hover:text-Villo-dark-primary group-hover:opacity-100 transition-all duration-500 opacity-60  h1hidden ${
                activeImage === index
                  ? "text-Villo-dark-primary"
                  : "text-Villo-light-white20 dark:text-Villo-dark-black50"
              }`}
        >
          <br />
          Web
        </span>
        {content[index].type}
      </span>
    );
  }
};
