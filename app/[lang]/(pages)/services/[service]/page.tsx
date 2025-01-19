import { Locale } from "i18next.config";
import { getDictionary } from "get-dictionary";


interface PageProps {
  params: {
    service: string;  // Dynamically passed service type from URL
    lang: Locale;     // Dynamically passed language from URL
  };
}

export default async function Page({ params}: PageProps){
const {service, lang} = params


  const dictionary = await getDictionary(lang);
  const content = dictionary.services[service];
  return (
    <>
      <div className="flex flex-col gap-8 p-4">
     
        <section>
          <h1 className="text-3xl font-bold mb-4">
            {content.top_title}
          </h1>
          <p className="text-lg">{content.top_paragraph}</p>
        </section>

      
        <section>
          <h2 className="text-2xl font-bold mb-4">
            {content.middle_title}
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {content.bullitins.map((item, index) => (
              <li key={index}>{item}</li>
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
