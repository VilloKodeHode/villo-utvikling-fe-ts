import { getDictionary } from "get-dictionary";
import { AltIntroSection, TextAndImageSection } from "@components/molecyles/Sections";
import { SkillsSection } from "./sections/SkillsSection";
import { ProjectSection } from "./sections/ProjectSection";
import { PageProps } from "@interfaces/PageProps";

export default async function Home({ params }: PageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return (
    <>
    
      <AltIntroSection content={dictionary.companyInfo} />
      <TextAndImageSection content={dictionary.introInfo} />
      <SkillsSection content={dictionary.skills} />
      {/* <PaletteSection /> */}
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
