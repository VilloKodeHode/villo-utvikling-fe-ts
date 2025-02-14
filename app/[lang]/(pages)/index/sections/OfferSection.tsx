import Link from "next/link";
import { ThemedH2, ThemedH4, ThemedP } from "@components/atoms/ThemedText";
import { ReadMoreButton } from "@components/atoms/Buttons";
import { PageProps } from "@interfaces/PageProps";

export const OfferSection = async ({ params }: PageProps) => {
  // const content = dictionary.service_cards;
  return (
    <section
      id="OfferSection"
      className={`w-screen overflow-x-hidden py-12 sm:px-6 px-4 lg:px-12 bg-light-fog dark:bg-dark-onyx
      `}
    >
      <div className="mx-auto max-w-7xl ">
        <div className="text-center">
          <ThemedH2 className="text-center">
            {params.lang === "no"
              ? "Villo Utvikling tilbyr:"
              : "Villo Development offers:"}
          </ThemedH2>
        </div>
        <div className="flex justify-center mt-10 opacity-0 animate-on-scroll">
          <div className="flex flex-wrap items-center justify-center md:gap-6">
            <OfferSectionCard
              params={params}
              norTitle="Høykvalitets nettsider"
              engTitle="High-Quality websites"
              norText="Med design som følger de siste trendene og den nyeste teknologien for en moderne nettside."
              engText="With design that follows the current trends and the latest the technology for a modern website."
              href="/services_provided/website"
            />
            <OfferSectionCard
              params={params}
              norTitle="Søkemotor-optimalisering"
              engTitle="Search engine optimization"
              norText="Øk trafikken til din nettside med et bredt spekter av SEO (Søkemotoroptimalisering) tjenester."
              engText="Increase traffic to your website with a comprehensive range of SEO (Search Engine Optimization) services."
              href="/services_provided/SEO"
            />
            <OfferSectionCard
              params={params}
              norTitle="Engasjerende nettinnhold"
              engTitle="Engaging webcontent"
              norText="Engasjerende opplevelser på nettet som kombinerer kraftfulle ord med iøynefallende visuelle elementer."
              engText="Captivating experiences that combine powerful words with eye-catching visuals."
              href="/services_provided/webcontent"
            />
            <OfferSectionCard
              params={params}
              norTitle="Content Management System (CMS)"
              engTitle="Content Management System (CMS)"
              norText="Integrer et innholdshånderingssystem for at du selv skal kunne styre innholdet på din nettside."
              engText="Integrate a content management system so that you can manage your content on your website."
              href="/services_provided/CMS"
            />
            <OfferSectionCard
              params={params}
              norTitle="Sosiale media integrasjon"
              engTitle="Social media integration"
              norText="Koble sammen dine sosiale medier med din nettside for å vise fram innholdet ditt på en ny og spennende måte."
              engText="Connect your social media with your website to show content from your social media on a new and exciting way."
              href="/services_provided/sosialmedia_integration"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const OfferSectionCard = ({
  norTitle,
  engTitle,
  norText,
  engText,
  href,
  params,
}) => {
  return (
    <div className="mt-5 transition-all duration-300 md:mt-0 md:col-span-1 hover:scale-[1.02] active:scale-[1.02] group cursor-default">
      <div
        className={`overflow-hidden max-w-sm transition-transform duration-300 shadow-sm sm:rounded-lg`}
      >
        <div
          className={`grid gap-2 sm:gap-4 md:gap-6 md:min-h-[131px] transition-colors duration-300
              bg-light-cloud group-hover:bg-light-mist
              dark:bg-dark-slate dark:group-hover:bg-dark-shadow p-6 sm:p-8 md:p-12`}
        >
          <ThemedH4 className={`font-bold max-w-fit `}>
            {params.lang === "no" ? norTitle : engTitle}
          </ThemedH4>
          <div className="mt-2">
            <ThemedP className={``}>
              {params.lang === "no" ? norText : engText}
            </ThemedP>
          </div>
          <Link href={href} className="w-fit">
            <ReadMoreButton>
              {params.lang === "no" ? "les mer" : "read more"}
            </ReadMoreButton>
          </Link>
        </div>
      </div>
    </div>
  );
};
