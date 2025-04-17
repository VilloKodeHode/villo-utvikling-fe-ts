import { getDictionary } from "get-dictionary";

import { ThemedH1, ThemedP } from "@components/atoms/ThemedText";
import { EmploymentSection } from "./sections/EmploymentSection";
import { ClientsSection } from "./sections/ClientSection";
import { PageProps } from "@interfaces/PageProps";
import { IntroSection } from "@components/molecyles/Sections";

export default async function Home({ params }: PageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const content = dictionary.portfolio;
  //TODO fix page layout here
  return (
    <>
      <IntroSection content={content} />
      <ClientsSection content={content.customer_projects} />
      <EmploymentSection content={content.employment} />

      {/* <QuotesSection /> */}
      {/* <LetsGoCTA
        type="email"
        engText="Make me you coworker!"
        norText="Få meg som medarbeider!"
        href="/contact"
      >
        {language === "Norwegian" ? "Kontakt meg" : "Contact me"}
      </LetsGoCTA> */}
    </>
  );
}
