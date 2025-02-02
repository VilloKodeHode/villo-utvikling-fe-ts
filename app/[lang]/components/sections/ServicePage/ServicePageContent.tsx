import { ReadMoreButton } from "@components/atoms/Buttons";
import { ThemedH2, ThemedH4, ThemedP } from "@components/atoms/ThemedText";
import Link from "next/link";

export const ServicePageContent = async ({
  params,
  dictionary,
  showOnScroll,
}) => {
  const content = dictionary.service_cards;

  //     <MetaTags
  //     description="Profesjonell frontend webutvikling og webdesign service. Vi omskaper ideer til fengslende nettsider med fokus på responsive, brukervennlige og visuelt tiltalende nettsteder."
  //     title="Villo Utvikling - Services"
  //     url="https://www.villoutvikling.com/services_provided"
  //   />

  return (
    <section
      id="serviceContent"
      className={`w-full overflow-x-hidden py-12 sm:px-6 px-4 lg:px-12`}
    >
      <div className="mx-auto max-w-7xl scroll-into-view">
        <div className="text-center">
          <ThemedH2 className="text-center underline">
            {params.lang === "no"
              ? "Villo Utvikling tilbyr:"
              : "Villo Development offers:"}
          </ThemedH2>
        </div>
        <div
          className={`flex justify-center mt-10 ${
            showOnScroll ? "opacity-0 animate-on-scroll" : ""
          }`}
        >
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {content.map((item) => (
              <ServiceCard
                key={item.title}
                title={item.title}
                text={item.text}
                href={item.href.replace("{lang}", params.lang)}
                buttonText={item.buttonText}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const ServiceCard = ({ title, text, href, buttonText }) => {
  return (
    <div>
      <div
        className={`relative z-99 max-w-sm shadow-sm sm:rounded-lg transition-all ease-linear md:mt-0 md:col-span-1 hover:scale-[1.02] active:scale-[1.02] group cursor-default grid gap-2 min-h-[240px] bg-light-white15 group-hover:bg-light-white10 dark:bg-dark-black75 dark:group-hover:bg-dark-black50 p-6`}
      >
        <ThemedH4
          className={`font-bold z-10 max-w-fit transition-colors dark:group-hover:text-dark-primary ease-linear group-hover:text-light-primary`}
        >
          {title}
        </ThemedH4>
        <div className="mt-2">
          <ThemedP className={``}>{text}</ThemedP>
        </div>
        <ReadMoreButton>
          <Link href={href} className="w-fit">
            {buttonText}
          </Link>
        </ReadMoreButton>
        {/* <div className="absolute group-hover:opacity-80 opacity-0 group-hover:h-[105%] group-hover:w-[103.5%] w-0 h-0 transition-all right-1/2 translate-x-1/2 top-1/2 translate-y-[-50%] sm:rounded-lg -z-99 bg-dark-primary" /> */}
      </div>
    </div>
  );
};
