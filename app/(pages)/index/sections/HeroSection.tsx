import Link from "next/link";
import { ThemedH1, ThemedP, ThemedPLarge } from "@components/atoms/ThemedText";
import { ArrowCTA } from "@components/atoms/Buttons";
import { ScrollToSectionButton } from "@components/atoms/ScrolltoSectionButton";
import { ComponentPropsWithParams } from "app/interfaces/PageProps";

export const HeroSection = ({ params, content }: ComponentPropsWithParams) => {
  const { lang } = params;

  return (
    <section
      className="grid items-center max-w-6xl justify-center w-full min-h-[calc(100dvh-160px)]"
      id="HeroSection">
      <div className="animate-page-appear-right">
        <div className="grid sm:gap-8 gap-4">
          <ThemedP className="w-fit">{content?.slogan}</ThemedP>
          <ThemedH1>{content?.title}</ThemedH1>
          {/* <div className="md:block hidden"> */}
          <ThemedPLarge>{content?.subtitle}</ThemedPLarge>
          {/* </div> */}
          <div className="grid justify-start items-center grid-flow-col ml:gap-8 gap-4">
            <Link
              aria-label={lang === "no" ? "kontakt oss" : "contact us"}
              className="h-fit"
              href={`/${lang}/contact`}>
              <ArrowCTA>{content?.cta}</ArrowCTA>
            </Link>
            <ScrollToSectionButton>{content?.ctaTwo}</ScrollToSectionButton>
          </div>
        </div>
      </div>
    </section>
  );
};
