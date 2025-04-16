import Link from "next/link";
import { ThemedH1, ThemedP, ThemedPLarge } from "@components/atoms/ThemedText";
import { ArrowCTA } from "@components/atoms/Buttons";
import { ScrollToSectionButton } from "@components/atoms/ScrolltoSectionButton";
import { ComponentProps } from "@interfaces/PageProps";
import { getDictionary } from "get-dictionary";

export const HeroSection = async ({ params }: ComponentProps) => {
  // export const HeroSection = async ({ content, params }: ComponentProps) => {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return (
    <>
      <section
        className="grid items-center max-w-6xl justify-center w-full min-h-[calc(100dvh-160px)]"
        id="HeroSection">
        <div className="animate-Page-appear-right">
          <div className="grid gap-8">
            <ThemedP className={`w-fit`}>
              {dictionary.heroSection?.slogan}
            </ThemedP>
            <ThemedH1 className="">{dictionary.heroSection?.title}</ThemedH1>
            <ThemedPLarge className="">
              {dictionary.heroSection?.subtitle}
            </ThemedPLarge>
            <div className="grid justify-start items-center grid-flow-col ml:gap-8 gap-4">
              {/* <div className="flex justify-start items-end"> */}
              <Link
                className="h-fit"
                href={`/${lang}/contact`}>
                <ArrowCTA>{dictionary.heroSection?.cta}</ArrowCTA>
              </Link>
              {/* </div> */}

              {/* <div className="flex justify-start items-center"> */}
              <ScrollToSectionButton>
                {dictionary.heroSection?.ctaTwo}
              </ScrollToSectionButton>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
