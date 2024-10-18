import { SUBPAGES_DATA } from "@data/subPages_data";

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
  const content = SUBPAGES_DATA[params.service];
  return (
    <>
      <h1>ofhdgiojh</h1>
      <div className="flex flex-col gap-8 p-4">
        {/* Top Section */}
        <section>
          <h1 className="text-3xl font-bold mb-4">
            {content.top.title.engText}
          </h1>
          <p className="text-lg">{content.top.paragraph.engText}</p>
        </section>

        {/* Middle Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            {content.middle.title.engText}
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {content.middle.bullitins.map((item, index) => (
              <li key={index}>{item.engText}</li>
            ))}
          </ul>
        </section>

        {/* Bottom Section */}
        <section>
          {content.bottom.paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-4 text-lg">
              {paragraph.engText}
            </p>
          ))}
        </section>
      </div>
    </>
  );
}
