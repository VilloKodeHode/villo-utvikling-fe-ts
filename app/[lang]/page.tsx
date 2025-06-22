export const metadata = {
  title: "Villo Utvikling - Hjem",
  description:
    "Velkommen til Villo Utvikling. Profesjonell frontend- og webutvikling for bedrifter, klubber og privatpersoner.",
};

import React, { Suspense } from "react";
import { getDictionary } from "get-dictionary";
import { PageProps } from "../interfaces/PageProps";

const HeroSection = React.lazy(() =>
  import("app/[lang]/(pages)/index/sections/HeroSection").then(
    (module) => ({ default: module.HeroSection })
  )
);
const ShowcaseSection = React.lazy(() =>
  import("app/[lang]/(pages)/index/sections/ShowcaseSection").then(
    (module) => ({ default: module.ShowcaseSection })
  )
);
const ServicePageContent = React.lazy(() =>
  import("app/[lang]/(pages)/services/sections/ServicePageContent").then(
    (module) => ({ default: module.ServicePageContent })
  )
);
const FAQSection = React.lazy(() =>
  import("app/[lang]/(pages)/index/sections/FAQSection").then(
    (module) => ({ default: module.FAQSection })
  )
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
      <FAQSection content={dictionary.faqSection} />
    </Suspense>
  );
}
