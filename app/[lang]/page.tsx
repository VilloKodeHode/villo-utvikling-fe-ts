import { HeroSection } from "app/[lang]/(pages)/index/sections/HeroSection";
import { PageProps } from "./interfaces/PageProps";
import { ShowcaseSection } from "app/[lang]/(pages)/index/sections/ShowcaseSection";
import { getDictionary } from "get-dictionary";
import { ServicePageContent } from "app/[lang]/(pages)/services/sections/ServicePageContent";
// import { getDictionary } from "get-dictionary";

export default async function Home({ params }: PageProps) {
  const dictionary = await getDictionary(params.lang);
  // const dictionary = await getDictionary(params.lang);
  return (
    <>
      <HeroSection params={params} />
      <ShowcaseSection dictionary={dictionary} />
      {/* <OfferSection dictionary={dictionary} params={params} /> */}
      <ServicePageContent
        showOnScroll={true}
        dictionary={dictionary}
        params={params}
      />
    </>
  );
}
