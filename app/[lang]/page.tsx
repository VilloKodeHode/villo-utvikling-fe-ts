import { HeroSection } from "app/[lang]/(pages)/index/sections/HeroSection";
import { PageProps } from "../interfaces/PageProps";
import { ShowcaseSection } from "app/[lang]/(pages)/index/sections/ShowcaseSection";
import { getDictionary } from "get-dictionary";
import { ServicePageContent } from "app/[lang]/(pages)/services/sections/ServicePageContent";
import { SettingIcon } from "@components/atoms/SvgIcons";

export default async function Home({ params }: PageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <>
    
      <HeroSection params={{ lang }} content={dictionary.heroSection} />
      <ShowcaseSection content={dictionary.showCaseList} />
      <ServicePageContent
        showOnScroll
        content={dictionary.service_cards}
        params={{ lang }}
      />
    </>
  );
}