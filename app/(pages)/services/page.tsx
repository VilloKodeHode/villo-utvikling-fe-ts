import { ServicePageContent } from "app/(pages)/services/sections/ServicePageContent";
import { PageProps } from "app/interfaces/PageProps";
import { getDictionary } from "get-dictionary";

export default async function Home({ params }: PageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return (
    <>
      <div className="grid items-center justify-center w-full min-h-[calc(100dvh-160px)]">
        <ServicePageContent
          showOnScroll={false}
          content={dictionary.service_card_section}
          params={{ lang }}
        />
      </div>
    </>
  );
}
