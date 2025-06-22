import React, { Suspense } from "react";
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

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeroSection />
      <ShowcaseSection />
      <ServicePageContent showOnScroll />
    </Suspense>
  );
}
