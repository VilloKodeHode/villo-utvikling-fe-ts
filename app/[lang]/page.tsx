import { HeroSection } from "app/[lang]/(pages)/index/sections/HeroSection";
import { PageProps } from "./interfaces/PageProps";
import { ShowcaseSection } from "app/[lang]/(pages)/index/sections/ShowcaseSection";
import { getDictionary } from "get-dictionary";
import { ServicePageContent } from "app/[lang]/(pages)/services/sections/ServicePageContent";
// import { getDictionary } from "get-dictionary";

export default async function Home({ params }: PageProps) {
  const dictionary = await getDictionary(params.lang);
  return (
    <>
      <HeroSection content={dictionary.heroSection} />
      <ShowcaseSection content={dictionary.showCaseList} />
      <ServicePageContent
        showOnScroll={true}
        content={dictionary.service_cards}
        params={params}
      />
    </>
  );
}
