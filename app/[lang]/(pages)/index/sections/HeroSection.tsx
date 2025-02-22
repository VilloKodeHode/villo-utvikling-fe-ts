import Link from "next/link";
import { ThemedH1, ThemedP, ThemedPLarge } from "@components/atoms/ThemedText";
import { ArrowCTA } from "@components/atoms/Buttons";
import { ScrollToSectionButton } from "@components/atoms/ScrolltoSectionButton";

export const HeroSection = async ({ content, params }) => {
  return (
    <>
      <section
        className="grid items-center max-w-6xl justify-center w-full min-h-[calc(100dvh-352px)]"
        id="HeroSection"
      >
        <div className="animate-Page-appear-right">
          <div className="grid gap-8">
            <ThemedP className={`w-fit`}>{content.slogan}</ThemedP>
            <ThemedH1 className="">{content.title}</ThemedH1>
            <ThemedPLarge className="">{content.subtitle}</ThemedPLarge>
            <div className="grid justify-start grid-flow-col gap-8">
              <div className=" flex justify-start items-center">
                <Link href={`/${params.lang}/contact`}>
                  <ArrowCTA>{content.cta}</ArrowCTA>
                </Link>
              </div>
              <div className=" flex justify-start items-center max-w-fit">
                <ScrollToSectionButton>{content.ctaTwo}</ScrollToSectionButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
