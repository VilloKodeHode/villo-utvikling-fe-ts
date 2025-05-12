import { getDictionary } from "get-dictionary";
import { headers } from "next/headers";

import { EmploymentSection } from "./sections/EmploymentSection";
import { ClientsSection } from "./sections/ClientSection";
import { PageProps } from "app/interfaces/PageProps";
import { IntroSection } from "@components/molecyles/Sections";
import { TestemonialsSection } from "./sections/TestemonialsSection";

export default async function Home({ params }: PageProps) {
  const requestHeaders = await headers(); // Await headers()
  const langHeader = requestHeaders.get("x-language"); // Get language from middleware
  const lang: "no" | "en" =
    langHeader === "en" || langHeader === "no" ? langHeader : "no"; // Validate and cast

  const dictionary = await getDictionary(lang);
  const content = dictionary.portfolio;
  return (
    <>
      <IntroSection content={content} />
      <ClientsSection content={content.customer_projects} />
      <EmploymentSection content={content.employment} />
      <TestemonialsSection content={content.testimonials} />
    </>
  );
}
