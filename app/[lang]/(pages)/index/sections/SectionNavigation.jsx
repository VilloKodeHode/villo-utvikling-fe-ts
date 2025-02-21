import { useContext } from "react";
import { UserContext } from "@/context/UserContext";

export const SectionNavigation = () => {
  const { theme, language } = useContext(UserContext);
  const generateSpans = (text, href) => {
    return (
      <a href={href} className="my-2 h-fit min-w-[300px]">
        {text.split("").map((char, index) => (
          <>
            <span
              key={index + char}
              className=" group drop-shadow-[10px_10px_0px_#383844] hover:drop-shadow-[10px_10px_0px_#858ee0] transition-all duration-500 ease-in-out hover:text-light-violet"
            >
              {char}
              <span className="absolute left-0 w-full border-2 border-dark-lavender transition-all duration-500 ease-in-out top-1/4 h-[60%] hover:scale-110"></span>
            </span>
          </>
        ))}
      </a>
    );
  };
  return (
    <>
      <section
        className="relative flex z-10 items-center justify-end w-full h-[calc(100vh-152px)]"
        id="SectionNavigation"
      >
        <div className="flex flex-col  z-20 tracking-widest sm:text-[70px] ml:text-[70px] mm:text-[50px] text-[40px] justify-end items-end text-end font-extrabold px-12 text-dark-twilight">
          {generateSpans("WHO?", "#HeroSection")}
          {generateSpans("WHAT?", "#CTAOneSection")}
          {generateSpans("WHY?", "#OfferSection")}
        </div>
      </section>
    </>
  );
};
