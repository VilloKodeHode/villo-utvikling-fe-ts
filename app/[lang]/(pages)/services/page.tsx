import { ServicePageContent } from "@components/sections/ServicePage/ServicePageContent";
import { PageProps } from "app/[lang]/interfaces/PageProps";
import { getDictionary } from "get-dictionary";

export default async function Home({ params }: PageProps) {
  const dictionary = await getDictionary(params.lang);
  // console.log(dictionary)
  return (
    <>
      <ServicePageContent
        showOnScroll={false}
        dictionary={dictionary}
        params={params}
      />
    </>
  );
}
