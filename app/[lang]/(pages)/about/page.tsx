import { getDictionary } from "get-dictionary";
import { CompanyInfo } from "@pages/about/sections/CompanyInfoSection";
// import { IntroSection } from "@pages/about/sections/IntroSection";
import { PaletteSection } from "./sections/PaletteSection";
import { TextAndImageSection } from "@components/molecyles/Sections";

export default async function Home({ params }) {
  const dictionary = await getDictionary(params.lang);
  return (
    <>
      <CompanyInfo content={dictionary.companyInfo} />
      <TextAndImageSection content={dictionary.introInfo} />
      {/* <SkillsSection /> */}
      <PaletteSection />
      {/* <ProjectSection /> */}
      {/* <LetsGoCTA
        type="portfolio"
        engText="Check my portfolio"
        norText="Sjekk min portfølje"
        href="/portfolio"
      >
        {language === "Norwegian" ? "Portofølje" : "Portfolio"}
      </LetsGoCTA> */}
    </>
  );
}
