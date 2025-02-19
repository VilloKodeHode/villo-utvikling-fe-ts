import Link from "next/link";
import { ThemedH1, ThemedH5, ThemedP } from "@components/atoms/ThemedText";
import { ArrowCTA } from "@components/atoms/Buttons";
import { ScrollToSectionButton } from "@components/atoms/ScrolltoSectionButton";

export const HeroSection = async ({ dictionary }) => {
  const content = dictionary.heroSection;
  return (
    <>
      <div className="flex justify-center w-full h-full">
        <section
          className=" max-w-6xl z-10 flex items-center justify-center w-full min-h-[calc(100dvh-160px)] bg-center bg-cover"
          id="HeroSection"
        >
          <div className="max-w-6xl animate-Page-appear-right">
            <div className="relative z-50 text-left">
              <ThemedP className={`mb-8 text-left w-fit`}>
                {content.slogan}
              </ThemedP>
              <ThemedH1 className="mb-8">
                <span>
                  {content.title}
                </span>{" "}
              </ThemedH1>
              <ThemedH5 className="mb-8 font-normal text-left">
                {content.subtitle}
              </ThemedH5>
              <div className="grid justify-start grid-flow-col gap-8">
                <div className="h-[60px] flex justify-start items-center">
                  <Link href="/contact">
                    <ArrowCTA>
                      {content.cta}
                    </ArrowCTA>
                  </Link>
                </div>
                <div className="h-[60px] flex justify-start items-center max-w-fit">
                  <ScrollToSectionButton>
                    {content.ctaTwo}
                  </ScrollToSectionButton>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <THREESpace /> */}
      </div>
    </>
  );
};
