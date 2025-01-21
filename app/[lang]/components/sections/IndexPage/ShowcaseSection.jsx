import Image from "next/image";
import { ResponsiveH2, ThemedP } from "../../atoms/ResponsiveText";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/context/UserContext";
import { SHOWCASE_LIST } from "../../../data/showcase_data";

export const ShowcaseSection = () => {
  const { language, theme } = useContext(UserContext);
  const [currentWeb, setCurrentWeb] = useState("/images/showcase/HeroLogo.png");
  const [isAnimating, setIsAnimating] = useState(false);

  //TODO: Reduser koden (diss Sabine etterpå)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        switch (currentWeb) {
          case SHOWCASE_LIST.main.path:
            setCurrentWeb(SHOWCASE_LIST.design.path);
            break;
          case SHOWCASE_LIST.design.path:
            setCurrentWeb(SHOWCASE_LIST.development.path);
            break;
          case SHOWCASE_LIST.development.path:
            setCurrentWeb(SHOWCASE_LIST.content.path);
            break;
          case SHOWCASE_LIST.content.path:
            setCurrentWeb(SHOWCASE_LIST.main.path);
            break;
          default:
            setCurrentWeb(SHOWCASE_LIST.main.path);
        }
        setIsAnimating(false);
      }, 500); // Adjust the duration here
    }, 5500);

    return () => clearInterval(interval);
  }, [currentWeb]);

  const imageWidth = currentWeb === SHOWCASE_LIST.main.path ? 400 : 500;
  const imageHeight = currentWeb === SHOWCASE_LIST.main.path ? 400 : 300;

  return (
    <>
      <section
        className="relative animate-on-scroll opacity-0 z-10 flex items-center justify-center w-full h-[100vh] group/imageEffect"
        id="CTAOneSection"
      >
        <div className="flex items-center justify-center h-full m-0">
          <div className="flex flex-col items-center justify-center w-full max-w-6xl md:flex-row">
            <div className="w-full md:w-1/2">
              <div className="relative z-10 select-none">
                <ResponsiveH2 className="mb-8 ">
                  <Showcase
                    setCurrentWeb={setCurrentWeb}
                    currentWeb={currentWeb}
                    type="design"
                  />
                  <Showcase
                    setCurrentWeb={setCurrentWeb}
                    currentWeb={currentWeb}
                    type="development"
                  />
                  <Showcase
                    setCurrentWeb={setCurrentWeb}
                    currentWeb={currentWeb}
                    type="content"
                  />
                </ResponsiveH2>
                <ThemedP className="md:max-w-md max-h-[48px] mb-8">
                  {currentWeb === SHOWCASE_LIST.main.path
                    ? language === "Norwegian"
                      ? SHOWCASE_LIST.main.norParagraph
                      : SHOWCASE_LIST.main.engParagraph
                    : currentWeb === SHOWCASE_LIST.design.path
                    ? language === "Norwegian"
                    ? SHOWCASE_LIST.design.norParagraph
                    : SHOWCASE_LIST.design.engParagraph
                    : currentWeb === SHOWCASE_LIST.development.path
                    ? language === "Norwegian"
                    ? SHOWCASE_LIST.development.norParagraph
                    : SHOWCASE_LIST.development.engParagraph
                    : currentWeb === SHOWCASE_LIST.content.path
                    ? language === "Norwegian"
                    ? SHOWCASE_LIST.content.norParagraph
                    : SHOWCASE_LIST.content.engParagraph
                    : null}
                </ThemedP>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className={`relative z-10 grid items-center justify-center`}>
                <div
                  className={`transition-all border border-b-8 border-r-8 w-fit md:h-[450px] rounded-xl ${
                    theme === "light"
                      ? "border-Villo-light-primary"
                      : "border-Villo-dark-primary"
                  }  `}
                >
                  <Image
                    src={currentWeb}
                    alt={
                      currentWeb === SHOWCASE_LIST.main.path
                        ? "Villo utvikling"
                        : currentWeb === SHOWCASE_LIST.design.path
                        ? "Web design"
                        : currentWeb === SHOWCASE_LIST.development.path
                        ? "Web utvikling"
                        : currentWeb === SHOWCASE_LIST.content.path
                        ? "Web innhold"
                        : "Image showing the services of Villo utvikling"
                    }
                    width={imageWidth}
                    height={imageHeight}
                    className={`object-cover duration-500 bg-Villo-dark-primary transition-all rounded-[4px] rounded-tl-xl xl:w-[550px] lg:w-[500px] md:w-full md:h-full h-[300px] ${
                      isAnimating ? "opacity-0" : "opacity-100"
                    } `}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const Showcase = ({ type, currentWeb, setCurrentWeb }) => {
  const { language, theme } = useContext(UserContext);
  const showcase = SHOWCASE_LIST[type];
  return (
    <span
      onMouseEnter={() => setCurrentWeb(showcase.path)}
      className={`cursor-pointer group  ${
        theme === "light"
          ? "text-Villo-light-primary"
          : "text-Villo-dark-primary"
      }`}
    >
      <span
        className={` ${
          theme === "light"
            ? "group-hover:text-Villo-light-primary"
            : "group-hover:text-Villo-dark-primary"
        }  group-hover:opacity-100 transition-all duration-500 opacity-80  h1hidden ${
          currentWeb === showcase.path
            ? "text-Villo-dark-primary"
            : theme === "light"
            ? "text-Villo-light-white20"
            : "text-Villo-dark-black50"
        }`}
      >
        <br />
        Web
      </span>
      {language === "Norwegian" ? showcase.norText : showcase.engText}
    </span>
  );
};
