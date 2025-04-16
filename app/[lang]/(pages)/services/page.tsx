import { ServicePageContent } from "@pages/services/sections/ServicePageContent";
import {PageProps } from "@interfaces/PageProps";
import { getDictionary } from "get-dictionary";

export default async function Home({ params }: PageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return (
    <>
      <ServicePageContent
        showOnScroll={false}
        content={dictionary.service_cards}
        params={{ lang }}
      />
    </>
  );
}
