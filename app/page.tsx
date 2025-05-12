import React, { Suspense } from "react";
import { getDictionary } from "get-dictionary";
import { PageProps } from "./interfaces/PageProps";
import { cookies } from "next/headers";
import { headers } from "next/headers";

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

export default async function Home() {
  const cookieStore = await cookies(); // Await cookies()
  const requestHeaders = await headers(); // Await headers()
  const langHeader = requestHeaders.get("x-language"); // Get language from middleware
  const lang: "no" | "en" =
    langHeader === "en" || langHeader === "no"
      ? langHeader
      : (cookieStore.get("lang")?.value as "no" | "en") || "no"; // Validate and cast

  console.log("[DEBUG] lang in Home:", lang); // Debugging log

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
