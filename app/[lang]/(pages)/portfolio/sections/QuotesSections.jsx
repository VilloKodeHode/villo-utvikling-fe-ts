import Image from "next/image";
import {
  ResponsiveThemedH2,
  ResponsiveThemedH5,
  ResponsiveThemedP,
} from "../../atoms/ResponsiveText";
import { QUOTES_LIST } from "@/data/quotes_list";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";

export const QuotesSection = () => {
  const { theme, language } = useContext(UserContext);
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-center">
        <ResponsiveThemedH2 className="px-12 text-center">
          {language === "Norwegian" ? "Attester" : "Testimonials"}
        </ResponsiveThemedH2>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {QUOTES_LIST.map((quote) => (
          <>
            <div
              className={`flex 2xl:flex-row lg:flex-col gap-4 p-2 rounded-xl  ${theme === "light"
                ? "bg-Villo-light-white10"
                : "bg-Villo-dark-black85"
                } `}
            >
              <div
                key={quote.id}
                className={`transition-all border overflow-hidden border-b-8 border-r-8 w-fit lg:h-fit rounded-xl ${theme === "light"
                  ? "border-Villo-light-primary"
                  : "border-Villo-dark-primary"
                  }  `}
              >
                <Image
                  className={`object-cover object-[25%_30%] duration-500  bg-Villo-dark-primary transition-all rounded-[4px] md:w-[300px] md:h-[300px] h-full w-[250px]`}
                  src={quote.imageUrl}
                  alt={quote.person}
                  width={300}
                  height={300}
                />
              </div>
              <div className="relative z-10 flex flex-col justify-between p-1">
                <Image
                  className={`absolute h-full -z-10 transform -translate-x-1/2 -translate-y-1/2 ${theme === "light" ? "opacity-5" : "opacity-20"} top-1/2 left-1/2`}
                  src={quote.logo}
                  alt="company logo"
                  width={300}
                  height={300}
                />
                <div className="flex flex-col justify-between h-full">
                  <ResponsiveThemedP className="z-20 max-w-xs italic">
                    {language === "Norwegian" ? quote.norQuote : quote.engQuote}
                  </ResponsiveThemedP>
                  <div>
                    <ResponsiveThemedH5 className="z-20 max-w-xs font-normal">
                      - {quote.person}
                    </ResponsiveThemedH5>
                    <ResponsiveThemedH5 className="z-20 max-w-xs pl-4 font-thin">
                      {language === "Norwegian"
                        ? quote.norPersonTitle
                        : quote.engPersonTitle}
                    </ResponsiveThemedH5>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
