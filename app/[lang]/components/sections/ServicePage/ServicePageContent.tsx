import { ThemedH2, ThemedH4, ThemedP } from "@components/atoms/ThemedText";
import Link from "next/link";



export const ServicePageContent = async ({params, dictionary}) => {
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
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <ThemedH2 className="text-center underline">
              {params.lang === "no"
                ? "Villo Utvikling tilbyr:"
                : "Villo Development offers:"}
            </ThemedH2>
          </div>
          <div className="flex justify-center mt-10">
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


export const ServiceCard = ({
    title,
    text,
    href,
    buttonText
  }) => {

    return (
      <div className="transition-all duration-300 md:mt-0 md:col-span-1 hover:scale-[1.02] active:scale-[1.02] group cursor-default">
        <div
          className={`overflow-hidden max-w-sm transition-transform duration-300 shadow sm:rounded-lg`}
        >
          <div
            className={`grid gap-2 min-h-[240px] transition-colors duration-300 bg-Villo-light-white15 group-hover:bg-Villo-light-white10 dark:bg-Villo-dark-black75 dark:group-hover:bg-Villo-dark-black50 p-6`}
          >
            <ThemedH4 className={`font-bold max-w-fit`}>
              {title}
            </ThemedH4>
            <div className="mt-2">
              <ThemedP className={``}>
                {text}
              </ThemedP>
            </div>
            <Link href={href} className="w-fit">
              <button>
                {buttonText}
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  };