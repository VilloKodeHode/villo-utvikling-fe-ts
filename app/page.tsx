import React, { Suspense } from "react";
import { getDictionary } from "get-dictionary";
import { PageProps } from "./interfaces/PageProps";

const HeroSection = React.lazy(() =>
  import("app/(pages)/index/sections/HeroSection").then((module) => ({
    default: module.HeroSection,
  }))
);
const ShowcaseSection = React.lazy(() =>
  import("app/(pages)/index/sections/ShowcaseSection").then((module) => ({
    default: module.ShowcaseSection,
  }))
);
const ServicePageContent = React.lazy(() =>
  import("app/(pages)/services/sections/ServicePageContent").then((module) => ({
    default: module.ServicePageContent,
  }))
);

export default async function Home({ params }: PageProps) {
  const { lang } = await params;
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
