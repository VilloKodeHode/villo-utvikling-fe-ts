import { ServicePageContent } from "@components/sections/ServicePageContent";
import { getDictionary } from "get-dictionary";
import { Locale } from "i18next.config";

interface PageProps {
  params: {
    lang: Locale;     // Dynamically passed language from URL
  };
}

export default async function Home({params}: PageProps) {
  const dictionary = await getDictionary(params.lang);
    return (
      <>
     <ServicePageContent dictionary={dictionary} params={params}/>
  
      </>
    );
  }
  