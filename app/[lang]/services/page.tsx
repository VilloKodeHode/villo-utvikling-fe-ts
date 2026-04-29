import { ServicePageContent } from "./sections/ServicePageContent";
import { setRequestLocale } from "next-intl/server";
import type { PageProps } from "@app-types/PageProps";
import { getDictionary } from "@lib/get-dictionary";

export default async function Home({ params }: PageProps) {
  const { lang } = await params;
  setRequestLocale(lang as any);
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
