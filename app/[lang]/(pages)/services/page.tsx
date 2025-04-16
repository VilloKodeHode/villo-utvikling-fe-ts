// import { getDictionary } from "get-dictionary";
import { ServicePageContent } from "@pages/services/sections/ServicePageContent";
import { DynamicPageProps } from "@interfaces/PageProps";

export default async function Home({ params }: DynamicPageProps) {
  // const { lang } = await params;
  // const dictionary = await getDictionary(lang);
  return (
    <>
      <ServicePageContent
        showOnScroll={false}
        // content={dictionary.service_cards}
        params={params}
      />
    </>
  );
}
