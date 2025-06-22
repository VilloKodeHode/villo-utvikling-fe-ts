export const metadata = {
  title: "Portefølje - Villo Utvikling",
  description: "Se utvalgte prosjekter, referanser og kundeprosjekter levert av Villo Utvikling.",
};

import { getDictionary } from "get-dictionary";

import { EmploymentSection } from "./sections/EmploymentSection";
import { ClientsSection } from "./sections/ClientSection";
import { PageProps } from "app/interfaces/PageProps";
import { IntroSection } from "@components/molecyles/Sections";
import { TestemonialsSection } from "./sections/TestemonialsSection";

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
      <TestemonialsSection content={content.testimonials} />
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
