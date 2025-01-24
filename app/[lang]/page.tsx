import { HeroSection } from "@components/sections/IndexPage/HeroSection";
import { PageProps } from "./interfaces/PageProps";
import { OfferSection } from "@components/sections/IndexPage/OfferSection";
import { ShowcaseSection } from "@components/sections/IndexPage/ShowcaseSection";
import { getDictionary } from "get-dictionary";
// import { getDictionary } from "get-dictionary";

export default async function Home({ params }: PageProps) {
const dictionary = await getDictionary(params.lang);
  // const dictionary = await getDictionary(params.lang);
  return (
    <>
      <HeroSection params={params} />
      <ShowcaseSection dictionary={dictionary} params={params} />
      <OfferSection params={params} />
    </>
  );
}
