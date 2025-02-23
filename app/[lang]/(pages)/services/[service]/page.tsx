import { Locale } from "i18next.config";
import { getDictionary } from "get-dictionary";
import {
  ThemedH1,
  ThemedH2,
  ThemedH4,
  ThemedP,
  ThemedPLarge,
} from "@components/atoms/ThemedText";
import { noto_emoji } from "app/[lang]/layout";

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
      <section className="">
        <ThemedH1 className="mb-4 text-3xl font-bold">
          {content.top_title}
        </ThemedH1>
        <ThemedPLarge>{content.top_paragraph}</ThemedPLarge>
      </section>
      <section>
        <ThemedH2 className="mb-4 text-2xl font-bold text-center">
          {content.middle_title}
        </ThemedH2>
        <div className="flex flex-wrap justify-center gap-8">
          {content.bullitins.map((item, index) => (
            <div
              key={index + service + "bullitin"}
              className={`relative group z-99 h-44 w-md shadow-sm sm:rounded-lg transition-all ease-linear md:mt-0 md:col-span-1 hover:scale-[1.02] active:scale-[1.02] group cursor-default grid gap-2 min-h-[155px] bg-light-cloud group-hover:bg-light-mist dark:bg-dark-onyx dark:group-hover:bg-dark-shadow p-6 overflow-hidden`}
            >
              {/* <Image
                  src={item.icon}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="absolute transition-all ease-linear opacity-25 scale-300 group-hover:scale-100 h-36 w-36 -z-10 right-2 top-2 group-hover:opacity-100"
                /> */}
                <div className="absolute flex items-center justify-center w-1/3 h-full transition-all duration-200 ease-linear -translate-y-1/2 bg-gradient-to-r dark:from-dark-onyx dark:to-dark-storm opacity-10 -z-10 -right-24 group-hover:right-0 top-1/2 group-hover:opacity-100">
              <p
                className={`${noto_emoji.className} text-8xl`}
              >
                {item.icon}
              </p>
              </div>
              <ThemedH4
                className={`font-bold z-10 max-w-1/2 transition-colors dark:group-hover:text-dark-lavender ease-linear group-hover:text-light-violet`}
              >
                {item.title}
              </ThemedH4>
              <ThemedP className="w-2/3">{item.description}</ThemedP>
            </div>
          ))}
        </div>
      </section>
      <section>
        {content.bottom_paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-4 text-lg">
            {paragraph}
          </p>
        ))}
      </section>
    </>
  );
}
