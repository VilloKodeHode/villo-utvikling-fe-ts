import { SUBPAGES_DATA } from "@data/subPages_data";
import textcontent from "@locales/no/common.json"

// type TextContent = {
//     norText: string;
//     engText: string;
//   };
  
//   interface ServiceContent {
//     top: {
//       title: TextContent;
//       paragraph: TextContent;
//     };
//     middle: {
//       title: TextContent;
//       bullitins: TextContent[];
//     };
//     bottom: {
//       paragraphs: TextContent[];
//     };
//   }

interface PageProps {
  params: {
    service: keyof typeof SUBPAGES_DATA;
  };
}

export default function Page({ params }: PageProps) {
  const content = textcontent.services[params.service];
  return (
    <>
      <h1>ofhdgiojh</h1>
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
