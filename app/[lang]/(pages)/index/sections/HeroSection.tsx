import Link from "next/link";
import { ThemedH1, ThemedP, ThemedPLarge } from "@components/atoms/ThemedText";
import { ArrowCTA } from "@components/atoms/Buttons";
import { ScrollToSectionButton } from "@components/atoms/ScrolltoSectionButton";
import {ComponentPropsWithParams } from "@interfaces/PageProps";


export const HeroSection = ({ params, content }: ComponentPropsWithParams) => {
  const { lang } = params;

  return (
    <section
      className="grid items-center max-w-6xl justify-center w-full min-h-[calc(100dvh-160px)]"
      id="HeroSection">
      <div className="animate-Page-appear-right">
        <div className="grid gap-8">
          <ThemedP className="w-fit">{content?.slogan}</ThemedP>
          <ThemedH1>{content?.title}</ThemedH1>
          <ThemedPLarge>{content?.subtitle}</ThemedPLarge>
          <div className="grid justify-start items-center grid-flow-col ml:gap-8 gap-4">
            <Link className="h-fit" href={`/${lang}/contact`}>
              <ArrowCTA>{content?.cta}</ArrowCTA>
            </Link>
            <ScrollToSectionButton>
              {content?.ctaTwo}
            </ScrollToSectionButton>
          </div>
        </div>
      </div>
    </section>
  );
};
