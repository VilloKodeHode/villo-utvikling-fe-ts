import { getDictionary } from "get-dictionary";
import { ServicePageContent } from "@pages/services/sections/ServicePageContent";
import { PageProps } from "@interfaces/PageProps";

export default async function Home({ params }: PageProps,) {
  const dictionary = await getDictionary(params.lang);
  return (
    <>
      <ServicePageContent
        showOnScroll={false}
        content={dictionary.service_cards}
        params={params}
      />
    </>
  );
}
