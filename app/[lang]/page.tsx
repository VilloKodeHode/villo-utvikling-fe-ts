import React, { Suspense } from "react";
import { getDictionary } from "@lib/get-dictionary";
import type { PageProps } from "@app-types/PageProps";
import { HeroSection } from "./sections/HeroSection";
import { setRequestLocale } from "next-intl/server";

const ShowcaseSection = React.lazy(() =>
  import("./sections/ShowcaseSection").then((module) => ({
    default: module.ShowcaseSection,
  }))
);
const ServicePageContent = React.lazy(() =>
  import("app/[lang]/services/sections/ServicePageContent").then((module) => ({
    default: module.ServicePageContent,
  }))
);

export default async function Home({ params }: PageProps) {
  const { lang } = await params;
  setRequestLocale(lang as any);
  const dictionary = await getDictionary(lang);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeroSection
        params={{ lang }}
        content={dictionary.heroSection}
      />
      <ShowcaseSection content={dictionary.showCaseList} />
      <ServicePageContent
        showOnScroll
        content={dictionary.service_card_section}
        params={{ lang }}
      />
    </Suspense>
  );
}
