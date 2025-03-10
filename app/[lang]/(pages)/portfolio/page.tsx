import { getDictionary } from "get-dictionary";

import { ThemedH1, ThemedP } from "@components/atoms/ThemedText";
import { EmploymentSection } from "./sections/EmploymentSection";
import { ClientsSection } from "./sections/ClientSection";

export default async function Home({ params }) {
  const dictionary = await getDictionary(params.lang);
  const content = dictionary.portfolio;
  return (
    <>
      <div className="pt-12">
        <ThemedH1>{content.title} </ThemedH1>
        <ThemedP className="pt-8 mx-auto text-left max-w-7xl">
          {content.description}
        </ThemedP>
      </div>
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
