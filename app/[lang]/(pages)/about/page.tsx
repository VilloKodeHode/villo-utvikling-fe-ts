import { getDictionary } from "get-dictionary";
import { CompanyInfo } from "@pages/about/sections/CompanyInfoSection";
import { PaletteSection } from "./sections/PaletteSection";
import { TextAndImageSection } from "@components/molecyles/Sections";
import { SkillsSection } from "./sections/SkillsSection";
import { ProjectSection } from "./sections/ProjectSection";

export default async function Home({ params }) {
  const dictionary = await getDictionary(params.lang);
  return (
    <>
      <CompanyInfo content={dictionary.companyInfo} />
      <TextAndImageSection content={dictionary.introInfo} />
      <SkillsSection content={dictionary.skills} />
      <PaletteSection />
      <ProjectSection content={dictionary.personal_projects} />
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
