import { CompanyInfo } from "@components/sections/AboutPage/CompanyInfoSection";
import { IntroSection } from "@components/sections/AboutPage/IntroSection";
import { getDictionary } from "get-dictionary";


export default async function Home({params}) {
   const dictionary = await getDictionary(params.lang);
  return (
    <>
        <CompanyInfo content={dictionary.companyInfo}  />
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
