import { Locale } from "i18next.config";
import { getDictionary } from "get-dictionary";
import {
  ThemedH1,
  ThemedH2,
  ThemedH4,
  ThemedLi,
  ThemedP,
} from "@components/atoms/ThemedText";
import Image from "next/image";

interface PageProps {
  params: {
    service: string; // Dynamically passed service type from URL
    lang: Locale; // Dynamically passed language from URL
  };
}

export default async function Page({ params }: PageProps) {
  const { service, lang } = params;

  const dictionary = await getDictionary(lang);
  const content = dictionary.services[service];
  return (
    <>
      <div className="flex flex-col gap-8 p-4">
        <section className="">
          <ThemedH1 className="text-3xl font-bold mb-4">
            {content.top_title}
          </ThemedH1>
          <ThemedP className="text-lg">{content.top_paragraph}</ThemedP>
        </section>

        <section>
          <ThemedH2 className="text-2xl text-center font-bold mb-4">
            {content.middle_title}
          </ThemedH2>
          <ul className="flex flex-wrap justify-center gap-8">
            {content.bullitins.map((item, index) => (
              <div
                key={index + service + "bullitin"}
                className={`relative group z-99 max-w-md flex-auto shadow-sm sm:rounded-lg transition-all ease-linear md:mt-0 md:col-span-1 hover:scale-[1.02] active:scale-[1.02] group cursor-default grid gap-2 min-h-[155px] bg-light-cloud group-hover:bg-light-mist dark:bg-dark-onyx dark:group-hover:bg-dark-shadow p-6 overflow-hidden`}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="absolute h-16 w-16 -z-10 right-2 top-2 text-9xl transition-all ease-linear brightness-0 group-hover:brightness-75"
                />
                <ThemedH4
                  className={`font-bold z-10 max-w-fit transition-colors dark:group-hover:text-dark-lavender ease-linear group-hover:text-light-violet`}
                >
                  {item.title}
                </ThemedH4>
                <ThemedLi className="">{item.description}</ThemedLi>
              </div>
            ))}
          </ul>
        </section>

        <section>
          {content.bottom_paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-4 text-lg">
              {paragraph}
            </p>
          ))}
        </section>
      </div>
    </>
  );
}
