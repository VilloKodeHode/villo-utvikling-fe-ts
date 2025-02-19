import { Locale } from "i18next.config";
import { getDictionary } from "get-dictionary";
import {
  ThemedH1,
  ThemedH2,
  ThemedLi,
  ThemedP,
} from "@components/atoms/ThemedText";

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
          <ThemedH2 className="text-2xl font-bold mb-4">
            {content.middle_title}
          </ThemedH2>
          <ul className="grid grid-cols-2 gap-3">
            {content.bullitins.map((item, index) => (
              <ThemedLi className="" key={index + service + "bullitin"}>
                {item}
              </ThemedLi>
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
