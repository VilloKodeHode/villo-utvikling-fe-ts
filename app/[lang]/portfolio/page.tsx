import { getDictionary } from "@lib/get-dictionary";
import { setRequestLocale } from "next-intl/server";

import { EmploymentSection } from "./sections/EmploymentSection";
import { ClientsSection } from "./sections/ClientSection";
import type { PageProps } from "@app-types/PageProps";
import { IntroSection } from "@components/molecyles/Sections";
import { TestemonialsSection } from "./sections/TestemonialsSection";

export default async function Home({ params }: PageProps) {
  const { lang } = await params;
  setRequestLocale(lang as any);
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
