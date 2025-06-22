import {
  AltIntroSection,
  TextAndImageSection,
} from "@components/molecyles/Sections";
import { SkillsSection } from "./sections/SkillsSection";
import { ProjectSection } from "./sections/ProjectSection";

export default function Home() {
  return (
    <>
      {/* <RubicksCubeScene /> */}
      <AltIntroSection />
      <TextAndImageSection />
      <SkillsSection />
      {/* <PaletteSection /> */}
      <ProjectSection />
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
