import { HeroSection } from "@components/sections/IndexPage/HeroSection";
import { PageProps } from "./interfaces/PageProps";
import { ShowcaseSection } from "@components/sections/IndexPage/ShowcaseSection";
import { getDictionary } from "get-dictionary";
import { ServicePageContent } from "@components/sections/ServicePage/ServicePageContent";
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
