import { getDictionary } from "get-dictionary";
import { CompanyInfo } from "./sections/CompanyInfoSection";
import { IntroSection } from "./sections/IntroSection";

export default async function Home({ params }) {
  const dictionary = await getDictionary(params.lang);
  return (
    <>
      <CompanyInfo content={dictionary.companyInfo} />
      <IntroSection content={dictionary.introInfo} />
      {/* <SkillsSection /> */}
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
